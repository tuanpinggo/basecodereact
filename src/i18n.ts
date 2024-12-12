import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationVI from '@/locales/vi.json';

// the translations
const resources = {
    vi: {
        translation: translationVI
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'vi',
        debug: false,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        }
    });

export default i18n;

