// Excel defines front-only VST-S1-Pro and 512GB; supplied PDF/images depict the 2CH variant.
export const vantrueS1Pro = {
  "sku": "VST-S1-Pro",
  "manufacturerModel": "S1 Pro",
  "brand": "Vantrue",
  "verifiedBy": "Jacob",
  "verifiedDate": "2026-10-04",
  "gallery": [
    {
      "id": "Hero-1.jpg",
      "src": "/images/dash-cams/s1-pro/Hero-1.jpg",
      "width": 1600,
      "height": 1600
    }
  ],
  "blocks": [
    {
      "id": "night-vision",
      "images": [
        {
          "id": "Night_Vision-1.jpg",
          "src": "/images/dash-cams/s1-pro/Night_Vision-1.jpg",
          "width": 679,
          "height": 849
        }
      ]
    },
    {
      "id": "driver-alerts",
      "images": [
        {
          "id": "AI_Driver_Alerts-1.jpg",
          "src": "/images/dash-cams/s1-pro/AI_Driver_Alerts-1.jpg",
          "width": 1280,
          "height": 1600
        }
      ]
    },
    {
      "id": "parking",
      "images": [
        {
          "id": "Parking_Mode-1.jpg",
          "src": "/images/dash-cams/s1-pro/Parking_Mode-1.jpg",
          "width": 679,
          "height": 849
        }
      ]
    },
    {
      "id": "lte",
      "images": [
        {
          "id": "LTE_Connectivity-1.jpg",
          "src": "/images/dash-cams/s1-pro/LTE_Connectivity-1.jpg",
          "width": 1280,
          "height": 1600
        }
      ]
    },
    {
      "id": "connectivity",
      "images": [
        {
          "id": "Wifi_GPS-1.jpg",
          "src": "/images/dash-cams/s1-pro/Wifi_GPS-1.jpg",
          "width": 679,
          "height": 849
        }
      ]
    }
  ],
  "packageImage": null,
  "specifications": [
    {
      "id": "channels",
      "value": "1 front recording channel; rear camera optional"
    },
    {
      "id": "resolution",
      "value": "2.5K (2592 × 1944) front recording"
    },
    {
      "id": "sensor",
      "value": "Sony STARVIS 2 IMX675 (front)"
    },
    {
      "id": "angle",
      "value": "158° front"
    },
    {
      "id": "adjustment",
      "value": "360° adjustable lens"
    },
    {
      "id": "hdr",
      "value": "HDR (front)"
    },
    {
      "id": "platepix",
      "value": "PlatePix"
    },
    {
      "id": "display",
      "value": "2.0-inch IPS LCD"
    },
    {
      "id": "voice",
      "value": "Multilingual voice commands"
    },
    {
      "id": "wifi",
      "value": "Built-in Wi-Fi with app and over-the-air updates"
    },
    {
      "id": "gps",
      "value": "Route, speed and location"
    },
    {
      "id": "clock",
      "value": "Automatic daylight saving time adjustment in North America"
    },
    {
      "id": "storage",
      "value": "microSD up to 512 GB"
    },
    {
      "id": "parking",
      "value": "Collision detection, configurable motion detection and energy-saving recording; hardwire kit required for 24-hour coverage"
    },
    {
      "id": "buffer",
      "value": "Up to 15 seconds"
    },
    {
      "id": "power",
      "value": "Supercapacitor"
    },
    {
      "id": "gsensor",
      "value": "Supported"
    }
  ],
  "components": [
    "main-camera",
    "gps-mount"
  ],
  "optional": [
    "rear-camera",
    "lte",
    "hardwire",
    "cpl"
  ]
} as const;
