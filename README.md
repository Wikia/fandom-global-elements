## Fandom-Header-Footer
Native web components for the fandom global header and the fandom global footer.

### Getting Started
To get started you need [rake](https://github.com/ruby/rake) and [docker](https://www.docker.com/). It's also recommended to have the following entry in your `/etc/hosts` file:

```
127.0.0.1   local.wikia-dev.us
```

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

Once in the image use [yarn](https://yarnpkg.com/lang/en/) commands to add, remove, and run the package scripts.

To run the dev environment:

```
> yarn dev
```

This will transpile the components using webpack. You should now be able to navigate to http://local.wikia-dev.us:8082 and view the components in an actual webpage.

#### Building for Release
To make a release build, run:
```
> yarn release
```

### Outputs
Local dev builds built with `yarn dev` are placed into `build/dev/fandom-elements.js`. This is gitignore'd. 

Release builds built with `yarn build` are placed into `dist/fandom-elements.js`.

The output file DOES NOT contain the necessary polyfills. The necessary polyfills are included in separate js files under the `dist` directory.

### Usage

An example usage of `fandom-elements.js` can be seen in `index.html`.

### Header
The header implements the spec defined in the [design system](http://fandomdesignsystem.com/#/identity/global-navigation) EXCEPT FOR:
- search suggestions

#### Attributes
`<fandom-global-header>` accepts the following attributes:
- `lang-code` - the current language code used for link internationalization. defaults to `en`
- `mw-base` - base MediaWiki URL used to http requests. defaults to `http://www.wikia.com`
- `services-base` - base services URL used to service http requests. defaults to `https://services.wikia.com`
- `hide-search` - whether or not to hide the search input. defaults to `false`
- `user-data` - json-serialized data representing the user. An http request to figure this out is made if it isn't provided. The object should be of the form: 
```
{
    name: "...", // the user's name
    avatar: "..." // the user's avatar image url
}
```

#### Events
The header emits several events for user actions. These are defined in `FandomGlobalHeader.es6` and exported as `EVENTS.HEADER` by the module-type outputs. For all the link-type click events (on an `a` tag) the `event.detail.originalEvent` is passed to the listener so it's possible to prevent any link redirection. Example:

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

### Footer

The footer component implements the design system footer.

#### Attributes

`<fandom-global-footer>` accepts the following attributes:
- `lang-code` - the current language code used by the parent page. defaults to `en`
- `city-id` - the wiki city id
- `mw-base` - base MediaWiki URL used to http requests. defaults to `http://www.wikia.com`


### TODO

    - ~~wire up the API call to get the structure in the footer~~
    - ~~Test with a non-latin site to make sure the i18n is working properly~~
    - leverage the `build/styles.es6` and `build.svgs.es6` scripts to reduce build size
    - in the header take as an optional input a wiki id, which will call the specific wiki api for filling in the header elements
    - publish somewhere that can be installed with a package manager
    - ~~fix the licensing block~~
    

