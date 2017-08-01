import de from 'design-system-i18n/i18n/de/design-system.json';
import en from 'design-system-i18n/i18n/en/design-system.json';
import es from 'design-system-i18n/i18n/es/design-system.json';
import fr from 'design-system-i18n/i18n/fr/design-system.json';
import it from 'design-system-i18n/i18n/it/design-system.json';
import ja from 'design-system-i18n/i18n/ja/design-system.json';
import ko from 'design-system-i18n/i18n/ko/design-system.json';
import pl from 'design-system-i18n/i18n/pl/design-system.json';
import pt from 'design-system-i18n/i18n/pt/design-system.json';
import ru from 'design-system-i18n/i18n/ru/design-system.json';
import zh from 'design-system-i18n/i18n/zh/design-system.json';
import zhHans from 'design-system-i18n/i18n/zh-hans/design-system.json';

export default function getStrings(langCode) {
    switch (langCode) {
        case 'de':
            return de;
        case 'es':
            return es;
        case 'fr':
            return fr;
        case 'it':
            return it;
        case 'ja':
            return ja;
        case 'ko':
            return ko;
        case 'pl':
            return pl;
        case 'pt':
            return pt;
        case 'ru':
            return ru;
        case 'zh':
            return zh;
        case 'zh-hans':
            return zhHans;
        default:
            return en;
    }
}
