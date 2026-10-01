// Application suggestions, not a compatibility or certification matrix.
export const industryDefinitions = [
  {
    "id": "cranes",
    "number": "01",
    "gradient": "from-brand-100 via-surface to-surface-brand",
    "orb": "bg-brand-500/15",
    "icon": "text-brand-500",
    "systemCodes": [
      "VST-S4901",
      "VST-S4101",
      "VST-S6301"
    ]
  },
  {
    "id": "construction",
    "number": "03",
    "gradient": "from-brand-50 via-surface to-brand-200",
    "orb": "bg-brand-700/10",
    "icon": "text-brand-700",
    "systemCodes": [
      "VST-S4102",
      "VST-S8501",
      "VST-S4202"
    ]
  },
  {
    "id": "trucks-fleets",
    "number": "06",
    "gradient": "from-surface-soft via-surface to-surface-brand",
    "orb": "bg-brand-500/15",
    "icon": "text-brand-700",
    "systemCodes": [
      "VST-S8401",
      "VST-S4201",
      "VST-S4202"
    ]
  },
  {
    "id": "mining",
    "number": "02",
    "gradient": "from-surface-soft via-surface to-brand-100",
    "orb": "bg-brand-600/15",
    "icon": "text-brand-600",
    "systemCodes": [
      "VST-S8501",
      "VST-S6301",
      "VST-S4201"
    ]
  },
  {
    "id": "ports",
    "number": "04",
    "gradient": "from-surface-brand via-surface to-brand-100",
    "orb": "bg-brand-400/15",
    "icon": "text-brand-500",
    "systemCodes": [
      "VST-S6301",
      "VST-S8501",
      "VST-S4901"
    ]
  },
  {
    "id": "agriculture",
    "number": "06",
    "gradient": "from-brand-50 to-surface",
    "orb": "bg-brand-500/10",
    "icon": "text-brand-600",
    "systemCodes": [
      "VST-S4102",
      "VST-S6301",
      "VST-S8501"
    ]
  }
] as const;
export type IndustryId = typeof industryDefinitions[number]['id'];
