import type {CatalogGridCopy,GalleryCopy,DashCamCardCopy,DashCamOverviewCopy} from '../catalog-types.ts';
export const catalogGrid: CatalogGridCopy = {
  search:'Search products',placeholder:'Model or function',catalogClass:'Catalog class',allClasses:'All classes',
  empty:'No systems match these filters. Clear the search or choose another class.',count:{one:'{count} system',other:'{count} systems'},
};
export const gallery: GalleryCopy = {photoLabel:'View {title} photograph {index}',pending:'Product photographs pending client content.',caption:'Reference catalog visual. Included items and options are listed separately; final gallery awaits verified content.'};
export const dashCamCard: DashCamCardCopy = {reference:'Configuration reference · Model name pending',viewDetails:'View details'};
export const dashCamOverview: DashCamOverviewCopy = {
  title:'Dash Cams',description:'Explore personal-vehicle camera configurations and prepare for a free assessment.',
  notice:'Phase 1 configuration references. Final VisionSure model names, photographs, specifications, pricing and purchase options are pending.',
  heading:'Find your starting point',channels:'Camera channels',allConfigurations:'All configurations',channelOption:'{count}-channel',
  count:{one:'{count} configuration',other:'{count} configurations'},empty:'No configurations match this channel selection. Choose another channel count.',
  comparison:'Compare configurations',tableCaption:'Reference dash cam configurations',configuration:'Configuration',overview:'Overview',finalDetails:'Final details',pendingDetails:'Pending verified product sheet',assessment:'Book a free assessment',
};
