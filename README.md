## Fandom-Header-Footer
Native web components for the fandom global header and the fandom global footer.

### Getting Started
To get started you need [rake](https://github.com/ruby/rake) and [docker](https://www.docker.com/). It's also recommended to have the following entries in your `/etc/hosts` file:

```
::1 local.wikia-dev.us
127.0.0.1 local.wikia-dev.us
```
Note that you need BOTH the ipv6 and ipv4 entries!

That way ajax requests to services and MediaWiki will work properly.

#### local development
Once those are installed you should run the following command to build the dev image:

```
> rake build_image
```

Once that's built use the following to run the dev image:

```
> rake dev
```

`rake dev` also takes an optional argument indicating the port to be used. If unspecified, it defaults to `80`. ex:

```
> rake dev[8083]
```

It's recommended to leave at port 80, though, so that CORS and window-to-window communication will work with authentication.

Once in the image use [yarn](https://yarnpkg.com/lang/en/) commands to add, remove, and run the package scripts.

To install the required packages:

```
> yarn install
```

To run the dev environment:

```
> yarn dev
```

This will transpile the components using webpack. You should now be able to navigate to http://local.wikia-dev.us and view the components in an actual webpage.

Note that there may be some configuration necessary on the server you are using for the design system. If the
domain you are making request from using the component is not the same as the MW API then the browser will
reject your request. The server needs to include `Access-Control-Allow-Origin: http://yourdomain:yourport/` and
`Access-Control-Allow-Credentials: true` in the response headers. If you are using a dev box this can be enabled by
adding `$wgCORSAllowOrigin = [ 'http://yourdomain:yourport' ];` to your `DevBoxSettings.php`.

#### Building for Release
To make a release build, run:
```
> yarn release
```

Once you've built the code, bump the version number in package.json (following [semver](http://semver.org/)) and [create a new release on github](https://help.github.com/articles/creating-releases/). 

### Outputs
Local dev builds built with `yarn dev` are placed into `build/dev/fandom-elements.js`. This is gitignore'd. 

Release builds built with `yarn build` are placed into `dist/fandom-elements.js`.

The output file DOES NOT contain the necessary polyfills. The necessary polyfills are included in separate js files under the `dist` directory. These are taken from the [webcomponents/webcomponentsjs](https://github.com/webcomponents/webcomponentsjs) repo at version 1.0.8.

### Usage

An example usage of `fandom-elements.js` can be seen in `index.html`.

### Header
The header implements the spec defined in the [design system](http://fandomdesignsystem.com/#/identity/global-navigation) EXCEPT FOR:
- search suggestions

It also implements a mobile version based on the mobile wiki nav. The mobile version does not include: 
- search interactions
- notifications panel
- wiki nav

#### Attributes
`<fandom-global-header>` accepts the following attributes:
- `lang-code` - the current language code used for link internationalization. defaults to `en`
- `mw-base` - base MediaWiki URL used to http requests. defaults to `http://www.wikia.com`
- `services-base` - base services URL used to service http requests. defaults to `https://services.wikia.com`
- `hide-search` - whether or not to hide the search input. defaults to `false`

#### Events
The header emits several events for user actions. These are defined in `events.es6` and exported as `EVENTS.HEADER` by the module-type outputs. 

For all the link-type click events (on an `a` tag) the `event.detail.originalEvent` is passed to the listener so it's possible to prevent any link redirection. Example:

```
<script>
document.addEventListener('WebComponentsReady', function() {
    var header = document.querySelector('fandom-global-header');
    header.addEventListener('click-vertical-games', function(e) {
        e.detail.originalEvent.preventDefault();
        console.log('vertical games clicked, not reloading the page');
    });
})
</script>
```
would prevent the "Games" link in the header to redirect to the intended page.

For non-link events (i.e. custom events) simply call event.preventDefault() and no further action will be taken. Example: 

```
<script>
document.addEventListener('WebComponentsReady', function() {
    var header = document.querySelector('fandom-global-header');
    header.addEventListener('mobile-nav-toggle', function(e) {
        e.preventDefault();
        console.log('mobile nav toggle was clicked, not opening the mobile nav');
    });
})
</script>
```

### Footer

The footer component implements the design system footer.

#### Attributes

`<fandom-global-footer>` accepts the following attributes:
- `lang-code` - the current language code used by the parent page. defaults to `en`
- `city-id` - the wiki city id
- `community-name` - the name of the community
- `vertical` - the vertical the community resides in (NOT an i18n string)
- `mw-base` - base MediaWiki URL used to http requests. defaults to `http://www.wikia.com`


Note: For the FC communities that are not connected to a MW we are using the
community.wikia.com city id (177) then plugging in the community-name as the name.
This leaves a potential gap with vertical but it should be a short term solution while
we workout the decoupling of the FC from MW.

### TODO

    - ~~wire up the API call to get the structure in the footer~~
    - ~~Test with a non-latin site to make sure the i18n is working properly~~
    - leverage the `build/styles.es6` and `build.svgs.es6` scripts to reduce build size
    - in the header take as an optional input a wiki id, which will call the specific wiki api for filling in the header elements
    - publish somewhere that can be installed with a package manager
    - ~~fix the licensing block~~
    

