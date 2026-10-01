"""Audit actual build output: required routes, internal targets and reference SEO."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse,unquote
import xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[1];dist=root/'dist';errors=[]
class Page(HTMLParser):
 def __init__(self,text):
  super().__init__();self.ids=set();self.links=[];self.images=[];self.h1=0;self.title=0;self.description=0;self.canonical=None;self.robots='';self.og=None;self.fields=set();self.product_cards=0;self.card_specs=[];self.in_card_specs=False;self.decision_help=False;self.feed(text)
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='html':self.language=a.get('lang')
  if tag=='meta' and a.get('property')=='og:locale':self.og_locale=a.get('content')
  if 'id' in a:self.ids.add(a['id'])
  if tag in ['input','select','textarea'] and a.get('name'):self.fields.add(a['name'])
  if 'data-product-card' in a:self.product_cards+=1
  if 'data-decision-help' in a:self.decision_help=True
  if tag=='dl' and 'data-key-specifications' in a:self.in_card_specs=True;self.card_specs.append(0)
  if tag=='dt' and self.in_card_specs:self.card_specs[-1]+=1
  if tag=='a' and a.get('href'):self.links.append(a['href'])
  if tag=='img':
   self.images.append(a.get('src',''))
   if 'alt' not in a or not all(a.get(k) for k in ['width','height']):errors.append('Image missing alt or dimensions: '+a.get('src',''))
  if tag=='h1':self.h1+=1
  if tag=='title':self.title+=1
  if tag=='meta' and a.get('name')=='description':self.description+=bool(a.get('content'))
  if tag=='meta' and a.get('name')=='robots':self.robots=a.get('content','')
  if tag=='meta' and a.get('property')=='og:image':self.og=a.get('content')
  if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href')
 def handle_endtag(self,tag):
  if tag=='dl':self.in_card_specs=False
pages={}
for file in dist.rglob('*.html'):
 route='/' + file.relative_to(dist).as_posix().removesuffix('index.html')
 pages[route]=Page(file.read_text(encoding='utf-8'))
required=['/','/products/','/solutions/','/dash-cams/','/services/','/resources/','/glossary/','/about/','/quote/','/privacy-policy/','/terms/','/warranty-policy/','/404.html']
categories=['multi-camera-systems','360-camera-systems','radar-detection','crane-cameras','cameras-monitors','accessories']
required += ['/products/'+c+'/' for c in categories]
models={'multi-camera-systems':['4101','4102','4201','4202','8401'],'360-camera-systems':['6301'],'radar-detection':['8501'],'crane-cameras':['4901']}
required += [f'/products/{c}/vst-s{m}/' for c,ms in models.items() for m in ms]
required += ['/solutions/'+i+'/' for i in ['cranes','construction','trucks-fleets','mining','ports','agriculture']]
required += ['/dash-cams/'+m+'/' for m in ['front-4k','dual-4k','2ch-compact','3ch-pro','4ch-360','thermal','why-buy-local','member-offers','book-assessment']]
for route in required:
 if route not in pages:errors.append('Missing required route '+route)
for route,page in pages.items():
 if getattr(page,'language',None)!='en' or getattr(page,'og_locale',None)!='en_CA':errors.append('Unexpected or missing approved page locale '+route)
 if 'https://wa.me/16047104450' not in page.links:errors.append('Missing site-wide WhatsApp '+route)
 for link in page.links:
  if link.startswith('tel:') and link!='tel:+16047104450':errors.append('Unexpected phone link '+link+' on '+route)
 if page.product_cards!=len(page.card_specs) or any(count not in [2,3] for count in page.card_specs):errors.append('Product cards need 2–3 key specifications '+route)
 if page.h1!=1 or page.title!=1 or page.description!=1:errors.append('Missing/duplicate page metadata or H1 '+route)
 if not page.og:errors.append('Missing social image '+route)
 if page.canonical!='https://www.visionsuretech.ca'+('/404/' if route=='/404.html' else route):errors.append('Wrong canonical '+route+' '+str(page.canonical))
 for asset in page.images+[urlparse(page.og or '').path]:
  if asset.startswith('/') and not (dist/unquote(asset.lstrip('/'))).is_file():errors.append('Missing asset '+asset+' on '+route)
 for link in page.links:
  url=urlparse(link)
  if url.scheme or url.netloc:continue
  if not url.path:target=route
  elif url.path.startswith('/'):target=url.path if '.' in url.path.rsplit('/',1)[-1] else url.path.rstrip('/')+'/'
  else:errors.append('Unreviewed relative link '+link+' on '+route);continue
  if target not in pages:
   if not (dist/unquote(target.lstrip('/'))).is_file():errors.append('Broken link '+link+' on '+route)
  elif url.fragment and unquote(url.fragment) not in pages[target].ids:errors.append('Broken anchor '+link+' on '+route)
for category in categories:
 page=pages.get('/products/'+category+'/')
 if page and not page.decision_help:errors.append('Missing category decision help '+category)
quote=pages.get('/quote/')
if quote and not {'name','company','phone','equipment','system'}.issubset(quote.fields):errors.append('Quote form missing Work Order fields')
for sitemap in dist.glob('sitemap-[0-9]*.xml'):
 for loc in ET.parse(sitemap).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
  route=urlparse(loc.text).path
  if route not in pages or 'noindex' in pages[route].robots:errors.append('Sitemap includes missing/reference page '+route)
if errors:
 print('\n'.join(sorted(set(errors))));raise SystemExit(1)
print(f'PASS: {len(required)} required routes; {len(pages)} built pages; internal links, anchors, images, metadata, sitemap, WhatsApp/phone targets, card specifications, category decision help and quote fields checked. Does not prove real quote delivery or client approval.')
