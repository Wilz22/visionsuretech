export type Industry = {
  id: string;
  number: string;
  title: string;
  label: string;
  description: string;
  overview: string;
  needs: string[];
  solutionMatches: { systemCode: string; reason: string }[];
  gradient: string;
  orb: string;
  icon: string;
};

// Application suggestions based on the catalogue's stated capabilities.
// These are not a manufacturer compatibility or certification matrix.
// Keep the relationship here so Home, Industries and system pages stay aligned.
export const industries: Industry[] = [
  {
    id: 'cranes',
    number: '01',
    title: 'Cranes',
    label: 'Lifting operations',
    description: 'Visibility solutions for lifting operations, boom tips and complex manoeuvres.',
    overview: 'Start with the view the operator needs: the tip of the boom, the rear of the vehicle or the area around the machine. Explore wireless zoom for lifting visibility and camera systems for movement around the work zone.',
    needs: ['A view from the crane or boom tip', 'Rear and side visibility while manoeuvring', 'Camera placement on moving boom sections'],
    solutionMatches: [
      { systemCode: 'VST-S4901', reason: 'View the boom tip with wireless zoom, a choice of pedal or dash-switch control, and an optional battery for moving boom sections.' },
      { systemCode: 'VST-S4101', reason: 'Add live rear and side views where routing video cables through the chassis is impractical.' },
      { systemCode: 'VST-S6301', reason: 'Explore a stitched overhead view from six cameras for awareness around the vehicle during manoeuvres.' },
    ],
    gradient: 'from-brand-100 via-surface to-surface-brand',
    orb: 'bg-brand-500/15',
    icon: 'text-brand-500',
  },
  {
    id: 'mining',
    number: '02',
    title: 'Mining',
    label: 'Demanding sites',
    description: 'Camera and detection options for awareness around heavy machines and site vehicles.',
    overview: 'Equipment visibility and obstacle awareness address different parts of the same task. Explore radar alerts for nearby obstacles, an overhead camera view for manoeuvring, and recorded footage for reviewing an incident.',
    needs: ['Awareness of people and obstacles near equipment', 'A surrounding view during vehicle movements', 'Recorded footage with location and speed for review'],
    solutionMatches: [
      { systemCode: 'VST-S8501', reason: 'Explore 77 GHz radar detection from 0.2 to 40 metres, configurable warning zones and an IP69K radar sensor for exposure to rain, dust and wash-downs.' },
      { systemCode: 'VST-S6301', reason: 'Combine six camera feeds into a surrounding view, with AI, GPS and onboard recording.' },
      { systemCode: 'VST-S4201', reason: 'Record camera footage, GPS location and speed with a 9-inch DVR monitor and 2TB of lockable onboard storage.' },
    ],
    gradient: 'from-surface-soft via-surface to-brand-100',
    orb: 'bg-brand-600/15',
    icon: 'text-brand-600',
  },
  {
    id: 'construction',
    number: '03',
    title: 'Construction',
    label: 'Active jobsites',
    description: 'Camera and detection systems that help operators see around equipment on active jobsites.',
    overview: 'Choose the starting point that fits the machine and the task. Live camera views support front and rear awareness, radar adds proximity alerts, and a compact DVR keeps footage available for later review.',
    needs: ['Front and rear views during equipment movements', 'Proximity alerts around people and obstacles', 'Recording in vehicles with limited dashboard space'],
    solutionMatches: [
      { systemCode: 'VST-S4102', reason: 'Use a hardwired quad-view monitor with a WDR front camera and infrared rear cameras for live visibility in daylight and after dark.' },
      { systemCode: 'VST-S8501', reason: 'Add visual proximity bands and an audible warning that intensifies as an obstacle gets closer.' },
      { systemCode: 'VST-S4202', reason: 'Explore GPS-enabled recording in a compact 7-inch DVR monitor with 1TB already onboard.' },
    ],
    gradient: 'from-brand-50 via-surface to-brand-200',
    orb: 'bg-brand-700/10',
    icon: 'text-brand-700',
  },
  {
    id: 'ports',
    number: '04',
    title: 'Ports & Material Handling',
    label: 'Material movement',
    description: 'Visibility around equipment, cargo movement and shared work areas.',
    overview: 'Explore camera and detection systems for equipment moving through cargo and material-handling areas. Match the view to the task, from a lift at the boom tip to movement around a vehicle.',
    needs: ['A surrounding view during cargo-handling manoeuvres', 'Proximity awareness near equipment', 'Boom-tip visibility for crane-based lifting'],
    solutionMatches: [
      { systemCode: 'VST-S6301', reason: 'Explore a 360° bird’s-eye view to see around the vehicle while manoeuvring in material-handling areas.' },
      { systemCode: 'VST-S8501', reason: 'Use radar-based obstacle detection with configurable zones and visual and audible proximity alerts.' },
      { systemCode: 'VST-S4901', reason: 'For crane-based lifting, explore wireless zoom from the boom tip with operator-controlled magnification.' },
    ],
    gradient: 'from-surface-brand via-surface to-brand-100',
    orb: 'bg-brand-400/15',
    icon: 'text-brand-500',
  },
  {
    id: 'heavy-equipment',
    number: '05',
    title: 'Heavy Equipment',
    label: 'Equipment safety',
    description: 'Live camera views and obstacle detection for awareness around large machines.',
    overview: 'Begin with the blind spots around the machine and the practicalities of installation. Wired and wireless camera systems offer different installation approaches, while radar supports proximity awareness alongside the camera view.',
    needs: ['Live views of rear and side blind spots', 'A camera connection suited to the equipment layout', 'Obstacle alerts alongside a camera feed'],
    solutionMatches: [
      { systemCode: 'VST-S4101', reason: 'Explore live wireless views with heated cameras when running video cables through the chassis is impractical.' },
      { systemCode: 'VST-S4102', reason: 'Choose a hardwired live-view configuration with front and infrared rear-camera coverage where cabling is practical.' },
      { systemCode: 'VST-S8501', reason: 'Combine a heated 1080P camera with radar detection of people and obstacles and configurable warning zones.' },
    ],
    gradient: 'from-brand-100 via-surface to-surface-soft',
    orb: 'bg-brand-600/15',
    icon: 'text-brand-600',
  },
  {
    id: 'fleets',
    number: '06',
    title: 'Commercial Fleets',
    label: 'Fleet awareness',
    description: 'Vehicle recording and remote visibility for drivers and fleet teams.',
    overview: 'Match the system to how your team needs to access information. Onboard DVR systems keep footage and GPS data for review, while the connected AI MDVR supports live vehicle views, location and event review from the back office.',
    needs: ['Remote access to vehicle views and location', 'Footage with GPS data for incident review', 'A choice of DVR screen size and onboard storage'],
    solutionMatches: [
      { systemCode: 'VST-S8401', reason: 'Explore remote fleet monitoring with eight AI channels, WiFi, GPS, 4G and ultrasonic obstacle detection.' },
      { systemCode: 'VST-S4201', reason: 'Use a 9-inch DVR monitor with GPS and 2TB of lockable onboard storage for recorded footage.' },
      { systemCode: 'VST-S4202', reason: 'Choose the compact 7-inch DVR format with GPS and 1TB onboard when dashboard space is limited.' },
    ],
    gradient: 'from-surface-soft via-surface to-surface-brand',
    orb: 'bg-brand-500/15',
    icon: 'text-brand-700',
  },
];

export const getIndustriesForSystem = (systemCode: string) =>
  industries.filter((industry) => industry.solutionMatches.some((match) => match.systemCode === systemCode));
