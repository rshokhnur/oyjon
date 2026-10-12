import 'i18next';

import type uzLatnCommon from './locales/uz-Latn/common.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: { common: typeof uzLatnCommon };
  }
}
