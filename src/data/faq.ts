interface FaqGroupDefinition {id:string;items:readonly {id:string;systemCodes?:readonly string[];featured?:boolean}[];}
export const faqDefinitions=[
  {
    "id": "choosing-a-system",
    "items": [
      {
        "id": "which-system",
        "featured": true
      },
      {
        "id": "wired-or-wireless",
        "systemCodes": [
          "VST-S4101",
          "VST-S4102"
        ]
      },
      {
        "id": "around-view-or-radar",
        "systemCodes": [
          "VST-S6301",
          "VST-S8501"
        ]
      }
    ]
  },
  {
    "id": "recording-and-connectivity",
    "items": [
      {
        "id": "recording-available",
        "featured": true,
        "systemCodes": [
          "VST-S4201",
          "VST-S4202",
          "VST-S6301",
          "VST-S8401"
        ]
      },
      {
        "id": "recording-duration",
        "systemCodes": [
          "VST-S4201",
          "VST-S4202",
          "VST-S6301"
        ]
      },
      {
        "id": "remote-access",
        "systemCodes": [
          "VST-S8401"
        ]
      }
    ]
  },
  {
    "id": "installation-and-compatibility",
    "items": [
      {
        "id": "wireless-power",
        "systemCodes": [
          "VST-S4101"
        ]
      },
      {
        "id": "equipment-compatibility",
        "featured": true
      },
      {
        "id": "boom-tip-options",
        "systemCodes": [
          "VST-S4901"
        ]
      }
    ]
  },
  {
    "id": "planning-your-project",
    "items": [
      {
        "id": "quote-information",
        "featured": true
      },
      {
        "id": "installation-scope"
      },
      {
        "id": "warranty-and-support"
      }
    ]
  }
] as const satisfies readonly FaqGroupDefinition[];
export type FaqGroupId=typeof faqDefinitions[number]['id'];
export type FaqId=typeof faqDefinitions[number]['items'][number]['id'];
