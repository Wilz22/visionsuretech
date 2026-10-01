import type {DashCamEditorial} from './dash-cam-types.ts';
import type {IndustryEditorial} from './industry-types.ts';
import type {ProjectUiCopy,ProjectsPageCopy,IndustrySystemCopy} from './project-types.ts';
import type {FaqEditorial,FaqPageCopy} from './faq-types.ts';
import type {LegalEditorial,LegalUiCopy} from './legal-types.ts';
import type {CatalogCategoryCopy,ProductOverviewCopy,CategoryListingCopy,IndustryOverviewCopy} from './listing-types.ts';
import type {ReferencePageCopy,GlossaryCopy,NotFoundCopy} from './page-types.ts';
import type {ContactPageCopy,AssessmentCopy} from './contact-types.ts';
import type {ContentLayoutCopy,ServicesCopy,ResourcesCopy,AboutCopy} from './page-types.ts';
import type {IndustrialDetailCopy,IndustryDetailCopy,PersonalDetailCopy} from './detail-types.ts';
import type {HomeCopy} from './home-types.ts';
import type {QuoteFormCopy} from './quote-types.ts';
import type {CatalogGridCopy,GalleryCopy,DashCamCardCopy,DashCamOverviewCopy} from './catalog-types.ts';
export interface DecisionHelpCopy {
  title: string;
  introduction: string;
  resourceLabel: string;
  considerations: readonly { title: string; text: string }[];
}

export interface Messages {
  productVisual:{fallbackTitle:string;fallbackTags:readonly string[];byModel:Record<string,{title:string;tags:readonly string[]}>};
  dashCamEditorial:DashCamEditorial;
  industryEditorial:IndustryEditorial;
  projectUi:ProjectUiCopy;projectsPage:ProjectsPageCopy;industrySystem:IndustrySystemCopy;
  faqEditorial:FaqEditorial;faqPage:FaqPageCopy;legalEditorial:LegalEditorial;legalUi:LegalUiCopy;
  catalogCategories:CatalogCategoryCopy;productOverview:ProductOverviewCopy;categoryListing:CategoryListingCopy;industryOverview:IndustryOverviewCopy;
  warranty:ReferencePageCopy;memberOffers:ReferencePageCopy;whyBuyLocal:ReferencePageCopy;glossary:GlossaryCopy;notFound:NotFoundCopy;
  contactPage:ContactPageCopy; assessment:AssessmentCopy;
  contentLayout:ContentLayoutCopy; services:ServicesCopy; resources:ResourcesCopy; about:AboutCopy;
  industrialDetail:IndustrialDetailCopy; industryDetail:IndustryDetailCopy; personalDetail:PersonalDetailCopy;
  home: HomeCopy;
  catalogGrid:CatalogGridCopy; gallery:GalleryCopy; dashCamCard:DashCamCardCopy; dashCamOverview:DashCamOverviewCopy;
  formLayout: { contactHeading:string; locality:string; addressNotice:string; locationHeading:string; mapNotice:string };
  quoteForm: QuoteFormCopy;
  common: { breadcrumb:string; quote: string; homeLink: string; whatsapp: string; whatsappLabel: string };
  navigation: {
    labels: Record<NavigationLabelId, string>;
    primaryLabel: string; showLinks: string; explore: string;
    openMenu: string; closeMenu: string; language: string; languageLabel: string; comingSoon: string;
  };
  footer: { summary: string; locationNotice: string; sectionLabel: string; company: string; companyLabel: string; legalLabel: string; copyright: string };
  quoteCta: { heading: string; description: string };
  productCard: { viewDetails: string; viewDetailsFor: string };
  decisionHelp: { general: DecisionHelpCopy; multiCamera: DecisionHelpCopy };
}

export type NavigationLabelId = 'home' | 'products' | 'industries' | 'dashCams' | 'services' | 'resources' | 'about' | 'contact' | 'quote' | 'compareModels' | 'whyBuyLocal' | 'memberOffers' | 'assessment' | 'installationSupport' | 'resourcesOverview' | 'glossary' | 'faq' | 'projects' | 'privacy' | 'terms' | 'warranty' | 'multi-camera-systems' | '360-camera-systems' | 'radar-detection' | 'crane-cameras' | 'cameras-monitors' | 'accessories' | 'cranes' | 'construction' | 'trucks-fleets' | 'mining' | 'ports' | 'agriculture';
