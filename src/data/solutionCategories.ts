export const solutionCategoryIds = ['see', 'record', 'surround', 'sense', 'connect', 'specialty'] as const;

export const solutionCategories = [
  { id: 'see', name: 'SEE', title: 'Live visibility', description: 'Clear rear and side views, with wired or wireless cameras. Live monitoring without recording.', color: '#087f86' },
  { id: 'record', name: 'RECORD', title: 'Footage & location', description: 'Capture camera footage alongside GPS location and speed, ready for incident review.', color: '#b64c31' },
  { id: 'surround', name: 'SURROUND', title: '360° awareness', description: 'Bring six camera feeds together into one bird’s-eye view around the vehicle.', color: '#3453a4' },
  { id: 'sense', name: 'SENSE', title: 'Obstacle detection', description: 'Detect people and obstacles with radar, configurable zones and proximity alerts.', color: '#467d30' },
  { id: 'connect', name: 'CONNECT', title: 'Remote fleet monitoring', description: 'Connect the vehicle and the back office with AI camera channels, WiFi, GPS and 4G.', color: '#694891' },
  { id: 'specialty', name: 'SPECIALTY', title: 'Boom-tip visibility', description: 'See the tip of a crane or boom with wireless zoom and a choice of operator controls.', color: '#956719' },
] as const;

export const getSolutionCategory = (id: typeof solutionCategoryIds[number]) =>
  solutionCategories.find((category) => category.id === id)!;
