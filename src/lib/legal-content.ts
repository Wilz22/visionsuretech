import {legalDefinitions,type LegalId} from '../data/legal.ts';
import type {LegalEditorial,LegalDocument} from '../i18n/legal-types.ts';
export function buildLegalDocument(id:LegalId,editorial:LegalEditorial):LegalDocument {
 const definition=legalDefinitions[id];
 const copy=editorial[id];
 if(!definition||!copy?.title||!copy.description)throw new Error(`Missing legal document: ${id}`);
 return {title:copy.title,description:copy.description,status:definition.status,effectiveDate:definition.effectiveDate,sections:definition.sectionIds.map(sectionId=>{
  const section=copy.sections[sectionId];
  if(!section?.title||!section.paragraphs?.length)throw new Error(`Missing legal section translation: ${id}/${sectionId}`);
  return {...section,id:sectionId};
 })};
}
