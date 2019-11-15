
// DcSwiper: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './dc-swiper.core.js';
import {
  DcSwiper
} from './dc-swiper.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    DcSwiper
  ], opts);
}
