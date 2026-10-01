import type {IndustrialDetailCopy,IndustryDetailCopy,PersonalDetailCopy} from '../detail-types.ts';
export const industrialDetail:IndustrialDetailCopy = {
  idealFor:'Ideal for',reference:'Reference catalog content. Final specifications and equipment compatibility await the verified Product Master Sheet.',
  overview:'The system at a glance.',specifications:'Technical specifications',specificationsCaption:'{model} specifications',specification:'Specification',value:'Value',
  download:'Download spec sheet',pendingPdf:'Spec-sheet PDF pending verified client content.',
  components:'Included components & choices',componentsCaption:'{model} components',code:'Code',component:'Component',status:'Status',availability:{included:'Included',choice:'Choose one',optional:'Optional'},
  technology:'Technology terms',glossaryMessage:'Explore {adas}, {dms} and {fcw}. Features vary by model; a glossary link does not mean this system includes the function.',
  optional:'Optional accessories',related:'Related systems',
};
export const industryDetail:IndustryDetailCopy = {
  blindSpots:'Start with the blind spots.',systems:'Systems to consider',reference:'Reference application suggestions. Confirm compatibility for the specific equipment and installation.',
  pendingConfigurations:'Recommended configurations pending verified client data.',gallery:'Installation gallery',pendingGallery:'Installation photographs, equipment details and project locations pending client material.',
};
export const personalDetail:PersonalDetailCopy = {
  description:'Explore the {configuration} reference and discuss your vehicle requirements.',reference:'VisionSure · Final model name pending',overview:'A starting point for your vehicle.',
  configurationNotice:'{configuration}. This is a configuration placeholder from the Phase 1 plan. Final kit contents, compatibility, pricing and purchase options will be confirmed with verified product data.',
  idealFor:'Ideal for',fitment:'Personal-vehicle applications; exact vehicle fitment pending assessment.',assessment:'Book a free assessment',
  sections:['Included components','Technical specifications','Optional accessories'],pendingSheet:'Pending verified Product Master Sheet. No unconfirmed part numbers or specifications are listed.',
  tableCaption:'{model} — {section}',detail:'Detail',information:'Confirmed information',pendingData:'Pending client data',glossary:'Technology glossary',glossaryNotice:'Term links do not imply that this model includes these functions.',pendingPdf:'Spec-sheet PDF pending client content.',related:'Compare other configurations',
};
