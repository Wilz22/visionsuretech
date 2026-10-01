export interface IndustrialDetailCopy {
  idealFor:string;reference:string;overview:string;specifications:string;specificationsCaption:string;
  specification:string;value:string;download:string;pendingPdf:string;
  components:string;componentsCaption:string;code:string;component:string;status:string;
  availability:Record<'included'|'choice'|'optional',string>;
  technology:string;glossaryMessage:string;optional:string;related:string;
}
export interface IndustryDetailCopy {
  blindSpots:string;systems:string;reference:string;pendingConfigurations:string;gallery:string;pendingGallery:string;
}
export interface PersonalDetailCopy {
  description:string;reference:string;overview:string;configurationNotice:string;idealFor:string;fitment:string;
  assessment:string;sections:readonly string[];pendingSheet:string;tableCaption:string;detail:string;information:string;pendingData:string;
  glossary:string;glossaryNotice:string;pendingPdf:string;related:string;
}
