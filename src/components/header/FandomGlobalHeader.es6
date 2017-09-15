import throttle from 'throttle-debounce/throttle';
import FandomGlobalHeaderDesktop from './FandomGlobalHeaderDesktop.es6';
import FandomGlobalHeaderMobile from './FandomGlobalHeaderMobile.es6';
import AttributeHelper, { ATTRIBUTES } from '../../helpers/AttributeHelper.es6';
import { EVENTS } from './events.es6';
import { BREAKPOINTS } from '../../breakpoints.es6';
import { fromNavResponse } from './userData.es6';
import { requestNavInfo } from './services.es6';
import getOrCreateTemplate from '../../getOrCreateTemplate.es6';
import mobileStyle from './styles/mobile/styles-mobile.scss';
import desktopStyle from './styles-desktop.scss';
import designSystemStyle from 'design-system/dist/css/styles.css';

export default class FandomGlobalHeader extends HTMLElement {
    connectedCallback() {
        this.atts = new AttributeHelper(this);
        this.rootElement = this.attachShadow({ mode: 'open' });
        this.mwData = null;
        this.userData = null;

        this._bindEvents();

        // requestNavInfo(this.atts.mwBase, this.atts.langCode)
        //     .then((mwData) => {
        //         this.mwData = mwData;
        //         this.userData = fromNavResponse(mwData);
        // 
        //         this._createDesktopHeader();
        //         this._createMobileHeader();
        //         this._draw();
        //     })
        const mwData = {
          "logo": {
            "header": {
              "type": "link-image",
              "href": "http://fandom.servicesmw-s1.wikia-dev.us",
              "image": "wds-company-logo-fandom-powered-by-wikia",
              "image-data": {
                "type": "wds-svg",
                "name": "wds-company-logo-fandom-powered-by-wikia"
              },
              "title": {
                "type": "text",
                "value": "Fandom powered by Wikia"
              },
              "tracking_label": "logo"
            },
            "module": {
              "type": "logo",
              "main": {
                "type": "link-image",
                "href": "http://fandom.servicesmw-s1.wikia-dev.us",
                "image": "wds-company-logo-fandom",
                "image-data": {
                  "type": "wds-svg",
                  "name": "wds-company-logo-fandom"
                },
                "title": {
                  "type": "text",
                  "value": "Fandom powered by Wikia"
                },
                "tracking_label": "logo"
              },
              "tagline": {
                "type": "link-image",
                "href": "http://fandom.servicesmw-s1.wikia-dev.us",
                "image-data": {
                  "type": "wds-svg",
                  "name": "wds-company-logo-powered-by-wikia"
                },
                "title": {
                  "type": "text",
                  "value": "Fandom powered by Wikia"
                },
                "tracking_label": "logo-tagline"
              }
            }
          },
          "search": {
            "module": {
              "type": "search",
              "results": {
                "tracking_label": "search",
                "param-name": "query",
                "url": "http://muppet.servicesmw-s1.wikia-dev.us/wiki/Special:Search"
              },
              "placeholder-inactive": {
                "type": "translatable-text",
                "key": "global-navigation-search-placeholder-inactive"
              },
              "placeholder-active": {
                "type": "translatable-text",
                "key": "global-navigation-search-placeholder-in-wiki",
                "params": {
                  "sitename": {
                    "type": "text",
                    "value": "Muppet Wiki"
                  }
                }
              },
              "suggestions": {
                "url": "http://muppet.servicesmw-s1.wikia-dev.us/index.php?action=ajax&rs=getLinkSuggest&format=json",
                "param-name": "query",
                "tracking_label": "search-suggestion"
              }
            }
          },
          "create_wiki": {
            "header": {
              "type": "link-text",
              "title": {
                "type": "translatable-text",
                "key": "global-navigation-create-wiki-link-start-wikia"
              },
              "href": "http://www.servicesmw-s1.wikia-dev.us/Special:CreateNewWiki",
              "tracking_label": "start-a-wiki"
            }
          },
          "fandom_overview": {
            "links": [
              {
                "type": "link-branded",
                "brand": "games",
                "title": {
                  "type": "translatable-text",
                  "key": "global-navigation-fandom-overview-link-vertical-games"
                },
                "href": "http://fandom.servicesmw-s1.wikia-dev.us/topics/games",
                "tracking_label": "link.games"
              },
              {
                "type": "link-branded",
                "brand": "movies",
                "title": {
                  "type": "translatable-text",
                  "key": "global-navigation-fandom-overview-link-vertical-movies"
                },
                "href": "http://fandom.servicesmw-s1.wikia-dev.us/topics/movies",
                "tracking_label": "link.movies"
              },
              {
                "type": "link-branded",
                "brand": "tv",
                "title": {
                  "type": "translatable-text",
                  "key": "global-navigation-fandom-overview-link-vertical-tv"
                },
                "href": "http://fandom.servicesmw-s1.wikia-dev.us/topics/tv",
                "tracking_label": "link.tv"
              }
            ]
          },
          "wikis": {
            "header": {
              "type": "line-text",
              "title": {
                "type": "translatable-text",
                "key": "global-navigation-wikis-header"
              },
              "tracking_label": "link.wikis"
            },
            "links": [
              {
                "type": "link-text",
                "title": {
                  "type": "translatable-text",
                  "key": "global-navigation-wikis-explore"
                },
                "href": "http://fandom.servicesmw-s1.wikia-dev.us/explore",
                "tracking_label": "link.explore"
              },
              {
                "type": "link-text",
                "title": {
                  "type": "translatable-text",
                  "key": "global-navigation-wikis-community-central"
                },
                "href": "http://community.servicesmw-s1.wikia-dev.us/wiki/Community_Central",
                "tracking_label": "link.community-central"
              },
              {
                "type": "link-text",
                "title": {
                  "type": "translatable-text",
                  "key": "global-navigation-wikis-fandom-university"
                },
                "href": "http://community.servicesmw-s1.wikia-dev.us/wiki/Fandom_University",
                "tracking_label": "link.fandom-university"
              }
            ]
          },
          "anon": {
            "header": {
              "type": "line-image",
              "image": "wds-icons-user",
              "image-data": {
                "type": "wds-svg",
                "name": "wds-icons-user"
              },
              "title": {
                "type": "translatable-text",
                "key": "global-navigation-anon-my-account"
              },
              "subtitle": {
                "type": "translatable-text",
                "key": "global-navigation-anon-my-account"
              },
              "tracking_label": "account"
            },
            "links": [
              {
                "type": "link-authentication",
                "title": {
                  "type": "translatable-text",
                  "key": "global-navigation-anon-sign-in"
                },
                "href": "http://www.servicesmw-s1.wikia-dev.us/signin",
                "param-name": "redirect",
                "tracking_label": "account.sign-in"
              },
              {
                "type": "link-authentication",
                "title": {
                  "type": "translatable-text",
                  "key": "global-navigation-anon-register"
                },
                "subtitle": {
                  "type": "translatable-text",
                  "key": "global-navigation-anon-register-description"
                },
                "href": "http://www.servicesmw-s1.wikia-dev.us/register",
                "param-name": "redirect",
                "tracking_label": "account.register"
              }
            ]
          }
        };
        
        this.mwData = mwData;
        this.userData = fromNavResponse(mwData);

        this._createDesktopHeader();
        this._createMobileHeader();
        this._draw();
    }

    triggerEvent(name, detail = {}) {
        return this.dispatchEvent(new CustomEvent(name, { detail, cancelable: true }));
    }

    onEvent(name, callback) {
        return this.addEventListener(name, (...args) => callback(...args));
    }

    refreshUserData() {
        return requestNavInfo(this.atts.mwBase, this.atts.langCode)
            .then(json => {
                this.userData = fromNavResponse(json);
                this.mwData.user = this.userData;
                this.triggerEvent(EVENTS.USER_DATA_REFRESHED)
            });
    }

    isSearchHidden() {
        return this.atts.getAsBool(ATTRIBUTES.HIDE_SEARCH);
    }

    isVisible() {
        return this.mobileHeader.isVisible() || this.desktopHeader.isVisible();
    }

    _bindEvents() {
        this.onEvent(EVENTS.AUTH_SUCCESS, () => this.refreshUserData());
        this.onEvent(EVENTS.LOGOUT_SUCCESS, () => this.refreshUserData());
    }

    _createDesktopHeader() {
        const element = document.createElement('div');
        element.id = 'fandom-global-header-desktop';
        this.desktopHeader = new FandomGlobalHeaderDesktop(element, this);
    }

    _createMobileHeader() {
        const element = document.createElement('div');
        element.id = 'fandom-global-header-mobile';
        this.mobileHeader = new FandomGlobalHeaderMobile(element, this);
    }

    _draw() {
        const css = `<style>${designSystemStyle.toString()} ${mobileStyle.toString()} ${desktopStyle.toString()}</style>`;
        const template = getOrCreateTemplate('fandomGlobalHeader', css);

        ShadyCSS.prepareTemplate(template, 'fandom-global-header');
        ShadyCSS.styleElement(this);
        this.rootElement.appendChild(document.importNode(template.content, true));

        this.rootElement.appendChild(this.desktopHeader.draw());
        this.rootElement.appendChild(this.mobileHeader.draw());

        this.desktopHeader.init();
        this.mobileHeader.init();

        this._initActiveBreakpoint();
    }

    _initActiveBreakpoint() {
        const getViewportSize = () => {
            return window.innerWidth < this.atts.desktopBreakpoint ? BREAKPOINTS.MOBILE : BREAKPOINTS.DESKTOP;
        };
        let viewportSize = getViewportSize();
        this.triggerEvent(EVENTS.BREAKPOINT_CHANGED, {size: viewportSize});

        window.addEventListener('resize', throttle(100, () => {
            let newViewportSize = getViewportSize();
            if (newViewportSize !== viewportSize) {
                viewportSize = newViewportSize;
                this.triggerEvent(EVENTS.BREAKPOINT_CHANGED, {size: newViewportSize});
            }
        }));
    }
}
