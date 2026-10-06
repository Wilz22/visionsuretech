export interface VantrueProductCopy {
  summary:string;overview:string;features:string[];idealFor:string;
  blocks:Record<string,{title:string;text:string}>;
  specLabels:Record<string,string>;componentLabels:Record<string,string>;
  photoAlts:Record<string,string>;optionalLabels:Record<string,string>;
  headings:{overview:string;features:string;specifications:string;components:string;optional:string;idealFor:string};
  notes:string[];galleryCaption:string;
}
