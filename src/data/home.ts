import { routes } from './company';
import {getMessages} from '../i18n';
const copy=getMessages().home;
// Transitional adapter for older About/Solutions views; new views receive props.
export const homeContent = {
  ...copy,
  hero: {...copy.hero,primaryCta:{...copy.hero.primaryCta,href:routes.quote},secondaryCta:{...copy.hero.secondaryCta,href:routes.products}},
  about: {...copy.about,cta:{...copy.about.cta,href:routes.about}},
  solutions: {...copy.solutions,cta:{...copy.solutions.cta,href:routes.products}},
};
