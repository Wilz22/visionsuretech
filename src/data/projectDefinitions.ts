// Reference status and system relationships are independent of translations.
export const projectDefinitions=[
  {
    "slug": "crane-boom-visibility",
    "order": 1,
    "status": "reference",
    "draft": false,
    "industry": "cranes",
    "systemCodes": [
      "VST-S4901"
    ],
    "photos": []
  },
  {
    "slug": "mining-equipment-awareness",
    "order": 2,
    "status": "reference",
    "draft": false,
    "industry": "mining",
    "systemCodes": [
      "VST-S6301",
      "VST-S8501"
    ],
    "photos": []
  },
  {
    "slug": "fleet-video-monitoring",
    "order": 3,
    "status": "reference",
    "draft": false,
    "industry": "trucks-fleets",
    "systemCodes": [
      "VST-S8401"
    ],
    "photos": []
  }
] as const;
