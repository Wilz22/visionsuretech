export type PluralCategory = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';
export type CountCopy = Partial<Record<PluralCategory,string>> & {other:string};
export interface CatalogGridCopy { search:string; placeholder:string; catalogClass:string; allClasses:string; empty:string; count:CountCopy; }
export interface GalleryCopy { photoLabel:string; pending:string; caption:string; }
export interface DashCamCardCopy { reference:string; viewDetails:string; }
export interface DashCamOverviewCopy {
  title:string; description:string; notice:string; heading:string; channels:string; allConfigurations:string; channelOption:string;
  count:CountCopy; empty:string; comparison:string; tableCaption:string; configuration:string; overview:string; finalDetails:string; pendingDetails:string; assessment:string;
}
