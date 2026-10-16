// Client-assigned industries. Replace null only with the uploaded YouTube URL.
// No quotes, ratings or case-study outcomes have been supplied here.
export const testimonials = [
  {id:'jacob',industryId:'trucks-fleets',videoUrl:null},
  {id:'kenneth',industryId:'agriculture',videoUrl:null},
  {id:'construction',industryId:'construction',videoUrl:null},
] as const satisfies readonly {id:string;industryId:string;videoUrl:string|null}[];
