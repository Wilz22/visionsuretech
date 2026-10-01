import type {ProductCategoryId} from '../data/catalogCategories.ts';
export interface CategoryCopy {title:string;description:string;}
export type CatalogCategoryCopy=Record<ProductCategoryId,CategoryCopy>;
export interface ProductOverviewCopy {title:string;description:string;navigationLabel:string;heading:string;}
export interface CategoryListingCopy {componentsHeading:string;componentsNotice:string;component:string;description:string;system:string;relatedIndustries:string;}
export interface IndustryOverviewCopy {title:string;description:string;explore:string;}
