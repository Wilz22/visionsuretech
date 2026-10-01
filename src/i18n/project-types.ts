export interface ProjectUiCopy {
 reference:string;readReference:string;readCaseStudy:string;linkLabel:string;photoPending:string;referenceTitle:string;
 noticeHeading:string;noticeText:string;photoCaptionPending:string;overview:string;industry:string;facts:Record<'client'|'location'|'equipment'|'completed',string>;pendingInfo:string;
 context:string;challenge:string;configuration:string;referenceApproach:string;solution:string;installation:string;installationHeading:string;outcome:string;pendingResults:string;results:string;referenceSystems:string;systems:string;gallery:string;galleryLabels:readonly string[];photoPendingFor:string;back:string;
}
export interface ProjectsPageCopy {title:string;description:string;eyebrow:string;heading:readonly string[];introduction:string;referenceHeading:string;referenceText:string;stories:string;empty:string;catalogHeading:string;catalogText:string;products:string;industries:string;}
export interface IndustrySystemCopy {details:string;detailsFor:string;imagePending:string;}
