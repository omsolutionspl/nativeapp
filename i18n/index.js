/**
 *
 * https://docs.reactnativestarter.com/internalization
 *
 * https://github.com/react-native-community/react-native-localize
 * https://github.com/fnando/i18n-js
 *
 */

import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

import en from './langs/en.json';
import ru from './langs/ru.json';

// Import newly added language file
import de from './langs/de.json';

// Add the German translation to the list
const translations = { en, ru, de };

const { languageTag } = RNLocalize.findBestAvailableLanguage(
    Object.keys(translations),
) || { languageTag: 'en' };

i18n.locale = languageTag;
i18n.fallbacks = true;
i18n.translations = translations;

export default i18n;