// Temporary configuration IDs; final names and codes await verified client data.
export const dashCamDefinitions=[
  {slug:'front-4k',channels:1},
  {slug:'dual-4k',channels:2},
  {slug:'2ch-compact',channels:2},
  {slug:'3ch-pro',channels:3},
  {slug:'4ch-360',channels:4},
  {slug:'thermal',channels:4},
] as const;
export type DashCamId=typeof dashCamDefinitions[number]['slug'];
