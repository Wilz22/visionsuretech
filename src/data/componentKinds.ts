export type ComponentKind='camera'|'monitor'|'other';
// Catalog grouping from the existing configurations, independent of translated descriptions.
export const componentKinds:Readonly<Record<string,ComponentKind>> = {
 'VST-X5493':'other','VST-M4271':'monitor','VST-C3708':'camera','VST-X7201':'other',
 'VST-M3682':'monitor','VST-R3206':'other','VST-R3200':'other','VST-C6247':'camera',
 'VST-X5678':'other','VST-C3759':'camera','VST-C8830':'camera','VST-C8645':'camera','VST-R2191':'other',
 'VST-M9817':'monitor','VST-C3574':'camera','VST-C6792':'camera','VST-P6661 / VST-X4657':'other','VST-B4378':'other',
 'VST-M4877':'monitor','VST-M9620':'monitor','VST-M9052':'monitor','VST-M4048':'monitor',
};
