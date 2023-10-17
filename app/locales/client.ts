import { createI18nClient } from 'next-international/client'

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  defineLocale,
  useCurrentLocale,
} = createI18nClient(
  {
    en: () => import('./en'),
    ru: () => import('./ru'),
    tr: () => import('./tr'),
  },
  {
    // Uncomment to set base path
    // basePath: '/base',
    // Uncomment to use custom segment name
    // segmentName: 'locale',
  }
)
