// Routes and manufacturer identities from the client workbook, 2026-10-05.
export const vantrueDashCamDefinitions = [
  {
    "sku": "VST-N5S",
    "slug": "VST-N5S",
    "category": "4ch-360",
    "href": "/dash-cams/4ch-360/VST-N5S/",
    "brand": "Vantrue",
    "channels": 4,
    "image": {
      "src": "/images/dash-cams/vantrue/vst-n5s.jpg",
      "width": 1600,
      "height": 1600
    },
    "contentStatus": "complete"
  },
  {
    "sku": "VST-S1ProM4K4K",
    "slug": "VST-S1ProM4K4K",
    "category": "dual-4k",
    "href": "/dash-cams/dual-4k/VST-S1ProM4K4K/",
    "brand": "Vantrue",
    "channels": 2,
    "image": {
      "src": "/images/dash-cams/vantrue/vst-s1prom4k4k.jpg",
      "width": 1600,
      "height": 1600
    },
    "contentStatus": "complete"
  },
  {
    "sku": "VST-P2-DS",
    "slug": "VST-P2-DS",
    "category": "3ch-pro",
    "href": "/dash-cams/3ch-pro/VST-P2-DS/",
    "brand": "Vantrue",
    "channels": 3,
    "image": {
      "src": "/images/dash-cams/vantrue/vst-p2-ds.jpg",
      "width": 1500,
      "height": 1500
    },
    "contentStatus": "complete"
  },
  {
    "sku": "VST-E360Ace",
    "slug": "VST-E360Ace",
    "category": "3ch-pro",
    "href": "/dash-cams/3ch-pro/VST-E360Ace/",
    "brand": "Vantrue",
    "channels": 3,
    "image": {
      "src": "/images/dash-cams/vantrue/vst-e360ace.jpg",
      "width": 1600,
      "height": 1600
    },
    "contentStatus": "complete"
  },
  {
    "sku": "VST-S1-Pro",
    "slug": "VST-S1-Pro",
    "category": "front-2.5K",
    "href": "/dash-cams/front-2.5K/VST-S1-Pro/",
    "brand": "Vantrue",
    "channels": 1,
    "image": {
      "src": "/images/dash-cams/vantrue/vst-s1-pro.jpg",
      "width": 1600,
      "height": 1600
    },
    "contentStatus": "complete"
  }
] as const;
export type VantrueSku = typeof vantrueDashCamDefinitions[number]['sku'];
