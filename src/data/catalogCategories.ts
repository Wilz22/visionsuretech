export const productCategoryIds = ['multi-camera-systems','360-camera-systems','radar-detection','crane-cameras','cameras-monitors','accessories'] as const;
export type ProductCategoryId=typeof productCategoryIds[number];
interface CategoryDefinition {id:ProductCategoryId;image:string|null;mode:'systems'|'components'|'accessories';}
export const categoryDefinitions:readonly CategoryDefinition[] = [
 {id:'multi-camera-systems',image:'/images/solutions/vst-s4101.jpg',mode:'systems'},
 {id:'360-camera-systems',image:'/images/solutions/vst-s6301.jpg',mode:'systems'},
 {id:'radar-detection',image:'/images/solutions/vst-s8501.jpg',mode:'systems'},
 {id:'crane-cameras',image:'/images/solutions/vst-s4901.jpg',mode:'systems'},
 {id:'cameras-monitors',image:null,mode:'components'},
 {id:'accessories',image:null,mode:'accessories'},
];
