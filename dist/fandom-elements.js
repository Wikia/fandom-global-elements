(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FandomGlobalElements"] = factory();
	else
		root["FandomGlobalElements"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**!

 @license
 handlebars v4.0.10

Copyright (C) 2011-2016 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Handlebars"] = factory();
	else
		root["Handlebars"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _handlebarsBase = __webpack_require__(3);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(20);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(5);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(21);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(33);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};

	    if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }

	    newObj["default"] = obj;
	    return newObj;
	  }
	};

	exports.__esModule = true;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(9);

	var _decorators = __webpack_require__(17);

	var _logger = __webpack_require__(19);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.10';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$defineProperty = __webpack_require__(6)['default'];

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  try {
	    if (loc) {
	      this.lineNumber = line;

	      // Work around issue under safari where we can't directly set the column value
	      /* istanbul ignore next */
	      if (_Object$defineProperty) {
	        Object.defineProperty(this, 'column', {
	          value: column,
	          enumerable: true
	        });
	      } else {
	        this.column = column;
	      }
	    }
	  } catch (nop) {
	    /* Ignore if the browser is very particular */
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(7), __esModule: true };

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(8);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;

	var _helpersBlockHelperMissing = __webpack_require__(10);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(11);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(12);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(13);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(14);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(15);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(16);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;

	var _decoratorsInline = __webpack_require__(18);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(4);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Object$seal = __webpack_require__(22)['default'];

	var _interopRequireWildcard = __webpack_require__(1)['default'];

	var _interopRequireDefault = __webpack_require__(2)['default'];

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;

	var _utils = __webpack_require__(4);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(5);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(3);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },
	    // An empty object to use as replacement for null-contexts
	    nullContext: _Object$seal({}),

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  // Use the current closure context to save the partial-block if this partial
	  var currentPartialBlock = options.data && options.data['partial-block'];
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    (function () {
	      options.data = _base.createFrame(options.data);
	      // Wrapper function to get access to currentPartialBlock from the closure
	      var fn = options.fn;
	      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
	        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        // Restore the partial-block from the closure for the execution of the block
	        // i.e. the part inside the block of the partial call.
	        options.data = _base.createFrame(options.data);
	        options.data['partial-block'] = currentPartialBlock;
	        return fn(context, options);
	      };
	      if (fn.partials) {
	        options.partials = Utils.extend({}, options.partials, fn.partials);
	      }
	    })();
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	module.exports = __webpack_require__(29).Object.seal;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(25);

	__webpack_require__(26)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(27)
	  , core    = __webpack_require__(29)
	  , fails   = __webpack_require__(32);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(28)
	  , core      = __webpack_require__(29)
	  , ctx       = __webpack_require__(30)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(31);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ })
/******/ ])
});
;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <h3 class=\"wds-global-footer__section-header\">"
    + container.escapeExpression(__default(__webpack_require__(2)).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.header : stack1)) != null ? stack1.title : stack1)) != null ? stack1.key : stack1),{"name":"i18n","hash":{"ns":"design-system"},"data":data}))
    + "</h3>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <span class=\"wds-global-footer__section-description\">"
    + container.escapeExpression(__default(__webpack_require__(2)).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.description : stack1)) != null ? stack1.key : stack1),{"name":"i18n","hash":{"ns":"design-system"},"data":data}))
    + "</span>\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "            <li class=\"wds-global-footer__links-list-item\">\n"
    + ((stack1 = helpers["if"].call(alias1,__default(__webpack_require__(11)).call(alias1,"link-image",((stack1 = blockParams[0][0]) != null ? stack1.type : stack1),{"name":"equal","hash":{},"data":data,"blockParams":blockParams}),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "            </li>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = container.invokePartial(__webpack_require__(37),depth0,{"name":"global-footer-link-image","hash":{"model":blockParams[1][0]},"data":data,"blockParams":blockParams,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"8":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return ((stack1 = helpers["if"].call(alias1,__default(__webpack_require__(11)).call(alias1,"link-branded",((stack1 = blockParams[1][0]) != null ? stack1.type : stack1),{"name":"equal","hash":{},"data":data,"blockParams":blockParams}),{"name":"if","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(__webpack_require__(38),depths[1],{"name":"global-footer-link-branded","hash":{"model":blockParams[2][0]},"data":data,"blockParams":blockParams,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = container.invokePartial(__webpack_require__(39),depths[1],{"name":"global-footer-link-text","hash":{"model":blockParams[2][0]},"data":data,"blockParams":blockParams,"indent":"                    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "                ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<section class=\"wds-global-footer__"
    + alias2(alias1((depth0 != null ? depth0.parentName : depth0), depth0))
    + "-section wds-is-"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.header : stack1)) != null ? stack1.title : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.description : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\n    <ul class=\"wds-global-footer__links-list\">\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.links : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 1, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    </ul>\n</section>";
},"usePartial":true,"useData":true,"useDepths":true,"useBlockParams":true});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = i18n;
function i18n(key) {
    if (key in this.i18n) {
        return this.i18n[key];
    } else {
        return key;
    }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<svg class=\""
    + alias4(((helper = (helper = helpers["class"] || (depth0 != null ? depth0["class"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"class","hash":{},"data":data}) : helper)))
    + "\">\n    <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#"
    + alias4(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"image","hash":{},"data":data}) : helper)))
    + "\"></use>\n</svg>";
},"useData":true});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultMwBase = 'http://www.wikia.com';
var defaultServicesBase = 'https://services.wikia.com';
var defaultLangCode = 'en';
var defaultCityId = 0;

var AttributeHelper = function () {
    function AttributeHelper(el) {
        var _this = this;

        _classCallCheck(this, AttributeHelper);

        this.getAttribute = function (attribute, defaultValue) {
            return _this.el.hasAttribute(attribute) ? _this.el.getAttribute(attribute) : defaultValue;
        };

        this.getAsBool = function (attribute) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return _this.getAttribute(attribute, defaultValue.toString()).toLowerCase() === 'true';
        };

        this.getAsJson = function (attribute) {
            var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!_this.el.hasAttribute(attribute)) {
                return defaultValue;
            }

            try {
                return JSON.parse(_this.el.getAttribute(attribute));
            } catch (e) {
                return defaultValue;
            }
        };

        this.el = el;
    }

    _createClass(AttributeHelper, [{
        key: 'mwBase',
        get: function get() {
            return this.getAttribute('mw-base', defaultMwBase);
        }
    }, {
        key: 'servicesBase',
        get: function get() {
            return this.getAttribute('services-base', defaultServicesBase);
        }
    }, {
        key: 'langCode',
        get: function get() {
            return this.getAttribute('lang-code', defaultLangCode);
        }
    }, {
        key: 'cityId',
        get: function get() {
            return this.getAttribute('city-id', defaultCityId);
        }
    }]);

    return AttributeHelper;
}();

exports.default = AttributeHelper;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getStrings;

var _designSystem = __webpack_require__(21);

var _designSystem2 = _interopRequireDefault(_designSystem);

var _designSystem3 = __webpack_require__(22);

var _designSystem4 = _interopRequireDefault(_designSystem3);

var _designSystem5 = __webpack_require__(23);

var _designSystem6 = _interopRequireDefault(_designSystem5);

var _designSystem7 = __webpack_require__(24);

var _designSystem8 = _interopRequireDefault(_designSystem7);

var _designSystem9 = __webpack_require__(25);

var _designSystem10 = _interopRequireDefault(_designSystem9);

var _designSystem11 = __webpack_require__(26);

var _designSystem12 = _interopRequireDefault(_designSystem11);

var _designSystem13 = __webpack_require__(27);

var _designSystem14 = _interopRequireDefault(_designSystem13);

var _designSystem15 = __webpack_require__(28);

var _designSystem16 = _interopRequireDefault(_designSystem15);

var _designSystem17 = __webpack_require__(29);

var _designSystem18 = _interopRequireDefault(_designSystem17);

var _designSystem19 = __webpack_require__(30);

var _designSystem20 = _interopRequireDefault(_designSystem19);

var _designSystem21 = __webpack_require__(31);

var _designSystem22 = _interopRequireDefault(_designSystem21);

var _designSystem23 = __webpack_require__(32);

var _designSystem24 = _interopRequireDefault(_designSystem23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStrings(langCode) {
    switch (langCode) {
        case 'de':
            return _designSystem2.default;
        case 'es':
            return _designSystem6.default;
        case 'fr':
            return _designSystem8.default;
        case 'it':
            return _designSystem10.default;
        case 'ja':
            return _designSystem12.default;
        case 'ko':
            return _designSystem14.default;
        case 'pl':
            return _designSystem16.default;
        case 'pt':
            return _designSystem18.default;
        case 'ru':
            return _designSystem20.default;
        case 'zh':
            return _designSystem22.default;
        case 'zh-hans':
            return _designSystem24.default;
        default:
            return _designSystem4.default;
    }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getOrCreateTemplate;
function getOrCreateTemplate(id, content) {
    var existingTemplate = document.querySelector('template#' + id);
    if (existingTemplate) {
        return existingTemplate;
    }

    var template = document.createElement('template');
    template.id = id;
    template.innerHTML = content;
    document.body.appendChild(template);

    return template;
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<svg style=\"position: absolute; width: 0; height: 0;\" width=\"0\" height=\"0\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><clipPath id=\"wds-company-logo-wikia-org-path\"><path fill=\"none\" clip-rule=\"evenodd\" d=\"M83.06 19.53v3h3v-3zm8.77-4a7 7 0 0 1 .34-2.28 4.92 4.92 0 0 1 .94-1.68 4 4 0 0 1 1.41-1 4.28 4.28 0 0 1 3.41 0 4 4 0 0 1 1.41 1 4.92 4.92 0 0 1 .94 1.68 7 7 0 0 1 .34 2.28 7 7 0 0 1-.34 2.28 4.77 4.77 0 0 1-.94 1.67 4.09 4.09 0 0 1-1.41 1 4.28 4.28 0 0 1-3.41 0 4.09 4.09 0 0 1-1.41-1 4.77 4.77 0 0 1-.94-1.67 7 7 0 0 1-.34-2.28zm-2.46 0a9.28 9.28 0 0 0 .44 2.9 6.61 6.61 0 0 0 1.31 2.34 6 6 0 0 0 2.16 1.56 8.09 8.09 0 0 0 5.91 0 6.06 6.06 0 0 0 2.14-1.56 6.61 6.61 0 0 0 1.31-2.34 9.28 9.28 0 0 0 .44-2.9 9.41 9.41 0 0 0-.44-2.91 6.59 6.59 0 0 0-1.31-2.35 6.21 6.21 0 0 0-2.13-1.58 7.91 7.91 0 0 0-5.91 0 6.18 6.18 0 0 0-2.16 1.57 6.59 6.59 0 0 0-1.31 2.35 9.41 9.41 0 0 0-.44 2.91zm16.36-7.08v14.12h2.32v-6.29a9.66 9.66 0 0 1 .27-2.42 4.63 4.63 0 0 1 .87-1.79 3.75 3.75 0 0 1 1.6-1.07 6.57 6.57 0 0 1 2.38-.38V8.11a5.22 5.22 0 0 0-3.11.76 6.29 6.29 0 0 0-2.06 2.55h-.05v-3zm21.37 12.91V8.44h-2.19v2a4.13 4.13 0 0 0-1.75-1.76 5.21 5.21 0 0 0-2.46-.59 6.29 6.29 0 0 0-3.09.7 6 6 0 0 0-2 1.78 7 7 0 0 0-1.09 2.4 10.73 10.73 0 0 0-.33 2.58 9.35 9.35 0 0 0 .4 2.75 6.57 6.57 0 0 0 1.19 2.27 5.77 5.77 0 0 0 2 1.54 6.22 6.22 0 0 0 2.76.57 5.64 5.64 0 0 0 2.58-.61 3.9 3.9 0 0 0 1.82-1.93h.05v.93a9.39 9.39 0 0 1-.23 2.16 4.51 4.51 0 0 1-.75 1.68 3.64 3.64 0 0 1-1.39 1.09 4.31 4.31 0 0 1-1.94.4 6.26 6.26 0 0 1-1.2-.12 4.37 4.37 0 0 1-1.16-.4 2.89 2.89 0 0 1-.9-.71 1.72 1.72 0 0 1-.4-1.07h-2.32a3.65 3.65 0 0 0 .6 1.94 4.33 4.33 0 0 0 1.38 1.28 6.15 6.15 0 0 0 1.86.71 9.61 9.61 0 0 0 2 .22q3.39 0 5-1.72a7.44 7.44 0 0 0 1.58-5.19zm-6.5-.68a3.55 3.55 0 0 1-1.91-.48 3.69 3.69 0 0 1-1.23-1.26 5.44 5.44 0 0 1-.66-1.73 9.73 9.73 0 0 1-.19-1.91 8 8 0 0 1 .23-1.94 4.81 4.81 0 0 1 .74-1.64 3.72 3.72 0 0 1 1.3-1.13 4 4 0 0 1 1.91-.42 3.69 3.69 0 0 1 1.86.44 3.62 3.62 0 0 1 1.24 1.16 5.11 5.11 0 0 1 .7 1.63 7.74 7.74 0 0 1 .22 1.83 8.53 8.53 0 0 1-.23 2 5.74 5.74 0 0 1-.72 1.76 3.81 3.81 0 0 1-1.3 1.26 3.76 3.76 0 0 1-2 .48z\"/></clipPath><linearGradient id=\"store-googleplay-gradient-1\" x1=\"91.536%\" x2=\"-37.559%\" y1=\"4.839%\" y2=\"71.968%\"><stop stop-color=\"#00A0FF\" offset=\"0%\"/><stop stop-color=\"#00A1FF\" offset=\".657%\"/><stop stop-color=\"#00BEFF\" offset=\"26.01%\"/><stop stop-color=\"#00D2FF\" offset=\"51.22%\"/><stop stop-color=\"#00DFFF\" offset=\"76.04%\"/><stop stop-color=\"#00E3FF\" offset=\"100%\"/></linearGradient><linearGradient id=\"store-googleplay-gradient-2\" x1=\"107.728%\" x2=\"-130.665%\" y1=\"49.428%\" y2=\"49.428%\"><stop stop-color=\"#FFE000\" offset=\"0%\"/><stop stop-color=\"#FFBD00\" offset=\"40.87%\"/><stop stop-color=\"#FFA500\" offset=\"77.54%\"/><stop stop-color=\"#FF9C00\" offset=\"100%\"/></linearGradient><linearGradient id=\"store-googleplay-gradient-3\" x1=\"86.389%\" x2=\"-49.888%\" y1=\"17.815%\" y2=\"194.393%\"><stop stop-color=\"#FF3A44\" offset=\"0%\"/><stop stop-color=\"#C31162\" offset=\"100%\"/></linearGradient><linearGradient id=\"store-googleplay-gradient-4\" x1=\"-18.579%\" x2=\"42.275%\" y1=\"-54.527%\" y2=\"24.69%\"><stop stop-color=\"#32A071\" offset=\"0%\"/><stop stop-color=\"#2DA771\" offset=\"6.85%\"/><stop stop-color=\"#15CF74\" offset=\"47.62%\"/><stop stop-color=\"#06E775\" offset=\"80.09%\"/><stop stop-color=\"#00F076\" offset=\"100%\"/></linearGradient></defs><symbol id=\"wds-avatar-badges-admin\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M0 9c0-1.15 1.247-2.04 1.66-3.04.43-1.035.196-2.544.976-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.248 7.85 0 9 0c1.15 0 2.04 1.247 3.04 1.66 1.035.43 2.544.196 3.324.976.78.78.546 2.29.975 3.324C16.752 6.96 18 7.85 18 9c0 1.15-1.247 2.04-1.66 3.04-.43 1.035-.196 2.544-.976 3.324-.78.78-2.29.546-3.324.975-1 .413-1.89 1.66-3.04 1.66-1.15 0-2.04-1.247-3.04-1.66-1.035-.43-2.544-.196-3.324-.976-.78-.78-.546-2.29-.975-3.324C1.248 11.04 0 10.15 0 9\" fill=\"#E3BD00\"/><path d=\"M12.567 7.523L10.41 7.21l-.964-1.954c-.17-.34-.728-.34-.897 0L7.584 7.21l-2.157.313a.5.5 0 0 0-.277.853l1.562 1.52-.368 2.15a.5.5 0 0 0 .725.526l1.927-1.014 1.93 1.014a.5.5 0 0 0 .725-.526l-.37-2.148 1.562-1.52a.502.502 0 0 0-.277-.855z\" fill=\"#FFF\"/></g></symbol><symbol id=\"wds-avatar-badges-content-moderator\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9\" fill=\"#999\"/><path d=\"M9.05 6.75l-3.9 3.9c-.1.1-.15.2-.15.35v1.5c0 .3.2.5.5.5H7c.15 0 .25-.05.35-.15l3.9-3.9-2.2-2.2zm3.8-.1l-1.5-1.5c-.2-.2-.5-.2-.7 0l-.9.9 2.2 2.2.9-.9c.2-.2.2-.5 0-.7z\" fill=\"#FFF\"/></g></symbol><symbol id=\"wds-avatar-badges-discussion-moderator\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M0 9c0-1.15 1.247-2.04 1.66-3.04.43-1.035.196-2.544.976-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.248 7.85 0 9 0c1.15 0 2.04 1.247 3.04 1.66 1.035.43 2.544.196 3.324.976.78.78.546 2.29.975 3.324C16.752 6.96 18 7.85 18 9c0 1.15-1.247 2.04-1.66 3.04-.43 1.035-.196 2.544-.976 3.324-.78.78-2.29.546-3.324.975-1 .413-1.89 1.66-3.04 1.66-1.15 0-2.04-1.247-3.04-1.66-1.035-.43-2.544-.196-3.324-.976-.78-.78-.546-2.29-.975-3.324C1.248 11.04 0 10.15 0 9\" fill=\"#999\"/><path d=\"M12.82 8.232c0 1.782-1.753 3.232-3.91 3.232a4.69 4.69 0 0 1-.978-.104l-1.833.727a.33.33 0 0 1-.32-.043.322.322 0 0 1-.126-.293l.17-1.532C5.293 9.653 5 8.953 5 8.232 5 6.45 6.754 5 8.91 5c2.157 0 3.91 1.45 3.91 3.232z\" fill=\"#FFF\"/></g></symbol><symbol id=\"wds-avatar-badges-helper\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9\"/><path d=\"M11.234 4L9.06 6.055 6.89 4.008 4 6.445V9.14L8.995 14 14 9.14l-.01-2.688L11.235 4zM5.245 6.703l1.608-1.356 3.739 3.526-1.484 1.485-3.863-3.655zm4.542.038l1.466-1.385L12.764 6.7l-1.467 1.468-1.51-1.426zM5 8.717v-.87l3.401 3.22-.487.486L5 8.717zm3.63 3.533l4.366-4.369.002.836-4.003 3.89-.365-.357z\" fill=\"#FFF\"/></g></symbol><symbol id=\"wds-avatar-badges-staff\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9\" fill=\"#00B7E0\"/><path d=\"M11.234 4L9.06 6.055 6.89 4.008 4 6.445V9.14L8.995 14 14 9.14l-.01-2.688L11.235 4zM5.245 6.703l1.608-1.356 3.739 3.526-1.484 1.485-3.863-3.655zm4.542.038l1.466-1.385L12.764 6.7l-1.467 1.468-1.51-1.426zM5 8.717v-.87l3.401 3.22-.487.486L5 8.717zm3.63 3.533l4.366-4.369.002.836-4.003 3.89-.365-.357z\" fill=\"#FFF\"/></g></symbol><symbol id=\"wds-avatar-badges-vstf\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M0 9c0-1.15 1.247-2.04 1.66-3.04.43-1.035.196-2.544.976-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.248 7.85 0 9 0c1.15 0 2.04 1.247 3.04 1.66 1.035.43 2.544.196 3.324.976.78.78.546 2.29.975 3.324C16.752 6.96 18 7.85 18 9c0 1.15-1.247 2.04-1.66 3.04-.43 1.035-.196 2.544-.976 3.324-.78.78-2.29.546-3.324.975-1 .413-1.89 1.66-3.04 1.66-1.15 0-2.04-1.247-3.04-1.66-1.035-.43-2.544-.196-3.324-.976-.78-.78-.546-2.29-.975-3.324C1.248 11.04 0 10.15 0 9\"/><g fill=\"#FFF\"><path d=\"M7.667 5h2.667v8H7.667z\"/><path d=\"M13 7.667v2.667H5V7.667z\"/></g></g></symbol><symbol id=\"wds-company-logo-fandom-heart\" viewBox=\"0 0 35 35\"><path d=\"M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 0 1-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 0 1-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 0 1 .592 0l11.736 11.603a3.158 3.158 0 0 1 0 4.5l-3.503 3.462a.423.423 0 0 1-.59 0L5.732 11.89a3.132 3.132 0 0 1-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 0 1 2.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 0 1 0 .585l-5.64 5.576a.419.419 0 0 1-.59 0l-5.77-5.704a.411.411 0 0 1 0-.585zm14.56-.687L26.014.475a.869.869 0 0 0-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 0 0 8.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 0 0 1.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z\" fill=\"#00D6D6\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-company-logo-fandom-powered-by-wikia-two-lines\" viewBox=\"0 0 164 35\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 0 1-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 0 1-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 0 1 .592 0l11.736 11.603a3.158 3.158 0 0 1 0 4.5l-3.503 3.462a.423.423 0 0 1-.59 0L5.732 11.89a3.132 3.132 0 0 1-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 0 1 2.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 0 1 0 .585l-5.64 5.576a.419.419 0 0 1-.59 0l-5.77-5.704a.411.411 0 0 1 0-.585zm14.56-.687L26.014.475a.869.869 0 0 0-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 0 0 8.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 0 0 1.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z\" fill=\"#00D6D6\"/><path d=\"M62.852 20.51l2.58-6.716a.468.468 0 0 1 .87 0l2.58 6.717h-6.03zm5.856-12.428c-.184-.48-.65-.8-1.17-.8h-3.342c-.52 0-.986.32-1.17.8l-7.083 18.5c-.21.552.2 1.14.796 1.14h2.753c.353 0 .67-.215.796-.542l.738-1.922a.849.849 0 0 1 .795-.542h8.088a.85.85 0 0 1 .796.542l.74 1.922c.125.327.44.543.795.543h2.754a.843.843 0 0 0 .796-1.14l-7.082-18.5zm93.504-.8h-2.715a1.86 1.86 0 0 0-1.677 1.047l-5.393 11.162-5.393-11.163a1.858 1.858 0 0 0-1.677-1.047h-2.715a.889.889 0 0 0-.893.883V26.84c0 .487.4.883.892.883h2.608a.889.889 0 0 0 .893-.883v-9.686l4.945 10.072c.15.304.46.497.803.497h1.073a.893.893 0 0 0 .803-.497l4.945-10.072v9.686c0 .487.4.883.894.883h2.608a.889.889 0 0 0 .893-.883V8.166c0-.487-.4-.883-.893-.883zm-106.972 8.8h-8.63V11.49h10.918a.88.88 0 0 0 .83-.578l.888-2.464a.872.872 0 0 0-.83-1.163h-15.18c-.486 0-.88.39-.88.87v18.7c0 .48.394.87.88.87h2.492c.486 0 .88-.39.88-.87V20.29h7.743a.88.88 0 0 0 .83-.578l.89-2.464a.872.872 0 0 0-.83-1.163zm51.76 7.61h-3.615V11.315H107c3.828 0 6.41 2.517 6.41 6.188 0 3.672-2.582 6.19-6.41 6.19zm-.124-16.41h-7.128c-.486 0-.88.39-.88.872v18.698c0 .48.394.87.88.87h7.128c6.453 0 10.912-4.44 10.912-10.16v-.117c0-5.72-4.46-10.162-10.912-10.162zm-11.947.03h-2.642a.87.87 0 0 0-.876.866v12.36l-8.755-12.72a1.242 1.242 0 0 0-1.023-.535H78.32a.873.873 0 0 0-.876.867v18.706c0 .48.393.867.877.867h2.64a.872.872 0 0 0 .878-.867V14.71l8.608 12.478c.23.334.613.535 1.022.535h3.46a.872.872 0 0 0 .877-.867V8.178a.87.87 0 0 0-.876-.867zm40.71 10.3c0 3.323-2.712 6.016-6.056 6.016-3.345 0-6.056-2.693-6.056-6.015v-.22c0-3.322 2.71-6.015 6.056-6.015 3.344 0 6.055 2.693 6.055 6.015v.22zm-6.056-10.44c-5.694 0-10.31 4.576-10.31 10.22v.22c0 5.646 4.616 10.22 10.31 10.22 5.693 0 10.308-4.574 10.308-10.22v-.22c0-5.644-4.615-10.22-10.308-10.22z\" fill=\"#FFF\"/></g></symbol><symbol id=\"wds-company-logo-fandom-powered-by-wikia\" viewBox=\"0 0 295 35\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 0 1-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 0 1-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 0 1 .592 0l11.736 11.603a3.158 3.158 0 0 1 0 4.5l-3.503 3.462a.423.423 0 0 1-.59 0L5.732 11.89a3.132 3.132 0 0 1-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 0 1 2.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 0 1 0 .585l-5.64 5.576a.419.419 0 0 1-.59 0l-5.77-5.704a.411.411 0 0 1 0-.585zm14.56-.687L26.014.475a.869.869 0 0 0-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 0 0 8.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 0 0 1.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z\" fill=\"#00D6D6\"/><path d=\"M62.852 20.51l2.58-6.716a.468.468 0 0 1 .87 0l2.58 6.717h-6.03zm5.856-12.428c-.184-.48-.65-.8-1.17-.8h-3.342c-.52 0-.986.32-1.17.8l-7.083 18.5c-.21.552.2 1.14.796 1.14h2.753c.353 0 .67-.215.796-.542l.738-1.922a.849.849 0 0 1 .795-.542h8.088a.85.85 0 0 1 .796.542l.74 1.922c.125.327.44.543.795.543h2.754a.843.843 0 0 0 .796-1.14l-7.082-18.5zm93.504-.8h-2.715a1.86 1.86 0 0 0-1.677 1.047l-5.393 11.162-5.393-11.163a1.858 1.858 0 0 0-1.677-1.047h-2.715a.889.889 0 0 0-.893.883V26.84c0 .487.4.883.892.883h2.608a.889.889 0 0 0 .893-.883v-9.686l4.945 10.072c.15.304.46.497.803.497h1.073a.893.893 0 0 0 .803-.497l4.945-10.072v9.686c0 .487.4.883.894.883h2.608a.889.889 0 0 0 .893-.883V8.166c0-.487-.4-.883-.893-.883zm-106.972 8.8h-8.63V11.49h10.918a.88.88 0 0 0 .83-.578l.888-2.464a.872.872 0 0 0-.83-1.163h-15.18c-.486 0-.88.39-.88.87v18.7c0 .48.394.87.88.87h2.492c.486 0 .88-.39.88-.87V20.29h7.743a.88.88 0 0 0 .83-.578l.89-2.464a.872.872 0 0 0-.83-1.163zm51.76 7.61h-3.615V11.315H107c3.828 0 6.41 2.517 6.41 6.188 0 3.672-2.582 6.19-6.41 6.19zm-.124-16.41h-7.128c-.486 0-.88.39-.88.872v18.698c0 .48.394.87.88.87h7.128c6.453 0 10.912-4.44 10.912-10.16v-.117c0-5.72-4.46-10.162-10.912-10.162zm-11.947.03h-2.642a.87.87 0 0 0-.876.866v12.36l-8.755-12.72a1.242 1.242 0 0 0-1.023-.535H78.32a.873.873 0 0 0-.876.867v18.706c0 .48.393.867.877.867h2.64a.872.872 0 0 0 .878-.867V14.71l8.608 12.478c.23.334.613.535 1.022.535h3.46a.872.872 0 0 0 .877-.867V8.178a.87.87 0 0 0-.876-.867zm40.71 10.3c0 3.323-2.712 6.016-6.056 6.016-3.345 0-6.056-2.693-6.056-6.015v-.22c0-3.322 2.71-6.015 6.056-6.015 3.344 0 6.055 2.693 6.055 6.015v.22zm-6.056-10.44c-5.694 0-10.31 4.576-10.31 10.22v.22c0 5.646 4.616 10.22 10.31 10.22 5.693 0 10.308-4.574 10.308-10.22v-.22c0-5.644-4.615-10.22-10.308-10.22zm46.972 10.5c.316 0 .565-.082.747-.246.18-.164.272-.407.272-.727 0-.3-.083-.54-.25-.722-.165-.183-.422-.275-.77-.275h-1.296v1.97h1.297zm-3.42 4.31a.267.267 0 0 1-.088-.2v-7.43c0-.083.027-.154.08-.21a.268.268 0 0 1 .21-.087h3.276c1.003 0 1.79.225 2.36.675.573.45.858 1.11.858 1.98 0 .87-.284 1.52-.856 1.952-.57.43-1.358.647-2.36.647h-1.32v2.47a.286.286 0 0 1-.292.287h-1.666a.278.278 0 0 1-.202-.085zm12.935-1.878c.238-.24.365-.608.38-1.104.016-.443.024-.76.024-.95 0-.19-.008-.5-.023-.927-.015-.496-.142-.865-.38-1.105-.24-.24-.56-.36-.962-.36-.41 0-.733.12-.973.36s-.366.61-.382 1.105c-.007.213-.01.522-.01.927 0 .412.003.73.01.95.016.496.143.864.382 1.104.24.24.564.36.973.36.4 0 .722-.12.96-.36m-3.553 1.288c-.633-.526-.97-1.3-1.008-2.323a33.76 33.76 0 0 1-.01-.986c0-.442.003-.774.01-.996.03-1.007.37-1.784 1.013-2.33.645-.545 1.507-.818 2.588-.818 1.073 0 1.93.273 2.576.82.644.544.982 1.32 1.013 2.328.015.443.023.775.023.996 0 .23-.008.557-.023.985-.04 1.02-.373 1.796-1 2.322-.63.527-1.493.79-2.59.79-1.095 0-1.96-.263-2.592-.79m9.086.57a.443.443 0 0 1-.145-.27l-1.24-7.326a.23.23 0 0 1 .065-.235.232.232 0 0 1 .168-.075h1.516c.224 0 .348.088.37.263l.707 4.327.8-2.507c.06-.206.188-.31.38-.31h.87c.192 0 .32.104.38.31l.8 2.496.718-4.316c.016-.09.05-.158.105-.2.054-.042.14-.063.255-.063h1.516c.07 0 .128.025.174.074.046.05.07.104.07.165v.07l-1.24 7.325a.426.426 0 0 1-.15.27.478.478 0 0 1-.312.107h-1.17a.432.432 0 0 1-.29-.09.459.459 0 0 1-.138-.207l-1.146-3.17-1.146 3.17a.533.533 0 0 1-.15.206.432.432 0 0 1-.29.09h-1.158a.462.462 0 0 1-.318-.107m9.42.025a.274.274 0 0 1-.087-.2v-7.43c0-.083.027-.154.08-.21a.27.27 0 0 1 .21-.087h5.464a.29.29 0 0 1 .214.086c.058.058.087.13.087.213v1.133a.266.266 0 0 1-.086.206.307.307 0 0 1-.214.08h-3.658v1.454h3.403a.294.294 0 0 1 .301.298v1.042a.285.285 0 0 1-.086.212.295.295 0 0 1-.215.085h-3.403v1.49h3.75a.292.292 0 0 1 .302.296v1.133a.27.27 0 0 1-.087.207.303.303 0 0 1-.214.08h-5.557a.279.279 0 0 1-.203-.085m11.534-4.393c.33 0 .584-.082.758-.246.174-.164.26-.39.26-.68 0-.29-.086-.524-.26-.7-.174-.175-.427-.263-.758-.263h-1.286v1.89h1.286zm-3.375 4.39a.274.274 0 0 1-.087-.2v-7.43c0-.083.027-.154.08-.21a.268.268 0 0 1 .21-.087h3.183c1.018 0 1.815.23 2.39.687.575.458.862 1.103.862 1.934 0 .534-.125.988-.376 1.362-.25.374-.596.664-1.036.87l1.563 2.793c.023.047.035.09.035.127a.24.24 0 0 1-.07.166.225.225 0 0 1-.173.074h-1.633a.483.483 0 0 1-.475-.308l-1.273-2.485h-1.112v2.506a.267.267 0 0 1-.086.207.303.303 0 0 1-.215.08h-1.585a.276.276 0 0 1-.202-.086zm8.721 0a.274.274 0 0 1-.087-.2v-7.43c0-.083.027-.154.08-.21a.268.268 0 0 1 .21-.087h5.464a.29.29 0 0 1 .215.086c.058.058.087.13.087.213v1.133a.27.27 0 0 1-.087.206.307.307 0 0 1-.214.08h-3.657v1.454h3.403a.295.295 0 0 1 .302.298v1.042a.293.293 0 0 1-.3.297h-3.403v1.49h3.75a.294.294 0 0 1 .302.296v1.133a.27.27 0 0 1-.087.207.303.303 0 0 1-.214.08h-5.557a.279.279 0 0 1-.203-.085m11.402-1.635c.487 0 .846-.114 1.078-.343.23-.23.355-.595.37-1.1.016-.22.023-.506.023-.857 0-.35-.006-.634-.022-.847-.015-.49-.148-.85-.4-1.082-.25-.232-.62-.348-1.105-.348h-1.1v4.58h1.158zm-3.246 1.632a.274.274 0 0 1-.087-.2v-7.43c0-.083.027-.154.08-.21a.268.268 0 0 1 .21-.087h3.044c1.143 0 2.03.27 2.664.807.633.538.965 1.31.996 2.318.007.22.01.515.01.88 0 .368-.003.658-.01.87-.078 2.092-1.278 3.137-3.6 3.137h-3.104a.278.278 0 0 1-.202-.085zm16.132-1.46c.3 0 .535-.086.7-.257a.877.877 0 0 0 .25-.636.88.88 0 0 0-.255-.647c-.17-.172-.4-.258-.694-.258h-1.55v1.797h1.55zm-.104-3.297c.286 0 .506-.076.66-.228a.802.802 0 0 0 .232-.596.78.78 0 0 0-.226-.577c-.15-.148-.373-.223-.666-.223h-1.447v1.625h1.447zm-3.537 4.757a.275.275 0 0 1-.087-.2v-7.43c0-.083.027-.154.082-.21a.263.263 0 0 1 .208-.087h3.577c.98 0 1.71.198 2.188.595.48.397.718.96.718 1.694 0 .366-.097.683-.294.95a1.902 1.902 0 0 1-.654.584c.316.137.583.365.8.68.215.318.323.675.323 1.07 0 .772-.257 1.37-.77 1.798-.513.428-1.25.64-2.205.64h-3.682a.28.28 0 0 1-.203-.084zm10.822 0a.274.274 0 0 1-.087-.2v-2.44l-2.675-4.92a.233.233 0 0 1 .042-.293.232.232 0 0 1 .168-.075h1.528c.108 0 .197.027.266.08.07.053.12.11.15.172l1.61 2.873 1.61-2.873c.03-.062.08-.12.15-.172a.427.427 0 0 1 .266-.08h1.528c.062 0 .118.025.168.074a.23.23 0 0 1 .041.291l-2.674 4.923v2.438a.27.27 0 0 1-.087.207.303.303 0 0 1-.215.08h-1.586a.277.277 0 0 1-.203-.085m10.893-.022a.437.437 0 0 1-.144-.27l-1.24-7.326a.23.23 0 0 1 .065-.235.235.235 0 0 1 .17-.075h1.515c.224 0 .348.088.37.263l.707 4.327.8-2.507c.06-.206.188-.31.38-.31h.87c.192 0 .32.104.38.31l.8 2.496.718-4.316a.307.307 0 0 1 .104-.2c.054-.042.14-.063.255-.063h1.516c.07 0 .127.025.173.074.045.05.07.104.07.165v.07l-1.24 7.325a.435.435 0 0 1-.15.27.48.48 0 0 1-.313.107h-1.17a.432.432 0 0 1-.29-.09.459.459 0 0 1-.138-.207l-1.147-3.17-1.146 3.17a.533.533 0 0 1-.15.206.432.432 0 0 1-.29.09h-1.158a.466.466 0 0 1-.32-.107m9.425.025a.274.274 0 0 1-.087-.2v-7.44a.27.27 0 0 1 .087-.207.29.29 0 0 1 .203-.08h1.655a.29.29 0 0 1 .21.08.28.28 0 0 1 .08.206v7.44a.288.288 0 0 1-.08.202.279.279 0 0 1-.21.085h-1.655a.279.279 0 0 1-.203-.085m4.498-.001a.267.267 0 0 1-.088-.2v-7.43c0-.083.027-.154.08-.21a.268.268 0 0 1 .21-.087h1.55c.086 0 .155.028.21.086.053.058.08.13.08.213v2.495l2.05-2.564c.084-.153.235-.23.45-.23h1.772c.062 0 .118.026.168.075.05.05.075.104.075.165 0 .06-.015.107-.046.138l-2.697 3.456 2.918 3.8c.032.03.047.076.047.137a.23.23 0 0 1-.075.166.245.245 0 0 1-.18.074h-1.817a.538.538 0 0 1-.3-.074.478.478 0 0 1-.163-.154l-2.2-2.794v2.735a.288.288 0 0 1-.08.202.277.277 0 0 1-.21.085h-1.55a.279.279 0 0 1-.203-.085m8.549.001a.274.274 0 0 1-.087-.2v-7.44a.27.27 0 0 1 .087-.207.29.29 0 0 1 .202-.08h1.656c.085 0 .154.027.208.08.054.053.08.122.08.206v7.44a.284.284 0 0 1-.288.287h-1.656a.278.278 0 0 1-.202-.085m6.884-2.995h2.06l-1.03-2.92-1.03 2.92zm-2.97 3.005a.23.23 0 0 1-.075-.166.38.38 0 0 1 .01-.103l2.698-7.337c.077-.22.23-.332.463-.332h1.807c.232 0 .386.11.463.332l2.698 7.337a.38.38 0 0 1 .01.103c0 .06-.024.117-.074.166a.231.231 0 0 1-.168.074h-1.505a.401.401 0 0 1-.392-.25l-.417-1.112h-3.033l-.416 1.11a.4.4 0 0 1-.393.252h-1.505a.231.231 0 0 1-.168-.074z\" fill=\"#002A32\"/><path fill=\"#00D6D6\" d=\"M173 9.75h122V8H173m0 19.75h122V26H173\"/></g></symbol><symbol id=\"wds-company-logo-fandom-white\" viewBox=\"0 0 164 35\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 0 1-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 0 1-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 0 1 .592 0l11.736 11.603a3.158 3.158 0 0 1 0 4.5l-3.503 3.462a.423.423 0 0 1-.59 0L5.732 11.89a3.132 3.132 0 0 1-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 0 1 2.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 0 1 0 .585l-5.64 5.576a.419.419 0 0 1-.59 0l-5.77-5.704a.411.411 0 0 1 0-.585zm14.56-.687L26.014.475a.869.869 0 0 0-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 0 0 8.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 0 0 1.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z\" fill=\"#00D6D6\"/><path d=\"M62.852 20.51l2.58-6.716a.468.468 0 0 1 .87 0l2.58 6.717h-6.03zm5.856-12.428c-.184-.48-.65-.8-1.17-.8h-3.342c-.52 0-.986.32-1.17.8l-7.083 18.5c-.21.552.2 1.14.796 1.14h2.753c.353 0 .67-.215.796-.542l.738-1.922a.849.849 0 0 1 .795-.542h8.088a.85.85 0 0 1 .796.542l.74 1.922c.125.327.44.543.795.543h2.754a.843.843 0 0 0 .796-1.14l-7.082-18.5zm93.504-.8h-2.715a1.86 1.86 0 0 0-1.677 1.047l-5.393 11.162-5.393-11.163a1.858 1.858 0 0 0-1.677-1.047h-2.715a.889.889 0 0 0-.893.883V26.84c0 .487.4.883.892.883h2.608a.889.889 0 0 0 .893-.883v-9.686l4.945 10.072c.15.304.46.497.803.497h1.073a.893.893 0 0 0 .803-.497l4.945-10.072v9.686c0 .487.4.883.894.883h2.608a.889.889 0 0 0 .893-.883V8.166c0-.487-.4-.883-.893-.883zm-106.972 8.8h-8.63V11.49h10.918a.88.88 0 0 0 .83-.578l.888-2.464a.872.872 0 0 0-.83-1.163h-15.18c-.486 0-.88.39-.88.87v18.7c0 .48.394.87.88.87h2.492c.486 0 .88-.39.88-.87V20.29h7.743a.88.88 0 0 0 .83-.578l.89-2.464a.872.872 0 0 0-.83-1.163zm51.76 7.61h-3.615V11.315H107c3.828 0 6.41 2.517 6.41 6.188 0 3.672-2.582 6.19-6.41 6.19zm-.124-16.41h-7.128c-.486 0-.88.39-.88.872v18.698c0 .48.394.87.88.87h7.128c6.453 0 10.912-4.44 10.912-10.16v-.117c0-5.72-4.46-10.162-10.912-10.162zm-11.947.03h-2.642a.87.87 0 0 0-.876.866v12.36l-8.755-12.72a1.242 1.242 0 0 0-1.023-.535H78.32a.873.873 0 0 0-.876.867v18.706c0 .48.393.867.877.867h2.64a.872.872 0 0 0 .878-.867V14.71l8.608 12.478c.23.334.613.535 1.022.535h3.46a.872.872 0 0 0 .877-.867V8.178a.87.87 0 0 0-.876-.867zm40.71 10.3c0 3.323-2.712 6.016-6.056 6.016-3.345 0-6.056-2.693-6.056-6.015v-.22c0-3.322 2.71-6.015 6.056-6.015 3.344 0 6.055 2.693 6.055 6.015v.22zm-6.056-10.44c-5.694 0-10.31 4.576-10.31 10.22v.22c0 5.646 4.616 10.22 10.31 10.22 5.693 0 10.308-4.574 10.308-10.22v-.22c0-5.644-4.615-10.22-10.308-10.22z\" fill=\"#FFF\"/></g></symbol><symbol id=\"wds-company-logo-fandom\" viewBox=\"0 0 164 35\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 0 1-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 0 1-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 0 1 .592 0l11.736 11.603a3.158 3.158 0 0 1 0 4.5l-3.503 3.462a.423.423 0 0 1-.59 0L5.732 11.89a3.132 3.132 0 0 1-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 0 1 2.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 0 1 0 .585l-5.64 5.576a.419.419 0 0 1-.59 0l-5.77-5.704a.411.411 0 0 1 0-.585zm14.56-.687L26.014.475a.869.869 0 0 0-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 0 0 8.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 0 0 1.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z\" fill=\"#00D6D6\"/><path d=\"M62.852 20.51l2.58-6.716a.468.468 0 0 1 .87 0l2.58 6.717h-6.03zm5.856-12.428c-.184-.48-.65-.8-1.17-.8h-3.342c-.52 0-.986.32-1.17.8l-7.083 18.5c-.21.552.2 1.14.796 1.14h2.753c.353 0 .67-.215.796-.542l.738-1.922a.849.849 0 0 1 .795-.542h8.088a.85.85 0 0 1 .796.542l.74 1.922c.125.327.44.543.795.543h2.754a.843.843 0 0 0 .796-1.14l-7.082-18.5zm93.504-.8h-2.715a1.86 1.86 0 0 0-1.677 1.047l-5.393 11.162-5.393-11.163a1.858 1.858 0 0 0-1.677-1.047h-2.715a.889.889 0 0 0-.893.883V26.84c0 .487.4.883.892.883h2.608a.889.889 0 0 0 .893-.883v-9.686l4.945 10.072c.15.304.46.497.803.497h1.073a.893.893 0 0 0 .803-.497l4.945-10.072v9.686c0 .487.4.883.894.883h2.608a.889.889 0 0 0 .893-.883V8.166c0-.487-.4-.883-.893-.883zm-106.972 8.8h-8.63V11.49h10.918a.88.88 0 0 0 .83-.578l.888-2.464a.872.872 0 0 0-.83-1.163h-15.18c-.486 0-.88.39-.88.87v18.7c0 .48.394.87.88.87h2.492c.486 0 .88-.39.88-.87V20.29h7.743a.88.88 0 0 0 .83-.578l.89-2.464a.872.872 0 0 0-.83-1.163zm51.76 7.61h-3.615V11.315H107c3.828 0 6.41 2.517 6.41 6.188 0 3.672-2.582 6.19-6.41 6.19zm-.124-16.41h-7.128c-.486 0-.88.39-.88.872v18.698c0 .48.394.87.88.87h7.128c6.453 0 10.912-4.44 10.912-10.16v-.117c0-5.72-4.46-10.162-10.912-10.162zm-11.947.03h-2.642a.87.87 0 0 0-.876.866v12.36l-8.755-12.72a1.242 1.242 0 0 0-1.023-.535H78.32a.873.873 0 0 0-.876.867v18.706c0 .48.393.867.877.867h2.64a.872.872 0 0 0 .878-.867V14.71l8.608 12.478c.23.334.613.535 1.022.535h3.46a.872.872 0 0 0 .877-.867V8.178a.87.87 0 0 0-.876-.867zm40.71 10.3c0 3.323-2.712 6.016-6.056 6.016-3.345 0-6.056-2.693-6.056-6.015v-.22c0-3.322 2.71-6.015 6.056-6.015 3.344 0 6.055 2.693 6.055 6.015v.22zm-6.056-10.44c-5.694 0-10.31 4.576-10.31 10.22v.22c0 5.646 4.616 10.22 10.31 10.22 5.693 0 10.308-4.574 10.308-10.22v-.22c0-5.644-4.615-10.22-10.308-10.22z\" fill=\"#002A32\"/></g></symbol><symbol id=\"wds-company-logo-powered-by-wikia\" viewBox=\"0 0 129 10\"><path d=\"M3.836 4.292c.334 0 .597-.088.79-.264.19-.176.286-.436.286-.78 0-.32-.088-.577-.263-.774-.176-.196-.447-.294-.814-.294h-1.37v2.112h1.37zM.22 8.915A.296.296 0 0 1 .13 8.7V.73C.13.64.156.566.213.504A.291.291 0 0 1 .434.41h3.463c1.06 0 1.892.243 2.496.726.603.483.905 1.19.905 2.124 0 .934-.302 1.632-.905 2.094-.604.463-1.436.694-2.496.694H2.502V8.7a.31.31 0 0 1-.086.215.284.284 0 0 1-.22.092H.436a.294.294 0 0 1-.216-.092zM13.89 6.9c.252-.257.387-.652.403-1.184.016-.474.025-.814.025-1.02 0-.203-.01-.535-.025-.994-.016-.532-.15-.927-.404-1.185-.253-.258-.592-.386-1.016-.386-.432 0-.775.13-1.028.387-.253.258-.387.653-.403 1.185-.01.23-.013.56-.013.995 0 .442.004.782.013 1.02.016.53.15.926.403 1.184.253.26.596.388 1.028.388.424 0 .763-.13 1.015-.387m-3.756 1.383C9.464 7.718 9.11 6.887 9.07 5.79c-.01-.23-.013-.58-.013-1.056 0-.475.004-.83.012-1.068.032-1.08.39-1.914 1.07-2.5.68-.585 1.592-.878 2.734-.878 1.134 0 2.04.293 2.722.88.68.584 1.038 1.417 1.07 2.498.017.475.025.83.025 1.068 0 .245-.007.598-.023 1.056-.04 1.097-.394 1.928-1.06 2.493-.664.565-1.575.847-2.733.847-1.158 0-2.072-.282-2.74-.847m9.602.607a.46.46 0 0 1-.153-.288l-1.31-7.86a.19.19 0 0 1-.01-.073.25.25 0 0 1 .078-.18.255.255 0 0 1 .18-.08h1.6c.238 0 .37.096.393.284l.746 4.642.843-2.69c.066-.22.2-.33.404-.33h.918c.203 0 .338.11.403.33l.845 2.677.758-4.63a.336.336 0 0 1 .11-.214c.058-.046.148-.07.27-.07h1.603c.073 0 .135.028.184.08a.266.266 0 0 1 .073.18v.073l-1.31 7.86a.457.457 0 0 1-.158.287.486.486 0 0 1-.33.117h-1.236a.441.441 0 0 1-.453-.32l-1.21-3.402-1.212 3.402a.566.566 0 0 1-.158.22.439.439 0 0 1-.306.1h-1.223c-.14 0-.25-.04-.337-.118m9.954.028A.298.298 0 0 1 29.6 8.7V.73c0-.09.03-.165.086-.227a.291.291 0 0 1 .22-.092h5.775A.317.317 0 0 1 36 .732v1.216c0 .09-.032.164-.093.222a.318.318 0 0 1-.226.085h-3.865v1.56h3.596a.31.31 0 0 1 .318.319V5.25a.311.311 0 0 1-.317.319h-3.595v1.595h3.963c.09 0 .166.03.227.092.06.062.092.138.092.228V8.7c0 .09-.03.164-.092.22a.307.307 0 0 1-.227.087h-5.872a.29.29 0 0 1-.214-.092M41.88 4.206c.35 0 .62-.088.802-.264.184-.176.275-.42.275-.73 0-.312-.09-.562-.275-.75-.183-.188-.45-.282-.8-.282h-1.36v2.026h1.36zm-3.565 4.71a.295.295 0 0 1-.092-.216V.73c0-.09.028-.165.085-.227a.291.291 0 0 1 .22-.092h3.365c1.077 0 1.92.247 2.526.738.607.49.91 1.183.91 2.075 0 .574-.132 1.06-.397 1.462-.265.4-.63.712-1.095.933l1.652 2.996c.024.05.037.094.037.135a.255.255 0 0 1-.074.177.238.238 0 0 1-.183.08h-1.725a.511.511 0 0 1-.502-.33L41.697 6.01h-1.174V8.7c0 .09-.03.164-.092.22a.304.304 0 0 1-.225.087H38.53a.29.29 0 0 1-.215-.092zm9.215-.001a.296.296 0 0 1-.09-.215V.73a.32.32 0 0 1 .084-.227.291.291 0 0 1 .22-.092h5.775c.09 0 .164.032.225.093a.31.31 0 0 1 .092.228v1.216a.29.29 0 0 1-.092.222.316.316 0 0 1-.226.085h-3.867v1.56h3.597c.09 0 .165.03.226.092.06.06.092.137.092.227V5.25c0 .09-.03.166-.092.227a.31.31 0 0 1-.226.092h-3.597v1.595h3.964c.09 0 .165.03.226.092.06.062.092.138.092.228V8.7c0 .09-.03.164-.092.22a.305.305 0 0 1-.226.087h-5.872a.293.293 0 0 1-.215-.092m12.057-1.75c.514 0 .893-.123 1.138-.368.244-.246.375-.64.39-1.18.017-.236.025-.543.025-.92 0-.376-.008-.68-.024-.91-.016-.523-.157-.91-.422-1.16-.265-.25-.655-.374-1.168-.374H58.36v4.912h1.225zm-3.432 1.75a.298.298 0 0 1-.092-.215V.73c0-.09.03-.165.087-.227a.291.291 0 0 1 .22-.092h3.218c1.207 0 2.145.29 2.814.867.667.577 1.018 1.406 1.05 2.487.01.237.013.553.013.945 0 .392-.004.703-.012.932-.08 2.244-1.35 3.365-3.804 3.365h-3.28a.29.29 0 0 1-.213-.092zM73.2 7.35c.32 0 .566-.093.74-.277a.946.946 0 0 0 .264-.682.95.95 0 0 0-.27-.692c-.178-.184-.423-.276-.733-.276h-1.638V7.35h1.64zm-.11-3.537c.302 0 .535-.082.698-.246.163-.163.245-.376.245-.64 0-.252-.08-.46-.24-.618-.158-.16-.392-.24-.702-.24h-1.528v1.743h1.53zm-3.737 5.102a.296.296 0 0 1-.09-.215V.73a.32.32 0 0 1 .084-.227.291.291 0 0 1 .22-.092h3.78c1.036 0 1.807.214 2.313.64.506.426.76 1.03.76 1.817 0 .393-.105.733-.313 1.02a2.03 2.03 0 0 1-.692.626c.335.147.616.39.845.73.228.34.342.723.342 1.148 0 .828-.27 1.47-.814 1.93-.542.458-1.32.687-2.33.687h-3.89a.293.293 0 0 1-.215-.092zm11.435 0a.296.296 0 0 1-.09-.215V6.085L77.87.805a.269.269 0 0 1-.036-.136.25.25 0 0 1 .08-.18.245.245 0 0 1 .177-.08h1.616a.44.44 0 0 1 .28.087.56.56 0 0 1 .16.184l1.7 3.084 1.7-3.083a.595.595 0 0 1 .16-.183.447.447 0 0 1 .282-.086h1.615a.25.25 0 0 1 .177.08c.053.055.08.114.08.18a.262.262 0 0 1-.037.134l-2.826 5.28V8.7c0 .09-.03.164-.092.22a.307.307 0 0 1-.226.087h-1.677a.293.293 0 0 1-.215-.092M92.3 8.89a.464.464 0 0 1-.152-.288l-1.31-7.86a.166.166 0 0 1-.012-.073c0-.066.027-.126.08-.18a.25.25 0 0 1 .177-.08h1.603c.236 0 .367.096.39.284l.748 4.642.844-2.69c.065-.22.2-.33.404-.33h.917c.203 0 .337.11.403.33l.844 2.677.76-4.63c.015-.097.052-.17.11-.214.056-.046.145-.07.268-.07h1.603c.073 0 .134.028.183.08.05.054.074.114.074.18v.073l-1.31 7.86a.444.444 0 0 1-.158.287.486.486 0 0 1-.33.117H97.2a.439.439 0 0 1-.452-.32l-1.21-3.402-1.213 3.402a.552.552 0 0 1-.16.22.431.431 0 0 1-.305.1h-1.223c-.14 0-.25-.04-.336-.118m9.955.028a.296.296 0 0 1-.09-.215V.718a.304.304 0 0 1 .305-.307h1.75c.09 0 .163.03.22.087a.3.3 0 0 1 .086.22V8.7a.31.31 0 0 1-.086.215.284.284 0 0 1-.22.092h-1.75a.294.294 0 0 1-.214-.092m4.751 0a.298.298 0 0 1-.092-.215V.73c0-.09.03-.165.086-.227a.291.291 0 0 1 .22-.092h1.64c.09 0 .163.032.22.093a.324.324 0 0 1 .085.228V3.41l2.166-2.75c.09-.165.25-.247.477-.247h1.872a.25.25 0 0 1 .177.08c.052.055.08.114.08.18 0 .065-.018.114-.05.147l-2.85 3.708 3.082 4.077c.033.033.05.082.05.147a.246.246 0 0 1-.08.177.257.257 0 0 1-.19.08h-1.92a.578.578 0 0 1-.32-.08.517.517 0 0 1-.17-.165l-2.325-2.997V8.7a.305.305 0 0 1-.085.215.284.284 0 0 1-.22.092h-1.64a.293.293 0 0 1-.214-.092m9.037 0a.298.298 0 0 1-.092-.215V.718c0-.09.03-.163.092-.22a.3.3 0 0 1 .214-.087h1.75c.09 0 .163.03.22.087a.3.3 0 0 1 .086.22V8.7a.31.31 0 0 1-.086.215.284.284 0 0 1-.22.092h-1.75a.293.293 0 0 1-.214-.092m7.276-3.211h2.176l-1.09-3.132-1.087 3.132zm-3.14 3.223a.25.25 0 0 1-.08-.178c0-.05.005-.087.013-.11l2.85-7.872c.082-.238.246-.357.49-.357h1.91c.244 0 .406.12.488.358l2.852 7.87a.384.384 0 0 1 .012.11.25.25 0 0 1-.08.18.246.246 0 0 1-.177.08h-1.59a.424.424 0 0 1-.416-.27l-.44-1.192h-3.205l-.44 1.19a.425.425 0 0 1-.417.27h-1.59a.238.238 0 0 1-.177-.08z\" fill=\"#002A32\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-company-logo-wikia-org\" viewBox=\"0 0 128 29\"><path fill=\"#092140\" d=\"M37.35 22.64V1.14h4.8v12l1.29-1.57 2.77-3.32h6.83l-5.72 5.72 5.99 8.67h-6.27l-3.23-5.44-1.66 1.57v3.87h-4.8zM10.23 8.25l-2.4 9.78-1.85-9.78H1l3.69 14.39h6.46l1.84-7.47 1.76 7.47h6.55l3.69-14.39h-5.08l-1.84 9.78-2.31-9.78h-5.53zm69.84 4.24l.28-4.24h-4.43l-.37 1.57A5.64 5.64 0 0 0 71 7.88c-4 0-6.18 2.58-6.18 7.47s2.21 7.47 6.18 7.47a5.94 5.94 0 0 0 4.52-1.94l.37 1.66h4.43l-.28-4.24zm-4.8 4.71a3.39 3.39 0 0 1-2.86 1.29c-1.48 0-2.58-.92-2.58-3.14s1.11-3.14 2.58-3.14a3.46 3.46 0 0 1 2.86 1.38zM30.16 1.23A2.78 2.78 0 0 0 27.39 4a2.72 2.72 0 0 0 2.77 2.77A2.78 2.78 0 0 0 32.92 4a2.84 2.84 0 0 0-2.76-2.77zm4.15 10.06V8.25h-6.92v14.39h6.92V19.6h-2.22v-8.31h2.22zM57 4a2.72 2.72 0 0 0 2.77 2.77A2.77 2.77 0 1 0 57 4zm.84 7.29v8.31h-2.22v3.04h6.92V8.25h-6.92v3.04h2.22z\"/><g clip-path=\"url(#wds-company-logo-wikia-org-path)\"><path fill=\"#7e7e7e\" d=\"M76.25 5.78h60.19v24.44H76.25z\"/></g></symbol><symbol id=\"wds-company-logo-wikia\" viewBox=\"0 0 64 23\"><path fill-rule=\"evenodd\" d=\"M28.82 19.085v-17h3.827v9.526l1.02-1.27 2.2-2.59h5.47l-4.588 4.48 4.78 6.858h-4.96l-2.608-4.31-1.318 1.25v3.06H28.82M7.297 7.748L5.442 15.49l-1.45-7.743H.004l2.948 11.338h5.126L9.514 13.2l1.436 5.885h5.126l2.956-11.338h-4.005l-1.442 7.743L11.7 7.747H7.297m55.486 3.297l.213-3.297h-3.492L59.24 8.99c-.804-.847-1.804-1.547-3.563-1.547-3.184 0-4.923 2.055-4.923 5.952 0 3.898 1.74 5.953 4.923 5.953 1.76 0 2.76-.7 3.563-1.545l.274 1.282h3.482l-.213-3.337v-4.704zm-3.817 3.793c-.49.635-1.253 1.06-2.25 1.06-1.145 0-2.057-.744-2.057-2.502 0-1.758.91-2.5 2.052-2.5.998 0 1.762.425 2.25 1.06v2.882zM23.113 2.147a2.186 2.186 0 1 0 0 4.372 2.184 2.184 0 1 0 0-4.367m3.294 7.988V7.75h-5.48v11.338h5.48v-2.38H24.69V10.14h1.717m18.06-5.807c0 1.208.98 2.186 2.188 2.186a2.186 2.186 0 0 0 2.188-2.184c0-1.203-.98-2.18-2.188-2.18a2.185 2.185 0 0 0-2.187 2.183m.612 12.374h-1.72v2.38h5.483V7.746H43.36v2.39h1.72\"/></symbol><symbol id=\"wds-company-store-appstore\" viewBox=\"0 0 119 35\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M114.766 35H4.17C1.87 35 0 33.138 0 30.859V4.135C0 1.855 1.87 0 4.169 0h110.597C117.063 0 119 1.855 119 4.135V30.86c0 2.279-1.937 4.141-4.234 4.141\" fill=\"#A9AAA9\"/><path d=\"M118.147 30.86c0 1.851-1.511 3.35-3.38 3.35H4.17c-1.87 0-3.385-1.498-3.385-3.35V4.134C.785 2.284 2.3.78 4.169.78h110.597c1.87 0 3.38 1.505 3.38 3.355V30.86\" fill=\"#0A0B09\"/><path d=\"M26.557 17.311c-.025-2.82 2.327-4.192 2.434-4.257-1.332-1.928-3.396-2.19-4.122-2.211-1.734-.181-3.416 1.03-4.299 1.03-.9 0-2.262-1.012-3.727-.983-1.885.03-3.65 1.113-4.619 2.797-1.997 3.432-.507 8.477 1.406 11.251.958 1.36 2.076 2.877 3.54 2.823 1.432-.06 1.967-.907 3.696-.907 1.713 0 2.216.907 3.709.873 1.537-.025 2.505-1.365 3.429-2.736 1.106-1.558 1.55-3.092 1.568-3.171-.036-.012-2.986-1.129-3.015-4.509m-2.82-8.293c.77-.957 1.296-2.258 1.15-3.578-1.115.049-2.51.765-3.312 1.7-.71.825-1.345 2.176-1.181 3.447 1.253.092 2.539-.628 3.343-1.57M43.858 22.71l-.992-3.04c-.104-.31-.301-1.042-.592-2.194h-.034a84.012 84.012 0 0 1-.557 2.195l-.974 3.04h3.15zm3.43 4.856h-2.003l-1.096-3.42h-3.811l-1.045 3.42h-1.948l3.776-11.644h2.332l3.794 11.644zm7.796-4.233c0-.817-.185-1.491-.557-2.021-.407-.553-.951-.83-1.636-.83a1.96 1.96 0 0 0-1.262.459 2.115 2.115 0 0 0-.74 1.2 2.42 2.42 0 0 0-.087.57v1.4c0 .61.19 1.126.566 1.546.378.42.868.63 1.47.63.708 0 1.26-.27 1.654-.811.394-.542.592-1.256.592-2.143zm1.914-.068c0 1.427-.388 2.556-1.166 3.385-.696.738-1.56 1.106-2.593 1.106-1.113 0-1.914-.397-2.401-1.193h-.036v4.423h-1.879v-9.052c0-.898-.024-1.82-.07-2.765h1.653l.105 1.331h.035c.626-1.002 1.578-1.503 2.854-1.503.998 0 1.83.391 2.498 1.174.667.784 1 1.815 1 3.094zm7.815.068c0-.817-.186-1.491-.557-2.021-.407-.553-.952-.83-1.636-.83-.465 0-.885.154-1.263.459a2.123 2.123 0 0 0-.738 1.2c-.058.231-.088.42-.088.57v1.4c0 .61.189 1.126.564 1.546.378.42.869.63 1.473.63.707 0 1.258-.27 1.652-.811.395-.542.593-1.256.593-2.143zm1.914-.068c0 1.427-.388 2.556-1.167 3.385-.695.738-1.56 1.106-2.592 1.106-1.114 0-1.915-.397-2.401-1.193h-.036v4.423h-1.879v-9.052c0-.898-.024-1.82-.07-2.765h1.654l.104 1.331h.035c.626-1.002 1.576-1.503 2.854-1.503.997 0 1.83.391 2.498 1.174.666.784 1 1.815 1 3.094zm10.878 1.036c0 .99-.347 1.796-1.042 2.418-.764.68-1.828 1.02-3.196 1.02-1.26 0-2.274-.242-3.04-.726l.436-1.555a5.18 5.18 0 0 0 2.716.743c.708 0 1.26-.158 1.655-.476.395-.317.59-.741.59-1.272 0-.473-.16-.87-.487-1.194-.323-.323-.864-.623-1.617-.9-2.054-.76-3.081-1.874-3.081-3.34 0-.956.36-1.741 1.08-2.353.717-.611 1.674-.917 2.871-.917 1.068 0 1.955.184 2.662.552l-.47 1.521c-.661-.357-1.409-.535-2.245-.535-.661 0-1.178.16-1.548.483a1.38 1.38 0 0 0-.47 1.055c0 .46.179.84.54 1.139.312.277.88.577 1.705.9 1.01.403 1.75.874 2.228 1.415.476.542.713 1.216.713 2.022m6.213-3.731h-2.071v4.076c0 1.037.365 1.555 1.096 1.555.336 0 .616-.029.836-.086l.051 1.417c-.37.137-.857.206-1.461.206-.743 0-1.323-.224-1.741-.672-.416-.45-.627-1.204-.627-2.264V20.57h-1.234v-1.4H79.9v-1.538l1.846-.553v2.09h2.071v1.4m7.398 2.79c0-.774-.168-1.438-.505-1.992-.394-.67-.958-1.005-1.687-1.005-.756 0-1.33.334-1.724 1.005-.337.554-.504 1.229-.504 2.027 0 .774.167 1.439.504 1.992.407.67.975 1.005 1.707 1.005.717 0 1.28-.34 1.687-1.022.347-.565.522-1.236.522-2.01zm1.95-.06c0 1.29-.371 2.35-1.114 3.178-.778.853-1.811 1.279-3.099 1.279-1.241 0-2.23-.409-2.966-1.227-.737-.817-1.106-1.849-1.106-3.092 0-1.301.38-2.367 1.14-3.196.76-.83 1.783-1.244 3.071-1.244 1.242 0 2.24.409 2.995 1.227.719.794 1.079 1.819 1.079 3.075zm6.108-2.489a3.281 3.281 0 0 0-.592-.05c-.661 0-1.172.247-1.532.742-.314.438-.47.99-.47 1.658v4.406h-1.878l.016-5.752c0-.969-.023-1.85-.07-2.645h1.638l.068 1.607h.052c.198-.552.512-.997.94-1.33.418-.3.871-.449 1.358-.449.174 0 .331.012.47.034v1.78m6.613 1.676c.013-.553-.11-1.03-.365-1.434-.325-.518-.825-.777-1.497-.777-.615 0-1.115.252-1.496.76-.314.403-.5.887-.556 1.45h3.914zm1.792.484c0 .334-.022.616-.069.846h-5.637c.022.83.294 1.463.817 1.901.475.391 1.09.587 1.844.587.834 0 1.596-.133 2.281-.398l.294 1.296c-.8.346-1.745.519-2.835.519-1.312 0-2.342-.384-3.09-1.15-.747-.766-1.123-1.794-1.123-3.084 0-1.267.347-2.32 1.046-3.16.73-.9 1.716-1.348 2.957-1.348 1.219 0 2.142.448 2.769 1.347.497.714.746 1.596.746 2.643zM42.263 8.783c0-.667-.178-1.18-.535-1.536-.357-.356-.877-.535-1.56-.535-.292 0-.54.02-.745.06v4.277c.114.018.322.026.624.026.707 0 1.253-.195 1.638-.585.385-.39.578-.96.578-1.707zm.974-.025c0 1.03-.31 1.805-.932 2.326-.577.48-1.394.72-2.454.72-.525 0-.975-.022-1.351-.067V6.11c.49-.079 1.02-.118 1.59-.118 1.01 0 1.77.218 2.284.654.574.492.863 1.196.863 2.113zm4.206.929c0-.38-.083-.706-.248-.978-.194-.33-.47-.495-.83-.495-.37 0-.652.165-.846.495-.165.272-.248.604-.248.995 0 .38.083.707.248.98.2.328.478.492.838.492.354 0 .63-.167.83-.501.17-.278.256-.607.256-.988zm.958-.03c0 .635-.182 1.155-.547 1.562-.383.42-.89.629-1.522.629-.61 0-1.096-.2-1.458-.603-.362-.402-.543-.909-.543-1.52 0-.639.186-1.162.56-1.57.373-.408.876-.61 1.508-.61.611 0 1.1.2 1.472.602.352.39.53.894.53 1.51zm6.925-2.027l-1.3 4.124h-.845l-.54-1.791a13.32 13.32 0 0 1-.334-1.333h-.016c-.08.453-.191.898-.334 1.333l-.573 1.79h-.855L49.307 7.63h.949l.47 1.96c.113.465.208.906.283 1.325h.016c.068-.345.182-.784.342-1.316l.59-1.969h.752l.565 1.927c.137.47.248.922.333 1.358h.026c.062-.425.157-.877.283-1.358l.504-1.927h.906m4.789 4.124h-.924V9.39c0-.728-.278-1.092-.837-1.092a.837.837 0 0 0-.667.301c-.171.2-.257.436-.257.707v2.447h-.924V8.809c0-.363-.011-.755-.033-1.18h.812l.043.645h.026c.107-.2.268-.367.478-.498.25-.155.53-.232.838-.232.387 0 .71.125.967.374.319.305.478.76.478 1.366v2.47m1.625-6.017h.923v6.017h-.923zm5.402 3.95c0-.38-.082-.706-.247-.978-.193-.33-.471-.495-.829-.495-.372 0-.654.165-.847.495-.165.272-.248.604-.248.995 0 .38.083.707.248.98.2.328.479.492.838.492.354 0 .629-.167.829-.501.172-.278.256-.607.256-.988zm.96-.03c0 .635-.183 1.155-.548 1.562-.382.42-.89.629-1.522.629-.611 0-1.097-.2-1.458-.603-.362-.402-.542-.909-.542-1.52 0-.639.186-1.162.559-1.57.373-.408.877-.61 1.508-.61.612 0 1.1.2 1.472.602.353.39.53.894.53 1.51zm3.511.679V9.7c-1.019-.017-1.528.26-1.528.832 0 .215.058.376.177.483.119.108.27.161.451.161a.927.927 0 0 0 .564-.19.777.777 0 0 0 .336-.65zm.96 1.418h-.83l-.07-.475h-.025c-.284.379-.689.569-1.214.569-.392 0-.709-.125-.949-.374a1.168 1.168 0 0 1-.325-.84c0-.504.212-.888.637-1.155.425-.265 1.023-.396 1.793-.39v-.077c0-.543-.288-.814-.863-.814-.41 0-.772.101-1.083.305l-.188-.603c.386-.237.862-.356 1.426-.356 1.086 0 1.63.569 1.63 1.707v1.519c0 .412.02.74.06.984zm4.291-1.74v-.687a1.043 1.043 0 0 0-.36-.844.908.908 0 0 0-.617-.226.952.952 0 0 0-.813.407c-.197.272-.296.62-.296 1.044 0 .408.094.739.284.993.2.271.47.408.807.408a.895.895 0 0 0 .73-.34c.178-.209.265-.46.265-.755zm.958 1.74h-.82l-.042-.662h-.027c-.262.503-.707.755-1.334.755-.501 0-.917-.195-1.248-.585-.33-.391-.496-.897-.496-1.52 0-.667.179-1.208.539-1.62a1.662 1.662 0 0 1 1.283-.578c.557 0 .948.187 1.17.56h.017V5.737h.925v4.906c0 .401.01.771.033 1.11zm6.943-2.067c0-.38-.083-.706-.248-.978-.194-.33-.47-.495-.83-.495-.37 0-.652.165-.847.495-.165.272-.248.604-.248.995 0 .38.083.707.248.98.2.328.479.492.839.492.353 0 .63-.167.83-.501.17-.278.256-.607.256-.988zm.957-.03c0 .635-.182 1.155-.547 1.562-.383.42-.889.629-1.522.629-.61 0-1.095-.2-1.458-.603-.362-.402-.542-.909-.542-1.52 0-.639.186-1.162.56-1.57.372-.408.875-.61 1.51-.61.608 0 1.1.2 1.469.602.353.39.53.894.53 1.51zm4.968 2.097h-.923V9.39c0-.728-.279-1.092-.839-1.092a.833.833 0 0 0-.666.301c-.17.2-.257.436-.257.707v2.447h-.924V8.809c0-.363-.01-.755-.033-1.18h.811l.043.645h.026c.108-.2.269-.367.478-.498.252-.155.531-.232.839-.232.388 0 .71.125.966.374.32.305.478.76.478 1.366v2.47m6.218-3.438h-1.019v2.004c0 .509.181.764.54.764.165 0 .302-.014.41-.043l.025.696c-.182.068-.422.102-.718.102-.365 0-.649-.11-.853-.331-.207-.221-.309-.591-.309-1.112v-2.08h-.608v-.687h.608v-.756l.905-.271v1.027h1.019v.687m4.89 3.438h-.924V9.409c0-.74-.28-1.11-.837-1.11-.429 0-.721.215-.882.644-.027.09-.042.2-.042.33v2.48h-.923V5.738h.923v2.485h.017c.29-.452.708-.678 1.248-.678.383 0 .699.125.95.374.314.31.47.772.47 1.383v2.453m4.163-2.497a1.23 1.23 0 0 0-.179-.704c-.16-.255-.404-.382-.735-.382a.88.88 0 0 0-.735.374 1.38 1.38 0 0 0-.274.712h1.923zm.882.238c0 .165-.013.303-.035.416h-2.77c.012.408.144.718.4.934.235.192.539.288.909.288.41 0 .783-.064 1.12-.195l.145.636c-.394.17-.857.256-1.395.256-.643 0-1.15-.188-1.516-.565-.368-.377-.55-.882-.55-1.515 0-.622.17-1.14.512-1.553.358-.442.842-.663 1.453-.663.598 0 1.052.221 1.358.663.246.35.369.784.369 1.298z\" fill=\"#FFF\"/></g></symbol><symbol id=\"wds-company-store-googleplay\" viewBox=\"0 0 119 35\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#000\" d=\"M114.593 35H4.407C1.94 35 0 33.075 0 30.625V4.375C0 1.925 1.94 0 4.407 0h110.186C117.06 0 119 1.925 119 4.375v26.25c0 2.362-1.94 4.375-4.407 4.375z\"/><path fill=\"#A6A6A6\" d=\"M114.593.7c2.027 0 3.702 1.662 3.702 3.675v26.25c0 2.013-1.675 3.675-3.702 3.675H4.407C2.38 34.3.705 32.638.705 30.625V4.375C.705 2.362 2.38.7 4.407.7h110.186zm0-.7H4.407C1.94 0 0 1.925 0 4.375v26.25C0 33.075 1.94 35 4.407 35h110.186c2.468 0 4.407-1.925 4.407-4.375V4.375C119 2.013 117.06 0 114.593 0z\"/><path fill=\"#FFF\" stroke=\"#FFF\" stroke-width=\".2\" d=\"M41.475 8.925c0 .7-.175 1.313-.613 1.75-.525.525-1.137.787-1.925.787-.787 0-1.4-.262-1.924-.787-.526-.525-.788-1.138-.788-1.925 0-.787.262-1.4.788-1.925.525-.525 1.137-.788 1.925-.788.35 0 .7.088 1.05.263.35.175.612.35.787.612l-.438.438c-.35-.438-.787-.612-1.4-.612-.524 0-1.05.174-1.4.612-.437.35-.612.875-.612 1.488 0 .612.175 1.137.613 1.487.437.35.875.613 1.4.613.612 0 1.05-.176 1.487-.613.263-.262.438-.612.438-1.05h-1.925v-.613h2.537v.263zM45.5 6.737h-2.362V8.4h2.187v.612h-2.187v1.663H45.5v.7h-3.062v-5.25H45.5zm2.888 4.638h-.7V6.737H46.2v-.612h3.675v.612h-1.487zm4.025 0v-5.25h.7v5.25zm3.674 0h-.7V6.737H53.9v-.612h3.587v.612H56v4.638zm8.313-.7c-.525.525-1.138.787-1.925.787-.788 0-1.4-.262-1.925-.787-.525-.525-.787-1.138-.787-1.925 0-.787.262-1.4.787-1.925.525-.525 1.138-.788 1.925-.788.788 0 1.4.263 1.925.788.525.525.787 1.138.787 1.925 0 .787-.262 1.4-.787 1.925zm-3.325-.438c.35.35.875.613 1.4.613.525 0 1.05-.175 1.4-.612.35-.35.612-.875.612-1.488s-.174-1.138-.612-1.487c-.35-.35-.875-.613-1.4-.613-.525 0-1.05.175-1.4.612-.35.35-.613.875-.613 1.488s.175 1.137.613 1.488zm5.075 1.138v-5.25h.788l2.537 4.113V6.125h.7v5.25h-.7l-2.712-4.287v4.287z\"/><path fill=\"#FFF\" d=\"M59.587 19.075c-2.1 0-3.762 1.575-3.762 3.762 0 2.1 1.662 3.763 3.762 3.763s3.763-1.575 3.763-3.763c0-2.274-1.663-3.762-3.763-3.762zm0 5.95c-1.137 0-2.1-.962-2.1-2.275s.963-2.275 2.1-2.275c1.138 0 2.1.875 2.1 2.275 0 1.313-.962 2.275-2.1 2.275zm-8.137-5.95c-2.1 0-3.763 1.575-3.763 3.762 0 2.1 1.663 3.763 3.763 3.763 2.1 0 3.762-1.575 3.762-3.763 0-2.274-1.662-3.762-3.762-3.762zm0 5.95c-1.138 0-2.1-.962-2.1-2.275s.962-2.275 2.1-2.275c1.137 0 2.1.875 2.1 2.275 0 1.313-.962 2.275-2.1 2.275zm-9.713-4.813v1.576H45.5c-.087.875-.438 1.575-.875 2.012-.525.525-1.4 1.137-2.888 1.137-2.362 0-4.112-1.837-4.112-4.2 0-2.362 1.837-4.2 4.112-4.2 1.225 0 2.188.526 2.888 1.138l1.138-1.137c-.963-.876-2.188-1.575-3.938-1.575-3.15 0-5.863 2.624-5.863 5.775 0 3.15 2.713 5.774 5.863 5.774 1.75 0 2.975-.524 4.025-1.662 1.05-1.05 1.4-2.538 1.4-3.675 0-.35 0-.7-.087-.963h-5.425zm39.726 1.226c-.35-.875-1.225-2.363-3.15-2.363-1.925 0-3.5 1.488-3.5 3.762 0 2.1 1.575 3.763 3.674 3.763 1.663 0 2.713-1.05 3.063-1.663l-1.225-.875c-.438.613-.963 1.05-1.838 1.05-.874 0-1.4-.35-1.837-1.137l4.987-2.1-.174-.438zm-5.075 1.225c0-1.4 1.137-2.188 1.924-2.188.613 0 1.225.35 1.4.787l-3.325 1.4zm-4.113 3.587h1.662V15.312h-1.662V26.25zm-2.625-6.387c-.438-.438-1.138-.875-2.013-.875-1.837 0-3.587 1.662-3.587 3.762s1.663 3.675 3.588 3.675c.874 0 1.575-.438 1.924-.875h.088v.525c0 1.4-.788 2.188-2.013 2.188-.962 0-1.662-.7-1.837-1.313l-1.4.613c.438.962 1.487 2.187 3.325 2.187 1.925 0 3.5-1.137 3.5-3.85v-6.65H69.65v.613zm-1.925 5.162c-1.137 0-2.1-.962-2.1-2.275s.963-2.275 2.1-2.275c1.138 0 2.013.962 2.013 2.275s-.876 2.275-2.013 2.275zm21.35-9.712h-3.938V26.25H86.8v-4.113h2.275c1.837 0 3.587-1.312 3.587-3.412 0-2.1-1.75-3.413-3.587-3.413zm.087 5.25H86.8V16.8h2.362c1.225 0 1.925 1.05 1.925 1.837-.087.963-.787 1.925-1.925 1.925zm10.063-1.575c-1.225 0-2.45.524-2.887 1.662l1.487.613c.35-.613.875-.788 1.487-.788.876 0 1.663.525 1.75 1.4v.087c-.262-.174-.962-.437-1.662-.437-1.575 0-3.15.875-3.15 2.45 0 1.487 1.313 2.45 2.713 2.45 1.137 0 1.662-.525 2.1-1.05h.087v.875h1.575v-4.2c-.175-1.925-1.662-3.063-3.5-3.063zm-.175 6.037c-.525 0-1.313-.262-1.313-.962 0-.875.963-1.138 1.75-1.138.7 0 1.05.175 1.488.35-.175 1.05-1.05 1.75-1.925 1.75zm9.188-5.775l-1.838 4.725h-.088l-1.924-4.725h-1.75l2.887 6.65-1.663 3.675h1.663l4.462-10.325h-1.75zm-14.7 7H95.2V15.312h-1.663V26.25z\"/><path fill=\"url(#store-googleplay-gradient-1)\" d=\"M9.1 6.563c-.262.262-.438.7-.438 1.224v19.338c0 .525.175.962.438 1.225l.088.087 10.85-10.85v-.174L9.1 6.563z\"/><path fill=\"url(#store-googleplay-gradient-2)\" d=\"M23.625 21.262l-3.587-3.587v-.262l3.587-3.588.087.088L28 16.363c1.225.7 1.225 1.837 0 2.537l-4.375 2.363z\"/><path fill=\"url(#store-googleplay-gradient-3)\" d=\"M23.712 21.175L20.038 17.5 9.1 28.438c.438.437 1.05.437 1.838.087l12.774-7.35\"/><path fill=\"url(#store-googleplay-gradient-4)\" d=\"M23.712 13.825L10.938 6.563c-.788-.438-1.4-.35-1.838.087L20.038 17.5l3.674-3.675z\"/><path fill=\"#000\" d=\"M23.625 21.087l-12.688 7.175c-.7.438-1.312.35-1.75 0l-.087.088.088.087c.437.35 1.05.438 1.75 0l12.687-7.35z\" opacity=\".2\"/><path fill=\"#000\" d=\"M9.15 28.262c-.3-.262-.4-.7-.4-1.224v.087c0 .525.2.962.5 1.225v-.088h-.1zM28 18.637l-4.375 2.45.087.088L28 18.725c.613-.35.875-.788.875-1.225 0 .438-.35.788-.875 1.137z\" opacity=\".12\"/><path fill=\"#FFF\" d=\"M10.938 6.65L28 16.363c.525.35.875.7.875 1.137 0-.438-.262-.875-.875-1.225L10.937 6.563c-1.224-.7-2.187-.088-2.187 1.312v.088c0-1.4.963-2.013 2.188-1.313z\" opacity=\".25\"/></g></symbol><symbol id=\"wds-icons-activity-small\" viewBox=\"0 0 18 18\"><path d=\"M10.75 17.002a1.5 1.5 0 0 1-1.449-1.11L6.934 7.099 5.881 9.586a1.499 1.499 0 0 1-1.381.916h-3a1.5 1.5 0 1 1 0-3h2.005l2.363-5.584c.25-.591.839-.97 1.485-.912a1.5 1.5 0 0 1 1.345 1.106l2.337 8.679.949-2.351a1.5 1.5 0 0 1 1.391-.938H16.5a1.5 1.5 0 0 1 0 3h-2.114l-2.246 5.562a1.5 1.5 0 0 1-1.39.938\"/></symbol><symbol id=\"wds-icons-activity\" viewBox=\"0 0 24 24\"><path d=\"M14.218 22l-.097-.003a1.498 1.498 0 0 1-1.351-1.117L9.486 8.289l-1.799 4.517c-.226.57-.778.943-1.389.943H2.496A1.497 1.497 0 0 1 1 12.25c0-.827.67-1.498 1.496-1.498h2.788l3.11-7.808a1.49 1.49 0 0 1 1.482-.94c.644.04 1.19.49 1.354 1.116l3.292 12.622 1.635-4.052a1.495 1.495 0 0 1 1.386-.938h3.96a1.498 1.498 0 0 1 0 2.997h-2.95l-2.949 7.314c-.229.57-.78.937-1.386.937\"/></symbol><symbol id=\"wds-icons-add-new-page-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M4.667 11H8v1.333H4.667V11zm0-3.333h8V9h-8V7.667zm0-3.334h8v1.334h-8V4.333zM2.667 17H10v-4.667c0-.368.3-.666.667-.666h4.666v-10A.667.667 0 0 0 14.667 1h-12A.667.667 0 0 0 2 1.667v14.666c0 .368.3.667.667.667z\"/><path d=\"M14.943 13h-3.61v3.61z\"/></g></symbol><symbol id=\"wds-icons-alert-small\" viewBox=\"0 0 18 18\"><path d=\"M10 9a1 1 0 1 1-2 0V4.5a1 1 0 1 1 2 0V9zm0 4.5a1 1 0 1 1-2 0V13a1 1 0 1 1 2 0v.5zM9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-alert\" viewBox=\"0 0 24 24\"><path d=\"M13 11.857c0 .631-.448 1.143-1 1.143s-1-.512-1-1.143V6.143C11 5.512 11.448 5 12 5s1 .512 1 1.143v5.714zM13 17a1 1 0 0 1-2 0v-1a1 1 0 0 1 2 0v1zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-arrow\" viewBox=\"0 0 24 24\"><path d=\"M22.999 12a1 1 0 0 0-1-1H4.413l5.293-5.293a.999.999 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.415l7 7a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.415L4.413 13h17.586a1 1 0 0 0 1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-article-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path fill-rule=\"nonzero\" d=\"M4 2.992v11.016c0 .545.45.992 1.009.992h7.982c.558 0 1.009-.447 1.009-.992V2.992C14 2.447 13.55 2 12.991 2H5.01C4.45 2 4 2.447 4 2.992zm-1 0C3 1.892 3.902 1 5.009 1h7.982C14.101 1 15 1.893 15 2.992v11.016c0 1.1-.902 1.992-2.009 1.992H5.01A2.001 2.001 0 0 1 3 14.008V2.992z\"/><path fill-rule=\"nonzero\" d=\"M5 10h8V9H5zm0-2h8V7H5zm0 4h8v-1H5z\"/><path d=\"M5 3h8v3H5z\"/></g></symbol><symbol id=\"wds-icons-articles-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M14.842 4.563v9.463c0 .654-.531 1.184-1.184 1.184H6.562c.36.477.927.79 1.57.79h5.526a1.975 1.975 0 0 0 1.974-1.974V6.131c0-.642-.313-1.208-.79-1.568\"/><path d=\"M12.079 14.421a1.975 1.975 0 0 0 1.974-1.974V4.158h-.04a1.947 1.947 0 0 0-.365-.79 1.97 1.97 0 0 0-.385-.384v1.174h-.072c.044.124.072.256.072.395v7.894c0 .653-.531 1.185-1.184 1.185H6.553a1.17 1.17 0 0 1-.395-.073v.073H4.984a2.024 2.024 0 0 0 1.174.749v.04h5.921z\"/><path d=\"M4.974 12.053a1.17 1.17 0 0 1-.395-.073 1.182 1.182 0 0 1-.79-1.112V2.973c0-.652.532-1.184 1.185-1.184H10.5c.514 0 .948.331 1.112.79.044.124.072.256.072.395v7.894c0 .653-.531 1.185-1.184 1.185H4.974zm.467.79H10.5a1.975 1.975 0 0 0 1.974-1.975V2.58h-.04a1.947 1.947 0 0 0-.365-.79A1.964 1.964 0 0 0 10.5 1H4.974A1.976 1.976 0 0 0 3 2.974v7.894c0 .643.313 1.21.79 1.57.23.174.495.305.789.364v.04h.861z\"/><path d=\"M6.158 8.105h4.737v-.79H4.578v.79h.79zm0-1.579h4.737v-.79H4.578v.79h.79zm0 3.158h4.737v-.79H4.578v.79h.79zm-.75-4.737h5.486V2.578H4.58v2.369h.79z\"/></g></symbol><symbol id=\"wds-icons-bell\" viewBox=\"0 0 24 24\"><path d=\"M21.882 19.472a.998.998 0 0 0-.05-1.026C21.814 18.418 20 15.656 20 12V8c0-4.411-3.59-8-8-8-4.411 0-8 3.589-8 8v4c0 3.628-1.815 6.419-1.832 6.446a1.003 1.003 0 0 0-.05 1.026c.175.325.514.528.882.528h18a1 1 0 0 0 .882-.528M12 24c1.474 0 2.75-.81 3.444-2H8.556c.694 1.19 1.97 2 3.444 2\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-bold-small\" viewBox=\"0 0 18 18\"><path d=\"M12.56 8.316a3.483 3.483 0 0 0 1.418-3.207C13.782 3.305 12.143 2 10.33 2H3v1l1.447.724A1 1 0 0 1 5 4.618v8.764a1 1 0 0 1-.553.894L3 15v1h7.823c2.104 0 3.98-1.547 4.162-3.643a4.001 4.001 0 0 0-2.424-4.04zM8 4h1a2 2 0 1 1 0 4H8V4zm2 10H8v-4h2a2 2 0 1 1 0 4z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-bold\" viewBox=\"0 0 24 24\"><path d=\"M3 23v-2.37l1.3-.41a1 1 0 0 0 .7-.954V4.756a1 1 0 0 0-.726-.963L3 3.431V1h10.11c5.196 0 6.654 2.37 6.654 5.378 0 2.887-1.853 4.498-3.706 5.105v.09C19.522 11.97 21 13.963 21 17c0 4.497-3.393 6-8.164 6H3zm8.165-12.762c2.187 0 4.132-.517 4.132-3.1 0-2.492-1.58-2.826-3.677-2.826H10v5.926h1.165zm.88 9.48c2.553 0 4.224-.608 4.224-3.251 0-2.523-1.7-3.19-3.767-3.19H10v6.44h2.046z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-bookmark-small\" viewBox=\"0 0 18 18\"><path d=\"M14.333 1H3.666c-.4 0-.666.267-.666.667v14.666c0 .267.133.467.333.6.133.067.2.067.333.067.134 0 .2-.067.334-.133l5-3.134 5 3.134c.133.066.2.133.333.133s.2 0 .333-.067a.7.7 0 0 0 .334-.6V1.667c0-.4-.267-.667-.667-.667\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-bookmark\" viewBox=\"0 0 24 24\"><path d=\"M20 0H4c-.6 0-1 .4-1 1v22c0 .4.2.7.5.9.2.1.3.1.5.1s.3-.1.5-.2l7.5-4.7 7.5 4.7c.2.1.3.2.5.2s.3 0 .5-.1c.3-.2.5-.5.5-.9V1c0-.6-.4-1-1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-bullet-list-small\" viewBox=\"0 0 18 18\"><g transform=\"translate(1 1)\" fill-rule=\"evenodd\"><circle cx=\"2\" cy=\"2\" r=\"2\"/><path d=\"M6 1h10v2H6z\"/><circle cx=\"2\" cy=\"8\" r=\"2\"/><path d=\"M6 7h10v2H6z\"/><circle cx=\"2\" cy=\"14\" r=\"2\"/><path d=\"M6 13h10v2H6z\"/></g></symbol><symbol id=\"wds-icons-bullet-list\" viewBox=\"0 0 24 24\"><path d=\"M4 7c1.654 0 3-1.346 3-3S5.654 1 4 1 1 2.346 1 4s1.346 3 3 3m0 8c1.654 0 3-1.346 3-3S5.654 9 4 9s-3 1.346-3 3 1.346 3 3 3m0 8c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3M22 3H10a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2m0 8H10a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2m1 9a1 1 0 0 0-1-1H10a1 1 0 1 0 0 2h12a1 1 0 0 0 1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-camera\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12 18.5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5M23 6h-5.5l-1.7-2.6c-.2-.2-.5-.4-.8-.4H9c-.3 0-.6.2-.8.4L6.5 6H1c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1\"/><path d=\"M12 10.5c-1.68 0-3 1.32-3 3s1.32 3 3 3 3-1.32 3-3-1.32-3-3-3M1.5 5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1\"/></g></symbol><symbol id=\"wds-icons-checkbox\" viewBox=\"0 0 24 24\"><path d=\"M17.03 9.53l-6 6a.748.748 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47 5.47-5.47a.75.75 0 1 1 1.06 1.06M20.25 3H3.75a.75.75 0 0 0-.75.75v16.5c0 .414.335.75.75.75h16.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-checkmark-circle\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1s11 4.935 11 11-4.935 11-11 11\"/><path d=\"M10.879 15.753a.998.998 0 0 1-.663-.252l-2.88-2.551a1 1 0 0 1 1.327-1.496l2.19 1.94 5.093-4.87a1 1 0 0 1 1.383 1.446l-5.76 5.506a1 1 0 0 1-.69.277\"/></g></symbol><symbol id=\"wds-icons-checkmark-small\" viewBox=\"0 0 18 18\"><path d=\"M6.333 15.2a.995.995 0 0 1-.663-.251L.336 10.223a1 1 0 0 1 1.327-1.497l4.644 4.115L16.31 3.278a.998.998 0 0 1 1.413.032.998.998 0 0 1-.032 1.413l-10.666 10.2a1 1 0 0 1-.69.277\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-checkmark\" viewBox=\"0 0 24 24\"><path d=\"M8.293 18.707a.997.997 0 0 0 1.414 0l13-13a.999.999 0 1 0-1.414-1.414L9 16.586l-6.293-6.293a.999.999 0 1 0-1.414 1.414l7 7z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-circle-plus\" viewBox=\"0 0 24 24\"><path d=\"M12 21.333c5.155 0 9.333-4.178 9.333-9.333S17.155 2.667 12 2.667 2.667 6.845 2.667 12 6.845 21.333 12 21.333zm1.333-10.666V6.66c0-.737-.597-1.327-1.333-1.327-.742 0-1.333.595-1.333 1.328v4.01H6.66c-.737 0-1.327.597-1.327 1.333 0 .743.595 1.334 1.328 1.334h4.01v4.006c0 .737.597 1.327 1.333 1.327.743 0 1.334-.596 1.334-1.33v-4.01h4.006c.737 0 1.327-.597 1.327-1.333 0-.743-.596-1.334-1.33-1.334h-4.01zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z\"/></symbol><symbol id=\"wds-icons-clipboard-small\" viewBox=\"0 0 19 18\"><path d=\"M7.3 12.7l-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L8 10.6l3.3-3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4 4c-.4.4-.9.5-1.4 0zM16 2h-3v2h2v11H3V4h2V2H2c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zM6 1h6v4H6V1z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-clipboard\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M14.382 10.264l-3.42 3.388-1.37-1.257a.937.937 0 0 0-1.352.085 1.017 1.017 0 0 0 .082 1.399l2.03 1.86a.937.937 0 0 0 1.295-.025l4.058-4.018a1.017 1.017 0 0 0 .03-1.401.934.934 0 0 0-1.353-.031\"/><path d=\"M19 20H5V4h3v2.497c0 .278.225.503.503.503H10a2 2 0 1 1 4 0h1.497A.503.503 0 0 0 16 6.497V4h3v16zm1.5-19h-17A1.5 1.5 0 0 0 2 2.5v19A1.5 1.5 0 0 0 3.5 23h17a1.5 1.5 0 0 0 1.5-1.5v-19A1.5 1.5 0 0 0 20.5 1z\"/></g></symbol><symbol id=\"wds-icons-community-small\" viewBox=\"0 0 18 18\"><path d=\"M6.378 3.176c0 1.203-.98 2.177-2.19 2.177A2.182 2.182 0 0 1 2 3.176C2 1.975 2.98 1 4.189 1s2.19.975 2.19 2.176zm9.583 0c0 1.203-.98 2.177-2.19 2.177a2.182 2.182 0 0 1-2.188-2.177c0-1.201.98-2.176 2.188-2.176 1.21 0 2.19.975 2.19 2.176zM7.243 6.26h-5.2v10.48h5.2v-1.71H5.488V7.995h1.755V6.26zm3.553 0H16v10.48h-5.204v-1.71h1.73V7.995h-1.73V6.26z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-community\" viewBox=\"0 0 24 24\"><path d=\"M9.004 5.489a2.495 2.495 0 0 1-2.503 2.489A2.495 2.495 0 0 1 4 5.488 2.495 2.495 0 0 1 6.501 3a2.496 2.496 0 0 1 2.503 2.489zm10.951 0a2.495 2.495 0 0 1-2.502 2.489 2.495 2.495 0 0 1-2.501-2.49A2.495 2.495 0 0 1 17.452 3a2.496 2.496 0 0 1 2.503 2.489zM9.992 9.016H4.049V21h5.943v-1.955H7.986v-8.046h2.006V9.016zm4.06 0H20V21h-5.948v-1.955h1.977v-8.046h-1.977V9.016z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-controls\" viewBox=\"0 0 24 24\"><path d=\"M12.494 6H22.5a.5.5 0 0 0 0-1H12.494a.5.5 0 0 0 0 1M1.5 13h11.994v1.482c0 .29.235.526.525.526h2.947c.29 0 .526-.236.526-.526v-3.956a.526.526 0 0 0-.526-.526h-2.947a.525.525 0 0 0-.525.526V12H1.5a.5.5 0 0 0 0 1m21 5.998H12.494a.5.5 0 0 0 0 1H22.5a.5.5 0 0 0 0-1M1.5 6h2.998v1.48c0 .29.235.526.526.526H7.97a.526.526 0 0 0 .526-.526V3.526A.525.525 0 0 0 7.97 3H5.024a.525.525 0 0 0-.526.526V5H1.5a.5.5 0 0 0 0 1m20.99 6h-2.003a.5.5 0 0 0 0 1h2.003a.5.5 0 0 0 0-1M7.97 17H5.023a.525.525 0 0 0-.525.526V19H1.5a.5.5 0 1 0 0 1h2.998v1.47c0 .29.235.526.525.526H7.97c.29 0 .526-.236.526-.526v-3.944A.526.526 0 0 0 7.97 17\"/></symbol><symbol id=\"wds-icons-cross\" viewBox=\"0 0 24 24\"><path d=\"M19.707 4.293a.999.999 0 0 0-1.414 0L12 10.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a.999.999 0 1 0 1.414 1.414L12 13.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414 12l6.293-6.293a.999.999 0 0 0 0-1.414\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-dashboard-small\" viewBox=\"0 0 18 18\"><path d=\"M9 3a6 6 0 0 1 6 6c0 .342-.035.676-.09 1.003l-4.928.01L8.428 6.13a.999.999 0 1 0-1.856.742l1.258 3.145-4.736.01A5.998 5.998 0 0 1 3 9a6 6 0 0 1 6-6m0-2a8 8 0 1 0 0 16A8 8 0 0 0 9 1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-document\" viewBox=\"0 0 24 24\"><path d=\"M11 10h2V8h-2v2zm-1 2h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm6-2a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zm0-3a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM9 17a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1zm0-3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1zm11 5.363a.646.646 0 0 1-.637.637H7.903c.063-.202.097-.415.097-.637V4h12v15.363zM5 20c-.471 0-1-.415-1-.637V14h2v5.363c0 .222-.529.637-1 .637zM21 2H7a1 1 0 0 0-1 1v9H3a1 1 0 0 0-1 1v6.363C2 20.872 3.584 22 5 22h14.363A2.64 2.64 0 0 0 22 19.363V3a1 1 0 0 0-1-1z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-dropdown-tiny\" viewBox=\"0 0 12 12\"><path d=\"M6 9l4-5H2\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-dropdown\" viewBox=\"0 0 24 24\"><path d=\"M7 8h10l-5 6z\"/></symbol><symbol id=\"wds-icons-embed\" viewBox=\"0 0 24 24\"><path d=\"M6.792 8.793L3.535 12.05l3.257 3.258a1.05 1.05 0 0 1-1.484 1.485l-4-4a1.05 1.05 0 0 1 0-1.485l4-4a1.049 1.049 0 1 1 1.484 1.485zm10.516 6.515l3.257-3.258-3.257-3.257a1.05 1.05 0 0 1 1.484-1.485l4 4c.41.41.41 1.075 0 1.485l-4 4a1.049 1.049 0 1 1-1.484-1.485zm-6.24 4.997a1.05 1.05 0 1 1-2.037-.512l4-16a1.05 1.05 0 1 1 2.041.51l-4 16z\"/></symbol><symbol id=\"wds-icons-explore-tiny\" viewBox=\"0 0 12 12\"><path d=\"M10.5 8.5a5.132 5.132 0 0 0-1.875-.357c-.675 0-1.35.143-1.875.357V3.143c0-.214.675-.714 1.875-.714s1.875.5 1.875.714V8.5zm-7.125-.357c-.675 0-1.35.143-1.875.357V3.143c0-.214.675-.714 1.875-.714s1.875.5 1.875.714V8.5a5.132 5.132 0 0 0-1.875-.357zM8.625 1C7.575 1 6.6 1.286 6 1.786 5.4 1.286 4.425 1 3.375 1 1.425 1 0 1.929 0 3.143v7.143c0 .428.3.714.75.714s.75-.286.75-.714c0-.215.675-.715 1.875-.715s1.875.5 1.875.715c0 .428.3.714.75.714s.75-.286.75-.714c0-.215.675-.715 1.875-.715s1.875.5 1.875.715c0 .428.3.714.75.714s.75-.286.75-.714V3.143C12 1.929 10.575 1 8.625 1z\"/></symbol><symbol id=\"wds-icons-eye-crossed-small\" viewBox=\"0 0 18 18\"><path d=\"M15.6 6.6l-8.2 8.2c.5.1 1.1.2 1.6.2 3.6 0 6.4-3.1 7.6-4.9.5-.7.5-1.6 0-2.3-.2-.3-.6-.7-1-1.2zm-.3-5.3L12.6 4c-1.1-.6-2.3-1-3.6-1-3.6 0-6.4 3.1-7.6 4.9-.5.7-.5 1.6 0 2.2.5.8 1.4 1.8 2.4 2.7l-2.5 2.5c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l14-14c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0zm-9 9C6.1 9.9 6 9.5 6 9c0-1.7 1.3-3 3-3 .5 0 .9.1 1.3.3l-4 4z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-eye-crossed\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M20.201 8.041l-4.228 4.228a3.981 3.981 0 0 1-3.703 3.703l-3.439 3.439A9.108 9.108 0 0 0 12 20c6.473 0 10.69-7.195 10.866-7.501a.996.996 0 0 0 .002-.995c-.081-.142-1.032-1.764-2.667-3.463zM5.647 17.624c.97-1.015 2.039-2.115 3.153-3.249A3.96 3.96 0 0 1 8 12c0-2.206 1.794-4 4-4a3.96 3.96 0 0 1 2.375.8 336.506 336.506 0 0 1 3.122-3.031C15.941 4.748 14.092 4 12 4 5.461 4 1.304 11.2 1.13 11.507a1 1 0 0 0 .002.989c.108.189 1.748 3.002 4.515 5.128z\"/><path d=\"M3 22a.999.999 0 0 1-.707-1.707l18-18a.999.999 0 1 1 1.414 1.414l-18 18A.997.997 0 0 1 3 22z\"/></g></symbol><symbol id=\"wds-icons-eye-small\" viewBox=\"0 0 18 18\"><path d=\"M9 6c1.705 0 3.009 1.3 3.009 3s-1.304 3-3.01 3c-1.704 0-3.008-1.3-3.008-3S7.295 6 9 6m0 9c3.61 0 6.42-3.1 7.624-4.9.5-.7.5-1.6 0-2.3C15.42 6.1 12.61 3 9 3 5.389 3 2.58 6.1 1.376 7.9c-.501.7-.501 1.6 0 2.2C2.58 11.9 5.389 15 9 15\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-eye\" viewBox=\"0 0 24 24\"><path d=\"M22.95 11.5c-.2-.3-4.4-7.5-10.9-7.5s-10.7 7.2-10.9 7.5c-.2.3-.2.7 0 1 .2.3 4.4 7.5 10.9 7.5s10.7-7.2 10.9-7.5c.1-.3.1-.7 0-1zM12.05 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-facebook\" viewBox=\"0 0 24 24\"><path d=\"M16.762 5.432h-1.786c-1.428 0-1.666.71-1.666 1.657v2.248h3.452l-.357 3.55h-2.857V22H9.976v-9.112H7v-3.55h2.976V6.733C9.976 3.775 11.762 2 14.381 2c1.19 0 2.262.118 2.619.118v3.314h-.238z\"/></symbol><symbol id=\"wds-icons-fandom-heart-small\" viewBox=\"0 0 18 18\"><path d=\"M12.77.13L9.44 3.5a.66.66 0 0 1-.94 0L5.16.17a.44.44 0 0 0-.63 0L.24 4.4a.77.77 0 0 0-.24.55V9a.77.77 0 0 0 .23.55l8.37 8.37a.44.44 0 0 0 .63 0L17.6 9.5a.77.77 0 0 0 .23-.5V5a.77.77 0 0 0-.22-.54L13.4.13a.44.44 0 0 0-.63 0zm-2.66 4.94a.22.22 0 0 1 0-.3L12 2.88a1.65 1.65 0 0 1 1.41-.47 1.73 1.73 0 0 1 1 .51l1.91 1.91a.22.22 0 0 1 0 .3L13.39 8a.22.22 0 0 1-.3 0zm1 5.24l-1.8 1.8a.22.22 0 0 1-.3 0l-6-6A1.66 1.66 0 0 1 3 3.73l1.8-1.8a.22.22 0 0 1 .3 0l6 6a1.66 1.66 0 0 1 .01 2.38zm5.37-3.11v1.29a.57.57 0 0 1-.16.4l-6.89 7a.51.51 0 0 1-.38.17.54.54 0 0 1-.4-.17l-.49-.46a.22.22 0 0 1 0-.31l8-8a.22.22 0 0 1 .33.09zm-8.63 6a.75.75 0 0 1-.2.54l-.39.36a.33.33 0 0 1-.45 0L1.56 8.92a.69.69 0 0 1-.21-.49v-1A.39.39 0 0 1 2 7.18l5.57 5.5a.81.81 0 0 1 .28.54z\"/></symbol><symbol id=\"wds-icons-fandom-heart\" viewBox=\"0 0 14 15\"><path fill-rule=\"evenodd\" d=\"M12.945 6.661c0 .117-.047.23-.13.314l-5.414 5.483a.4.4 0 0 1-.298.132.428.428 0 0 1-.311-.133l-.382-.362a.169.169 0 0 1-.004-.242l6.249-6.315a.17.17 0 0 1 .29.118v1.005zM6 10.796l-.31.28a.257.257 0 0 1-.353-.009l-4.12-4.064a.545.545 0 0 1-.163-.388v-.759a.31.31 0 0 1 .526-.219l4.374 4.315c.076.076.204.232.204.421a.59.59 0 0 1-.158.423zM2.318 2.93l1.417-1.416a.17.17 0 0 1 .24 0l4.747 4.741c.508.508.508 1.33 0 1.838L7.305 9.51a.17.17 0 0 1-.24 0L2.32 4.768a1.289 1.289 0 0 1-.38-.919c0-.348.135-.674.38-.918zm5.617.81l1.482-1.479a1.3 1.3 0 0 1 1.107-.366c.292.04.557.191.765.4l1.5 1.497a.169.169 0 0 1 0 .24L10.51 6.31a.17.17 0 0 1-.24 0L7.935 3.98a.169.169 0 0 1 0-.239zm5.89-.28L10.523.103a.35.35 0 0 0-.497 0l-2.62 2.641a.52.52 0 0 1-.736.002L4.05.133A.35.35 0 0 0 3.555.13L.181 3.452A.605.605 0 0 0 0 3.884v3.145c0 .16.064.315.178.429l6.578 6.566a.35.35 0 0 0 .494 0l6.572-6.566A.606.606 0 0 0 14 7.029V3.885a.606.606 0 0 0-.174-.425z\"/></symbol><symbol id=\"wds-icons-flag\" viewBox=\"0 0 24 24\"><path d=\"M1.487 5.166a.973.973 0 0 0-.356 1.33l9.247 16.017a.972.972 0 0 0 1.33.357.973.973 0 0 0 .356-1.33L2.817 5.522a.973.973 0 0 0-1.33-.356m9.481 9.39c1.172-2.065 2.62-2.225 4.537-2.225l.977.004c1.776 0 3.825-.138 5.676-1.796.352-.316.435-.835.199-1.245l-4.5-7.794a1.003 1.003 0 0 0-1.542-.236c-1.31 1.2-2.763 1.3-4.26 1.3l-1.146-.007c-1.984 0-4.218.223-5.878 2.728l5.567 9.643a1 1 0 0 0 .37-.372\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-fullscreen-off-small\" viewBox=\"0 0 18 18\"><path d=\"M3.751 2H6v5H1V4.75h2.751zm10.498 0H12v5h5V4.75h-2.751zM3.751 16H6v-5H1v2.25h2.751zm10.498 0H12v-5h5v2.25h-2.751z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-fullscreen-off\" viewBox=\"0 0 24 24\"><path d=\"M5.5 9H8V2H5v4H1v3h4.5zm13 0H16V2h3v4h4v3h-4.5zm-13 6H8v7H5v-4H1v-3h4.5zm13 0H16v7h3v-4h4v-3h-4.5z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-fullscreen-small\" viewBox=\"0 0 18 18\"><path d=\"M3.249 7H1V2h5v2.25H3.249zm11.502 0H17V2h-5v2.25h2.751zM3.249 11H1v5h5v-2.25H3.249zm11.502 0H17v5h-5v-2.25h2.751z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-fullscreen\" viewBox=\"0 0 24 24\"><path d=\"M21.5 22H23v-7h-3v4h-4v3h5.5zM23 3.5V9h-3V5h-4V2h7v1.5zm-22 17V15h3v4h4v3H1v-1.5zM2.5 2H1v7h3V5h4V2H2.5z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-gear-small\" viewBox=\"0 0 18 18\"><path d=\"M9 7.09a1.909 1.909 0 1 1 0 3.819A1.909 1.909 0 0 1 9 7.09m-4.702-.03a1.07 1.07 0 0 1-.99.667h-.672A.637.637 0 0 0 2 8.364v1.272c0 .352.285.637.636.637h.672c.436 0 .824.264.99.667l.006.013c.167.403.08.864-.229 1.172L3.6 12.6a.636.636 0 0 0 0 .9l.9.9a.636.636 0 0 0 .9 0l.475-.475a1.072 1.072 0 0 1 1.185-.223c.403.166.667.554.667.99v.672c0 .35.285.636.637.636h1.272a.637.637 0 0 0 .637-.636v-.672c0-.436.264-.824.667-.99l.013-.006a1.07 1.07 0 0 1 1.172.229l.475.475a.636.636 0 0 0 .9 0l.9-.9a.636.636 0 0 0 0-.9l-.475-.475a1.072 1.072 0 0 1-.229-1.172l.006-.013a1.07 1.07 0 0 1 .99-.667h.672A.637.637 0 0 0 16 9.636V8.364a.637.637 0 0 0-.636-.637h-.672a1.07 1.07 0 0 1-.996-.68 1.072 1.072 0 0 1 .229-1.172L14.4 5.4a.636.636 0 0 0 0-.9l-.9-.9a.636.636 0 0 0-.9 0l-.475.475c-.308.308-.77.396-1.172.229l-.013-.006a1.07 1.07 0 0 1-.667-.99v-.672A.637.637 0 0 0 9.636 2H8.364a.637.637 0 0 0-.637.636v.672a1.07 1.07 0 0 1-.68.996 1.07 1.07 0 0 1-1.172-.229L5.4 3.6a.636.636 0 0 0-.9 0l-.9.9a.636.636 0 0 0 0 .9l.475.475a1.072 1.072 0 0 1 .223 1.185\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-gear\" viewBox=\"0 0 24 24\"><path d=\"M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-7.389-.049A1.683 1.683 0 0 1 3.055 10H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.055a1.683 1.683 0 0 1 1.565 1.069 1.684 1.684 0 0 1-.359 1.842l-.746.746a.999.999 0 0 0 0 1.414l1.414 1.414a.999.999 0 0 0 1.414 0l.746-.746a1.684 1.684 0 0 1 1.862-.35c.633.26 1.049.871 1.049 1.556V22a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.055a1.683 1.683 0 0 1 1.069-1.565 1.684 1.684 0 0 1 1.842.359l.746.746a.999.999 0 0 0 1.414 0l1.414-1.414a.999.999 0 0 0 0-1.414l-.746-.746a1.684 1.684 0 0 1-.35-1.862A1.683 1.683 0 0 1 20.945 14H22a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1.055a1.683 1.683 0 0 1-1.565-1.069 1.684 1.684 0 0 1 .359-1.842l.746-.746a.999.999 0 0 0 0-1.414l-1.414-1.414a.999.999 0 0 0-1.414 0l-.746.746a1.684 1.684 0 0 1-1.862.35A1.683 1.683 0 0 1 14 3.055V2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1.055A1.683 1.683 0 0 1 8.931 4.62a1.684 1.684 0 0 1-1.842-.359l-.746-.746a.999.999 0 0 0-1.414 0L3.515 4.929a.999.999 0 0 0 0 1.414l.746.746a1.684 1.684 0 0 1 .35 1.862\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-gift\" viewBox=\"0 0 24 24\"><path d=\"M23 4h-4.2c.1-.3.2-.6.2-1 0-1.7-1.3-3-3-3-2 0-3.2 1.3-4 2.5C11.2 1.3 10 0 8 0 6.3 0 5 1.3 5 3c0 .4.1.7.2 1H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zm-7-2c.6 0 1 .4 1 1s-.4 1-1 1h-2.5c.4-.9 1.3-2 2.5-2zM7 3c0-.6.4-1 1-1 1.2 0 2.1 1.1 2.5 2H8c-.6 0-1-.4-1-1zm4 7H3c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h8V10zm10 0h-8v14h8c.6 0 1-.4 1-1V11c0-.6-.4-1-1-1z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-googleplus\" viewBox=\"0 0 24 24\"><path d=\"M21.146 11.163V8.564h-1.844v2.6h-2.655v1.856h2.655v2.673h1.844V13.02h2.58v-1.857h-2.58zm-13.422-.148v2.97s2.862-.004 4.027-.004c-.631 1.926-1.612 2.974-4.027 2.974-2.444 0-4.35-1.994-4.35-4.455 0-2.46 1.906-4.455 4.35-4.455 1.292 0 2.127.457 2.892 1.094.613-.617.561-.705 2.12-2.187A7.393 7.393 0 0 0 7.724 5C3.611 5 .276 8.358.276 12.5c0 4.142 3.335 7.5 7.448 7.5 6.149 0 7.652-5.391 7.153-8.985H7.724z\"/></symbol><symbol id=\"wds-icons-grid\" viewBox=\"0 0 24 24\"><path d=\"M22.234 18h-3.467a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467a.766.766 0 0 0 .766-.766v-3.468a.766.766 0 0 0-.766-.766m-8.5 0h-3.467a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467a.766.766 0 0 0 .766-.766v-3.468a.766.766 0 0 0-.766-.766m-8.5 0H1.767a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467A.766.766 0 0 0 6 22.234v-3.468A.766.766 0 0 0 5.234 18m17-8.5h-3.467a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467a.766.766 0 0 0 .766-.766v-3.468a.766.766 0 0 0-.766-.766m-8.5 0h-3.467a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467a.766.766 0 0 0 .766-.766v-3.468a.766.766 0 0 0-.766-.766m-8.5 0H1.767a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467A.766.766 0 0 0 6 13.734v-3.468a.766.766 0 0 0-.766-.766m17-8.5h-3.467a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467A.766.766 0 0 0 23 5.234V1.766A.766.766 0 0 0 22.234 1m-8.5 0h-3.467a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467a.766.766 0 0 0 .766-.766V1.766A.766.766 0 0 0 13.734 1M6 1.766v3.468A.766.766 0 0 1 5.234 6H1.767A.766.766 0 0 1 1 5.234V1.766C1 1.343 1.343 1 1.767 1h3.467c.423 0 .766.343.766.766\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-help\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M6.507 2.193L5.093 3.607l4.4 4.4 1.414-1.414zm.086 8.714l1.414-1.414-4.4-4.4-1.414 1.414zm15.214-4.4l-1.414-1.414-4.4 4.4 1.414 1.414zm-8.714.086l1.414 1.414 4.4-4.4-1.414-1.414zm4.4 15.214l1.414-1.414-4.4-4.4-1.414 1.414zm-.086-8.714l-1.414 1.414 4.4 4.4 1.414-1.414zm-15.214 4.4l1.414 1.414 4.4-4.4-1.414-1.414zm8.714-.086l-1.414-1.414-4.4 4.4 1.414 1.414z\"/><path d=\"M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z\"/><path d=\"M18 12a6 6 0 1 0-12 0 6 6 0 0 0 12 0zM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z\"/></g></symbol><symbol id=\"wds-icons-hourglass\" viewBox=\"0 0 24 24\"><path d=\"M21.6 2c.2 0 .4-.2.4-.4V.4c0-.2-.2-.4-.4-.4H2.4c-.2 0-.4.2-.4.4v1.2c0 .2.2.4.4.4H4c0 4.1 1.4 7.8 3.6 10C5.4 14.2 4 17.9 4 22H2.4c-.2 0-.4.2-.4.4v1.1c0 .3.2.5.4.5h19.1c.2 0 .4-.2.4-.4v-1.1c0-.2-.2-.4-.4-.4H20c0-4.1-1.4-7.8-3.6-10C18.6 9.8 20 6.1 20 2h1.6zM18 22H6c0-1.4.2-2.8.5-4h10.9c.4 1.2.6 2.6.6 4zm-3.7-10.8l-1.1.8 1.2.8c1 .7 1.8 1.8 2.4 3.2H7.3c.6-1.4 1.4-2.5 2.4-3.2l1.2-.8-1.2-.8C7.5 9.6 6 5.9 6 2h12c0 3.9-1.5 7.6-3.7 9.2z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-house-small\" viewBox=\"0 0 18 18\"><path d=\"M11.955 16.925h2c.6 0 1-.4 1-1v-7h1c.3 0 .6-.1.8-.3.4-.4.3-1-.1-1.4l-7-6c-.4-.3-.9-.3-1.3 0l-7 6c-.4.4-.5 1-.1 1.4.1.2.4.3.7.3h1v7c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h4v3c0 .6.4 1 1 1z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-house\" viewBox=\"0 0 24 24\"><path d=\"M22.664 10.126L12.662 1.25a.996.996 0 0 0-1.327.005l-10.003 9a.998.998 0 0 0-.264 1.104c.148.386.518.64.93.64h.005l1.989-.012V22c0 .553.446 1 .997 1H7.98a.998.998 0 0 0 .997-1v-4.5h5.983V22c0 .553.446 1 .997 1h2.992a.998.998 0 0 0 .997-1V11.888l2.062-.013a1 1 0 0 0 .655-1.75\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-image-add\" viewBox=\"0 0 24 24\"><path d=\"M9.5 5.75a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 9.5 5.75\"/><path d=\"M16.688 20a3.316 3.316 0 0 1-3.314-3.313 3.316 3.316 0 0 1 3.313-3.312A3.316 3.316 0 0 1 20 16.687 3.316 3.316 0 0 1 16.687 20zm-6.558-7.735l-3.378-2.027a1 1 0 0 0-1.22.15L4 11.919V4h15v6.036l-3.303-2.202a1 1 0 0 0-1.26.125l-4.307 4.306zM21 13.616V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h10.623c.867.62 1.917 1 3.063 1A5.318 5.318 0 0 0 22 16.687a5.258 5.258 0 0 0-1-3.071z\"/><path d=\"M18.413 16.188h-1.225v-1.225a.5.5 0 0 0-1 0v1.225h-1.225a.5.5 0 1 0 0 1h1.225v1.225a.5.5 0 0 0 1 0v-1.226h1.225a.5.5 0 0 0 0-1\"/></symbol><symbol id=\"wds-icons-image-remove\" viewBox=\"0 0 24 24\"><path d=\"M9.5 5.75a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 9.5 5.75\"/><path d=\"M16.688 20a3.316 3.316 0 0 1-3.314-3.312 3.316 3.316 0 0 1 3.313-3.313A3.316 3.316 0 0 1 20 16.688 3.316 3.316 0 0 1 16.687 20zm-6.558-7.735l-3.378-2.027a1 1 0 0 0-1.22.15L4 11.919V4h15v6.036l-3.303-2.202a1 1 0 0 0-1.26.125l-4.307 4.306zM21 13.616V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h10.623c.867.62 1.917 1 3.063 1A5.318 5.318 0 0 0 22 16.688a5.258 5.258 0 0 0-1-3.072z\"/><path d=\"M18.45 17.125H15a.5.5 0 1 1 0-1h3.45a.5.5 0 0 1 0 1\"/></symbol><symbol id=\"wds-icons-image\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M3 4h18v8.737l-3.83-3.191a.916.916 0 0 0-1.282.108l-4.924 5.744-3.891-3.114a.92.92 0 0 0-1.146 0L3 14.626V4zm19-2H2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z\"/><path d=\"M9 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2\"/></g></symbol><symbol id=\"wds-icons-information\" viewBox=\"0 0 24 24\"><path d=\"M14 18h-4a1 1 0 1 1 0-2h1v-4h-1a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1v5h1a1 1 0 1 1 0 2zM11 6a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0V6zm1-6C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-instagram\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12 2.162c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.014 7.052.072c-1.95.089-3.663.567-5.038 1.942C.639 3.389.161 5.102.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.089 1.95.567 3.663 1.942 5.038 1.375 1.375 3.088 1.853 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.95-.089 3.663-.567 5.038-1.942 1.375-1.375 1.853-3.088 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.089-1.95-.567-3.663-1.942-5.038C20.611.639 18.898.161 16.948.072 15.668.014 15.259 0 12 0z\"/><path d=\"M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z\"/><circle cx=\"18.406\" cy=\"5.594\" r=\"1.44\"/></g></symbol><symbol id=\"wds-icons-italics-small\" viewBox=\"0 0 18 18\"><path d=\"M13 3V1H7v2h1.27a.5.5 0 0 1 .496.57l-1.51 10.571a1 1 0 0 1-.99.859H5v2h6v-2H9.73a.5.5 0 0 1-.496-.57l1.51-10.571a1 1 0 0 1 .99-.859H13z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-italics\" viewBox=\"0 0 24 24\"><path d=\"M6 24l.166-1.625 2.42-.232c.464-.032.53-.165.596-.663l2.652-18.96c.066-.498.034-.63-.43-.664l-2.32-.232L9.282 0h8.885l-.2 1.624-2.518.265c-.498.067-.532.133-.598.63l-2.685 18.929c-.066.53-.066.596.43.663l2.454.264L14.884 24H6z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-line\" viewBox=\"0 0 24 24\"><path d=\"M21.727 10.908c0-4.37-4.428-7.925-9.87-7.925-5.441 0-9.869 3.555-9.869 7.925 0 3.918 3.511 7.2 8.254 7.82.321.068.759.21.87.481.1.247.065.633.031.883l-.14.836c-.043.247-.199.966.855.527 1.053-.44 5.683-3.312 7.753-5.67 1.43-1.553 2.116-3.128 2.116-4.877zm-13.732 2.6H6.033a.515.515 0 0 1-.517-.512V9.115c0-.282.232-.512.517-.512.286 0 .518.23.518.512v3.369h1.444c.285 0 .517.23.517.512a.515.515 0 0 1-.517.512zm2.028-.512a.515.515 0 0 1-.518.512.515.515 0 0 1-.517-.512V9.115c0-.282.232-.512.517-.512.286 0 .518.23.518.512v3.88zm4.72 0a.51.51 0 0 1-.518.512.523.523 0 0 1-.414-.205l-2.01-2.708v2.4a.515.515 0 0 1-.517.513.515.515 0 0 1-.517-.512V9.115a.512.512 0 0 1 .518-.512.52.52 0 0 1 .413.205l2.01 2.708V9.115c0-.282.232-.512.518-.512.285 0 .517.23.517.512v3.88zm3.173-2.453c.285 0 .518.23.518.513a.516.516 0 0 1-.518.512h-1.443v.916h1.443c.285 0 .518.23.518.512a.516.516 0 0 1-.518.512h-1.961a.516.516 0 0 1-.517-.512V9.115c0-.282.232-.512.517-.512h1.961c.285 0 .518.23.518.512a.515.515 0 0 1-.518.512h-1.443v.916h1.443z\"/></symbol><symbol id=\"wds-icons-link\" viewBox=\"0 0 24 24\"><path d=\"M5 17h5c2.757 0 5-2.243 5-5a1 1 0 1 0-2 0c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3s1.346-3 3-3h2a1 1 0 1 0 0-2H5c-2.757 0-5 2.243-5 5s2.243 5 5 5zM19 7h-5c-2.757 0-5 2.243-5 5a1 1 0 1 0 2 0c0-1.654 1.346-3 3-3h5c1.654 0 3 1.346 3 3s-1.346 3-3 3h-2a1 1 0 1 0 0 2h2c2.757 0 5-2.243 5-5s-2.243-5-5-5z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-linkedin\" viewBox=\"0 0 24 24\"><path d=\"M.351 24h4.982V7.93H.351zM18.035 7.509c-2.386 0-4.07 1.333-4.702 2.596h-.07V7.93H8.491V24h4.983v-7.93c0-2.105.421-4.14 3.017-4.14 2.597 0 2.597 2.386 2.597 4.28V24H24v-8.842c0-4.351-.912-7.65-5.965-7.65M2.877 0A2.845 2.845 0 0 0 0 2.877a2.845 2.845 0 0 0 2.877 2.877c1.614 0 2.877-1.333 2.877-2.877A2.845 2.845 0 0 0 2.877 0\"/></symbol><symbol id=\"wds-icons-loading\" viewBox=\"0 0 24 24\"><path d=\"M15.01 3.516A9 9 0 1 0 12 21h.36v-1.152H12A7.848 7.848 0 1 1 19.848 12v.36H21V12a9.003 9.003 0 0 0-5.99-8.484zm-.24.678A8.283 8.283 0 0 1 20.28 12l.36-.36h-.432l.36.36a8.57 8.57 0 0 0-5.702-8.077A8.568 8.568 0 1 0 12 20.568l-.36-.36v.432l.36-.36a8.28 8.28 0 1 1 2.77-16.086z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-lock-small\" viewBox=\"0 0 18 18\"><path d=\"M11 6H7V5c0-1.1.9-2 2-2s2 .9 2 2v1zm-1 6.7V14H8v-1.3c-.6-.3-1-1-1-1.7 0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7zM9 1C6.8 1 5 2.8 5 5v1H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1h-2V5c0-2.2-1.8-4-4-4z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-lock\" viewBox=\"0 0 24 24\"><path d=\"M16 8H8V6c0-2.206 1.794-4 4-4s4 1.794 4 4v2zm-3 9.816V19a1 1 0 0 1-2 0v-1.184A2.996 2.996 0 0 1 9 15c0-1.654 1.346-3 3-3s3 1.346 3 3a2.996 2.996 0 0 1-2 2.816zM12 0C8.691 0 6 2.691 6 6v2H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2V6c0-3.309-2.691-6-6-6z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-magnifying-glass\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M21.747 20.524l-4.872-4.871a.864.864 0 1 0-1.222 1.222l4.871 4.872a.864.864 0 1 0 1.223-1.223z\"/><path d=\"M3.848 10.763a6.915 6.915 0 0 1 6.915-6.915 6.915 6.915 0 0 1 6.915 6.915 6.915 6.915 0 0 1-6.915 6.915 6.915 6.915 0 0 1-6.915-6.915zm-1.729 0a8.643 8.643 0 0 0 8.644 8.644 8.643 8.643 0 0 0 8.644-8.644 8.643 8.643 0 0 0-8.644-8.644 8.643 8.643 0 0 0-8.644 8.644z\"/></g></symbol><symbol id=\"wds-icons-mail\" viewBox=\"0 0 24 24\"><path d=\"M23 2H1a1 1 0 0 0-1 1v3a1 1 0 0 0 .521.878l11 6a1.003 1.003 0 0 0 .958 0l11-6A1 1 0 0 0 24 6V3a1 1 0 0 0-1-1zM12 15c-.498 0-.994-.126-1.433-.364L0 8.872V21a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V8.872l-10.563 5.762c-.443.24-.939.366-1.437.366z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-map\" viewBox=\"0 0 24 24\"><path d=\"M22.725 1.039L17 2.675v20.08l6.275-1.793A1 1 0 0 0 24 20V2a1 1 0 0 0-1.275-.961M15 2.72l-6-1.5v20.06l6 1.5zM1 23a.993.993 0 0 0 .275-.039L7 21.326V1.246L.725 3.039A1 1 0 0 0 0 4v18a.998.998 0 0 0 1 1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-megaphone\" viewBox=\"0 0 18 18\"><path d=\"M3.9 4.5C1.8 4.5 0 6.3 0 8.4s1.8 3.9 3.9 3.9H4l3 4.9c.4.8 1.5 1 2.4.6.8-.4 1-1.5.6-2.4l-1.9-3h2.1l7.9 4.5V0l-7.9 4.5H3.9z\"/></symbol><symbol id=\"wds-icons-meneame\" viewBox=\"0 0 24 24\"><path d=\"M20.494 7.792c-1.427 1.37-4.004 1.33-4.962 3.181-.818 2.195 1.107 5.702 1.911 7.702.545 1.033-4.253 2.03-3.666 2.285 3.385-.036 4.83-1.206 4.423-2.641-.389-1.373-2.144-4.114-2.144-6.305.05-1.654 2.004-2.162 3.263-2.836 1.463-.62 2.831-2.006 2.453-3.63-.016-.574-1.07-2.482-.64-1.003.235 1.092.347 2.44-.638 3.247\"/><path d=\"M16.091 5.326c-1.842-.9-3.89-1.444-6.032-.97-1.151.201-2.507.797-3.279 1.794-1.011 1.144-1.05 2.807-.387 4.115.515 1.007 1.299 2.128 2.569 2.296 1.092.155 2.292.015 3.22-.582-1.103.18-2.381.55-3.372-.147-1.66-1.005-2.467-3.287-1.46-4.952.81-1.452 2.441-1.86 4.167-1.932 2.301-.096 4.507 1.147 5.353 1.45.815.242 1.985.55 2.565-.27.339-.38.203-1.429-.072-1.526.08.735-.49 1.659-1.376 1.418-.662-.148-1.27-.449-1.896-.694M3.742 11.824c-1.067 1.592-2.042 3.457-1.67 5.398.342 2.03 2.416 3.46 4.478 3.715 2.117.234 4.23.174 6.352.03.358-.328-1.732-.319-2.612-.439-2.008-.215-4.186-.255-5.907-1.383-1.604-1.136-1.814-3.365-1.045-5.007.644-1.55 1.607-3.048 2.619-4.343-.79.621-1.519 1.084-2.215 2.029\"/><path d=\"M9.014 16.833c1.251.091 3.326-.029 4.301.616.35.497-.3 3.247-.076 3.564.498.139 1.067-3.222.752-4.057-.239-.637-4.479-.298-4.977-.123\"/></symbol><symbol id=\"wds-icons-menu-control-small\" viewBox=\"0 0 18 18\"><path d=\"M9 14a.997.997 0 0 1-.707-.293l-7-7a.999.999 0 1 1 1.414-1.414L9 11.586l6.293-6.293a.999.999 0 1 1 1.414 1.414l-7 7A.997.997 0 0 1 9 14\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-menu-control-tiny\" viewBox=\"0 0 12 12\"><path d=\"M6.003 10.002a.997.997 0 0 1-.707-.293L.293 4.707a.999.999 0 1 1 1.414-1.414l4.296 4.295 4.293-4.293A.999.999 0 1 1 11.71 4.71l-5 5a.997.997 0 0 1-.707.293\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-menu-control\" viewBox=\"0 0 24 24\"><path d=\"M21.293 6.293L12 15.586 2.707 6.293a.999.999 0 1 0-1.414 1.414l10 10a.997.997 0 0 0 1.414 0l10-10a.999.999 0 1 0-1.414-1.414\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-menu\" viewBox=\"0 0 24 24\"><path d=\"M23 11H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2zm0-7H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2zm0 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-more\" viewBox=\"0 0 24 24\"><path d=\"M12 21a2 2 0 1 0 .001-3.999A2 2 0 0 0 12 21m0-7a2 2 0 1 0 .001-3.999A2 2 0 0 0 12 14m0-7a2 2 0 1 0 .001-3.999A2 2 0 0 0 12 7\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-nk\" viewBox=\"0 0 24 24\"><path d=\"M3.852 9.339c.573-.25 1.12-.505 1.68-.727 1.016-.403 2.066-.691 3.17-.714.331-.007.675.04.994.126.992.271 1.496.99 1.602 1.93.082.723.044 1.467-.01 2.197-.118 1.585-.278 3.167-.423 4.75-.09.976-.185 1.952-.268 2.93-.015.173-.082.236-.258.235-.877-.005-1.755-.008-2.632.002-.245.003-.275-.114-.256-.305.083-.86.161-1.718.24-2.577l.37-3.989c.047-.515.086-1.031.142-1.546.077-.7-.21-.987-.932-.911-.7.073-1.332.336-1.947.65-.421.214-.845.426-1.254.662a.467.467 0 0 0-.207.308c-.121 1.165-.226 2.332-.333 3.499-.12 1.293-.242 2.586-.352 3.88-.022.248-.115.337-.38.332-.803-.017-1.605-.006-2.408-.006-.356 0-.366-.002-.337-.337.14-1.61.285-3.22.428-4.83.119-1.34.24-2.678.354-4.017.032-.382.02-.383-.365-.385-.49-.003-.483-.002-.436-.478.053-.533.1-1.067.13-1.602.011-.22.091-.303.32-.299.578.011 1.157.003 1.735.004.982 0 1.362.28 1.633 1.218m9.826-3.941h-.861c0-.182-.012-.342.002-.5.049-.552.113-1.101.158-1.653.014-.176.089-.229.263-.228.83.007 1.661-.006 2.491.008.677.01 1.26.625 1.206 1.281-.12 1.455-.26 2.909-.389 4.363-.1 1.13-.193 2.26-.295 3.388-.103 1.138-.217 2.275-.32 3.413-.103 1.13-.196 2.26-.296 3.388-.031.353-.062.705-.113 1.055-.01.07-.112.181-.172.182-.97.01-1.94.004-2.91 0-.025 0-.05-.021-.113-.05l1.349-14.647m9.079 14.69c-.148.008-.238.017-.328.017-.905.001-1.81-.004-2.716.004-.2.002-.319-.054-.416-.236a942.803 942.803 0 0 0-3.025-5.618c-.08-.149-.078-.255.014-.395 1.215-1.842 2.422-3.687 3.64-5.527.06-.09.197-.182.3-.183 1.138-.013 2.276-.008 3.415-.007.044 0 .089.01.177.022-.072.112-.125.202-.186.287-1.297 1.799-2.592 3.599-3.897 5.393-.125.172-.137.296-.035.485.969 1.8 1.926 3.607 2.886 5.412.051.096.096.194.171.346\"/></symbol><symbol id=\"wds-icons-note\" viewBox=\"0 0 24 24\"><path d=\"M23 1H1a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h6.52l3.699 4.625a1 1 0 0 0 1.562 0L16.48 18H23a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-numbered-list-small\" viewBox=\"0 0 18 18\"><path d=\"M6 2h11v2H6zm0 6h11v2H6zm0 6h11v2H6zM1.368 5v-.549l.598-.048c.097-.007.11-.035.11-.139V1.84c0-.083-.02-.125-.09-.145l-.604-.126L1.46 1h1.666v3.264c0 .111.007.132.111.139l.57.048V5H1.368zm-.321 6v-.63l.907-.886c.684-.663.975-.934.975-1.32 0-.25-.122-.433-.48-.433-.373 0-.529.122-.529.603L1 8.252C1.007 7.176 1.826 7 2.536 7c1.05 0 1.422.447 1.422 1.083 0 .636-.44 1.056-.934 1.53l-.765.73h.995c.067 0 .095-.013.108-.08l.095-.535h.717V11H1.047zm2.297 3.682c.567.087.88.427.88 1.026 0 .88-.66 1.292-1.612 1.292-.673 0-1.272-.24-1.612-.613l.533-.586c.253.247.533.44.999.44.373 0 .693-.133.693-.6 0-.406-.253-.573-.666-.573a2.73 2.73 0 0 0-.493.047v-.666l.326-.04c.48-.06.74-.293.74-.72 0-.252-.114-.459-.487-.459-.36 0-.532.12-.532.593l-.913-.08c0-1.052.793-1.232 1.492-1.232 1.026 0 1.419.393 1.419 1.106 0 .56-.347.912-.767 1.039v.026z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-numbered-list\" viewBox=\"0 0 24 24\"><path d=\"M23 5H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 8H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 8H9a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zM1.56 6.593V5.88l.774-.063c.126-.008.144-.045.144-.18V2.498c0-.108-.027-.163-.117-.19l-.783-.161.099-.739h2.16V5.64c0 .144.01.17.144.18l.739.062v.712H1.56zm-.469 8.067v-.837l1.207-1.18c.91-.882 1.296-1.241 1.296-1.755 0-.333-.162-.576-.639-.576-.495 0-.702.162-.702.802l-1.225-.109c.01-1.431 1.099-1.665 2.044-1.665 1.395 0 1.89.594 1.89 1.44 0 .847-.584 1.405-1.242 2.035l-1.017.972h1.324c.09 0 .126-.018.144-.108l.126-.711h.954v1.692H1.09zm3.039 5.241c.765.117 1.188.576 1.188 1.386 0 1.189-.89 1.747-2.178 1.747-.91 0-1.72-.324-2.18-.828l.721-.792c.342.333.72.594 1.35.594.505 0 .937-.18.937-.81 0-.55-.342-.775-.9-.775a3.69 3.69 0 0 0-.667.063v-.9l.442-.054c.648-.081.999-.396.999-.972 0-.342-.153-.621-.658-.621-.485 0-.72.162-.72.801l-1.233-.108c0-1.423 1.072-1.666 2.017-1.666 1.386 0 1.917.531 1.917 1.495 0 .756-.468 1.233-1.035 1.404v.036z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-odnoklassniki\" viewBox=\"0 0 24 24\"><path d=\"M14.289 16.068c.33.319.618.598.909.875.644.613 1.296 1.22 1.934 1.84.67.65.694 1.557.071 2.176-.629.624-1.624.635-2.294-.01-.934-.9-1.844-1.823-2.794-2.764-.16.145-.26.23-.353.32-.812.778-1.625 1.554-2.432 2.337-.39.378-.837.626-1.408.576-.645-.056-1.113-.372-1.354-.953-.248-.598-.13-1.153.33-1.61.673-.672 1.372-1.318 2.061-1.974.267-.254.538-.503.863-.806-.214-.065-.356-.095-.486-.15-.806-.334-1.635-.629-2.407-1.024-.876-.449-1.114-1.383-.634-2.14.466-.734 1.412-.933 2.247-.475 2.342 1.285 4.684 1.284 7.025-.006.828-.456 1.78-.247 2.243.49.468.747.235 1.677-.618 2.116-.772.398-1.598.697-2.403 1.034-.135.057-.283.085-.5.148zM6.695 7.176c.01-2.858 2.419-5.131 5.422-5.118 2.925.013 5.31 2.344 5.29 5.171-.021 2.865-2.414 5.103-5.441 5.089-2.913-.013-5.282-2.325-5.271-5.142zm5.364-2.03c-1.191-.003-2.158.901-2.175 2.035-.017 1.114 1.009 2.1 2.177 2.093 1.164-.009 2.148-.957 2.154-2.077.005-1.123-.967-2.048-2.156-2.051z\"/></symbol><symbol id=\"wds-icons-out-arrow-tiny\" viewBox=\"0 0 12 12\"><path d=\"M9.75 6.75A.75.75 0 0 0 9 7.5v3H1.5V3h3a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75\"/><path d=\"M11.5 0H8a.5.5 0 0 0-.354.854l1.22 1.219-3.771 3.772a.749.749 0 1 0 1.06 1.06l3.772-3.771 1.219 1.22a.504.504 0 0 0 .545.108A.5.5 0 0 0 12 4V.5a.5.5 0 0 0-.5-.5\"/></symbol><symbol id=\"wds-icons-pages-small\" viewBox=\"0 0 18 18\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M13 0H4a1 1 0 1 0 0 2h8v10a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1z\"/><path d=\"M2 14h6V6H2v8zM9 4H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z\"/></g></symbol><symbol id=\"wds-icons-pages\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M4 21.053h13v-15H4v15zm14-17H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-17a1 1 0 0 0-1-1z\"/><path d=\"M21 1H5.505a1 1 0 1 0 0 2H20v17.229a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1\"/><path d=\"M7 10.042h7a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2m0 4.011h6a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2m0 4h3a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2\"/></g></symbol><symbol id=\"wds-icons-paragraph\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M13.93 12.888v6.79c0 .723.592 1.322 1.323 1.322a1.32 1.32 0 0 0 1.324-1.323V5.647h1.34c.72 0 1.32-.593 1.32-1.324 0-.736-.592-1.323-1.32-1.323h-9.26v.005h-.023v.007C6.044 3.19 4 5.337 4 7.96s2.045 4.77 4.634 4.95v6.767c0 .724.593 1.323 1.324 1.323a1.32 1.32 0 0 0 1.324-1.323V5.64h2.648v7.248z\"/></symbol><symbol id=\"wds-icons-pause-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><rect width=\"5\" height=\"16\" rx=\"1\" x=\"2\" y=\"1\"/><rect x=\"11\" width=\"5\" height=\"16\" rx=\"1\" y=\"1\"/></g></symbol><symbol id=\"wds-icons-pause\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><rect width=\"7\" height=\"22\" rx=\"1\" x=\"3\" y=\"1\"/><rect x=\"14\" width=\"7\" height=\"22\" rx=\"1\" y=\"1\"/></g></symbol><symbol id=\"wds-icons-pencil-small\" viewBox=\"0 0 18 18\"><path d=\"M9.1 4.5l-7.8 7.8c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1h3c.3 0 .5-.1.7-.3l7.8-7.8-4.4-4.4zm7.6-.2l-3-3c-.4-.4-1-.4-1.4 0l-1.8 1.8 4.4 4.4 1.8-1.8c.4-.4.4-1 0-1.4z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-pencil\" viewBox=\"0 0 24 24\"><path d=\"M1.293 16.293A1 1 0 0 0 1 17v5a1 1 0 0 0 1 1h5c.265 0 .52-.105.707-.293L19 11.414 12.586 5 1.293 16.293zm21.414-10l-5-5a.999.999 0 0 0-1.414 0L14 3.586 20.414 10l2.293-2.293a.999.999 0 0 0 0-1.414z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-pin-small\" viewBox=\"0 0 18 18\"><path fill-rule=\"evenodd\" d=\"M5.617 2v1.23h.618v4.917L5 9.377v1.229h2.136L8.573 16h.261l1.438-5.394h2.135v-1.23l-1.234-1.23V3.23h.617V2z\"/></symbol><symbol id=\"wds-icons-play-triangle-small\" viewBox=\"0 0 18 18\"><path d=\"M14.767 9.437L3.858 16.903a.553.553 0 0 1-.565.037.531.531 0 0 1-.293-.473V1.533c0-.199.113-.381.293-.473a.557.557 0 0 1 .565.036l10.91 7.467A.53.53 0 0 1 15 9a.53.53 0 0 1-.233.437z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-play-triangle\" viewBox=\"0 0 24 24\"><path d=\"M19.69 12.6L5.143 22.867a.722.722 0 0 1-.753.05.733.733 0 0 1-.391-.65V1.733c0-.274.15-.524.391-.65a.724.724 0 0 1 .753.05l14.545 10.266a.734.734 0 0 1 0 1.201z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-play\" viewBox=\"0 0 24 24\"><path d=\"M16.555 12.832l-6 4A1.002 1.002 0 0 1 9 16V8a1 1 0 0 1 1.555-.832l6 4a.999.999 0 0 1 0 1.664M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c6.618 0 12-5.383 12-12S18.618 0 12 0\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-plus\" viewBox=\"0 0 24 24\"><path d=\"M11 13v9a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9V2a1 1 0 1 0-2 0v9H2a1 1 0 1 0 0 2h9z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-question\" viewBox=\"0 0 24 24\"><path d=\"M13 12.868V13a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1c1.065 0 2-.934 2-2 0-1.065-.935-2-2-2-.812 0-1.592.672-1.876 1.322a1 1 0 1 1-1.832-.801C8.93 6.061 10.489 5 12 5c2.168 0 4 1.832 4 4 0 1.825-1.297 3.411-3 3.868zM13 18a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0v1zM12 0C5.383 0 0 5.384 0 12c0 6.617 5.383 12 12 12s12-5.383 12-12c0-6.616-5.383-12-12-12z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-quote-small\" viewBox=\"0 0 18 18\"><path d=\"M7.287 10.334c-1.113-1.03-2.939-1.248-4.257-.22-.113-.929-.024-1.781.291-2.544.966-2.335 3.684-3.147 3.713-3.155a.72.72 0 0 0 .497-.892.732.732 0 0 0-.901-.496 7.51 7.51 0 0 0-1.208.493c-1.637.786-4.144 2.662-4.392 6.765a9.57 9.57 0 0 0-.022.48c0 .062-.008.117-.008.179v.053c0 .182.007.363.02.543l.002.024c.012.17.029.337.052.503l.008.057C1.395 14.276 2.633 16 4.94 16a3.304 3.304 0 0 0 2.853-1.6c.72-1.189.623-3.023-.505-4.066zm8.746 0c-1.114-1.03-2.94-1.248-4.258-.22-.112-.929-.023-1.781.292-2.544.965-2.335 3.684-3.147 3.712-3.155a.72.72 0 0 0 .497-.892.732.732 0 0 0-.9-.496 7.51 7.51 0 0 0-1.209.493c-1.636.786-4.143 2.662-4.392 6.765a9.57 9.57 0 0 0-.021.48c-.001.062-.008.117-.008.179v.053c0 .182.007.363.02.543l.001.024c.012.17.03.337.052.503l.009.057C10.14 14.276 11.378 16 13.685 16a3.304 3.304 0 0 0 2.853-1.6c.72-1.189.622-3.023-.505-4.066z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-quote\" viewBox=\"0 0 24 24\"><path d=\"M9.647 13.156c-1.532-1.427-4.042-1.728-5.856-.303-.154-1.287-.032-2.468.401-3.524C5.52 6.095 9.26 4.97 9.298 4.959a.999.999 0 0 0 .684-1.235 1.006 1.006 0 0 0-1.24-.686c-.071.02-.75.22-1.66.682-2.251 1.089-5.7 3.686-6.04 9.368-.018.22-.025.443-.031.666-.001.085-.011.16-.011.247l.001.038-.001.035c0 .253.01.504.027.752 0 .012.002.022.003.034.016.235.04.467.071.697.004.026.01.052.012.078.43 2.98 2.133 5.368 5.305 5.368 1.63 0 3.092-.833 3.924-2.217.989-1.645.856-4.185-.695-5.63zm12.028 0c-1.532-1.427-4.043-1.728-5.856-.303-.154-1.287-.032-2.468.401-3.524 1.328-3.234 5.067-4.358 5.106-4.37a.999.999 0 0 0 .684-1.235 1.006 1.006 0 0 0-1.24-.686c-.071.02-.75.22-1.661.682-2.25 1.089-5.698 3.686-6.04 9.368-.017.22-.024.443-.03.666-.001.085-.011.16-.011.247v.073c0 .253.01.504.027.752 0 .012.002.022.003.034.016.235.04.467.071.697.004.026.01.052.012.078.43 2.98 2.133 5.368 5.304 5.368a4.537 4.537 0 0 0 3.924-2.217c.99-1.645.856-4.185-.694-5.63z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-qzone\" viewBox=\"0 0 24 24\"><path d=\"M21.602 9.72c-1.418 1.324-2.836 2.65-4.257 3.971-.2.185-.313.386-.236.66l.09.54c-.758.011-1.515-.025-2.273-.058-.796-.035-1.592-.082-2.388-.13-.513-.032-1.026-.076-1.538-.116-.076-.006-.154-.013-.21-.082.212-.176.432-.325.652-.475a687.562 687.562 0 0 0 5.657-3.907c.03-.022.082-.034.072-.081-.01-.048-.061-.038-.098-.044a25.625 25.625 0 0 0-3.692-.439 30.083 30.083 0 0 0-7.275.538c-.168.034-.334.077-.502.115a.253.253 0 0 0 .121.022c1.058.02 2.114.053 3.17.1 1.18.053 2.361.114 3.537.252.397.046.792.108 1.189.163.026.004.062.006.07.033.01.035-.023.054-.048.073l-.183.128a24252.936 24252.936 0 0 0-6.138 4.326c-.046.04-.037.067.02.077.074.01.148.015.223.024 1.24.143 2.488.22 3.737.246a32.84 32.84 0 0 0 3.954-.153 23.413 23.413 0 0 0 2.696-.42c.106-.024.065-.055.17-.082.107-.028.175-.053.175-.064v.002c0 .015.13.029.121.043a2.872 2.872 0 0 1-.914.496c-.27.096-.233.097-.166.376.002.007.027.014.03.02.002.026.009.055.014.08.086.474.177.947.265 1.42.06.32.126.639.188.958.026.25.086.493.13.74.08.442.164.884.242 1.328a.58.58 0 0 1-.003.22c-.048.206-.208.294-.42.246a1.126 1.126 0 0 1-.3-.13c-1.68-.97-3.363-1.937-5.042-2.91-.347-.2-.675-.197-1.02.003-1.687.976-3.376 1.946-5.065 2.92a1.054 1.054 0 0 1-.245.11c-.295.08-.533-.152-.466-.452.074-.333.132-.669.189-1.006.043-.258.102-.512.153-.768.021-.107.04-.215.06-.323.069-.342.139-.684.207-1.027.084-.424.148-.852.236-1.276.087-.41.166-.824.234-1.238.026-.154.082-.302.075-.46.102-.22.062-.356-.16-.56L2.242 9.715a.858.858 0 0 1-.254-.374c.009-.228.133-.358.398-.392.412-.052.826-.095 1.239-.142l1.601-.18 1.568-.173c.499-.055.998-.114 1.497-.166.297-.03.466-.209.586-.46.4-.835.801-1.669 1.203-2.503l1.413-2.933a.984.984 0 0 1 .183-.284c.159-.158.347-.16.508-.005a.845.845 0 0 1 .18.272c.843 1.868 1.689 3.734 2.525 5.606.133.3.378.352.655.38.695.067 1.39.138 2.086.206.671.066 1.343.128 2.014.195.606.06 1.211.119 1.815.186.189.022.363.083.414.302.002.21-.132.341-.27.47\"/></symbol><symbol id=\"wds-icons-reddit\" viewBox=\"0 0 24 24\"><path d=\"M21.334 12.023c.359-.283.538-.671.538-1.166 0-.354-.112-.663-.342-.928a1.111 1.111 0 0 0-.882-.398 1.17 1.17 0 0 0-.734.268 5.004 5.004 0 0 1 1.42 2.224m-2.572-9.275a.97.97 0 0 0-.222.638c0 .247.076.458.222.635a.697.697 0 0 0 .562.265c.23 0 .426-.088.59-.265a.904.904 0 0 0 .244-.635.908.908 0 0 0-.244-.638.773.773 0 0 0-.59-.264.697.697 0 0 0-.562.264M14.156 14.09c.31.319.677.477 1.102.477.424 0 .793-.158 1.102-.477.311-.319.466-.724.466-1.219 0-.46-.146-.848-.44-1.167-.294-.316-.67-.476-1.128-.476-.458 0-.832.16-1.127.476-.295.32-.44.708-.44 1.167 0 .495.153.9.465 1.219m-2.18 4.716c1.568 0 2.84-.529 3.822-1.589l-.638-.635c-.815.848-1.878 1.27-3.184 1.27a4.38 4.38 0 0 1-1.666-.319c-.523-.21-.9-.422-1.128-.635l-.343-.316-.637.635c.98 1.06 2.237 1.59 3.774 1.59M7.221 12.87c0 .495.157.9.467 1.219.309.319.677.477 1.102.477a1.49 1.49 0 0 0 1.104-.477c.308-.319.463-.724.463-1.219 0-.46-.145-.848-.44-1.167-.293-.316-.67-.476-1.127-.476-.457 0-.832.16-1.128.476-.292.32-.44.708-.44 1.167m-4.556-.9c.262-.814.734-1.537 1.42-2.172a1.167 1.167 0 0 0-.734-.268c-.326 0-.613.133-.858.398a1.316 1.316 0 0 0-.367.928c0 .53.18.902.539 1.114M23 10.911c0 1.094-.44 1.89-1.324 2.383.034.179.05.425.05.744 0 2.013-.955 3.735-2.866 5.167-1.91 1.43-4.206 2.145-6.884 2.145s-4.965-.708-6.86-2.121c-1.896-1.412-2.843-3.125-2.843-5.14 0-.352.017-.616.05-.795C1.44 12.801 1 12.004 1 10.91c0-.74.245-1.37.733-1.88.492-.513 1.063-.77 1.717-.77.588 0 1.127.229 1.616.69C6.864 7.607 8.97 6.884 11.39 6.778h.096l1.52-5.459 4.409.952C17.87 1.423 18.509 1 19.324 1h.05c.621 0 1.135.231 1.543.69.408.459.613 1.024.613 1.696 0 .67-.205 1.236-.613 1.696a1.975 1.975 0 0 1-1.542.687h-.05c-.555 0-1.046-.203-1.47-.608a2.186 2.186 0 0 1-.686-1.51l-3.283-.743-1.078 3.921c2.484.177 4.524.885 6.126 2.121.488-.461 1.045-.69 1.665-.69.653 0 1.218.257 1.69.77.474.51.711 1.14.711 1.88\"/></symbol><symbol id=\"wds-icons-refresh\" viewBox=\"0 0 24 24\"><path d=\"M12 23c6.065 0 11-4.863 11-10.84a.992.992 0 0 0-1-.985c-.553 0-1 .44-1 .986 0 4.89-4.037 8.868-9 8.868s-9-3.978-9-8.868c0-4.89 4.037-8.869 9-8.869a8.991 8.991 0 0 1 6.975 3.292l-3.794-.501a.996.996 0 0 0-1.124.845.987.987 0 0 0 .858 1.108l5.946.785a.996.996 0 0 0 1.124-.845l.797-5.86a.987.987 0 0 0-.858-1.107.994.994 0 0 0-1.124.846l-.446 3.28A10.997 10.997 0 0 0 12 1.322c-6.065 0-11 4.862-11 10.839C1 18.137 5.935 23 12 23\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-reply-arrow-small\" viewBox=\"0 0 18 18\"><path d=\"M8.73 4.985V1.379a.38.38 0 0 0-.217-.347.352.352 0 0 0-.391.067L1.119 7.726a.388.388 0 0 0 0 .56l7.003 6.627c.106.1.26.128.39.067a.38.38 0 0 0 .218-.347v-3.589c5.166.246 7.555 5.675 7.579 5.731a.364.364 0 0 0 .408.217.376.376 0 0 0 .288-.37v-1.989c0-7.342-5.038-9.5-8.275-9.648\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-reply-arrow\" viewBox=\"0 0 24 24\"><path d=\"M11.628 6.479V1.52a.523.523 0 0 0-.298-.476.485.485 0 0 0-.538.09l-9.628 9.113a.533.533 0 0 0 0 .77l9.628 9.113a.486.486 0 0 0 .538.09.523.523 0 0 0 .298-.475V14.81c7.104.338 10.388 7.803 10.421 7.88a.5.5 0 0 0 .561.298.516.516 0 0 0 .396-.51v-2.733c0-10.096-6.926-13.062-11.378-13.267\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-reply-small\" viewBox=\"0 0 18 18\"><path d=\"M18 8.273c0 4.01-4.037 7.272-9 7.272-.752 0-1.508-.078-2.252-.233l-4.22 1.636a.77.77 0 0 1-.732-.096.719.719 0 0 1-.291-.66l.395-3.45C.672 11.47 0 9.896 0 8.273 0 4.263 4.037 1 9 1s9 3.263 9 7.273z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-reply-tiny\" viewBox=\"0 0 12 12\"><path d=\"M11.997 5.845c0 2.672-2.691 4.846-5.999 4.846-.5 0-1.005-.052-1.5-.156l-2.813 1.09a.513.513 0 0 1-.488-.064.479.479 0 0 1-.194-.439l.263-2.299C.448 7.976 0 6.926 0 5.845 0 3.174 2.69 1 5.998 1c3.308 0 5.999 2.174 5.999 4.845z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-reply\" viewBox=\"0 0 24 24\"><path d=\"M12 2c6.066 0 11 4.078 11 9.09 0 5.014-4.934 9.092-11 9.092-.919 0-1.843-.098-2.753-.292L4.09 21.935a.922.922 0 0 1-.895-.12.907.907 0 0 1-.356-.824l.483-4.313C1.822 15.088 1 13.118 1 11.091 1 6.078 5.934 2 12 2\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-share-small\" viewBox=\"0 0 18 18\"><path d=\"M4.545 11.667c.714 0 1.358-.312 1.821-.809l4.642 2.779a2.76 2.76 0 0 0-.099.696c0 1.471 1.142 2.667 2.546 2.667C14.858 17 16 15.804 16 14.333c0-1.47-1.142-2.666-2.545-2.666-.714 0-1.358.311-1.821.808L6.992 9.697A2.76 2.76 0 0 0 7.091 9a2.76 2.76 0 0 0-.1-.697l4.643-2.778a2.481 2.481 0 0 0 1.82.808C14.859 6.333 16 5.137 16 3.667 16 2.196 14.858 1 13.455 1c-1.404 0-2.546 1.196-2.546 2.667 0 .242.041.473.1.696L6.365 7.142a2.481 2.481 0 0 0-1.82-.809C3.141 6.333 2 7.53 2 9c0 1.47 1.142 2.667 2.545 2.667\"/></symbol><symbol id=\"wds-icons-share\" viewBox=\"0 0 24 24\"><path d=\"M5 16a3.984 3.984 0 0 0 2.861-1.213l7.295 4.168A3.964 3.964 0 0 0 15 20c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4a3.984 3.984 0 0 0-2.861 1.213l-7.295-4.168C8.935 12.71 9 12.364 9 12c0-.364-.065-.71-.156-1.045l7.295-4.168A3.984 3.984 0 0 0 19 8c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 .364.065.71.156 1.045L7.861 9.213A3.984 3.984 0 0 0 5 8c-2.206 0-4 1.794-4 4s1.794 4 4 4\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-tag-small\" viewBox=\"0 0 18 18\"><path d=\"M8.632 14.936l5.304-5.304C14.81 8.758 15.5 7.096 15.5 5.86V4c0-1.384-1.118-2.5-2.5-2.5h-1.86c-1.241 0-2.894.686-3.772 1.564L2.064 8.368a2.51 2.51 0 0 1 .001 3.544l3.023 3.023a2.498 2.498 0 0 1 3.544 0zm-.707-.707a1.5 1.5 0 0 1-2.13-.001l-3.023-3.023a1.51 1.51 0 0 0 0-2.13l5.302-5.304c.692-.69 2.091-1.271 3.066-1.271H13c.83 0 1.5.668 1.5 1.5v1.86c0 .97-.585 2.378-1.271 3.065l-5.304 5.304z\"/><path d=\"M11.093 7.71a1.802 1.802 0 1 1 0-3.605 1.802 1.802 0 0 1 0 3.604zm0-1a.802.802 0 1 0 0-1.605.802.802 0 0 0 0 1.604z\"/></symbol><symbol id=\"wds-icons-text-small\" viewBox=\"0 0 18 18\"><path d=\"M9 1H2v4h1l.724-1.447A1 1 0 0 1 4.618 3H8v11.28a1 1 0 0 1-.684.948L5 16v1h8v-1l-2.316-.772a1 1 0 0 1-.684-.949V3h3.382a1 1 0 0 1 .894.553L15 5h1V1H9z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-text\" viewBox=\"0 0 24 24\"><path d=\"M23 0H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1c.334 0 .646-.167.832-.445L4.535 4H10v15.382l-3.447 1.723c-.339.17-.553.516-.553.895v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1c0-.379-.214-.725-.553-.895L14 19.382V4h5.465l1.703 2.555c.186.278.498.445.832.445h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-trash-open-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M6.23 3.345l3.845-1.106.353 1.228-3.843 1.106-.354-1.228zm10.725-.716a.998.998 0 0 0-1.238-.684l-3.366.968-.631-2.19A.998.998 0 0 0 10.483.04L4.717 1.699a1.002 1.002 0 0 0-.684 1.238l.63 2.189-2.94.845A1 1 0 0 0 2 7.933V17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v9H4V7.397l12.27-3.531a1 1 0 0 0 .685-1.237z\"/><path d=\"M6 10.001v4a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0m4 0v4a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0\"/></g></symbol><symbol id=\"wds-icons-trash-open\" viewBox=\"0 0 24 24\"><path d=\"M11.797 11.848v6.77a.84.84 0 0 0 .833.846.84.84 0 0 0 .834-.846v-6.77a.84.84 0 0 0-.834-.846.84.84 0 0 0-.833.846m-3.334 0v6.77a.84.84 0 0 0 .834.846.84.84 0 0 0 .833-.846v-6.77a.84.84 0 0 0-.833-.846.84.84 0 0 0-.834.846m6.667 0v6.77a.84.84 0 0 0 .834.846.84.84 0 0 0 .834-.846v-6.77a.84.84 0 0 0-.834-.846.84.84 0 0 0-.833.846\"/><path d=\"M9.166 3.225l4.83-1.314.414 1.565L9.58 4.79l-.414-1.565zm12.184-.761a.83.83 0 0 0-1.02-.598l-4.311 1.172-.628-2.383a.849.849 0 0 0-.389-.514.822.822 0 0 0-.632-.085L7.93 1.81a.848.848 0 0 0-.589 1.037l.629 2.382-5.352 1.455a.847.847 0 0 0-.59 1.036.835.835 0 0 0 1.021.6l2.08-.567V22.85a.84.84 0 0 0 .834.846h13.335a.84.84 0 0 0 .833-.846V7.616a.84.84 0 0 0-.833-.846.84.84 0 0 0-.834.846v14.387H6.796V7.616a.856.856 0 0 0-.06-.3l2.169-.59c.035.004.067.017.103.017a.828.828 0 0 0 .52-.186l5.796-1.578a.814.814 0 0 0 .642-.174L20.76 3.5a.847.847 0 0 0 .59-1.036z\"/></symbol><symbol id=\"wds-icons-trash-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M14 15H4V6h10v9zM6.875 3h4v1h-4V3zM16 4h-3.125V2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2H2a1 1 0 0 0 0 2v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0 0-2z\"/><path d=\"M7 14a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1\"/></g></symbol><symbol id=\"wds-icons-trash\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M18.417 21.167H5.583V6.5h12.834v14.667zM9.25 2.833h5.5v1.834h-5.5V2.833zm12.833 1.834h-5.5v-2.75A.916.916 0 0 0 15.667 1H8.333a.917.917 0 0 0-.916.917v2.75h-5.5a.917.917 0 0 0 0 1.833H3.75v15.583c0 .507.41.917.917.917h14.666c.507 0 .917-.41.917-.917V6.5h1.833a.916.916 0 1 0 0-1.833z\"/><path d=\"M12 9.25a.917.917 0 0 0-.917.917V17.5a.916.916 0 1 0 1.834 0v-7.333A.917.917 0 0 0 12 9.25m-3.667 0a.917.917 0 0 0-.916.917V17.5a.916.916 0 1 0 1.833 0v-7.333a.917.917 0 0 0-.917-.917m6.417.917V17.5a.916.916 0 1 0 1.833 0v-7.333a.916.916 0 1 0-1.833 0\"/></g></symbol><symbol id=\"wds-icons-tumblr\" viewBox=\"0 0 24 24\"><path d=\"M13.987 20.999c-3.79.067-5.226-2.794-5.226-4.807V10.31H7V7.985c2.64-.984 3.275-3.447 3.423-4.85.01-.097.083-.135.126-.135h2.549v4.585h3.48v2.725h-3.494v5.603c.013.763.282 1.814 1.675 1.775.461-.012 1.08-.152 1.403-.31L17 19.944c-.315.477-1.734 1.03-3.013 1.054\"/></symbol><symbol id=\"wds-icons-twitter\" viewBox=\"0 0 24 24\"><path d=\"M20.681 7.328v.577c0 5.915-4.486 12.695-12.735 12.695-2.605 0-4.92-.721-6.946-2.02.434 0 .724.145 1.158.145 2.026 0 4.052-.722 5.644-1.876-1.882 0-3.618-1.298-4.197-3.174.29 0 .579.145.868.145.434 0 .434 0 1.013-.145-2.17-.432-4.052-2.308-4.052-4.472 0 .433 1.592.433 2.316.577-1.158-.865-1.882-2.164-1.882-3.75 0-.866.29-1.587.724-2.309 2.17 2.741 5.644 4.472 9.261 4.761-.144-.433-.144-.721-.144-1.01C11.709 5.02 13.735 3 16.195 3c1.302 0 2.46.433 3.328 1.443 1.013-.289 1.882-.577 2.75-1.154-.434 1.154-1.158 1.875-1.881 2.452a13.73 13.73 0 0 0 2.604-.721c-.723.865-1.447 1.73-2.315 2.308z\"/></symbol><symbol id=\"wds-icons-undo\" viewBox=\"0 0 24 24\"><path d=\"M4.414 15H16a5 5 0 1 0 0-10H2a1 1 0 0 1 0-2h14a7 7 0 1 1 0 14H4.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a.997.997 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L4.414 15z\" fill-rule=\"evenodd\" fill-opacity=\"100\"/></symbol><symbol id=\"wds-icons-unlock-small\" viewBox=\"0 0 18 18\"><path d=\"M10 12.7V14H8v-1.3c-.6-.3-1-1-1-1.7 0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7M15 6H7V5c0-1.1.9-2 2-2 .6 0 1.225.25 1.625.75.182.244.547.5.875.5a1 1 0 0 0 .761-1.651c.004-.004-.003.003 0 0L12 2.3C11.2 1.5 10.1 1 9 1 6.8 1 5 2.8 5 5v1H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-unlock\" viewBox=\"0 0 24 24\"><path d=\"M13 17.816V19a1 1 0 0 1-2 0v-1.184A2.996 2.996 0 0 1 9 15c0-1.654 1.346-3 3-3s3 1.346 3 3a2.996 2.996 0 0 1-2 2.816M20 8H8V6c0-2.206 1.794-4 4-4 1.447 0 2.788.793 3.499 2.069a1 1 0 1 0 1.747-.974A6.015 6.015 0 0 0 12 0C8.691 0 6 2.691 6 6v2H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-upload\" viewBox=\"0 0 24 24\"><path d=\"M12 17.999a1 1 0 0 0 1-1V5.413l3.293 3.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-5-5a.999.999 0 0 0-1.089-.216.999.999 0 0 0-.325.216l-5 5a.999.999 0 1 0 1.414 1.414L11 5.413v11.586a1 1 0 0 0 1 1zm-7-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5a1 1 0 0 0-2 0v4H6v-4a1 1 0 0 0-1-1z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-upvote-reply-tiny\" viewBox=\"0 0 12 12\"><path d=\"M10.707 5.292l-4-4a1.001 1.001 0 0 0-1.414 0l-4 4a.999.999 0 1 0 1.414 1.414L5 4.413v5.586a1 1 0 0 0 2 0V4.413l2.293 2.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-upvote-small\" viewBox=\"0 0 18 18\"><path d=\"M12.53 8.78a.748.748 0 0 1-1.06 0L9.75 7.06v6.44a.75.75 0 0 1-1.5 0V7.06L6.53 8.78a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06M9 0C4.037 0 0 4.037 0 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-upvote-tiny\" viewBox=\"0 0 12 12\"><path d=\"M8.354 5.854a.499.499 0 0 1-.707 0L6.5 4.707V9a.5.5 0 0 1-1 0V4.707L4.354 5.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708M6 0C2.692 0 0 2.692 0 6c0 3.309 2.692 6 6 6s6-2.691 6-6c0-3.308-2.692-6-6-6\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-upvote\" viewBox=\"0 0 24 24\"><path d=\"M16.707 11.707a.997.997 0 0 1-1.414 0L13 9.414V18a1 1 0 0 1-2 0V9.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414l4-4a.999.999 0 0 1 1.089-.216c.122.051.233.124.325.216l4 4a.999.999 0 0 1 0 1.414M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-user\" viewBox=\"0 0 24 24\"><path d=\"M12 14c3.309 0 6-2.691 6-6V6c0-3.309-2.691-6-6-6S6 2.691 6 6v2c0 3.309 2.691 6 6 6zm5 2H7c-3.86 0-7 3.14-7 7a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1c0-3.86-3.14-7-7-7z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-video-camera\" viewBox=\"0 0 24 24\"><path d=\"M23.6 6.2c-.3-.2-.6-.2-.9-.1L17 8.5V5c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h15c.6 0 1-.4 1-1v-3.5l5.6 2.4c.1.1.3.1.4.1.2 0 .4-.1.6-.2.3-.2.4-.5.4-.8V7c0-.3-.2-.6-.4-.8z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-vkontakte\" viewBox=\"0 0 24 24\"><path d=\"M8.169 7.816a1.17 1.17 0 0 1 .792-.65 5.11 5.11 0 0 1 1.037-.175 27.89 27.89 0 0 1 1.925-.025c.329.006.662.048.984.117.591.126.88.45.924 1.062.03.439.013.882-.003 1.322-.018.462-.064.924-.089 1.386a13.41 13.41 0 0 0-.024.981c.007.384.044.77.285 1.09.233.31.279.34.621.132.189-.115.348-.294.487-.472.964-1.23 1.699-2.59 2.26-4.052.054-.138.124-.27.179-.407.182-.446.528-.631.983-.633.414-.001.829.022 1.244.024.62.002 1.24-.012 1.861-.004.267.005.538.024.797.082.353.078.477.305.41.666-.094.508-.315.965-.567 1.407-.464.812-1.043 1.54-1.612 2.275a68.25 68.25 0 0 0-1.066 1.42 1.933 1.933 0 0 0-.191.345c-.229.504-.158.905.252 1.32.419.422.855.828 1.276 1.248.62.62 1.19 1.284 1.655 2.031.117.187.205.402.259.615.068.273-.05.5-.278.658-.265.187-.575.248-.884.251-.645.008-1.292-.013-1.937-.02-.326-.004-.653-.011-.976.067-.09.023-.2-.01-.296-.033-.618-.148-1.127-.489-1.587-.916-.454-.422-.833-.91-1.221-1.39-.14-.173-.3-.334-.478-.466a.989.989 0 0 0-.443-.189c-.321-.046-.577.107-.678.423-.083.263-.116.543-.155.82-.036.272-.037.55-.077.824-.075.517-.227.743-.878.859-.536.094-1.072.047-1.607-.001-.74-.069-1.468-.207-2.166-.472-1.063-.401-1.96-1.049-2.739-1.874-.822-.873-1.521-1.845-2.186-2.841-1-1.5-1.835-3.091-2.607-4.719-.217-.458-.452-.91-.565-1.41-.04-.178-.06-.36-.091-.539-.018-.107.016-.19.115-.223.21-.069.421-.17.634-.18.528-.026 1.057-.006 1.586-.01.44-.004.88-.019 1.319-.022.1-.001.2.02.3.034a.732.732 0 0 1 .572.41c.124.25.254.497.363.754a20.133 20.133 0 0 0 1.94 3.517c.16.233.32.47.503.684.1.118.237.217.376.285.23.113.435.048.54-.184a2.32 2.32 0 0 0 .204-.662c.13-.972.145-1.95.053-2.925a4.61 4.61 0 0 0-.126-.662c-.077-.312-.278-.525-.568-.652a38.53 38.53 0 0 1-.494-.222c-.05-.021-.095-.051-.147-.08\"/></symbol><symbol id=\"wds-icons-volume-off-small\" viewBox=\"0 0 18 18\"><path d=\"M8.45 2.17L4.664 6.28H1.036C.256 6.28 0 6.739 0 7.175v3.522c0 .436.256.985 1.036.985h3.646l3.785 4.176a1.1 1.1 0 0 0 .533.143.964.964 0 0 0 .5-.137c.33-.185.5-.526.5-.897V3.013c0-.37-.17-.713-.5-.898-.33-.186-.72-.13-1.05.054zm7.192 7.33l2.121-2.122a.807.807 0 1 0-1.142-1.141l-2.122 2.12-2.12-2.12a.808.808 0 0 0-1.142 1.141L13.358 9.5l-2.121 2.121a.807.807 0 1 0 1.142 1.142l2.12-2.12 2.122 2.12a.805.805 0 0 0 1.142 0 .807.807 0 0 0 0-1.142L15.642 9.5z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-volume-off\" viewBox=\"0 0 24 24\"><path d=\"M6 8.007H1.347C.333 8.007 0 8.769 0 9.391v5.032C0 15.045.333 16 1.347 16H6l5.007 5.796c.215.132.454.205.693.205.24 0 .436-.063.65-.196.429-.265.65-.75.65-1.28V3.447c0-.53-.221-1.02-.65-1.284-.429-.265-.935-.187-1.365.078L6 8.007zM20.305 12l2.425-2.425a.922.922 0 1 0-1.306-1.305l-2.425 2.424-2.423-2.424a.923.923 0 0 0-1.306 1.305L17.695 12l-2.425 2.425a.922.922 0 1 0 1.306 1.304L19 13.306l2.425 2.423a.92.92 0 0 0 1.306 0 .922.922 0 0 0 0-1.304L20.305 12z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-volume-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M8.45 2.17L4.664 6.28H1.036C.256 6.28 0 6.739 0 7.175v3.522c0 .436.256.985 1.036.985h3.646l3.785 4.176a1.1 1.1 0 0 0 .533.143.964.964 0 0 0 .5-.137c.33-.185.5-.526.5-.897V3.013c0-.37-.17-.713-.5-.898-.33-.186-.72-.13-1.05.054zm4.95 10.156a4.393 4.393 0 0 0 0-6.19.708.708 0 0 0-1.004 1 2.978 2.978 0 0 1 0 4.192.707.707 0 1 0 1.003.998z\"/><path d=\"M17.515 9.231A6.186 6.186 0 0 0 15.7 4.84a.707.707 0 1 0-1.003.998A4.777 4.777 0 0 1 16.1 9.231a4.778 4.778 0 0 1-1.4 3.394.708.708 0 1 0 1.002.999 6.186 6.186 0 0 0 1.814-4.393z\"/></g></symbol><symbol id=\"wds-icons-volume\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M6 8.007H1.347C.333 8.007 0 8.769 0 9.391v5.032C0 15.045.333 16 1.347 16H6l5.007 5.796c.215.132.454.205.693.205.24 0 .436-.063.65-.196.429-.265.65-.75.65-1.28V3.447c0-.53-.221-1.02-.65-1.284-.429-.265-.935-.187-1.365.078L6 8.007zm11.612 8.524a5.858 5.858 0 0 0 0-8.253.944.944 0 0 0-1.337 1.332 3.97 3.97 0 0 1 0 5.59.943.943 0 1 0 1.337 1.331z\"/><path d=\"M23.03 12.135c0-2.21-.859-4.292-2.418-5.857a.943.943 0 1 0-1.337 1.332 6.37 6.37 0 0 1 1.868 4.525 6.37 6.37 0 0 1-1.868 4.525.943.943 0 1 0 1.338 1.332 8.249 8.249 0 0 0 2.418-5.857z\"/></g></symbol><symbol id=\"wds-icons-weibo\" viewBox=\"0 0 24 24\"><path d=\"M16.562 11.618c-.273-.081-.46-.137-.318-.493.31-.775.342-1.443.006-1.92-.63-.894-2.353-.845-4.328-.024 0 0-.62.27-.461-.219.303-.97.258-1.783-.215-2.253-1.072-1.065-3.921.04-6.365 2.468-1.83 1.819-2.893 3.746-2.893 5.413 0 3.188 4.115 5.126 8.14 5.126 5.275 0 8.785-3.047 8.785-5.465 0-1.46-1.238-2.29-2.351-2.633m-6.424 6.955c-3.211.315-5.984-1.127-6.192-3.223-.209-2.095 2.226-4.049 5.437-4.364 3.212-.316 5.985 1.127 6.193 3.221.208 2.096-2.226 4.05-5.438 4.366m9.927-12.789a5.155 5.155 0 0 0-4.888-1.572.738.738 0 1 0 .31 1.444c1.234-.26 2.57.12 3.476 1.117a3.611 3.611 0 0 1 .763 3.55.744.744 0 0 0 1.414.455v-.003a5.076 5.076 0 0 0-1.075-4.991\"/><path d=\"M18.109 7.539a2.51 2.51 0 0 0-2.381-.765.635.635 0 1 0 .266 1.242 1.23 1.23 0 0 1 1.165.374c.303.334.385.79.255 1.19a.635.635 0 0 0 .411.8.64.64 0 0 0 .805-.41 2.47 2.47 0 0 0-.521-2.431m-7.649 5.059c-1.53-.395-3.257.362-3.92 1.7-.676 1.365-.023 2.88 1.521 3.375 1.6.513 3.485-.273 4.14-1.746.647-1.44-.16-2.922-1.742-3.329m-1.167 3.486c-.31.492-.976.708-1.477.48-.494-.223-.64-.795-.329-1.275.307-.478.95-.691 1.447-.484.503.213.664.781.359 1.279m1.023-1.306c-.112.191-.36.283-.555.204-.191-.079-.251-.292-.142-.48.112-.186.35-.277.541-.202.194.07.264.286.156.478\"/></symbol><symbol id=\"wds-icons-wykop\" viewBox=\"0 0 24 24\"><path d=\"M6.76 20.985a9.543 9.543 0 0 1-2.192-.45c-2.005-.646-2.991-2.095-3.251-3.988a34.21 34.21 0 0 1-.081-8.58c.308-2.687 2.073-4.3 4.983-4.635 3.068-.353 6.147-.287 9.223-.17a19.45 19.45 0 0 1 3.321.41c2.425.52 3.734 2.024 3.981 4.351.26 2.447.35 4.898.157 7.35-.093 1.183-.247 2.37-.935 3.412-.927 1.405-2.37 2.057-4.039 2.22-1.942.19-9.402.211-11.167.08zm7.421-2.064c1.314-.076 2.63-.154 3.933-.313.836-.102 1.547-.53 1.87-1.295.262-.622.516-1.291.548-1.95.093-1.902.101-3.81.08-5.715-.008-.658-.153-1.325-.322-1.967-.314-1.19-1.13-1.917-2.448-2.077-.743-.09-1.491-.189-2.24-.202a175.972 175.972 0 0 0-5.531-.018c-1.19.016-2.381.071-3.565.176-1.546.136-2.424.863-2.808 2.222a5.68 5.68 0 0 0-.126.546c-.345 1.919-.274 3.854-.204 5.784.028.78.155 1.565.317 2.333.23 1.096.928 1.842 2.101 2.132.41.101.833.182 1.253.203 1.656.083 6.422.182 7.142.14zm.995-12.884L12.6 7.227l3.196 6.103-1.269.6-3.248-6.091L8.66 9.048l3.204 6.117-1.269.6L7.34 9.66l-2.563 1.184 3.87 7.369 10.368-4.835-3.838-7.34\"/></symbol><symbol id=\"wds-icons-youtube\" viewBox=\"0 0 24 24\"><path d=\"M23.8 7.6s-.2-1.7-1-2.4c-.9-1-1.9-1-2.4-1C17 4 12 4 12 4s-5 0-8.4.2c-.5.1-1.5.1-2.4 1-.7.7-1 2.4-1 2.4S0 9.5 0 11.5v1.8c0 1.9.2 3.9.2 3.9s.2 1.7 1 2.4c.9 1 2.1.9 2.6 1 1.9.2 8.2.2 8.2.2s5 0 8.4-.3c.5-.1 1.5-.1 2.4-1 .7-.7 1-2.4 1-2.4s.2-1.9.2-3.9v-1.8c0-1.9-.2-3.8-.2-3.8zM9.5 15.5V8.8l6.5 3.4-6.5 3.3z\"/></symbol></svg>"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".wds-avatar{height:28px;min-width:28px;width:28px;border:2px solid currentColor;border-radius:50%}.wds-avatar-stack{-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:8px 18px 6px 40px}.wds-avatar-stack__avatar{color:#ccc}.wds-avatar-stack .wds-avatar-stack__avatar:first-child{position:relative;-webkit-transform:translate(0);-ms-transform:translate(0);transform:translate(0);z-index:4}.wds-avatar-stack .wds-avatar-stack__avatar:nth-child(2){position:relative;-webkit-transform:translate(-10px);-ms-transform:translate(-10px);transform:translate(-10px);z-index:3}.wds-avatar-stack .wds-avatar-stack__avatar:nth-child(3){position:relative;-webkit-transform:translate(-20px);-ms-transform:translate(-20px);transform:translate(-20px);z-index:2}.wds-avatar-stack .wds-avatar-stack__avatar:nth-child(4){position:relative;-webkit-transform:translate(-30px);-ms-transform:translate(-30px);transform:translate(-30px);z-index:1}.wds-avatar-stack .wds-avatar-stack__avatar:nth-child(5){position:relative;z-index:0}.wds-avatar-stack .wds-avatar-stack__avatar:nth-child(5),.wds-avatar-stack__overflow{-webkit-transform:translate(-40px);-ms-transform:translate(-40px);transform:translate(-40px)}.wds-avatar-stack__overflow{background-color:#fff;border:0;color:#333;font-size:12px;padding-left:6px;width:auto}.wds-button{background-color:#00b7e0;border:1px solid #00b7e0;color:#fff;-webkit-align-items:center;-ms-flex-align:center;align-items:center;box-sizing:content-box;cursor:default;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;font-size:12px;font-weight:600;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;letter-spacing:.15px;line-height:1.3em;margin:0;min-height:18px;outline:0;padding:14px 18px;text-decoration:none;text-transform:uppercase;transition-duration:.3s;transition-property:background-color,border-color,color;vertical-align:top;-webkit-appearance:none;-webkit-border-radius:0}.wds-button.wds-is-active,.wds-button:active,.wds-button:focus:not(:disabled),.wds-button:hover:not(:disabled){background-color:#00647a;border-color:#00647a;text-decoration:none}.wds-button.wds-is-secondary{background-color:transparent;border-color:#00b7e0;color:#00b7e0}.wds-button.wds-is-secondary.wds-is-active,.wds-button.wds-is-secondary:active,.wds-button.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#00647a;color:#00647a}.wds-button.wds-is-text{background-color:transparent;color:#00b7e0;border:0}.wds-button.wds-is-text.wds-is-active,.wds-button.wds-is-text:active,.wds-button.wds-is-text:focus:not(:disabled),.wds-button.wds-is-text:hover:not(:disabled){background-color:transparent;color:#00647a}a.wds-button,button.wds-button{cursor:pointer}.wds-button:disabled{cursor:default;opacity:.5;pointer-events:none}.wds-button.wds-is-squished{font-size:10px;padding:7px 12px}.wds-button.wds-is-squished .wds-dropdown__toggle{height:13px}.wds-button.wds-is-stretched{padding:28px 18px 27px}.wds-button.wds-is-full-width{display:-webkit-flex;display:-ms-flexbox;display:flex}.wds-button.wds-is-square{height:45px;min-width:45px;width:45px;-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0}.wds-button .wds-icon:first-child{-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;pointer-events:none}.wds-button .wds-icon:first-child:not(:only-child){margin-right:9px}.wds-button .wds-list{color:#1a1a1a;font-weight:400;letter-spacing:normal;text-transform:none;text-align:left}.wds-button .wds-dropdown__content{top:calc(100% + 1px)}.wds-button.wds-is-facebook-color{background-color:#3b5998;border-color:#3b5998;color:#fff}.wds-button.wds-is-facebook-color.wds-is-active,.wds-button.wds-is-facebook-color:active,.wds-button.wds-is-facebook-color:focus:not(:disabled),.wds-button.wds-is-facebook-color:hover:not(:disabled){background-color:#718dc8;border-color:#718dc8}.wds-button.wds-is-facebook-color.wds-is-secondary{background-color:transparent;border-color:#3b5998;color:#3b5998}.wds-button.wds-is-facebook-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-facebook-color.wds-is-secondary:active,.wds-button.wds-is-facebook-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-facebook-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#718dc8;color:#718dc8}.wds-button.wds-is-facebook-color.wds-is-text{background-color:transparent;color:#3b5998}.wds-button.wds-is-facebook-color.wds-is-text.wds-is-active,.wds-button.wds-is-facebook-color.wds-is-text:active,.wds-button.wds-is-facebook-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-facebook-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#718dc8}.wds-button.wds-is-googleplus-color{background-color:#dd4b39;border-color:#dd4b39;color:#fff}.wds-button.wds-is-googleplus-color.wds-is-active,.wds-button.wds-is-googleplus-color:active,.wds-button.wds-is-googleplus-color:focus:not(:disabled),.wds-button.wds-is-googleplus-color:hover:not(:disabled){background-color:#ec9a90;border-color:#ec9a90}.wds-button.wds-is-googleplus-color.wds-is-secondary{background-color:transparent;border-color:#dd4b39;color:#dd4b39}.wds-button.wds-is-googleplus-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-googleplus-color.wds-is-secondary:active,.wds-button.wds-is-googleplus-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-googleplus-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#ec9a90;color:#ec9a90}.wds-button.wds-is-googleplus-color.wds-is-text{background-color:transparent;color:#dd4b39}.wds-button.wds-is-googleplus-color.wds-is-text.wds-is-active,.wds-button.wds-is-googleplus-color.wds-is-text:active,.wds-button.wds-is-googleplus-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-googleplus-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#ec9a90}.wds-button.wds-is-line-color{background-color:#00c300;border-color:#00c300;color:#fff}.wds-button.wds-is-line-color.wds-is-active,.wds-button.wds-is-line-color:active,.wds-button.wds-is-line-color:focus:not(:disabled),.wds-button.wds-is-line-color:hover:not(:disabled){background-color:#005d00;border-color:#005d00}.wds-button.wds-is-line-color.wds-is-secondary{background-color:transparent;border-color:#00c300;color:#00c300}.wds-button.wds-is-line-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-line-color.wds-is-secondary:active,.wds-button.wds-is-line-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-line-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#005d00;color:#005d00}.wds-button.wds-is-line-color.wds-is-text{background-color:transparent;color:#00c300}.wds-button.wds-is-line-color.wds-is-text.wds-is-active,.wds-button.wds-is-line-color.wds-is-text:active,.wds-button.wds-is-line-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-line-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#005d00}.wds-button.wds-is-linkedin-color{background-color:#0077b5;border-color:#0077b5;color:#fff}.wds-button.wds-is-linkedin-color.wds-is-active,.wds-button.wds-is-linkedin-color:active,.wds-button.wds-is-linkedin-color:focus:not(:disabled),.wds-button.wds-is-linkedin-color:hover:not(:disabled){background-color:#1cb1ff;border-color:#1cb1ff}.wds-button.wds-is-linkedin-color.wds-is-secondary{background-color:transparent;border-color:#0077b5;color:#0077b5}.wds-button.wds-is-linkedin-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-linkedin-color.wds-is-secondary:active,.wds-button.wds-is-linkedin-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-linkedin-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#1cb1ff;color:#1cb1ff}.wds-button.wds-is-linkedin-color.wds-is-text{background-color:transparent;color:#0077b5}.wds-button.wds-is-linkedin-color.wds-is-text.wds-is-active,.wds-button.wds-is-linkedin-color.wds-is-text:active,.wds-button.wds-is-linkedin-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-linkedin-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#1cb1ff}.wds-button.wds-is-instagram-color{background-color:#e02d69;border-color:#e02d69;color:#fff}.wds-button.wds-is-instagram-color.wds-is-active,.wds-button.wds-is-instagram-color:active,.wds-button.wds-is-instagram-color:focus:not(:disabled),.wds-button.wds-is-instagram-color:hover:not(:disabled){background-color:#ed86a8;border-color:#ed86a8}.wds-button.wds-is-instagram-color.wds-is-secondary{background-color:transparent;border-color:#e02d69;color:#e02d69}.wds-button.wds-is-instagram-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-instagram-color.wds-is-secondary:active,.wds-button.wds-is-instagram-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-instagram-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#ed86a8;color:#ed86a8}.wds-button.wds-is-instagram-color.wds-is-text{background-color:transparent;color:#e02d69}.wds-button.wds-is-instagram-color.wds-is-text.wds-is-active,.wds-button.wds-is-instagram-color.wds-is-text:active,.wds-button.wds-is-instagram-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-instagram-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#ed86a8}.wds-button.wds-is-meneame-color{background-color:#ff6400;border-color:#ff6400;color:#fff}.wds-button.wds-is-meneame-color.wds-is-active,.wds-button.wds-is-meneame-color:active,.wds-button.wds-is-meneame-color:focus:not(:disabled),.wds-button.wds-is-meneame-color:hover:not(:disabled){background-color:#993c00;border-color:#993c00}.wds-button.wds-is-meneame-color.wds-is-secondary{background-color:transparent;border-color:#ff6400;color:#ff6400}.wds-button.wds-is-meneame-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-meneame-color.wds-is-secondary:active,.wds-button.wds-is-meneame-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-meneame-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#993c00;color:#993c00}.wds-button.wds-is-meneame-color.wds-is-text{background-color:transparent;color:#ff6400}.wds-button.wds-is-meneame-color.wds-is-text.wds-is-active,.wds-button.wds-is-meneame-color.wds-is-text:active,.wds-button.wds-is-meneame-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-meneame-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#993c00}.wds-button.wds-is-nk-color{background-color:#4077a7;border-color:#4077a7;color:#fff}.wds-button.wds-is-nk-color.wds-is-active,.wds-button.wds-is-nk-color:active,.wds-button.wds-is-nk-color:focus:not(:disabled),.wds-button.wds-is-nk-color:hover:not(:disabled){background-color:#7fa9ce;border-color:#7fa9ce}.wds-button.wds-is-nk-color.wds-is-secondary{background-color:transparent;border-color:#4077a7;color:#4077a7}.wds-button.wds-is-nk-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-nk-color.wds-is-secondary:active,.wds-button.wds-is-nk-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-nk-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#7fa9ce;color:#7fa9ce}.wds-button.wds-is-nk-color.wds-is-text{background-color:transparent;color:#4077a7}.wds-button.wds-is-nk-color.wds-is-text.wds-is-active,.wds-button.wds-is-nk-color.wds-is-text:active,.wds-button.wds-is-nk-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-nk-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#7fa9ce}.wds-button.wds-is-odnoklassniki-color{background-color:#f96900;border-color:#f96900;color:#fff}.wds-button.wds-is-odnoklassniki-color.wds-is-active,.wds-button.wds-is-odnoklassniki-color:active,.wds-button.wds-is-odnoklassniki-color:focus:not(:disabled),.wds-button.wds-is-odnoklassniki-color:hover:not(:disabled){background-color:#933e00;border-color:#933e00}.wds-button.wds-is-odnoklassniki-color.wds-is-secondary{background-color:transparent;border-color:#f96900;color:#f96900}.wds-button.wds-is-odnoklassniki-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-odnoklassniki-color.wds-is-secondary:active,.wds-button.wds-is-odnoklassniki-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-odnoklassniki-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#933e00;color:#933e00}.wds-button.wds-is-odnoklassniki-color.wds-is-text{background-color:transparent;color:#f96900}.wds-button.wds-is-odnoklassniki-color.wds-is-text.wds-is-active,.wds-button.wds-is-odnoklassniki-color.wds-is-text:active,.wds-button.wds-is-odnoklassniki-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-odnoklassniki-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#933e00}.wds-button.wds-is-reddit-color{background-color:#ff4500;border-color:#ff4500;color:#fff}.wds-button.wds-is-reddit-color.wds-is-active,.wds-button.wds-is-reddit-color:active,.wds-button.wds-is-reddit-color:focus:not(:disabled),.wds-button.wds-is-reddit-color:hover:not(:disabled){background-color:#ff8f66;border-color:#ff8f66}.wds-button.wds-is-reddit-color.wds-is-secondary{background-color:transparent;border-color:#ff4500;color:#ff4500}.wds-button.wds-is-reddit-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-reddit-color.wds-is-secondary:active,.wds-button.wds-is-reddit-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-reddit-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#ff8f66;color:#ff8f66}.wds-button.wds-is-reddit-color.wds-is-text{background-color:transparent;color:#ff4500}.wds-button.wds-is-reddit-color.wds-is-text.wds-is-active,.wds-button.wds-is-reddit-color.wds-is-text:active,.wds-button.wds-is-reddit-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-reddit-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#ff8f66}.wds-button.wds-is-tumblr-color{background-color:#34465d;border-color:#34465d;color:#fff}.wds-button.wds-is-tumblr-color.wds-is-active,.wds-button.wds-is-tumblr-color:active,.wds-button.wds-is-tumblr-color:focus:not(:disabled),.wds-button.wds-is-tumblr-color:hover:not(:disabled){background-color:#59779e;border-color:#59779e}.wds-button.wds-is-tumblr-color.wds-is-secondary{background-color:transparent;border-color:#34465d;color:#34465d}.wds-button.wds-is-tumblr-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-tumblr-color.wds-is-secondary:active,.wds-button.wds-is-tumblr-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-tumblr-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#59779e;color:#59779e}.wds-button.wds-is-tumblr-color.wds-is-text{background-color:transparent;color:#34465d}.wds-button.wds-is-tumblr-color.wds-is-text.wds-is-active,.wds-button.wds-is-tumblr-color.wds-is-text:active,.wds-button.wds-is-tumblr-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-tumblr-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#59779e}.wds-button.wds-is-twitter-color{background-color:#1da1f2;border-color:#1da1f2;color:#fff}.wds-button.wds-is-twitter-color.wds-is-active,.wds-button.wds-is-twitter-color:active,.wds-button.wds-is-twitter-color:focus:not(:disabled),.wds-button.wds-is-twitter-color:hover:not(:disabled){background-color:#0967a0;border-color:#0967a0}.wds-button.wds-is-twitter-color.wds-is-secondary{background-color:transparent;border-color:#1da1f2;color:#1da1f2}.wds-button.wds-is-twitter-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-twitter-color.wds-is-secondary:active,.wds-button.wds-is-twitter-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-twitter-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#0967a0;color:#0967a0}.wds-button.wds-is-twitter-color.wds-is-text{background-color:transparent;color:#1da1f2}.wds-button.wds-is-twitter-color.wds-is-text.wds-is-active,.wds-button.wds-is-twitter-color.wds-is-text:active,.wds-button.wds-is-twitter-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-twitter-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#0967a0}.wds-button.wds-is-vkontakte-color{background-color:#587ca3;border-color:#587ca3;color:#fff}.wds-button.wds-is-vkontakte-color.wds-is-active,.wds-button.wds-is-vkontakte-color:active,.wds-button.wds-is-vkontakte-color:focus:not(:disabled),.wds-button.wds-is-vkontakte-color:hover:not(:disabled){background-color:#99b0c8;border-color:#99b0c8}.wds-button.wds-is-vkontakte-color.wds-is-secondary{background-color:transparent;border-color:#587ca3;color:#587ca3}.wds-button.wds-is-vkontakte-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-vkontakte-color.wds-is-secondary:active,.wds-button.wds-is-vkontakte-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-vkontakte-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#99b0c8;color:#99b0c8}.wds-button.wds-is-vkontakte-color.wds-is-text{background-color:transparent;color:#587ca3}.wds-button.wds-is-vkontakte-color.wds-is-text.wds-is-active,.wds-button.wds-is-vkontakte-color.wds-is-text:active,.wds-button.wds-is-vkontakte-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-vkontakte-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#99b0c8}.wds-button.wds-is-wykop-color{background-color:#fb803f;border-color:#fb803f;color:#fff}.wds-button.wds-is-wykop-color.wds-is-active,.wds-button.wds-is-wykop-color:active,.wds-button.wds-is-wykop-color:focus:not(:disabled),.wds-button.wds-is-wykop-color:hover:not(:disabled){background-color:#d04b04;border-color:#d04b04}.wds-button.wds-is-wykop-color.wds-is-secondary{background-color:transparent;border-color:#fb803f;color:#fb803f}.wds-button.wds-is-wykop-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-wykop-color.wds-is-secondary:active,.wds-button.wds-is-wykop-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-wykop-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#d04b04;color:#d04b04}.wds-button.wds-is-wykop-color.wds-is-text{background-color:transparent;color:#fb803f}.wds-button.wds-is-wykop-color.wds-is-text.wds-is-active,.wds-button.wds-is-wykop-color.wds-is-text:active,.wds-button.wds-is-wykop-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-wykop-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#d04b04}.wds-button.wds-is-weibo-color{background-color:#ff8140;border-color:#ff8140;color:#fff}.wds-button.wds-is-weibo-color.wds-is-active,.wds-button.wds-is-weibo-color:active,.wds-button.wds-is-weibo-color:focus:not(:disabled),.wds-button.wds-is-weibo-color:hover:not(:disabled){background-color:#d94a00;border-color:#d94a00}.wds-button.wds-is-weibo-color.wds-is-secondary{background-color:transparent;border-color:#ff8140;color:#ff8140}.wds-button.wds-is-weibo-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-weibo-color.wds-is-secondary:active,.wds-button.wds-is-weibo-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-weibo-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#d94a00;color:#d94a00}.wds-button.wds-is-weibo-color.wds-is-text{background-color:transparent;color:#ff8140}.wds-button.wds-is-weibo-color.wds-is-text.wds-is-active,.wds-button.wds-is-weibo-color.wds-is-text:active,.wds-button.wds-is-weibo-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-weibo-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#d94a00}.wds-button.wds-is-youtube-color{background-color:#cd201f;border-color:#cd201f;color:#fff}.wds-button.wds-is-youtube-color.wds-is-active,.wds-button.wds-is-youtube-color:active,.wds-button.wds-is-youtube-color:focus:not(:disabled),.wds-button.wds-is-youtube-color:hover:not(:disabled){background-color:#e86a6a;border-color:#e86a6a}.wds-button.wds-is-youtube-color.wds-is-secondary{background-color:transparent;border-color:#cd201f;color:#cd201f}.wds-button.wds-is-youtube-color.wds-is-secondary.wds-is-active,.wds-button.wds-is-youtube-color.wds-is-secondary:active,.wds-button.wds-is-youtube-color.wds-is-secondary:focus:not(:disabled),.wds-button.wds-is-youtube-color.wds-is-secondary:hover:not(:disabled){background-color:transparent;border-color:#e86a6a;color:#e86a6a}.wds-button-group>.wds-button:not(.wds-is-secondary):not(:last-child),.wds-button-group>.wds-dropdown:not(:last-child) .wds-button{border-right-color:#fff;border-right-width:1px;border-right-style:solid}.wds-button-group>.wds-button:not(.wds-is-secondary):not(:first-child),.wds-button-group>.wds-dropdown:not(:first-child) .wds-button{border-left-color:#fff;border-left-width:1px;border-left-style:solid}.wds-button.wds-is-youtube-color.wds-is-text{background-color:transparent;color:#cd201f}.wds-button.wds-is-youtube-color.wds-is-text.wds-is-active,.wds-button.wds-is-youtube-color.wds-is-text:active,.wds-button.wds-is-youtube-color.wds-is-text:focus:not(:disabled),.wds-button.wds-is-youtube-color.wds-is-text:hover:not(:disabled){background-color:transparent;color:#e86a6a}.wds-button-group{-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.wds-button-group>.wds-button{height:auto;margin-left:auto;margin-right:-1px}.wds-button-group>.wds-button:hover{z-index:1}.wds-dropdown{display:inline-block;position:relative}.wds-dropdown__toggle{cursor:default;position:relative}.wds-dropdown__toggle-chevron:not(:only-child){margin-left:5px}.wds-dropdown__content{background-color:#fff;border:1px solid #ccc;border-radius:4px;display:none;left:50%;min-width:70%;padding:7px 0;position:absolute;top:100%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);z-index:1}.wds-dropdown__content.wds-is-right-aligned{left:auto;right:0;-webkit-transform:none;-ms-transform:none;transform:none}.wds-dropdown__content.wds-is-left-aligned{left:0;-webkit-transform:none;-ms-transform:none;transform:none}.wds-dropdown__content:not(.wds-is-not-scrollable) .wds-list{background-image:radial-gradient(farthest-side at 50% 0,rgba(26,26,26,.12),transparent),radial-gradient(farthest-side at 50% 100%,rgba(26,26,26,.12),transparent);background-position:0 0,0 100%;background-repeat:no-repeat;background-size:100% 9px;max-height:270px;overflow-y:auto;position:relative;z-index:1}.wds-dropdown__content:not(.wds-is-not-scrollable) .wds-list:after,.wds-dropdown__content:not(.wds-is-not-scrollable) .wds-list:before{background-color:#fff;content:\"\";display:block;height:30px;margin:0 0 -30px;position:relative;z-index:-1}.wds-dropdown__content:not(.wds-is-not-scrollable) .wds-list:after{background-color:#fff;margin:-29px 0 0}.wds-dropdown__content.wds-is-not-scrollable .wds-list{position:relative}.wds-dropdown__content .wds-list{padding:0}.wds-dropdown__content .wds-list>li{margin:0 9px;padding-left:9px;padding-right:9px;white-space:nowrap}.wds-dropdown__content .wds-list.wds-is-linked>li{padding:0}.wds-dropdown__content .wds-list.wds-is-linked>li>a{color:#39424d;padding-left:9px;padding-right:9px;text-decoration:none;transition-duration:.2s;transition-property:background-color,color}.wds-dropdown__content .wds-list.wds-is-linked>li.wds-is-selected>a,.wds-dropdown__content .wds-list.wds-is-linked>li:hover>a{background-color:rgba(0,183,224,.1);color:#00b7e0}.wds-dropdown:after,.wds-dropdown:before{bottom:-1px;content:\"\";display:none;height:0;left:50%;pointer-events:none;position:absolute;width:0;z-index:2}.wds-dropdown:after{border:8px solid transparent;border-bottom-color:#fff;margin-left:-8px}.wds-dropdown:before{border:9px solid transparent;border-bottom-color:#ccc;margin-left:-9px}.wds-dropdown.wds-is-active:after,.wds-dropdown.wds-is-active:before,.wds-dropdown:hover:after,.wds-dropdown:hover:before{display:block}.wds-dropdown.wds-is-active .wds-dropdown__content,.wds-dropdown:hover .wds-dropdown__content{display:inline-block}.wds-dropdown.wds-is-active .wds-dropdown__toggle-chevron,.wds-dropdown:hover .wds-dropdown__toggle-chevron{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.wds-dropdown.wds-is-active.wds-has-dark-shadow:before,.wds-dropdown.wds-is-active.wds-has-shadow:before,.wds-dropdown:hover.wds-has-dark-shadow:before,.wds-dropdown:hover.wds-has-shadow:before{display:none}.wds-dropdown.wds-has-shadow .wds-dropdown__content{box-shadow:0 0 10px 0 rgba(26,26,26,.2)}.wds-dropdown.wds-has-dark-shadow .wds-dropdown__content{box-shadow:0 0 20px 0 rgba(26,26,26,.3)}.wds-dropdown.wds-has-dark-shadow .wds-dropdown__content,.wds-dropdown.wds-has-shadow .wds-dropdown__content{border:0}.wds-dropdown__content .wds-list.wds-is-linked .wds-dropdown-level-2{margin-right:0}.wds-dropdown__content .wds-list.wds-is-linked .wds-dropdown-level-2>a{padding-right:18px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.wds-dropdown__content .wds-list.wds-is-linked .wds-dropdown-level-2 .wds-dropdown-chevron{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);margin-left:18px}.wds-dropdown__content .wds-list.wds-is-linked .wds-dropdown-level-2.wds-is-sticked-to-parent{position:relative}.wds-dropdown__content .wds-list.wds-is-linked .wds-dropdown-level-2.wds-is-sticked-to-parent .wds-dropdown-level-2__content{top:auto;bottom:-8px}.wds-dropdown__content .wds-list.wds-is-linked .wds-dropdown-level-2 .wds-dropdown-level-2__content{background-color:#fff;border:1px solid #ccc;border-radius:4px;display:none;left:100%;padding:7px 0;position:absolute;top:-8px}.wds-dropdown__content .wds-list.wds-is-linked .wds-dropdown-level-2 .wds-dropdown-level-2__content .wds-list.wds-is-linked>li>a{font-size:12px}.wds-dropdown__content .wds-list.wds-is-linked .wds-dropdown-level-2.wds-is-active .wds-dropdown-level-2__content,.wds-dropdown__content .wds-list.wds-is-linked .wds-dropdown-level-2:hover .wds-dropdown-level-2__content{display:block}.wds-icon{fill:currentColor;height:24px;min-width:24px;width:24px}.wds-icon-small{height:18px;min-width:18px;width:18px}.wds-icon-tiny{height:12px;min-width:12px;width:12px}.wds-is-disabled{cursor:default;opacity:.5;pointer-events:none}.wds-is-hidden{display:none!important}.wds-list{list-style-type:none;margin:0;padding:7px 18px}.wds-list>li{font-size:14px;font-weight:400;line-height:1em;padding:11px 0}.wds-list.wds-has-big-items{padding-bottom:2px;padding-top:2px}.wds-list.wds-has-big-items>li{font-size:16px;padding-bottom:16px;padding-top:16px}.wds-list.wds-has-bolded-items>li{font-weight:700}.wds-list.wds-has-lines-between>li{border-bottom:1px solid #e6e6e6}.wds-list.wds-has-lines-between>li:last-child{border:0}.wds-list.wds-has-ellipsis.wds-is-linked>li>a,.wds-list.wds-has-ellipsis>li{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wds-list.wds-is-linked>li{padding:0}.wds-list.wds-is-linked>li>a{display:block;padding:11px 0}.wds-menu-chevron{float:right;margin-top:5px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);fill:#c5ced9}.wds-notifications__unread-mark{-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#00b7e0;border-radius:18px;border:1px solid #fff;color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:10px;height:18px;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;left:-2px;min-width:10px;padding:0 4px;position:absolute;top:7px}.wds-notifications__mark-all-as-read-button{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-top:-7px;width:100%}.wds-notifications__mark-all-as-read{color:#00b7e0;cursor:pointer;font-size:12px;font-weight:700;line-height:14px;padding:20px 18px 18px;text-transform:uppercase}.wds-notifications__dropdown-content{-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#666;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-size:14px;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;max-width:356px;min-height:80px;min-width:356px;width:100%}.wds-notifications__notification-list{box-sizing:border-box;overflow-y:auto;width:100%}.wds-notifications__dropdown-content .wds-notifications__notification-list.wds-list{max-height:420px}.wds-notifications__notification-list>li.wds-notification-card{white-space:normal}.wds-notifications__zero-state{display:block;padding:18px 18px 4px;color:#666}.wds-notification-card{padding:12px 0 8px;text-align:left}.wds-notification-card__icon-wrapper,.wds-notification-card__outer-body{cursor:pointer;display:-webkit-flex;display:-ms-flexbox;display:flex}.wds-notification-card__icon-wrapper{height:18px;margin-left:12px;min-width:18px;width:18px}.wds-notification-card__icon-wrapper .wds-icon{fill:#999;height:18px;min-width:inherit;width:18px}.wds-is-unread .wds-notification-card__icon-wrapper .wds-icon{fill:#00b7e0}.wds-notification-card__body{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;overflow-wrap:break-word;padding-left:12px;padding-right:12px;word-break:break-word;word-wrap:break-word}.wds-notification-card__text{color:#39424d;font-size:14px;line-height:18px;margin:0}.wds-notification-card__text b{font-weight:700}.wds-notification-card__snippet{color:#ccc;font-size:14px;font-style:italic;line-height:18px;margin:8px 0 0}.wds-notification-card__context-list{color:#999;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:12px;font-weight:700;list-style-type:none;margin:0;padding:8px 0 0}.wds-notification-card__community{max-width:150px;text-overflow:ellipsis}.wds-notification-card__context-item{overflow:hidden;white-space:nowrap}.wds-notification-card__context-separator{margin:0 8px}.wds-spinner{-webkit-animation:rotator .5s linear infinite;animation:rotator .5s linear infinite;left:50%;margin:-33px 0 0 -33px;position:absolute;top:50%;-webkit-transform:translateZ(0);transform:translateZ(0)}@-webkit-keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotator{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes dash{to{stroke-dashoffset:0}}@keyframes dash{to{stroke-dashoffset:0}}.wds-spinner__block{display:block;left:auto;margin:auto;position:relative}.wds-spinner__stroke{-webkit-backface-visibility:hidden;-webkit-animation:dash 1.25s linear infinite alternate-reverse;animation:dash 1.25s linear infinite alternate-reverse;stroke:#00b7e0}.wds-spinner__overlay{background:hsla(0,0%,100%,.5);bottom:0;left:0;position:fixed;right:0;top:0;z-index:800}.wds-spinner__screen-initializing{height:75vh}.wds-sign-out__button{background:0 0;border:none;color:inherit;cursor:pointer;font:inherit;height:auto;margin:0;padding:0;text-align:left;text-transform:none;width:auto}.wds-community-header__local-navigation a[href=\"#\"],.wds-tabs__tab{cursor:default}.wds-is-linked .wds-sign-out__button{box-sizing:border-box;display:block;padding:11px 9px;width:100%}.wds-sign-out__button:hover{background-color:rgba(0,183,224,.1);color:#00b7e0}.wds-sign-out__button.wds-is-active,.wds-sign-out__button:active,.wds-sign-out__button:focus:not(:disabled){background-color:transparent;color:inherit}.wds-tabs{-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style:none;margin:0;padding:0}.wds-tabs__tab{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;line-height:14px;position:relative}.wds-tabs__tab-label{-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#00b7e0;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;font-size:12px;font-weight:700;height:40px;margin:0 11px;text-align:center;text-decoration:none;text-transform:uppercase;transition:color .1s;white-space:nowrap}.wds-tabs__tab-label :not(:first-child):not(:only-child){margin-left:4px}.wds-tabs__tab-label>a{-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;height:100%;text-decoration:none}.wds-tabs__tab.wds-is-current{box-shadow:inset 0 -2px 0 0 #00b7e0;transition:box-shadow .1s}.wds-tabs__tab .wds-dropdown__content{left:-7px;-webkit-transform:none;-ms-transform:none;transform:none}.wds-tabs__tab.wds-is-active .wds-tabs__tab-label,.wds-tabs__tab.wds-is-active .wds-tabs__tab-label>a,.wds-tabs__tab:hover .wds-tabs__tab-label,.wds-tabs__tab:hover .wds-tabs__tab-label>a{color:#00647a}.wds-tabs__tab.wds-is-active.wds-is-current,.wds-tabs__tab:hover.wds-is-current{box-shadow:inset 0 -2px 0 0 #00647a}.wds-community-header{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;background-position:100%;background-repeat:no-repeat;background-size:contain;height:105px;position:relative;z-index:1}@media only screen and (max-width:1083px){.wds-community-header{height:115px}}.wds-community-header:before{content:\"\";display:block;height:100%;position:absolute;width:100%;z-index:-1}.wds-community-header__wordmark{float:left;height:65px;margin:20px 0 20px 20px;max-width:250px;width:auto}.wds-community-header__wordmark img{height:auto;max-height:100%;max-width:100%;width:auto}@media only screen and (max-width:1083px){.wds-community-header__wordmark{height:49px;margin-bottom:0;max-width:175px}}.wds-community-header__top-container{display:-webkit-flex;display:-ms-flexbox;display:flex;height:59px}.wds-community-header__sitename{-webkit-flex:1;-ms-flex:1;flex:1;font-size:28px;font-weight:600;line-height:1;margin:25px 0 0 18px;overflow:hidden}.wds-community-header__sitename a{text-decoration:none}@media only screen and (max-width:1083px){.wds-community-header__top-container{height:69px}.wds-community-header__sitename{font-size:24px;margin-top:20px;max-height:72px;white-space:normal;word-wrap:break-word}}@media only screen and (min-width:1084px){.wds-community-header__sitename a{display:inline-block;height:100%;line-height:1.2;text-decoration:none}.wds-community-header__sitename{text-overflow:ellipsis;white-space:nowrap}}.wds-community-header__counter{font-weight:600;text-align:right;margin:17px 0 20px 20px}.wds-community-header__counter-value{display:block;font-size:24px;line-height:1}@media only screen and (max-width:1083px){.wds-community-header__counter{margin-top:22px}.wds-community-header__counter-value{font-size:18px}}.wds-community-header__counter-label{display:block;font-size:12px;line-height:1;margin-top:3px;text-transform:uppercase}.wds-community-header__wiki-buttons{margin:20px 20px auto 15px}.wds-community-header__local-navigation{display:-webkit-flex;display:-ms-flexbox;display:flex;height:46px;padding-left:6px}.wds-community-header__local-navigation .wds-dropdown__toggle-chevron{opacity:.5}.wds-community-header__local-navigation .wds-dropdown:hover .wds-dropdown__toggle-chevron{opacity:1}@media only screen and (max-width:1083px){.wds-community-header__counter-label{font-size:10px}.wds-community-header__local-navigation{clear:both}}@media only screen and (max-width:1023px){.wds-community-header__local-navigation .wds-tabs__tab-label{font-size:10px}}.wds-global-footer{background-color:#39424d;box-sizing:border-box;color:#fff;margin-top:30px;word-wrap:break-word}.wds-global-footer *{box-sizing:inherit}.wds-global-footer ul{list-style-type:none;margin:0;padding:0}.wds-global-footer__header-wrapper{display:block;width:100%}.wds-global-footer__header{-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:0;padding:30px 0 25px}.wds-global-footer__bottom-bar{background:rgba(38,38,38,.5);font-size:12px;line-height:1.3em;min-height:50px;padding:0 20px;text-align:center}.wds-global-footer__bottom-bar a,.wds-global-footer__bottom-bar a:visited{color:#00b7e0;text-decoration:none}.wds-global-footer__bottom-bar a:hover{color:#fff}.wds-global-footer__bottom-bar-row{margin:0 auto}.wds-global-footer__bottom-bar-row.wds-has-border-top{border-top:1px solid #656e78}.wds-global-footer__bottom-bar-row.wds-has-padding{padding:16px 0}.wds-global-footer__button-link{display:inline-block;font-weight:700;letter-spacing:.3px;line-height:1.3em;min-height:45px;padding:14px 18px;text-decoration:none;text-transform:uppercase}.wds-global-footer__header-logo{height:35px;width:164px}.wds-global-footer__fandom-logo{fill:#fff;height:26px;width:122px}.wds-global-footer__wikia-logo{fill:#fff;height:26px;width:67px}.wds-global-footer__wikia-logo.wds-is-large{height:30px;padding:0;width:84px}.wds-global-footer__home-of-fandom{border-bottom:1px solid #c5ced9;border-top:1px solid #c5ced9;color:#7f90a1;display:block;font-size:12px;font-weight:700;letter-spacing:.5px;margin-left:13px;margin-top:5px;padding:3px 0;text-transform:uppercase;white-space:nowrap}.wds-global-footer__main{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.wds-global-footer__fandom-header,.wds-global-footer__wikia-header{margin:0}.wds-global-footer__fandom-sections,.wds-global-footer__wikia-sections{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.wds-global-footer__fandom-section,.wds-global-footer__wikia-section{border-top:4px solid #656e78;margin-right:55px;padding-top:8px}.wds-global-footer__link,.wds-global-footer__link:active,.wds-global-footer__link:focus,.wds-global-footer__link:visited{color:#c5ced9;font-size:14px;font-weight:400;line-height:1.3em;text-decoration:none}.wds-global-footer__link:hover{color:#fff}.wds-global-footer__links-list-item{margin-bottom:8px}.wds-global-footer__fandom-section.wds-is-fandom-overview{border:0;padding:0}.wds-global-footer__fandom-section.wds-is-fandom-overview .wds-global-footer__link{-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-top:4px solid #656e78;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:18px;font-weight:700;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0;padding:6px 0 28px;text-decoration:none}.wds-global-footer__fandom-section.wds-is-fandom-overview .wds-global-footer__link.wds-is-games{border-color:#94d11f}.wds-global-footer__fandom-section.wds-is-fandom-overview .wds-global-footer__link.wds-is-movies{border-color:#09d3bf}.wds-global-footer__fandom-section.wds-is-fandom-overview .wds-global-footer__link.wds-is-tv{border-color:#00b7e0}.wds-global-footer__fandom-section.wds-is-fandom-overview .wds-global-footer__image{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.wds-global-footer__fandom-section.wds-is-follow-us .wds-global-footer__links-list{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.wds-global-footer__fandom-section.wds-is-follow-us .wds-global-footer__link{background:50% no-repeat;background-size:24px;display:inline-block;height:24px;margin-right:20px;width:24px}.wds-global-footer__fandom-section.wds-is-follow-us .wds-global-footer__image{color:#656e78}.wds-global-footer__fandom-section.wds-is-follow-us .wds-global-footer__image:hover{color:#fff}.wds-global-footer__wikia-section.wds-is-create-wiki .wds-global-footer__link{border:1px solid #c5ced9;color:#c5ced9;display:inline-block;font-size:12px;font-weight:700;letter-spacing:.3px;line-height:1.3em;margin-top:13px;padding:14px 18px;text-decoration:none;text-transform:uppercase}.wds-global-footer__wikia-section.wds-is-create-wiki .wds-global-footer__link:hover{color:#fff}.wds-global-footer__wikia-section.wds-is-community-apps .wds-global-footer__links-list{display:-webkit-flex;display:-ms-flexbox;display:flex}.wds-global-footer__wikia-section.wds-is-community-apps .wds-global-footer__link{display:block;line-height:1.3em;margin-top:6px;width:119px}.wds-global-footer__wikia-section.wds-is-community-apps .wds-global-footer__image{height:35px;width:119px}.wds-global-footer__section-header{color:#fff;font-size:18px;font-weight:700;margin-bottom:10px;margin-top:0;min-height:24px;padding:0}.wds-global-footer__section-description{color:#fff;font-size:14px;line-height:1.3em;margin:0;padding:0}@media only screen and (max-width:1083px){.wds-global-footer__main{margin:0 20px}.wds-global-footer__fandom-header{margin-bottom:29px;margin-top:38px}.wds-global-footer__wikia-header{margin-bottom:29px;margin-top:61px}.wds-global-footer__fandom-section,.wds-global-footer__wikia-section{margin:0;width:100%}.wds-global-footer__fandom-section.wds-is-fandom-overview .wds-global-footer__links-list-item{margin-bottom:0}.wds-global-footer__fandom-section.wds-is-follow-us{margin-bottom:20px}.wds-global-footer__fandom-section.wds-is-follow-us .wds-global-footer__links-list-item{margin-bottom:0}.wds-global-footer__fandom-section.wds-is-follow-us .wds-global-footer__link{height:42px;margin-right:10px;width:42px}.wds-global-footer__wikia-section{margin-bottom:20px}.wds-global-footer__wikia-section.wds-is-company-overview{width:50%}.wds-global-footer__wikia-section.wds-is-site-overview{padding-top:42px;width:50%}.wds-global-footer__wikia-section.wds-is-create-wiki{display:none}.wds-global-footer__wikia-section.wds-is-community-apps .wds-global-footer__links-list{margin-bottom:0;margin-top:5px}.wds-global-footer__wikia-section.wds-is-community-apps .wds-global-footer__link{margin-right:25px}.wds-global-footer.wds-is-en .wds-global-footer__fandom-section.wds-is-follow-us{margin-bottom:0}.wds-global-footer__links-list-item{margin-bottom:20px}}@media only screen and (min-width:1084px){.wds-global-footer__main{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:0 auto;padding-bottom:40px;width:1024px}.wds-global-footer__bottom-bar{padding:0}.wds-global-footer__bottom-bar-row{width:1024px}.wds-global-footer__fandom-header,.wds-global-footer__wikia-header{height:26px;margin-bottom:35px;margin-top:47px}.wds-global-footer__header{padding:40px 0 35px}.wds-global-footer__fandom-header{-webkit-order:1;-ms-flex-order:1;order:1;width:25%}.wds-global-footer__fandom-sections{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-order:3;-ms-flex-order:3;order:3;width:25%}.wds-global-footer__wikia-header{-webkit-order:2;-ms-flex-order:2;order:2;width:75%}.wds-global-footer__wikia-sections{-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start;-webkit-order:4;-ms-flex-order:4;order:4;width:75%}.wds-global-footer__fandom-section{width:200px}.wds-global-footer__wikia-section{padding-bottom:8px}.wds-global-footer__wikia-section.wds-is-company-overview{margin-right:50px;min-height:210px;-webkit-order:1;-ms-flex-order:1;order:1;width:124px}.wds-global-footer__wikia-section.wds-is-site-overview{margin-right:50px;-webkit-order:4;-ms-flex-order:4;order:4;width:124px}.wds-global-footer__wikia-section.wds-is-community{min-height:210px;-webkit-order:2;-ms-flex-order:2;order:2;width:290px}.wds-global-footer__wikia-section.wds-is-create-wiki{display:block;-webkit-order:5;-ms-flex-order:5;order:5;width:290px}.wds-global-footer__wikia-section.wds-is-community-apps{margin-right:0;min-height:210px;-webkit-order:3;-ms-flex-order:3;order:3;width:200px}.wds-global-footer__wikia-section.wds-is-community-apps .wds-global-footer__links-list{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-top:5px}.wds-global-footer__wikia-section.wds-is-advertise{margin-right:0;-webkit-order:6;-ms-flex-order:6;order:6;width:200px}}.wds-global-navigation{background-color:#fff;border-image:linear-gradient(90deg,#39424d 40%,#656e78 0) 1 0 0;border-top:6px solid #656e78;border-width:6px 0 0;box-shadow:0 1px 0 0 #ccc;position:relative}.wds-global-navigation__dropdown-toggle{-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;height:49px;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.wds-global-navigation__dropdown-content{border-top:1px solid #ccc;color:#39424d;min-width:190px}.wds-global-navigation__content-bar{display:-webkit-flex;display:-ms-flexbox;display:flex;height:49px;margin:0 auto;position:relative;width:768px;z-index:1}.wds-global-navigation__account-menu,.wds-global-navigation__link,.wds-global-navigation__logo,.wds-global-navigation__notifications-menu,.wds-global-navigation__search,.wds-global-navigation__start-a-wiki,.wds-global-navigation__user-menu,.wds-global-navigation__wikis-menu{-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#fff;border-top:6px solid #656e78;color:#39424d;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:14px;height:49px;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:-6px;padding:0 8px;text-decoration:none;white-space:nowrap}.wds-global-navigation__account-menu,.wds-global-navigation__link,.wds-global-navigation__notifications-menu,.wds-global-navigation__user-menu,.wds-global-navigation__wikis-menu{transition-duration:.2s;transition-property:background-color,border-color,color}.wds-global-navigation__account-menu.wds-is-active,.wds-global-navigation__account-menu:active,.wds-global-navigation__account-menu:hover,.wds-global-navigation__link.wds-is-active,.wds-global-navigation__link:active,.wds-global-navigation__link:hover,.wds-global-navigation__notifications-menu.wds-is-active,.wds-global-navigation__notifications-menu:active,.wds-global-navigation__notifications-menu:hover,.wds-global-navigation__user-menu.wds-is-active,.wds-global-navigation__user-menu:active,.wds-global-navigation__user-menu:hover,.wds-global-navigation__wikis-menu.wds-is-active,.wds-global-navigation__wikis-menu:active,.wds-global-navigation__wikis-menu:hover{background-color:#656e78;border-color:#363b41;color:#fff}.wds-global-navigation__logo{border-top:6px solid #39424d}.wds-global-navigation__logo-fandom{height:100%;padding-bottom:4px;width:230px}.wds-global-navigation__logo-image{height:100%}.wds-global-navigation__logo-image.wds-is-wds-company-logo-fandom{fill:#39424d;padding-bottom:4px;width:120px}.wds-global-navigation__logo-image.wds-is-wds-company-logo-powered-by-wikia{border-bottom:2px solid #00d6d6;border-top:2px solid #00d6d6;height:10px;padding:1px 0;margin:0 1px 3px 11px;width:98px;zoom:1.0000001}.wds-global-navigation__logo-image.wds-is-wds-company-logo-wikia-org{width:105px}.wds-global-navigation__links-and-search{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:4 1 auto;-ms-flex:4 1 auto;flex:4 1 auto}.wds-global-navigation__link,.wds-global-navigation__wikis-menu{transition-duration:.2s;transition-property:background-color,color,font-size,padding,-webkit-flex;transition-property:background-color,color,flex,font-size,padding;transition-property:background-color,color,flex,font-size,padding,-webkit-flex,-ms-flex}.wds-global-navigation__link{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.wds-global-navigation__link.wds-is-games{border-color:#94d11f}.wds-global-navigation__link.wds-is-games.wds-is-active,.wds-global-navigation__link.wds-is-games:active{background-color:#94d11f;border-color:#75a518}.wds-global-navigation__link.wds-is-movies{border-color:#09d3bf}.wds-global-navigation__link.wds-is-movies.wds-is-active,.wds-global-navigation__link.wds-is-movies:active{background-color:#09d3bf;border-color:#07a293}.wds-global-navigation__link.wds-is-tv{border-color:#00b7e0}.wds-global-navigation__link.wds-is-tv.wds-is-active,.wds-global-navigation__link.wds-is-tv:active{background-color:#00b7e0;border-color:#008dad}.wds-global-navigation__search,.wds-global-navigation__wikis-menu{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto}.wds-global-navigation__search{transition:-webkit-flex .2s;transition:flex .2s;transition:flex .2s,-webkit-flex .2s,-ms-flex .2s}.wds-global-navigation__search-input-wrapper{border:solid transparent;border-width:0 0 1px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;height:28px;transition:border-bottom-color .2s}.wds-global-navigation__search-input-wrapper.wds-dropdown:after,.wds-global-navigation__search-input-wrapper.wds-dropdown:before,.wds-global-navigation__search-input-wrapper:hover:not(.wds-is-active) .wds-dropdown__content{display:none}.wds-global-navigation__search-label{-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;position:relative;z-index:2}.wds-global-navigation__search-label-icon{cursor:pointer;transition:color .2s;z-index:1}.wds-global-navigation__search-label-icon:hover{color:#00b7e0}.wds-global-navigation__search-input{-webkit-appearance:none;border:0;box-sizing:border-box;color:#333;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;font-size:14px;height:100%;left:0;max-width:100%;padding:3px 4px 3px 20px;position:absolute;right:0;top:0;transition:padding .2s;width:100%}.wds-global-navigation__search-input::-webkit-search-cancel-button,.wds-global-navigation__search-input::-webkit-search-decoration{display:none}.wds-global-navigation__search-input:focus{outline:0}.wds-global-navigation__search-input::-webkit-input-placeholder{color:transparent;opacity:1;transition:color .2s}.wds-global-navigation__search-input::-moz-placeholder{color:transparent;opacity:1;transition:color .2s}.wds-global-navigation__search-input:-ms-input-placeholder{color:transparent;opacity:1;transition:color .2s}.wds-global-navigation__search-input::placeholder{color:transparent;opacity:1;transition:color .2s}.wds-global-navigation__search-input::-ms-clear{display:none}.wds-global-navigation__search-close{margin:0;max-width:0;opacity:0;padding:0;transition-duration:50ms;transition-property:max-width,opacity,padding;z-index:2}.wds-global-navigation__search-close-icon{color:#999;display:block}.wds-global-navigation__search-submit{border-width:0;max-width:0;overflow:hidden;padding:0;transition-duration:50ms;transition-property:max-width,padding;z-index:2}.wds-global-navigation__search-submit-icon{display:block;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.wds-global-navigation__search-suggestions{border-top:0;border-top-left-radius:0;border-top-right-radius:0;left:0;right:0;top:calc(100% + 1px);-webkit-transform:none;-ms-transform:none;transform:none}.wds-global-navigation__account-menu-caption{display:none;margin-left:5px}.wds-global-navigation__account-menu-dropdown-caption{font-size:12px;padding-bottom:10px;text-align:center}.wds-global-navigation__notifications-menu{padding-right:0;position:relative;width:50px}.wds-global-navigation__notifications-menu-counter{-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#00b7e0;border:1px solid #fff;border-radius:9px;box-sizing:border-box;color:#fff;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:10px;height:18px;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;left:-1px;min-width:18px;padding:0 4px;position:absolute;top:8px}.wds-global-navigation.wds-search-is-active .wds-global-navigation__search-input-wrapper,.wds-global-navigation.wds-search-is-always-visible .wds-global-navigation__search-input-wrapper{border-bottom-color:#656e78}.wds-global-navigation.wds-search-is-active .wds-global-navigation__search-label-icon:hover,.wds-global-navigation.wds-search-is-always-visible .wds-global-navigation__search-label-icon:hover{color:#39424d}html[lang^=zh] .wds-global-navigation__start-a-wiki-button{font-size:12px;font-weight:400;padding:9px 12px 8px}.wds-global-navigation__start-a-wiki-icon{height:14px;min-width:14px;width:14px;display:none}.wds-global-navigation__partner-slot{border-left:1px solid #c5ced9;display:none;height:100%;max-width:80px;position:absolute;right:0;top:0}@media (min-width:1280px){.wds-global-navigation__partner-slot{-webkit-align-items:center;-ms-flex-align:center;align-items:center;display:-webkit-flex;display:-ms-flexbox;display:flex}}.wds-global-navigation.wds-search-is-active .wds-global-navigation__wikis-menu .wds-icon,.wds-global-navigation .wds-user-is-logged-in .wds-global-navigation__start-a-wiki-caption,.wds-global-navigation:not(.wds-search-is-active) .wds-global-navigation__search-suggestions{display:none}.wds-global-navigation__partner-slot-link{padding:10px}.wds-global-navigation__partner-slot-image{max-width:60px;max-height:29px;vertical-align:middle}.wds-global-navigation.wds-search-is-always-visible .wds-global-navigation__search-input{padding:3px 4px;position:relative;top:auto}.wds-global-navigation.wds-search-is-always-visible .wds-global-navigation__search-input::-webkit-input-placeholder{color:#39424d}.wds-global-navigation.wds-search-is-always-visible .wds-global-navigation__search-input::-moz-placeholder{color:#39424d}.wds-global-navigation.wds-search-is-always-visible .wds-global-navigation__search-input:-ms-input-placeholder{color:#39424d}.wds-global-navigation.wds-search-is-always-visible .wds-global-navigation__search-input::placeholder{color:#39424d}.wds-global-navigation.wds-search-is-always-visible .wds-global-navigation__link{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto}.wds-global-navigation.wds-search-is-always-visible .wds-global-navigation__search{-webkit-flex:1 1 0;-ms-flex:1 1 0px;flex:1 1 0}.wds-global-navigation.wds-search-is-active .wds-global-navigation__link,.wds-global-navigation.wds-search-is-active .wds-global-navigation__wikis-menu{color:transparent;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;font-size:0;padding:0}.wds-global-navigation.wds-search-is-active .wds-global-navigation__search{-webkit-flex:2 1 auto;-ms-flex:2 1 auto;flex:2 1 auto}.wds-global-navigation.wds-search-is-active .wds-global-navigation__search-input-wrapper.wds-is-active{border-bottom-color:#00b7e0}.wds-global-navigation.wds-search-is-active .wds-global-navigation__search-input::-webkit-input-placeholder{color:#999}.wds-global-navigation.wds-search-is-active .wds-global-navigation__search-input::-moz-placeholder{color:#999}.wds-global-navigation.wds-search-is-active .wds-global-navigation__search-input:-ms-input-placeholder{color:#999}.wds-global-navigation.wds-search-is-active .wds-global-navigation__search-input::placeholder{color:#999}.wds-global-navigation.wds-search-is-active .wds-global-navigation__search-close{max-width:24px;opacity:1;padding-right:8px;transition-delay:.15s}.wds-global-navigation.wds-search-is-active .wds-global-navigation__search-submit{max-width:100%;padding:5px 9px;transition:background-color .3s,border-color .3s,color .3s,max-width 50ms .15s,opacity .3s,padding 50ms .15s}.wds-global-navigation .wds-user-is-logged-in .wds-global-navigation__start-a-wiki-icon{display:inline}@media only screen and (min-width:1024px){.wds-global-navigation__search-input{padding:3px 4px;position:relative;top:auto}.wds-global-navigation__search-label-icon:hover{color:#39424d}.wds-global-navigation__search-input::-webkit-input-placeholder{color:#39424d}.wds-global-navigation__search-input::-moz-placeholder{color:#39424d}.wds-global-navigation__search-input:-ms-input-placeholder{color:#39424d}.wds-global-navigation__search-input::placeholder{color:#39424d}.wds-global-navigation__content-bar{width:1004px}.wds-global-navigation__wikis-menu{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}.wds-global-navigation__search{-webkit-flex:2 1 auto;-ms-flex:2 1 auto;flex:2 1 auto}.wds-global-navigation__search-input-wrapper{border-bottom:1px solid #656e78}.wds-global-navigation__account-menu-caption,.wds-global-navigation__start-a-wiki-caption{display:inline}.wds-global-navigation__start-a-wiki-icon{display:none}.wds-global-navigation .wds-user-is-logged-in .wds-global-navigation__start-a-wiki-caption{display:inline}.wds-global-navigation .wds-user-is-logged-in .wds-global-navigation__start-a-wiki-icon{display:none}}@media only screen and (min-width:1084px){.wds-global-navigation__content-bar{width:1064px}}@media only screen and (min-width:1596px){.wds-global-navigation__content-bar{width:1238px}}", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = equal;
function equal(a, b) {
    return a === b;
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EVENTS = undefined;

var _FandomGlobalHeader = __webpack_require__(14);

var _FandomGlobalHeader2 = _interopRequireDefault(_FandomGlobalHeader);

var _FandomGlobalFooter = __webpack_require__(35);

var _FandomGlobalFooter2 = _interopRequireDefault(_FandomGlobalFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EVENTS = exports.EVENTS = {
    HEADER: _FandomGlobalHeader.EVENTS
};

exports.default = function () {
    customElements.define('fandom-global-header', _FandomGlobalHeader2.default);
    customElements.define('fandom-global-footer', _FandomGlobalFooter2.default);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EVENTS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(3);

var _headroom = __webpack_require__(15);

var _headroom2 = _interopRequireDefault(_headroom);

var _header = __webpack_require__(16);

var _header2 = _interopRequireDefault(_header);

var _anon = __webpack_require__(17);

var _anon2 = _interopRequireDefault(_anon);

var _user = __webpack_require__(18);

var _user2 = _interopRequireDefault(_user);

var _userLink = __webpack_require__(19);

var _userLink2 = _interopRequireDefault(_userLink);

var _userMenuLogout = __webpack_require__(20);

var _userMenuLogout2 = _interopRequireDefault(_userMenuLogout);

var _AttributeHelper = __webpack_require__(6);

var _AttributeHelper2 = _interopRequireDefault(_AttributeHelper);

var _getStrings = __webpack_require__(7);

var _getStrings2 = _interopRequireDefault(_getStrings);

var _userData = __webpack_require__(33);

var _getOrCreateTemplate = __webpack_require__(8);

var _getOrCreateTemplate2 = _interopRequireDefault(_getOrCreateTemplate);

var _sprite = __webpack_require__(9);

var _sprite2 = _interopRequireDefault(_sprite);

var _styles = __webpack_require__(10);

var _styles2 = _interopRequireDefault(_styles);

var _style = __webpack_require__(34);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var headroomElementSelector = 'header.wds-global-navigation';

var CSS_CLASSES = {
    HEADROOM_PINNED: 'headroom--pinned',
    HEADROOM_UNPINNED: 'headroom--unpinned',
    HIDDEN: 'hidden',
    SEARCH_ACTIVE: 'wds-search-is-active',
    USER_LOGGED_IN: 'wds-user-is-logged-in'
};

var ATTRIBUTES = {
    HIDE_SEARCH: 'hide-search',
    USER_DATA: 'user-data'
};

var HEADROOM_OPTIONS = {
    offset: 0,
    tolerance: {
        up: 5,
        down: 0
    },
    classes: {
        pinned: CSS_CLASSES.HEADROOM_PINNED,
        unpinned: CSS_CLASSES.HEADROOM_UNPINNED
    }
};

var EVENTS = exports.EVENTS = {
    CLICK_CREATE_WIKI: 'click-create-wiki',
    CLICK_LOGO: 'click-logo',
    CLICK_REGISTER: 'click-register',
    CLICK_SIGN_IN: 'click-sign-in',
    CLICK_VERTICAL_GAMES: 'click-vertical-games',
    CLICK_VERTICAL_MOVIES: 'click-vertical-movies',
    CLICK_VERTICAL_TV: 'click-vertical-tv',
    CLICK_MESSAGE_WALL: 'click-message-wall',
    CLICK_WIKIS_CENTRAL: 'click-wikis-central',
    CLICK_WIKIS_EXPLORE: 'click-wikis-explore',
    CLICK_WIKIS_UNIVERSITY: 'click-wikis-university',
    PIN_HEADROOM: 'pin-headroom',
    SUBMIT_LOGOUT: 'submit-logout',
    SUBMIT_SEARCH: 'submit-search',
    UNPIN_HEADROOM: 'unpin-headroom'
};

var FandomGlobalHeader = function (_HTMLElement) {
    _inherits(FandomGlobalHeader, _HTMLElement);

    function FandomGlobalHeader() {
        _classCallCheck(this, FandomGlobalHeader);

        return _possibleConstructorReturn(this, (FandomGlobalHeader.__proto__ || Object.getPrototypeOf(FandomGlobalHeader)).apply(this, arguments));
    }

    _createClass(FandomGlobalHeader, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            var _this2 = this;

            this.rootElement = this.attachShadow({ mode: 'open' });
            this.atts = new _AttributeHelper2.default(this);
            this.strings = (0, _getStrings2.default)(this.atts.langCode);
            this.headroom = null;

            this._draw();
            this.headroom = new _headroom2.default(this.rootElement.querySelector(headroomElementSelector), this._buildHeadroomOptions());
            var userData = (0, _userData.validateUserData)(this.atts.getAsJson(ATTRIBUTES.USER_DATA));
            this._updateUserData(userData);
            this._bindSearchActions();

            this._fetchNavInfo().then(function (json) {
                _this2._updateNavLinks(json);
                var userLinks = json.user && json.user.links;

                if (!userData) {
                    _this2._updateUserData((0, _userData.fromNavResponse)(json), userLinks);
                } else if (userLinks) {
                    _this2._bindUserActions(userLinks);
                }
            });
        }
    }, {
        key: 'refreshUserData',
        value: function refreshUserData() {
            var _this3 = this;

            this._fetchNavInfo().then(function (json) {
                return _this3._updateUserData((0, _userData.fromNavResponse)(json));
            });
        }
    }, {
        key: '_fetchNavInfo',
        value: function _fetchNavInfo() {
            // return fetch(`${this.atts.mwBase}/api/v1/design-system/fandoms/2/${this.atts.langCode}/global-navigation`, { credentials: 'same-origin' })
            return fetch(this.atts.mwBase + '/api/v1/design-system/wikis/831/en/global-navigation', { credentials: 'same-origin' }).then(function (response) {
                return response.json();
            });
        }
    }, {
        key: '_draw',
        value: function _draw() {
            var content = (0, _header2.default)({
                strings: this.strings,
                classes: {
                    searchForm: this.atts.getAsBool(ATTRIBUTES.HIDE_SEARCH) ? CSS_CLASSES.HIDDEN : ''
                }
            });

            var css = '<style>' + _styles2.default.toString() + ' ' + _style2.default.toString() + '</style>';
            var template = (0, _getOrCreateTemplate2.default)('fandomGlobalHeader', css + _sprite2.default + content);

            ShadyCSS.prepareTemplate(template, 'fandom-global-header');
            ShadyCSS.styleElement(this);
            this.rootElement.appendChild(document.importNode(template.content, true));
        }
    }, {
        key: '_buildHeadroomOptions',
        value: function _buildHeadroomOptions() {
            var _this4 = this;

            var headerHeight = this.rootElement.querySelector('.wds-global-navigation').offsetHeight;
            this.rootElement.querySelector('.wds-global-navigation__wrapper').style.height = headerHeight + 'px';

            return Object.assign({}, HEADROOM_OPTIONS, {
                offset: headerHeight,
                onUnpin: function onUnpin() {
                    var activeSearch = _this4.rootElement.querySelector('.' + CSS_CLASSES.SEARCH_ACTIVE);
                    if (activeSearch) {
                        var classes = _this4.rootElement.querySelector(headroomElementSelector).classList;
                        classes.add(CSS_CLASSES.HEADROOM_PINNED);
                        classes.remove(CSS_CLASSES.HEADROOM_UNPINNED);
                    } else {
                        _this4.dispatchEvent(new CustomEvent(EVENTS.UNPIN_HEADROOM));
                    }
                },
                onPin: function onPin() {
                    _this4.dispatchEvent(new CustomEvent(EVENTS.PIN_HEADROOM));
                }
            });
        }
    }, {
        key: '_bindAnonActions',
        value: function _bindAnonActions() {
            var _this5 = this;

            this.rootElement.querySelector('.wds-global-navigation__account-menu .anon-sign-in').addEventListener('click', function () {
                _this5.dispatchEvent(new CustomEvent(EVENTS.CLICK_SIGN_IN));
            });
            this.rootElement.querySelector('.wds-global-navigation__account-menu .anon-register').addEventListener('click', function () {
                _this5.dispatchEvent(new CustomEvent(EVENTS.CLICK_REGISTER));
            });
        }
    }, {
        key: '_bindUserActions',
        value: function _bindUserActions(enabledLinks) {
            var _this6 = this;

            var children = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = enabledLinks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var link = _step.value;

                    if (link.tracking_label === 'account.sign-out') {
                        continue;
                    }

                    children.push((0, _userLink2.default)({
                        'link-target': link.href,
                        'link-action': link.tracking_label,
                        'link-text': this.strings[link.title.key]
                    }));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            children.push((0, _userMenuLogout2.default)({
                'button-text': this.strings['global-navigation-user-sign-out']
            }));

            var menu = this.rootElement.querySelector('.wds-global-navigation__user-menu .wds-global-navigation__dropdown-content .wds-list');
            menu.innerHTML = children.join('');

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Array.from(menu.querySelectorAll('a'))[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _link = _step2.value;

                    this._updateLink(_link, _link.getAttribute('href'), 'click-user-' + _link.getAttribute('data-action'));
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            this.rootElement.querySelector('.wds-global-navigation__user-menu .global-navigation-user-sign-out form').addEventListener('submit', function (e) {
                e.preventDefault();
                _this6.dispatchEvent(new CustomEvent(EVENTS.SUBMIT_LOGOUT));
            });
        }
    }, {
        key: '_bindSearchActions',
        value: function _bindSearchActions() {
            var _this7 = this;

            var container = this.rootElement.querySelector('.wds-global-navigation');
            var searchForm = this.rootElement.querySelector('.wds-global-navigation__search');
            var input = searchForm.querySelector('input[name=query]');
            var keypressWrapper = function keypressWrapper(e) {
                if (e.key === 'Escape') {
                    container.classList.remove(CSS_CLASSES.SEARCH_ACTIVE);
                    input.blur();
                }
            };

            searchForm.addEventListener('submit', function (e) {
                e.preventDefault();
                _this7.dispatchEvent(new CustomEvent(EVENTS.SUBMIT_SEARCH, { detail: { query: input.value } }));
            });

            input.addEventListener('focus', function () {
                container.classList.add(CSS_CLASSES.SEARCH_ACTIVE);
                document.addEventListener('keyup', keypressWrapper);
            });

            input.addEventListener('blur', function () {
                container.classList.remove(CSS_CLASSES.SEARCH_ACTIVE);
                document.removeEventListener('keyup', keypressWrapper);
            });
        }
    }, {
        key: '_updateUserData',
        value: function _updateUserData() {
            var userData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var enabledLinks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var menu = this.rootElement.querySelector('.user-menu');
            var startWiki = this.rootElement.querySelector('.wds-global-navigation__start-a-wiki');

            if (userData === null) {
                menu.innerHTML = (0, _anon2.default)({ strings: this.strings });
                startWiki.classList.remove(CSS_CLASSES.USER_LOGGED_IN);
                this._bindAnonActions();
                this.headroom.destroy();
                return;
            }

            menu.innerHTML = (0, _user2.default)({ strings: this.strings, user: userData });
            startWiki.classList.add(CSS_CLASSES.USER_LOGGED_IN);
            this._bindUserActions(enabledLinks);
            this.headroom.init();
        }
    }, {
        key: '_updateNavLinks',
        value: function _updateNavLinks(json) {
            this._updateLink('a.wds-global-navigation__start-a-wiki-button', json.create_wiki.header.href, EVENTS.CLICK_CREATE_WIKI);
            this._updateLink('a.wds-global-navigation__logo', json.logo.header.href, EVENTS.CLICK_LOGO);
            this._updateLink('a.wds-global-navigation__link.wds-is-games', json.fandom_overview.links[0].href, EVENTS.CLICK_VERTICAL_GAMES);
            this._updateLink('a.wds-global-navigation__link.wds-is-movies', json.fandom_overview.links[1].href, EVENTS.CLICK_VERTICAL_MOVIES);
            this._updateLink('a.wds-global-navigation__link.wds-is-tv', json.fandom_overview.links[2].href, EVENTS.CLICK_VERTICAL_TV);
            this._updateLink('.wds-global-navigation__wikis-menu .wds-dropdown__content a.explore-link', json.wikis.links[0].href, EVENTS.CLICK_WIKIS_EXPLORE);
            this._updateLink('.wds-global-navigation__wikis-menu .wds-dropdown__content a.central-link', json.wikis.links[1].href, EVENTS.CLICK_WIKIS_CENTRAL);
            this._updateLink('.wds-global-navigation__wikis-menu .wds-dropdown__content a.university-link', json.wikis.links[2].href, EVENTS.CLICK_WIKIS_UNIVERSITY);
        }
    }, {
        key: '_updateLink',
        value: function _updateLink(selectorOrComponent, href, eventName) {
            var _this8 = this;

            var component = typeof selectorOrComponent === 'string' ? this.rootElement.querySelector(selectorOrComponent) : selectorOrComponent;

            if (component) {
                if (href) {
                    component.setAttribute('href', href);
                }

                component.addEventListener('click', function (e) {
                    _this8.dispatchEvent(new CustomEvent(eventName, { detail: { href: href, originalEvent: e } }));
                });
            }
        }
    }]);

    return FandomGlobalHeader;
}(HTMLElement);

exports.default = FandomGlobalHeader;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

(function(root, factory) {
  'use strict';

  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  else if (typeof exports === 'object') {
    // COMMONJS
    module.exports = factory();
  }
  else {
    // BROWSER
    root.Headroom = factory();
  }
}(this, function() {
  'use strict';

  /* exported features */
  
  var features = {
    bind : !!(function(){}.bind),
    classList : 'classList' in document.documentElement,
    rAF : !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame)
  };
  window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
  
  /**
   * Handles debouncing of events via requestAnimationFrame
   * @see http://www.html5rocks.com/en/tutorials/speed/animations/
   * @param {Function} callback The callback to handle whichever event
   */
  function Debouncer (callback) {
    this.callback = callback;
    this.ticking = false;
  }
  Debouncer.prototype = {
    constructor : Debouncer,
  
    /**
     * dispatches the event to the supplied callback
     * @private
     */
    update : function() {
      this.callback && this.callback();
      this.ticking = false;
    },
  
    /**
     * ensures events don't get stacked
     * @private
     */
    requestTick : function() {
      if(!this.ticking) {
        requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));
        this.ticking = true;
      }
    },
  
    /**
     * Attach this as the event listeners
     */
    handleEvent : function() {
      this.requestTick();
    }
  };
  /**
   * Check if object is part of the DOM
   * @constructor
   * @param {Object} obj element to check
   */
  function isDOMElement(obj) {
    return obj && typeof window !== 'undefined' && (obj === window || obj.nodeType);
  }
  
  /**
   * Helper function for extending objects
   */
  function extend (object /*, objectN ... */) {
    if(arguments.length <= 0) {
      throw new Error('Missing arguments in extend function');
    }
  
    var result = object || {},
        key,
        i;
  
    for (i = 1; i < arguments.length; i++) {
      var replacement = arguments[i] || {};
  
      for (key in replacement) {
        // Recurse into object except if the object is a DOM element
        if(typeof result[key] === 'object' && ! isDOMElement(result[key])) {
          result[key] = extend(result[key], replacement[key]);
        }
        else {
          result[key] = result[key] || replacement[key];
        }
      }
    }
  
    return result;
  }
  
  /**
   * Helper function for normalizing tolerance option to object format
   */
  function normalizeTolerance (t) {
    return t === Object(t) ? t : { down : t, up : t };
  }
  
  /**
   * UI enhancement for fixed headers.
   * Hides header when scrolling down
   * Shows header when scrolling up
   * @constructor
   * @param {DOMElement} elem the header element
   * @param {Object} options options for the widget
   */
  function Headroom (elem, options) {
    options = extend(options, Headroom.options);
  
    this.lastKnownScrollY = 0;
    this.elem             = elem;
    this.tolerance        = normalizeTolerance(options.tolerance);
    this.classes          = options.classes;
    this.offset           = options.offset;
    this.scroller         = options.scroller;
    this.initialised      = false;
    this.onPin            = options.onPin;
    this.onUnpin          = options.onUnpin;
    this.onTop            = options.onTop;
    this.onNotTop         = options.onNotTop;
    this.onBottom         = options.onBottom;
    this.onNotBottom      = options.onNotBottom;
  }
  Headroom.prototype = {
    constructor : Headroom,
  
    /**
     * Initialises the widget
     */
    init : function() {
      if(!Headroom.cutsTheMustard) {
        return;
      }
  
      this.debouncer = new Debouncer(this.update.bind(this));
      this.elem.classList.add(this.classes.initial);
  
      // defer event registration to handle browser
      // potentially restoring previous scroll position
      setTimeout(this.attachEvent.bind(this), 100);
  
      return this;
    },
  
    /**
     * Unattaches events and removes any classes that were added
     */
    destroy : function() {
      var classes = this.classes;
  
      this.initialised = false;
  
      for (var key in classes) {
        if(classes.hasOwnProperty(key)) {
          this.elem.classList.remove(classes[key]);
        }
      }
  
      this.scroller.removeEventListener('scroll', this.debouncer, false);
    },
  
    /**
     * Attaches the scroll event
     * @private
     */
    attachEvent : function() {
      if(!this.initialised){
        this.lastKnownScrollY = this.getScrollY();
        this.initialised = true;
        this.scroller.addEventListener('scroll', this.debouncer, false);
  
        this.debouncer.handleEvent();
      }
    },
  
    /**
     * Unpins the header if it's currently pinned
     */
    unpin : function() {
      var classList = this.elem.classList,
        classes = this.classes;
  
      if(classList.contains(classes.pinned) || !classList.contains(classes.unpinned)) {
        classList.add(classes.unpinned);
        classList.remove(classes.pinned);
        this.onUnpin && this.onUnpin.call(this);
      }
    },
  
    /**
     * Pins the header if it's currently unpinned
     */
    pin : function() {
      var classList = this.elem.classList,
        classes = this.classes;
  
      if(classList.contains(classes.unpinned)) {
        classList.remove(classes.unpinned);
        classList.add(classes.pinned);
        this.onPin && this.onPin.call(this);
      }
    },
  
    /**
     * Handles the top states
     */
    top : function() {
      var classList = this.elem.classList,
        classes = this.classes;
  
      if(!classList.contains(classes.top)) {
        classList.add(classes.top);
        classList.remove(classes.notTop);
        this.onTop && this.onTop.call(this);
      }
    },
  
    /**
     * Handles the not top state
     */
    notTop : function() {
      var classList = this.elem.classList,
        classes = this.classes;
  
      if(!classList.contains(classes.notTop)) {
        classList.add(classes.notTop);
        classList.remove(classes.top);
        this.onNotTop && this.onNotTop.call(this);
      }
    },
  
    bottom : function() {
      var classList = this.elem.classList,
        classes = this.classes;
  
      if(!classList.contains(classes.bottom)) {
        classList.add(classes.bottom);
        classList.remove(classes.notBottom);
        this.onBottom && this.onBottom.call(this);
      }
    },
  
    /**
     * Handles the not top state
     */
    notBottom : function() {
      var classList = this.elem.classList,
        classes = this.classes;
  
      if(!classList.contains(classes.notBottom)) {
        classList.add(classes.notBottom);
        classList.remove(classes.bottom);
        this.onNotBottom && this.onNotBottom.call(this);
      }
    },
  
    /**
     * Gets the Y scroll position
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY
     * @return {Number} pixels the page has scrolled along the Y-axis
     */
    getScrollY : function() {
      return (this.scroller.pageYOffset !== undefined)
        ? this.scroller.pageYOffset
        : (this.scroller.scrollTop !== undefined)
          ? this.scroller.scrollTop
          : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    },
  
    /**
     * Gets the height of the viewport
     * @see http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
     * @return {int} the height of the viewport in pixels
     */
    getViewportHeight : function () {
      return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    },
  
    /**
     * Gets the physical height of the DOM element
     * @param  {Object}  elm the element to calculate the physical height of which
     * @return {int}     the physical height of the element in pixels
     */
    getElementPhysicalHeight : function (elm) {
      return Math.max(
        elm.offsetHeight,
        elm.clientHeight
      );
    },
  
    /**
     * Gets the physical height of the scroller element
     * @return {int} the physical height of the scroller element in pixels
     */
    getScrollerPhysicalHeight : function () {
      return (this.scroller === window || this.scroller === document.body)
        ? this.getViewportHeight()
        : this.getElementPhysicalHeight(this.scroller);
    },
  
    /**
     * Gets the height of the document
     * @see http://james.padolsey.com/javascript/get-document-height-cross-browser/
     * @return {int} the height of the document in pixels
     */
    getDocumentHeight : function () {
      var body = document.body,
        documentElement = document.documentElement;
  
      return Math.max(
        body.scrollHeight, documentElement.scrollHeight,
        body.offsetHeight, documentElement.offsetHeight,
        body.clientHeight, documentElement.clientHeight
      );
    },
  
    /**
     * Gets the height of the DOM element
     * @param  {Object}  elm the element to calculate the height of which
     * @return {int}     the height of the element in pixels
     */
    getElementHeight : function (elm) {
      return Math.max(
        elm.scrollHeight,
        elm.offsetHeight,
        elm.clientHeight
      );
    },
  
    /**
     * Gets the height of the scroller element
     * @return {int} the height of the scroller element in pixels
     */
    getScrollerHeight : function () {
      return (this.scroller === window || this.scroller === document.body)
        ? this.getDocumentHeight()
        : this.getElementHeight(this.scroller);
    },
  
    /**
     * determines if the scroll position is outside of document boundaries
     * @param  {int}  currentScrollY the current y scroll position
     * @return {bool} true if out of bounds, false otherwise
     */
    isOutOfBounds : function (currentScrollY) {
      var pastTop  = currentScrollY < 0,
        pastBottom = currentScrollY + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
  
      return pastTop || pastBottom;
    },
  
    /**
     * determines if the tolerance has been exceeded
     * @param  {int} currentScrollY the current scroll y position
     * @return {bool} true if tolerance exceeded, false otherwise
     */
    toleranceExceeded : function (currentScrollY, direction) {
      return Math.abs(currentScrollY-this.lastKnownScrollY) >= this.tolerance[direction];
    },
  
    /**
     * determine if it is appropriate to unpin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should unpin, false otherwise
     */
    shouldUnpin : function (currentScrollY, toleranceExceeded) {
      var scrollingDown = currentScrollY > this.lastKnownScrollY,
        pastOffset = currentScrollY >= this.offset;
  
      return scrollingDown && pastOffset && toleranceExceeded;
    },
  
    /**
     * determine if it is appropriate to pin
     * @param  {int} currentScrollY the current y scroll position
     * @param  {bool} toleranceExceeded has the tolerance been exceeded?
     * @return {bool} true if should pin, false otherwise
     */
    shouldPin : function (currentScrollY, toleranceExceeded) {
      var scrollingUp  = currentScrollY < this.lastKnownScrollY,
        pastOffset = currentScrollY <= this.offset;
  
      return (scrollingUp && toleranceExceeded) || pastOffset;
    },
  
    /**
     * Handles updating the state of the widget
     */
    update : function() {
      var currentScrollY  = this.getScrollY(),
        scrollDirection = currentScrollY > this.lastKnownScrollY ? 'down' : 'up',
        toleranceExceeded = this.toleranceExceeded(currentScrollY, scrollDirection);
  
      if(this.isOutOfBounds(currentScrollY)) { // Ignore bouncy scrolling in OSX
        return;
      }
  
      if (currentScrollY <= this.offset ) {
        this.top();
      } else {
        this.notTop();
      }
  
      if(currentScrollY + this.getViewportHeight() >= this.getScrollerHeight()) {
        this.bottom();
      }
      else {
        this.notBottom();
      }
  
      if(this.shouldUnpin(currentScrollY, toleranceExceeded)) {
        this.unpin();
      }
      else if(this.shouldPin(currentScrollY, toleranceExceeded)) {
        this.pin();
      }
  
      this.lastKnownScrollY = currentScrollY;
    }
  };
  /**
   * Default options
   * @type {Object}
   */
  Headroom.options = {
    tolerance : {
      up : 0,
      down : 0
    },
    offset : 0,
    scroller: window,
    classes : {
      pinned : 'headroom--pinned',
      unpinned : 'headroom--unpinned',
      top : 'headroom--top',
      notTop : 'headroom--not-top',
      bottom : 'headroom--bottom',
      notBottom : 'headroom--not-bottom',
      initial : 'headroom'
    }
  };
  Headroom.cutsTheMustard = typeof features !== 'undefined' && features.rAF && features.bind && features.classList;

  return Headroom;
}));

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"wds-global-navigation__wrapper\">\n  <header class=\"wds-global-navigation\">\n    <div class=\"wds-global-navigation__content-bar\">\n      <a class=\"wds-global-navigation__logo\" href=\"http://fandom.wikia.com\">\n        <svg class=\"wds-global-navigation__logo-image wds-is-wds-company-logo-fandom\">\n          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#wds-company-logo-fandom\"></use>\n        </svg>\n        <svg class=\"wds-global-navigation__logo-image wds-is-wds-company-logo-powered-by-wikia\">\n          <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#wds-company-logo-powered-by-wikia\"></use>\n        </svg>\n      </a>\n      <div class=\"wds-global-navigation__links-and-search\">\n        <a class=\"wds-global-navigation__link wds-is-games\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-fandom-overview-link-vertical-games"] : stack1), depth0))
    + "</a>\n        <a class=\"wds-global-navigation__link wds-is-movies\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-fandom-overview-link-vertical-movies"] : stack1), depth0))
    + "</a>\n        <a class=\"wds-global-navigation__link wds-is-tv\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-fandom-overview-link-vertical-tv"] : stack1), depth0))
    + "</a>\n        <div class=\"wds-global-navigation__wikis-menu wds-dropdown\">\n          <div class=\"wds-global-navigation__dropdown-toggle wds-dropdown__toggle\">\n            <span>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-wikis-header"] : stack1), depth0))
    + "</span>\n            <svg class=\"wds-icon wds-icon-tiny wds-dropdown__toggle-chevron\">\n              <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#wds-icons-dropdown-tiny\"></use>\n            </svg>\n          </div>\n          <div class=\"wds-global-navigation__dropdown-content wds-dropdown__content\">\n            <ul class=\"wds-is-linked wds-list\">\n              <li>\n                <a class=\"wds-global-navigation__dropdown-link explore-link\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-wikis-explore"] : stack1), depth0))
    + "</a>\n              </li>\n              <li>\n                <a class=\"wds-global-navigation__dropdown-link central-link\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-wikis-community-central"] : stack1), depth0))
    + "</a>\n              </li>\n              <li>\n                <a class=\"wds-global-navigation__dropdown-link university-link\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-wikis-fandom-university"] : stack1), depth0))
    + "</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <form class=\"wds-global-navigation__search "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.classes : depth0)) != null ? stack1.searchForm : stack1), depth0))
    + "\">\n          <div class=\"wds-global-navigation__search-input-wrapper wds-dropdown \">\n            <label class=\"wds-dropdown__toggle wds-global-navigation__search-label\">\n              <svg class=\"wds-icon wds-icon-small wds-global-navigation__search-label-icon\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#wds-icons-magnifying-glass\"></use>\n              </svg>\n              <input type=\"search\" name=\"query\" placeholder=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-search-placeholder-inactive"] : stack1), depth0))
    + "\" autocomplete=\"off\" class=\"wds-global-navigation__search-input\">\n            </label>\n            <button class=\"wds-button wds-is-text wds-global-navigation__search-close\" type=\"reset\">\n              <svg class=\"wds-icon wds-icon-small wds-global-navigation__search-close-icon\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#wds-icons-cross\"></use>\n              </svg>\n            </button>\n            <div class=\"wds-dropdown__content wds-global-navigation__search-suggestions\">\n              <ul class=\"wds-has-ellipsis wds-is-linked wds-list\"></ul>\n            </div>\n            <button class=\"wds-button wds-global-navigation__search-submit\" type=\"button\" disabled>\n              <svg class=\"wds-icon wds-icon-small wds-global-navigation__search-submit-icon\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#wds-icons-arrow\"></use>\n              </svg>\n            </button>\n          </div>\n        </form>\n      </div>\n      <div class=\"user-menu\"></div>\n      <div class=\"wds-global-navigation__start-a-wiki\">\n        <a class=\"wds-global-navigation__start-a-wiki-button wds-button wds-is-squished wds-is-secondary\">\n          <span class=\"wds-global-navigation__start-a-wiki-caption\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-create-wiki-link-start-wikia"] : stack1), depth0))
    + "</span>\n          <svg class=\"wds-global-navigation__start-a-wiki-icon wds-icon\">\n            <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#wds-icons-plus\"></use>\n          </svg>\n        </a>\n      </div>\n    </div>\n  </header>\n</div>";
},"useData":true});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"wds-global-navigation__account-menu wds-dropdown\">\n  <div class=\"wds-global-navigation__dropdown-toggle wds-dropdown__toggle\">\n    <svg class=\"wds-icon wds-icon-small\">\n      <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#wds-icons-user\"></use>\n    </svg>\n    <span class=\"wds-global-navigation__account-menu-caption\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-anon-my-account"] : stack1), depth0))
    + "</span>\n    <svg class=\"wds-icon wds-icon-tiny wds-dropdown__toggle-chevron\">\n      <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#wds-icons-dropdown-tiny\"></use>\n    </svg>\n  </div>\n  <div class=\"wds-global-navigation__dropdown-content wds-is-right-aligned wds-dropdown__content\">\n    <ul class=\"wds-has-lines-between wds-list\">\n      <li>\n        <a rel=\"nofollow\" class=\"wds-button wds-is-full-width anon-sign-in\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-anon-sign-in"] : stack1), depth0))
    + "</a>\n      </li>\n      <li>\n        <div class=\"wds-global-navigation__account-menu-dropdown-caption\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-anon-register-description"] : stack1), depth0))
    + "</div>\n        <a rel=\"nofollow\" class=\"wds-button wds-is-full-width wds-is-secondary anon-register\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.strings : depth0)) != null ? stack1["global-navigation-anon-register"] : stack1), depth0))
    + "</a>\n      </li>\n    </ul>\n  </div>\n</div>";
},"useData":true});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"wds-global-navigation__user-menu wds-dropdown\">\n  <div title=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "\" class=\"wds-global-navigation__dropdown-toggle wds-dropdown__toggle\">\n    <img class=\"wds-avatar\" src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" alt=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "\">\n    <svg class=\"wds-icon wds-icon-tiny wds-dropdown__toggle-chevron\">\n      <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#wds-icons-dropdown-tiny\"></use>\n    </svg>\n  </div>\n  <div class=\"wds-global-navigation__dropdown-content wds-is-right-aligned wds-dropdown__content\">\n    <ul class=\"wds-is-linked wds-list\">\n    </ul>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n  <a href=\""
    + alias4(((helper = (helper = helpers["link-target"] || (depth0 != null ? depth0["link-target"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link-target","hash":{},"data":data}) : helper)))
    + "\" class=\"wds-global-navigation__dropdown-link\" data-action=\""
    + alias4(((helper = (helper = helpers["link-action"] || (depth0 != null ? depth0["link-action"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link-action","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers["link-text"] || (depth0 != null ? depth0["link-text"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link-text","hash":{},"data":data}) : helper)))
    + "</a>\n</li>";
},"useData":true});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<li>\n  <div class=\"wds-global-navigation__dropdown-link global-navigation-user-sign-out\">\n    <form method=\"POST\">\n      <button type=\"submit\" class=\"wds-sign-out__button\">"
    + container.escapeExpression(((helper = (helper = helpers["button-text"] || (depth0 != null ? depth0["button-text"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"button-text","hash":{},"data":data}) : helper)))
    + "</button>\n    </form>\n  </div>\n</li>\n";
},"useData":true});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {"global-footer-follow-us-link-facebook":"Facebook","global-footer-follow-us-link-instagram":"Instagram","global-footer-follow-us-link-reddit":"Reddit","global-footer-follow-us-link-twitter":"Twitter","global-footer-follow-us-link-youtube":"Youtube","global-footer-follow-us-header":"Folge uns","global-footer-fandom-overview-link-explore-wikis":"Wikis erforschen","global-footer-fandom-overview-link-vertical-games":"Videospiele","global-footer-fandom-overview-link-vertical-movies":"Filme","global-footer-fandom-overview-link-vertical-tv":"TV","global-footer-international-header-subtitle":"Wo FANDOM zu Hause ist","global-footer-create-wiki-link-start-wikia":"Starte ein Wiki","global-footer-create-wiki-description":"Du findest keine Community, die dir richtig gut gefällt? Erstelle eine eigene und starte etwas Phänomenales.","global-footer-advertise-header":"Werbung","global-footer-advertise-link-contact":"Kontakt","global-footer-advertise-link-media-kit":"Mediakit","global-footer-community-apps-description":"So hast du deine Lieblings-Communitys immer dabei und kannst nichts verpassen","global-footer-community-apps-header":"Community-Apps","global-footer-community-header":"Community","global-footer-community-link-community-central":"Community Deutschland","global-footer-community-link-fan-contributor-program":"Programm für Fan-Autoren","global-footer-community-link-help":"Hilfe","global-footer-community-link-support":"Support","global-footer-community-link-wam-score":"WAM-Punktzahl","global-footer-company-overview-header":"Übersicht","global-footer-company-overview-link-about":"Über Fandom","global-footer-company-overview-link-careers":"Stellenangebote","global-footer-company-overview-link-contact":"Kontakt","global-footer-company-overview-link-press":"Presse","global-footer-company-overview-link-wikia-org":"Wikia.org","global-footer-site-overview-link-global-sitemap":"Globale Sitemap","global-footer-site-overview-link-local-sitemap":"Lokale Sitemap","global-footer-site-overview-link-terms-of-use":"Nutzungs­bedingungen","global-footer-site-overview-link-privacy-policy":"Datenschutz","global-footer-licensing-and-vertical-description":"__sitename__ ist eine FANDOM-__vertical__-Community. Inhalt ist verfügbar unter __license__.","global-footer-licensing-and-vertical-description-param-vertical-tv":"TV","global-footer-licensing-and-vertical-description-param-vertical-games":"Videospiele","global-footer-licensing-and-vertical-description-param-vertical-books":"Literatur","global-footer-licensing-and-vertical-description-param-vertical-comics":"Comics","global-footer-licensing-and-vertical-description-param-vertical-lifestyle":"Lifestyle","global-footer-licensing-and-vertical-description-param-vertical-music":"Musik","global-footer-licensing-and-vertical-description-param-vertical-movies":"Filme","global-footer-full-site-link":"Desktop-Ansicht","global-footer-mobile-site-link":"Mobile Geräte","global-footer-copyright-wikia":"Copyright __date__ Wikia, Inc.","global-navigation-anon-my-account":"Mein Benutzerkonto","global-navigation-anon-register":"Registrieren","global-navigation-anon-register-description":"Du hast noch kein Benutzerkonto?","global-navigation-anon-sign-in":"Anmelden","global-navigation-create-wiki-link-start-wikia":"Starte ein Wiki","global-navigation-fandom-overview-link-vertical-games":"Videospiele","global-navigation-fandom-overview-link-vertical-movies":"Filme","global-navigation-fandom-overview-link-vertical-tv":"TV","global-navigation-notifications-title":"Benachrichtigungen","global-navigation-messages-title":"Nachrichten","global-navigation-search-cancel":"Abbrechen","global-navigation-search-placeholder-fandom":"Suche Storys und Wikis...","global-navigation-search-placeholder-in-wiki":"Suche __sitename__...","global-navigation-search-placeholder-inactive":"Suche","global-navigation-search-placeholder-wikis":"Suche ein Wiki...","global-navigation-search-select-fandom":"FANDOM Storys und Wikis","global-navigation-search-select-in-wiki":"In diesem Wiki","global-navigation-search-select-wikis":"Nach einem Wiki","global-navigation-user-help":"Hilfe","global-navigation-user-message-wall":"Nachrichtenseite","global-navigation-user-my-preferences":"Einstellungen","global-navigation-user-my-talk":"Nachrichten","global-navigation-user-sign-out":"Abmelden","global-navigation-user-view-profile":"Profil anschauen","global-navigation-user-view-author-profile":"Autorenprofil","global-navigation-wikis-community-central":"Community Deutschland","global-navigation-wikis-explore":"Wikis erforschen","global-navigation-wikis-fandom-university":"FANDOM Universität","global-navigation-wikis-header":"Wikis","notifications-no-notifications-message":"Noch keine Benachrichtigungen.","notifications-mark-all-as-read":"Alle als gelesen markieren","notifications-replied-by-multiple-users-with-title":"__mostRecentUser__ und __number__ weitere Benutzer haben auf __postTitle__ <b>geantwortet</b>","notifications-replied-by-multiple-users-no-title":"__mostRecentUser__ und __number__ weitere Benutzer haben auf eine Diskussion <b>geantwortet</b>, der du folgst","notifications-replied-by-two-users-with-title":"__firstUser__ und __secondUser__ haben auf __postTitle__ <b>geantwortet</b>","notifications-replied-by-two-users-no-title":"__firstUser__ und __secondUser__ haben auf eine Diskussion <b>geantwortet</b>, der du folgst","notifications-replied-by-with-title":"__user__ hat auf __postTitle__ <b>geantwortet</b>","notifications-replied-by-no-title":"__user__ hat auf eine Diskussion <b>geantwortet</b>, der du folgst","notifications-post-upvote-single-user-with-title":"1 Benutzer hat deiner Diskussion __postTitle__ <b>zugestimmt</b>","notifications-post-upvote-single-user-no-title":"1 Benutzer hat deiner Diskussion <b>zugestimmt</b>","notifications-post-upvote-multiple-users-with-title":"__number__ Benutzer haben deiner Diskussion __postTitle__ <b>zugestimmt</b>","notifications-post-upvote-multiple-users-no-title":"__number__ Benutzer haben deiner Diskussion <b>zugestimmt</b>","notifications-reply-upvote-single-user-with-title":"1 Benutzer hat deiner Antwort auf __postTitle__ <b>zugestimmt</b>","notifications-reply-upvote-single-user-no-title":"1 Benutzer hat deiner Antwort <b>zugestimmt</b>","notifications-reply-upvote-multiple-users-with-title":"__number__ Benutzer haben deiner Antwort auf __postTitle__ <b>zugestimmt</b>","notifications-reply-upvote-multiple-users-no-title":"__number__ Benutzer haben deiner Antwort <b>zugestimmt</b>","notifications-notifications":"Benachrichtigungen","community-header-page":"Seite","community-header-pages":"Seiten","community-header-add":"Hinzufügen","community-header-add-new-page":"Neue Seite hinzufügen","community-header-discuss":"Diskutieren","community-header-explore":"Erkunden","community-header-wiki-activity":"Wiki-Aktivität","community-header-random-page":"Zufällige Seite","community-header-community":"Community","community-header-videos":"Videos","community-header-images":"Bilder","community-header-forum":"Forum","community-header-admin-dashboard":"Wiki-Verwaltung","community-header-discussions-post":"Beitrag","community-header-discussions-posts":"Beiträge"}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {"global-footer-follow-us-link-facebook":"Facebook","global-footer-follow-us-link-instagram":"Instagram","global-footer-follow-us-link-reddit":"Reddit","global-footer-follow-us-link-twitter":"Twitter","global-footer-follow-us-link-youtube":"Youtube","global-footer-follow-us-header":"Follow Us","global-footer-fandom-overview-link-explore-wikis":"Explore Wikis","global-footer-fandom-overview-link-vertical-games":"Games","global-footer-fandom-overview-link-vertical-movies":"Movies","global-footer-fandom-overview-link-vertical-tv":"TV","global-footer-international-header-subtitle":"The Home of FANDOM","global-footer-create-wiki-link-start-wikia":"Start a wiki","global-footer-create-wiki-description":"Can't find a community you love? Create your own and start something epic.","global-footer-advertise-header":"Advertise","global-footer-advertise-link-contact":"Contact","global-footer-advertise-link-media-kit":"Media Kit","global-footer-community-apps-description":"Take your favorite fandoms with you and never miss a beat","global-footer-community-apps-header":"Community Apps","global-footer-community-header":"Community","global-footer-community-link-community-central":"Community Central","global-footer-community-link-fan-contributor-program":"Fan Contributor Program","global-footer-community-link-help":"Help","global-footer-community-link-support":"Support","global-footer-community-link-wam-score":"WAM Score","global-footer-company-overview-header":"Overview","global-footer-company-overview-link-about":"About","global-footer-company-overview-link-careers":"Careers","global-footer-company-overview-link-contact":"Contact","global-footer-company-overview-link-press":"Press","global-footer-company-overview-link-wikia-org":"Wikia.org","global-footer-site-overview-link-global-sitemap":"Global Sitemap","global-footer-site-overview-link-local-sitemap":"Local Sitemap","global-footer-site-overview-link-terms-of-use":"Terms of Use","global-footer-site-overview-link-privacy-policy":"Privacy Policy","global-footer-licensing-and-vertical-description":"__sitename__ is a FANDOM __vertical__ Community. Content is available under __license__.","global-footer-licensing-and-vertical-description-param-vertical-tv":"TV","global-footer-licensing-and-vertical-description-param-vertical-games":"Games","global-footer-licensing-and-vertical-description-param-vertical-books":"Books","global-footer-licensing-and-vertical-description-param-vertical-comics":"Comics","global-footer-licensing-and-vertical-description-param-vertical-lifestyle":"Lifestyle","global-footer-licensing-and-vertical-description-param-vertical-music":"Music","global-footer-licensing-and-vertical-description-param-vertical-movies":"Movies","global-footer-full-site-link":"View Full Site","global-footer-mobile-site-link":"View Mobile Site","global-footer-copyright-wikia":"Copyright __date__ Wikia, Inc.","global-navigation-anon-my-account":"My Account","global-navigation-anon-register":"Register","global-navigation-anon-register-description":"Don't have an account?","global-navigation-anon-sign-in":"Sign In","global-navigation-create-wiki-link-start-wikia":"Start a Wiki","global-navigation-fandom-overview-link-vertical-games":"Games","global-navigation-fandom-overview-link-vertical-movies":"Movies","global-navigation-fandom-overview-link-vertical-tv":"TV","global-navigation-notifications-title":"Notifications","global-navigation-messages-title":"Messages","global-navigation-search-cancel":"Cancel","global-navigation-search-placeholder-fandom":"Search Stories and Wikis...","global-navigation-search-placeholder-in-wiki":"Search __sitename__...","global-navigation-search-placeholder-inactive":"Search","global-navigation-search-placeholder-wikis":"Search for a Wiki...","global-navigation-search-select-fandom":"FANDOM Stories and Wikis","global-navigation-search-select-in-wiki":"Within This Wiki","global-navigation-search-select-wikis":"For a Wiki","global-navigation-user-help":"Help","global-navigation-user-message-wall":"Message Wall","global-navigation-user-my-preferences":"My Preferences","global-navigation-user-my-talk":"My Talk","global-navigation-user-sign-out":"Sign Out","global-navigation-user-view-profile":"View Profile","global-navigation-user-view-author-profile":"Author Profile","global-navigation-wikis-community-central":"Community Central","global-navigation-wikis-explore":"Explore Wikis","global-navigation-wikis-fandom-university":"FANDOM University","global-navigation-wikis-header":"Wikis","notifications-no-notifications-message":"No notifications yet.","notifications-mark-all-as-read":"Mark all as read","notifications-replied-by-multiple-users-with-title":"__mostRecentUser__ and __number__ other users <b>replied</b> to __postTitle__","notifications-replied-by-multiple-users-no-title":"__mostRecentUser__ and __number__ other users <b>replied</b> to a discussion you are following","notifications-replied-by-two-users-with-title":"__firstUser__ and __secondUser__ <b>replied</b> to __postTitle__","notifications-replied-by-two-users-no-title":"__firstUser__ and __secondUser__ <b>replied</b> to a discussion you are following","notifications-replied-by-with-title":"__user__ <b>replied</b> to __postTitle__","notifications-replied-by-no-title":"__user__ <b>replied</b> to a discussion you are following","notifications-post-upvote-single-user-with-title":"1 user <b>upvoted</b> your discussion __postTitle__","notifications-post-upvote-single-user-no-title":"1 user <b>upvoted</b> your discussion","notifications-post-upvote-multiple-users-with-title":"__number__ users <b>upvoted</b> your discussion __postTitle__","notifications-post-upvote-multiple-users-no-title":"__number__ users  <b>upvoted</b> your discussion","notifications-reply-upvote-single-user-with-title":"1 user <b>upvoted</b> your reply to __postTitle__","notifications-reply-upvote-single-user-no-title":"1 user <b>upvoted</b> your reply","notifications-reply-upvote-multiple-users-with-title":"__number__ users <b>upvoted</b> your reply to __postTitle__","notifications-reply-upvote-multiple-users-no-title":"__number__ users <b>upvoted</b> your reply","notifications-notifications":"Notifications","community-header-page":"Page","community-header-pages":"Pages","community-header-add":"Add","community-header-add-new-page":"Add new page","community-header-discuss":"Discuss","community-header-explore":"Explore","community-header-wiki-activity":"Wiki Activity","community-header-random-page":"Random page","community-header-community":"Community","community-header-videos":"Videos","community-header-images":"Images","community-header-forum":"Forum","community-header-admin-dashboard":"Admin Dashboard","community-header-discussions-post":"Post","community-header-discussions-posts":"Posts"}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {"global-footer-follow-us-link-facebook":"Facebook","global-footer-follow-us-link-instagram":"Instagram","global-footer-follow-us-link-reddit":"Reddit","global-footer-follow-us-link-twitter":"Twitter","global-footer-follow-us-link-youtube":"YouTube","global-footer-follow-us-header":"Síguenos","global-footer-fandom-overview-link-explore-wikis":"Explora wikis","global-footer-fandom-overview-link-vertical-games":"Juegos","global-footer-fandom-overview-link-vertical-movies":"Películas","global-footer-fandom-overview-link-vertical-tv":"TV","global-footer-international-header-subtitle":"El hogar del FANDOM","global-footer-create-wiki-link-start-wikia":"Crear un wiki","global-footer-create-wiki-description":"¿No has encontrado una comunidad que te apasione? Entonces crea una propia.","global-footer-advertise-header":"Anuncia","global-footer-advertise-link-contact":"Contactar","global-footer-advertise-link-media-kit":"Kit de medios","global-footer-community-apps-description":"Lleva tu comunidad favorita contigo y no te pierdas de nada","global-footer-community-apps-header":"Apps comunitarias","global-footer-community-header":"Comunidad","global-footer-community-link-community-central":"Comunidad Central","global-footer-community-link-fan-contributor-program":"Programa de colaborador","global-footer-community-link-help":"Ayuda","global-footer-community-link-support":"Soporte","global-footer-community-link-wam-score":"Puntuación WAM","global-footer-company-overview-header":"Vista general","global-footer-company-overview-link-about":"Acerca de","global-footer-company-overview-link-careers":"Empleo","global-footer-company-overview-link-contact":"Contactar","global-footer-company-overview-link-press":"Prensa","global-footer-company-overview-link-wikia-org":"Wikia.org","global-footer-site-overview-link-global-sitemap":"Mapa del sitio global","global-footer-site-overview-link-local-sitemap":"Mapa del sitio local","global-footer-site-overview-link-terms-of-use":"Términos de uso","global-footer-site-overview-link-privacy-policy":"Política de privacidad","global-footer-licensing-and-vertical-description":"__sitename__ es una comunidad FANDOM de __vertical__. El contenido está disponible bajo la licencia __license__.","global-footer-licensing-and-vertical-description-param-vertical-tv":"TV","global-footer-licensing-and-vertical-description-param-vertical-games":"Juegos","global-footer-licensing-and-vertical-description-param-vertical-books":"Libros","global-footer-licensing-and-vertical-description-param-vertical-comics":"Cómics","global-footer-licensing-and-vertical-description-param-vertical-lifestyle":"Estilo de vida","global-footer-licensing-and-vertical-description-param-vertical-music":"Música","global-footer-licensing-and-vertical-description-param-vertical-movies":"Películas","global-footer-full-site-link":"Ver sitio completo","global-footer-mobile-site-link":"Ver sitio móvil","global-footer-copyright-wikia":"Copyright __date__ Wikia, Inc.","global-navigation-anon-my-account":"Mi cuenta","global-navigation-anon-register":"Registrarse","global-navigation-anon-register-description":"¿No tienes una cuenta?","global-navigation-anon-sign-in":"Iniciar sesión","global-navigation-create-wiki-link-start-wikia":"Crear un wiki","global-navigation-fandom-overview-link-vertical-games":"Juegos","global-navigation-fandom-overview-link-vertical-movies":"Películas","global-navigation-fandom-overview-link-vertical-tv":"TV","global-navigation-notifications-title":"Notificaciones","global-navigation-messages-title":"Mensajes","global-navigation-search-cancel":"Cancelar","global-navigation-search-placeholder-fandom":"Buscar artículos y wikis...","global-navigation-search-placeholder-in-wiki":"Buscar en __sitename__...","global-navigation-search-placeholder-inactive":"Buscar","global-navigation-search-placeholder-wikis":"Buscar un wiki...","global-navigation-search-select-fandom":"Artículos sobre FANDOM y wikis","global-navigation-search-select-in-wiki":"Dentro de este wiki","global-navigation-search-select-wikis":"Un wiki","global-navigation-user-help":"Ayuda","global-navigation-user-message-wall":"Muro de mensajes","global-navigation-user-my-preferences":"Mis preferencias","global-navigation-user-my-talk":"Mis mensajes","global-navigation-user-sign-out":"Cerrar sesión","global-navigation-user-view-profile":"Ver perfil","global-navigation-user-view-author-profile":"Perfil de autor","global-navigation-wikis-community-central":"Comunidad Central","global-navigation-wikis-explore":"Explora wikis","global-navigation-wikis-fandom-university":"Universidad de FANDOM","global-navigation-wikis-header":"Wikis","notifications-no-notifications-message":"Aún no hay notificaciones.","notifications-mark-all-as-read":"Marcar como leídas","notifications-replied-by-multiple-users-with-title":"__mostRecentUser__ y __number__ otros usuarios <b>comentaron</b> en __postTitle__","notifications-replied-by-multiple-users-no-title":"__mostRecentUser__ y __number__ otros usuarios <b>comentaron</b> en una discusión que estás siguiendo","notifications-replied-by-two-users-with-title":"__firstUser__ y __secondUser__ <b>comentaron</b> en __postTitle__","notifications-replied-by-two-users-no-title":"__firstUser__ y __secondUser__ <b>comentaron</b> en una discusión que estás siguiendo","notifications-replied-by-with-title":"__user__ <b>comentó</b> en __postTitle__","notifications-replied-by-no-title":"__user__ <b>comentó</b> en una discusión que estás siguiendo","notifications-post-upvote-single-user-with-title":"1 usuario <b>votó</b> tu discusión __postTitle__","notifications-post-upvote-single-user-no-title":"1 usuario <b>votó</b> tu discusión","notifications-post-upvote-multiple-users-with-title":"__number__ usuarios <b>votaron</b> tu discusión __postTitle__","notifications-post-upvote-multiple-users-no-title":"__number__ usuarios <b>votaron</b> tu discusión","notifications-reply-upvote-single-user-with-title":"1 usuario <b>votó</b> tu respuesta en __postTitle__","notifications-reply-upvote-single-user-no-title":"1 usuario <b>votó</b> tu respuesta","notifications-reply-upvote-multiple-users-with-title":"__number__ usuarios <b>votaron</b> tu respuesta en __postTitle__","notifications-reply-upvote-multiple-users-no-title":"__number__ usuarios <b>votaron</b> tu respuesta","notifications-notifications":"Notificaciones","community-header-page":"Página","community-header-pages":"Páginas","community-header-add":"Añadir","community-header-add-new-page":"Añadir página","community-header-discuss":"Discute","community-header-explore":"Explora","community-header-wiki-activity":"Wiki actividad","community-header-random-page":"Página aleatoria","community-header-community":"Comunidad","community-header-videos":"Videos","community-header-images":"Imágenes","community-header-forum":"Foro","community-header-admin-dashboard":"Panel de administración","community-header-discussions-post":"Discusión","community-header-discussions-posts":"Discusiones"}

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = {"global-footer-follow-us-link-facebook":"Facebook","global-footer-follow-us-link-instagram":"Instagram","global-footer-follow-us-link-reddit":"Reddit","global-footer-follow-us-link-twitter":"Twitter","global-footer-follow-us-link-youtube":"YouTube","global-footer-follow-us-header":"Nous suivre","global-footer-fandom-overview-link-explore-wikis":"Explorer les wikis","global-footer-fandom-overview-link-vertical-games":"Jeux vidéo","global-footer-fandom-overview-link-vertical-movies":"Cinéma","global-footer-fandom-overview-link-vertical-tv":"Télévision","global-footer-international-header-subtitle":"La destination des fans","global-footer-create-wiki-link-start-wikia":"Créer un wiki","global-footer-create-wiki-description":"Vous ne trouvez pas la communauté que vous recherchez ? Commencez quelque chose de grand en créant la vôtre.","global-footer-advertise-header":"Publicité","global-footer-advertise-link-contact":"Contact","global-footer-advertise-link-media-kit":"Kit de presse","global-footer-community-apps-description":"Emportez vos fandoms favoris partout avec vous","global-footer-community-apps-header":"Applications communautaires","global-footer-community-header":"Communauté","global-footer-community-link-community-central":"Centre des communautés","global-footer-community-link-fan-contributor-program":"Fan Contributor Program","global-footer-community-link-help":"Aide","global-footer-community-link-support":"Support","global-footer-community-link-wam-score":"Score WAM","global-footer-company-overview-header":"Vue d'ensemble","global-footer-company-overview-link-about":"À propos","global-footer-company-overview-link-careers":"Emplois","global-footer-company-overview-link-contact":"Contact","global-footer-company-overview-link-press":"Presse","global-footer-company-overview-link-wikia-org":"Wikia.org","global-footer-site-overview-link-global-sitemap":"Plan du site global","global-footer-site-overview-link-local-sitemap":"Plan du site local","global-footer-site-overview-link-terms-of-use":"Conditions d'utilisation","global-footer-site-overview-link-privacy-policy":"Politique de confidentialité","global-footer-licensing-and-vertical-description":"__sitename__ est une communauté de FANDOM appartenant à la catégorie __vertical__. Contenu disponible sous licence __license__.","global-footer-licensing-and-vertical-description-param-vertical-tv":"Télévision","global-footer-licensing-and-vertical-description-param-vertical-games":"Jeux vidéo","global-footer-licensing-and-vertical-description-param-vertical-books":"Littérature","global-footer-licensing-and-vertical-description-param-vertical-comics":"Bandes dessinées","global-footer-licensing-and-vertical-description-param-vertical-lifestyle":"Mode de vie","global-footer-licensing-and-vertical-description-param-vertical-music":"Musique","global-footer-licensing-and-vertical-description-param-vertical-movies":"Cinéma","global-footer-full-site-link":"Voir le site complet","global-footer-mobile-site-link":"Visiter le site mobile","global-footer-copyright-wikia":"Copyright __date__ Wikia, Inc.","global-navigation-anon-my-account":"Mon compte","global-navigation-anon-register":"Créer un compte","global-navigation-anon-register-description":"Vous n'avez pas de compte?","global-navigation-anon-sign-in":"Se connecter","global-navigation-create-wiki-link-start-wikia":"Créer un wiki","global-navigation-fandom-overview-link-vertical-games":"Jeux vidéo","global-navigation-fandom-overview-link-vertical-movies":"Cinéma","global-navigation-fandom-overview-link-vertical-tv":"Télévision","global-navigation-notifications-title":"Notifications","global-navigation-messages-title":"Messages","global-navigation-search-cancel":"Annuler","global-navigation-search-placeholder-fandom":"Rechercher des articles et des wikis...","global-navigation-search-placeholder-in-wiki":"Rechercher sur __sitename__...","global-navigation-search-placeholder-inactive":"Rechercher","global-navigation-search-placeholder-wikis":"Rechercher un wiki...","global-navigation-search-select-fandom":"Articles de FANDOM et wikis","global-navigation-search-select-in-wiki":"Sur ce wiki","global-navigation-search-select-wikis":"Un wiki","global-navigation-user-help":"Aide","global-navigation-user-message-wall":"Mur de discussion","global-navigation-user-my-preferences":"Mes préférences","global-navigation-user-my-talk":"Mes messages","global-navigation-user-sign-out":"Se déconnecter","global-navigation-user-view-profile":"Voir profil","global-navigation-user-view-author-profile":"Profil de l’auteur","global-navigation-wikis-community-central":"Centre des communautés","global-navigation-wikis-explore":"Explorer les wikis","global-navigation-wikis-fandom-university":"Université FANDOM","global-navigation-wikis-header":"Wikis","notifications-no-notifications-message":"Aucune notification reçue.","notifications-mark-all-as-read":"Tout marquer comme lu","notifications-replied-by-multiple-users-with-title":"__mostRecentUser__ et __number__ autres utilisateurs <b>ont répondu</b> à __postTitle__.","notifications-replied-by-multiple-users-no-title":"__mostRecentUser__ et __number__ autres utilisateurs <b>ont répondu</b> à une discussion que vous suivez.","notifications-replied-by-two-users-with-title":"__firstUser__ et __secondUser__ <b>ont répondu</b> à __postTitle__.","notifications-replied-by-two-users-no-title":"__firstUser__ et __secondUser__ <b>ont répondu</b> à une discussion que vous suivez.","notifications-replied-by-with-title":"__user__ <b>a répondu</b> à __postTitle__.","notifications-replied-by-no-title":"__user__ <b>a répondu</b> à une discussion que vous suivez.","notifications-post-upvote-single-user-with-title":"1 utilisateur <b>a voté pour</b> votre discussion __postTitle__.","notifications-post-upvote-single-user-no-title":"1 utilisateur <b>a voté pour</b> votre discussion.","notifications-post-upvote-multiple-users-with-title":"__number__ utilisateurs <b>ont voté pour</b> votre discussion __postTitle__.","notifications-post-upvote-multiple-users-no-title":"__number__ utilisateurs <b>ont voté pour</b> votre discussion.","notifications-reply-upvote-single-user-with-title":"1 utilisateur <b>a voté pour</b> votre réponse à __postTitle__.","notifications-reply-upvote-single-user-no-title":"1 utilisateur <b>a voté pour</b> votre réponse.","notifications-reply-upvote-multiple-users-with-title":"__number__ utilisateurs <b>ont voté pour</b> votre réponse à __postTitle__.","notifications-reply-upvote-multiple-users-no-title":"__number__ utilisateurs <b>ont voté pour</b> votre réponse.","notifications-notifications":"Notifications","community-header-page":"Page","community-header-pages":"Pages","community-header-add":"Ajouter","community-header-add-new-page":"Ajouter une page","community-header-discuss":"Discuter","community-header-explore":"Explorer","community-header-wiki-activity":"Activité du wiki","community-header-random-page":"Page au hasard","community-header-community":"Communauté","community-header-videos":"Vidéos","community-header-images":"Images","community-header-forum":"Forum","community-header-admin-dashboard":"Tableau de bord administrateur","community-header-discussions-post":"Publication","community-header-discussions-posts":"Publications"}

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {"global-footer-follow-us-link-facebook":"Facebook","global-footer-follow-us-link-instagram":"Instagram","global-footer-follow-us-link-reddit":"Reddit","global-footer-follow-us-link-twitter":"Twitter","global-footer-follow-us-link-youtube":"Youtube","global-footer-follow-us-header":"Seguici","global-footer-fandom-overview-link-explore-wikis":"Esplora le wiki","global-footer-fandom-overview-link-vertical-games":"Giochi","global-footer-fandom-overview-link-vertical-movies":"Film","global-footer-fandom-overview-link-vertical-tv":"TV","global-footer-international-header-subtitle":"La patria dei fan","global-footer-create-wiki-link-start-wikia":"Crea una wiki","global-footer-create-wiki-description":"Non riesci a trovare una community che ami? Crea la tua e inizia qualcosa di epico.","global-footer-advertise-header":"Pubblicizza","global-footer-advertise-link-contact":"Contattaci","global-footer-advertise-link-media-kit":"Media Kit","global-footer-community-apps-description":"Porta i tuoi fandom preferiti con te e non perdere mai un colpo","global-footer-community-apps-header":"App della community","global-footer-community-header":"Community","global-footer-community-link-community-central":"Wiki della Community","global-footer-community-link-fan-contributor-program":"Programma fan collaboratore","global-footer-community-link-help":"Aiuto","global-footer-community-link-support":"Supporto","global-footer-community-link-wam-score":"Punteggio WAM","global-footer-company-overview-header":"Panoramica","global-footer-company-overview-link-about":"Su di noi","global-footer-company-overview-link-careers":"Lavora con noi","global-footer-company-overview-link-contact":"Contattaci","global-footer-company-overview-link-press":"Stampa","global-footer-company-overview-link-wikia-org":"Wikia.org","global-footer-site-overview-link-global-sitemap":"Mappa del sito globale","global-footer-site-overview-link-local-sitemap":"Mappa del sito locale","global-footer-site-overview-link-terms-of-use":"Termini di utilizzo","global-footer-site-overview-link-privacy-policy":"Informativa sulla privacy","global-footer-licensing-and-vertical-description":"__sitename__ è una comunità di FANDOM a proposito di __vertical__. I contenuti sono disponibili sotto __license__.","global-footer-licensing-and-vertical-description-param-vertical-tv":"TV","global-footer-licensing-and-vertical-description-param-vertical-games":"Giochi","global-footer-licensing-and-vertical-description-param-vertical-books":"Libri","global-footer-licensing-and-vertical-description-param-vertical-comics":"Fumetti","global-footer-licensing-and-vertical-description-param-vertical-lifestyle":"Stili di vita","global-footer-licensing-and-vertical-description-param-vertical-music":"Musica","global-footer-licensing-and-vertical-description-param-vertical-movies":"Film","global-footer-full-site-link":"Vai al sito completo","global-footer-mobile-site-link":"Vai al sito Mobile","global-footer-copyright-wikia":"Copyright __date__ Wikia, Inc.","global-navigation-anon-my-account":"Il mio account","global-navigation-anon-register":"Iscriviti","global-navigation-anon-register-description":"Non hai un account?","global-navigation-anon-sign-in":"Accedi","global-navigation-create-wiki-link-start-wikia":"Crea una wiki","global-navigation-fandom-overview-link-vertical-games":"Giochi","global-navigation-fandom-overview-link-vertical-movies":"Cinema","global-navigation-fandom-overview-link-vertical-tv":"TV","global-navigation-notifications-title":"Notifiche","global-navigation-messages-title":"Messaggi","global-navigation-search-cancel":"Annulla","global-navigation-search-placeholder-fandom":"Cerca storie e wiki...","global-navigation-search-placeholder-in-wiki":"Cerca su __sitename__...","global-navigation-search-placeholder-inactive":"Cerca","global-navigation-search-placeholder-wikis":"Cerca una wiki...","global-navigation-search-select-fandom":"Storie e wiki di FANDOM","global-navigation-search-select-in-wiki":"Su questa wiki","global-navigation-search-select-wikis":"Per una wiki","global-navigation-user-help":"Aiuto","global-navigation-user-message-wall":"Bacheca","global-navigation-user-my-preferences":"Preferenze","global-navigation-user-my-talk":"Le mie discussioni","global-navigation-user-sign-out":"Esci","global-navigation-user-view-profile":"Vedi profilo","global-navigation-user-view-author-profile":"Profilo come autore","global-navigation-wikis-community-central":"Wiki della Community","global-navigation-wikis-explore":"Esplora le wiki","global-navigation-wikis-fandom-university":"FANDOM University","global-navigation-wikis-header":"Wikis","notifications-no-notifications-message":"Ancora nessuna notifica.","notifications-mark-all-as-read":"Segna tutte come lette","notifications-replied-by-multiple-users-with-title":"__mostRecentUser__ e altri __number__ utenti <b>hanno risposto</b> a __postTitle__","notifications-replied-by-multiple-users-no-title":"__mostRecentUser__ e altri __number__ utenti <b>hanno risposto</b> ad una discussione che stai seguendo","notifications-replied-by-two-users-with-title":"__firstUser__ e __secondUser__ <b>hanno risposto</b> a __postTitle__","notifications-replied-by-two-users-no-title":"__firstUser__ e __secondUser__ <b>hanno risposto</b> ad una discussione che stai seguendo","notifications-replied-by-with-title":"__user__ <b>ha risposto</b> a __postTitle__","notifications-replied-by-no-title":"__user__ <b>ha risposto</b> ad una discussione che stai seguendo","notifications-post-upvote-single-user-with-title":"Un utente <b>ha votato</b> la tua discussione __postTitle__","notifications-post-upvote-single-user-no-title":"Un utente <b>ha votato</b> la tua discussione","notifications-post-upvote-multiple-users-with-title":"__number__ utenti <b>hanno votato</b> la tua discussione __postTitle__","notifications-post-upvote-multiple-users-no-title":"__number__ utenti <b>hanno votato</b> la tua discussione","notifications-reply-upvote-single-user-with-title":"Un utente <b>ha votato</b> la tua risposta a __postTitle__","notifications-reply-upvote-single-user-no-title":"Un utente <b>ha votato</b> la tua risposta","notifications-reply-upvote-multiple-users-with-title":"__number__ utenti <b>hanno votato</b> la tua risposta a __postTitle__","notifications-reply-upvote-multiple-users-no-title":"__number__ utenti <b>hanno votato</b> la tua risposta","notifications-notifications":"Notifiche","community-header-page":"Pagina","community-header-pages":"Pagine","community-header-add":"Aggiungi","community-header-add-new-page":"Crea nuova pagina","community-header-discuss":"Discuti","community-header-explore":"Esplora","community-header-wiki-activity":"Attività della wiki","community-header-random-page":"Una pagina a caso","community-header-community":"Community","community-header-videos":"Video","community-header-images":"Immagini","community-header-forum":"Forum","community-header-admin-dashboard":"Pannello di controllo Admin","community-header-discussions-post":"Post","community-header-discussions-posts":"Post"}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {"global-footer-follow-us-link-facebook":"Facebook","global-footer-follow-us-link-instagram":"Instagram","global-footer-follow-us-link-reddit":"Reddit","global-footer-follow-us-link-twitter":"Twitter","global-footer-follow-us-link-youtube":"YouTube","global-footer-follow-us-header":"フォローする","global-footer-fandom-overview-link-explore-wikis":"Wikiを探索","global-footer-fandom-overview-link-vertical-games":"ゲーム","global-footer-fandom-overview-link-vertical-movies":"映画","global-footer-fandom-overview-link-vertical-tv":"TV","global-footer-international-header-subtitle":"The Home of FANDOM","global-footer-create-wiki-link-start-wikia":"Wikiをはじめる","global-footer-create-wiki-description":"新しいコミュニティを立ち上げてみましょう。","global-footer-advertise-header":"広告について","global-footer-advertise-link-contact":"お問い合わせ","global-footer-advertise-link-media-kit":"媒体資料","global-footer-community-apps-description":"アプリをダウンロードすれば、いつでもどこでもお気に入りのコミュニティに簡単にアクセスできます。","global-footer-community-apps-header":"コミュニティ・アプリ","global-footer-community-header":"コミュニティ","global-footer-community-link-community-central":"コミュニティセントラル","global-footer-community-link-fan-contributor-program":"ファンコントリビュータープログラム","global-footer-community-link-help":"ヘルプ","global-footer-community-link-support":"サポート","global-footer-community-link-wam-score":"WAMスコア","global-footer-company-overview-header":"会社情報","global-footer-company-overview-link-about":"会社概要","global-footer-company-overview-link-careers":"採用情報","global-footer-company-overview-link-contact":"お問い合わせ","global-footer-company-overview-link-press":"メディア掲載","global-footer-company-overview-link-wikia-org":"Wikia.org","global-footer-site-overview-link-global-sitemap":"グローバル サイトマップ","global-footer-site-overview-link-local-sitemap":"コミュニティ サイトマップ","global-footer-site-overview-link-terms-of-use":"利用規約","global-footer-site-overview-link-privacy-policy":"プライバシー","global-footer-licensing-and-vertical-description":"__sitename__は__vertical__ジャンルのFANDOMコミュニティです。コンテンツは__license__で利用できます。","global-footer-licensing-and-vertical-description-param-vertical-tv":"TV","global-footer-licensing-and-vertical-description-param-vertical-games":"ゲーム","global-footer-licensing-and-vertical-description-param-vertical-books":"書籍","global-footer-licensing-and-vertical-description-param-vertical-comics":"コミック","global-footer-licensing-and-vertical-description-param-vertical-lifestyle":"ライフスタイル","global-footer-licensing-and-vertical-description-param-vertical-music":"音楽","global-footer-licensing-and-vertical-description-param-vertical-movies":"映画","global-footer-full-site-link":"PC版で表示","global-footer-mobile-site-link":"モバイル版で表示","global-footer-copyright-wikia":"Copyright __date__ Wikia, Inc.","global-navigation-anon-my-account":"アカウント","global-navigation-anon-register":"登録","global-navigation-anon-register-description":"アカウントをお持ちでない場合","global-navigation-anon-sign-in":"ログイン","global-navigation-create-wiki-link-start-wikia":"Wikiをはじめよう","global-navigation-fandom-overview-link-vertical-games":"ゲーム","global-navigation-fandom-overview-link-vertical-movies":"映画","global-navigation-fandom-overview-link-vertical-tv":"TV","global-navigation-notifications-title":"通知","global-navigation-messages-title":"メッセージ","global-navigation-search-cancel":"キャンセル","global-navigation-search-placeholder-fandom":"FandomストーリーとWikiを検索...","global-navigation-search-placeholder-in-wiki":"__sitename__内を検索...","global-navigation-search-placeholder-inactive":"検索","global-navigation-search-placeholder-wikis":"Wikiを検索","global-navigation-search-select-fandom":"FANDOMストーリーとWiki","global-navigation-search-select-in-wiki":"このWiki内","global-navigation-search-select-wikis":"Wiki","global-navigation-user-help":"ヘルプ","global-navigation-user-message-wall":"メッセージウォール","global-navigation-user-my-preferences":"個人設定","global-navigation-user-my-talk":"トーク","global-navigation-user-sign-out":"ログアウト","global-navigation-user-view-profile":"プロフィール","global-navigation-user-view-author-profile":"著者のプロフィール","global-navigation-wikis-community-central":"コミュニティセントラル","global-navigation-wikis-explore":"Wikiコミュニティ","global-navigation-wikis-fandom-university":"FANDOM ユニバーシティ","global-navigation-wikis-header":"Wiki","notifications-no-notifications-message":"新しい通知はありません。","notifications-mark-all-as-read":"すべての通知を確認済みにする","notifications-replied-by-multiple-users-with-title":"__mostRecentUser__さん、他__number__ 人のユーザーが__postTitle__に<b>返信</b>しました","notifications-replied-by-multiple-users-no-title":"__mostRecentUser__さん、他__number__ 人のユーザーが、あなたがフォローしているディスカッションに<b>返信</b>しました","notifications-replied-by-two-users-with-title":"__firstUser__さんと__secondUser__ さんが__postTitle__に<b>返信</b>しました","notifications-replied-by-two-users-no-title":"__firstUser__さんと__secondUser__ さんが、あなたがフォローしているディスカッションに<b>返信</b>しました","notifications-replied-by-with-title":"__user__さんが__postTitle__に<b>返信</b>しました","notifications-replied-by-no-title":"__user__さんが、あなたがフォローしているディスカッションに<b>返信</b>しました","notifications-post-upvote-single-user-with-title":"1人のユーザーが、あなたのディスカッションの__postTitle__に<b>「イイね！」</b>しました","notifications-post-upvote-single-user-no-title":"1人のユーザーが、あなたのディスカッションに<b>「イイね！」</b>しました","notifications-post-upvote-multiple-users-with-title":"__number__人のユーザーが、あなたのディスカッションの__postTitle__に<b>「イイね！」</b>しました","notifications-post-upvote-multiple-users-no-title":"__number__人のユーザーが、あなたのディスカッションに<b>「イイね！」</b>しました","notifications-reply-upvote-single-user-with-title":"1人のユーザーが、__postTitle__のあなたの返信に<b>「イイね！」</b>しました","notifications-reply-upvote-single-user-no-title":"1人のユーザーが、あなたの返信に<b>「イイね！」</b>しました","notifications-reply-upvote-multiple-users-with-title":"__number__人のユーザーが、__postTitle__のあなたの返信に<b>「イイね！」</b>しました","notifications-reply-upvote-multiple-users-no-title":"__number__人のユーザーが、あなたの返信に<b>「イイね！」</b>しました","notifications-notifications":"通知","community-header-page":"ページ","community-header-pages":"ページ","community-header-add":"投稿","community-header-add-new-page":"新しいページをつくる","community-header-discuss":"ディスカッション","community-header-explore":"検索","community-header-wiki-activity":"ウィキアクティビティ","community-header-random-page":"おまかせ表示","community-header-community":"コミュニティ","community-header-videos":"動画","community-header-images":"画像","community-header-forum":"フォーラム","community-header-admin-dashboard":"アドミン・ダッシュボード","community-header-discussions-post":"件の投稿","community-header-discussions-posts":"件の投稿"}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {"global-footer-follow-us-link-facebook":"페이스북","global-footer-follow-us-link-instagram":"인스타그램","global-footer-follow-us-link-reddit":"레딧","global-footer-follow-us-link-twitter":"트위터","global-footer-follow-us-link-youtube":"유튜브","global-footer-follow-us-header":"소셜 미디어","global-footer-fandom-overview-link-explore-wikis":"위키 둘러보기","global-footer-fandom-overview-link-vertical-games":"게임","global-footer-fandom-overview-link-vertical-movies":"영화","global-footer-fandom-overview-link-vertical-tv":"TV","global-footer-international-header-subtitle":"The Home of FANDOM","global-footer-create-wiki-link-start-wikia":"새 위키 만들기","global-footer-create-wiki-description":"원하는 커뮤니티를 찾지 못하셨나요? 그럼 직접 원하는 커뮤니티를 만들어 보세요!","global-footer-advertise-header":"광고 문의","global-footer-advertise-link-contact":"문의하기","global-footer-advertise-link-media-kit":"안내 자료","global-footer-community-apps-description":"모바일에서도 팬덤과 함께해 보세요!","global-footer-community-apps-header":"커뮤니티 앱","global-footer-community-header":"커뮤니티","global-footer-community-link-community-central":"중앙 커뮤니티","global-footer-community-link-fan-contributor-program":"팬 기여 프로그램","global-footer-community-link-help":"도움","global-footer-community-link-support":"지원","global-footer-community-link-wam-score":"WAM 점수","global-footer-company-overview-header":"회사 안내","global-footer-company-overview-link-about":"소개","global-footer-company-overview-link-careers":"채용 정보","global-footer-company-overview-link-contact":"문의하기","global-footer-company-overview-link-press":"보도 자료","global-footer-company-overview-link-wikia-org":"Wikia.org","global-footer-site-overview-link-global-sitemap":"글로벌 사이트맵","global-footer-site-overview-link-local-sitemap":"커뮤니티 사이트맵","global-footer-site-overview-link-terms-of-use":"이용 약관","global-footer-site-overview-link-privacy-policy":"개인정보 보호정책","global-footer-licensing-and-vertical-description":"__sitename__ is a FANDOM __vertical__ Community. Content is available under __license__.","global-footer-licensing-and-vertical-description-param-vertical-tv":"TV","global-footer-licensing-and-vertical-description-param-vertical-games":"게임","global-footer-licensing-and-vertical-description-param-vertical-books":"도서","global-footer-licensing-and-vertical-description-param-vertical-comics":"만화","global-footer-licensing-and-vertical-description-param-vertical-lifestyle":"생활","global-footer-licensing-and-vertical-description-param-vertical-music":"음악","global-footer-licensing-and-vertical-description-param-vertical-movies":"영화","global-footer-full-site-link":"PC 버전으로 보기","global-footer-mobile-site-link":"모바일 버전으로 보기","global-footer-copyright-wikia":"Copyright __date__ Wikia, Inc.","global-navigation-anon-my-account":"내 계정","global-navigation-anon-register":"가입하기","global-navigation-anon-register-description":"아직 계정이 없으신가요?","global-navigation-anon-sign-in":"로그인","global-navigation-create-wiki-link-start-wikia":"새 위키 만들기","global-navigation-fandom-overview-link-vertical-games":"게임","global-navigation-fandom-overview-link-vertical-movies":"영화","global-navigation-fandom-overview-link-vertical-tv":"TV","global-navigation-notifications-title":"알림","global-navigation-messages-title":"메시지","global-navigation-search-cancel":"취소","global-navigation-search-placeholder-fandom":"팬덤 포스트 및 팬덤 위키 검색하기","global-navigation-search-placeholder-in-wiki":"__sitename__에서 검색하기","global-navigation-search-placeholder-inactive":"검색","global-navigation-search-placeholder-wikis":"위키 검색하기","global-navigation-search-select-fandom":"FANDOM Stories and Wikis","global-navigation-search-select-in-wiki":"현재 위키에서","global-navigation-search-select-wikis":"팬덤 위키","global-navigation-user-help":"도움","global-navigation-user-message-wall":"메시지 담벼락","global-navigation-user-my-preferences":"환경설정","global-navigation-user-my-talk":"내 토론","global-navigation-user-sign-out":"로그아웃","global-navigation-user-view-profile":"프로필 보기","global-navigation-user-view-author-profile":"작성자 프로필 보기","global-navigation-wikis-community-central":"중앙 커뮤니티","global-navigation-wikis-explore":"위키 둘러보기","global-navigation-wikis-fandom-university":"FANDOM University","global-navigation-wikis-header":"위키","notifications-no-notifications-message":"알림이 없습니다.","notifications-mark-all-as-read":"모두 읽은 상태로 표시","notifications-replied-by-multiple-users-with-title":"__mostRecentUser__ 및 그 외 __number__명이 __postTitle__에 <b>댓글</b>을 남겼습니다.","notifications-replied-by-multiple-users-no-title":"__mostRecentUser__ 및 그 외 __number__명이 귀하가 주시 중인 토론방 글에 <b>댓글</b>을 남겼습니다.","notifications-replied-by-two-users-with-title":"__firstUser__, __secondUser__ 사용자가 __postTitle__에 <b>댓글</b>을 남겼습니다.","notifications-replied-by-two-users-no-title":"__firstUser__, __secondUser__ 사용자가 귀하가 주시 중인 토론방 글에 <b>댓글</b>을 남겼습니다.","notifications-replied-by-with-title":"__user__ 사용자가 __postTitle__에 <b>댓글</b>을 남겼습니다.","notifications-replied-by-no-title":"__user__ 사용자가 귀하가 주시 중인 토론방 글에 <b>댓글</b>을 남겼습니다.","notifications-post-upvote-single-user-with-title":"한 사용자가 귀하의 토론방 글 __postTitle__에 <b>추천</b>을 남겼습니다.","notifications-post-upvote-single-user-no-title":"한 사용자가 귀하의 토론방 글에 <b>추천</b>을 남겼습니다.","notifications-post-upvote-multiple-users-with-title":"__number__명의 사용자가 귀하의 토론방 글 __postTitle__에 <b>추천</b>을 남겼습니다.","notifications-post-upvote-multiple-users-no-title":"__number__명의 사용자가 귀하의 토론방 글에 <b>추천</b>을 남겼습니다.","notifications-reply-upvote-single-user-with-title":"귀하가 토론방 글 __postTitle__에 남긴 댓글에 한 사용자가 <b>추천</b>을 남겼습니다.","notifications-reply-upvote-single-user-no-title":"귀하의 토론방 댓글에 한 사용자가 <b>추천</b>을 남겼습니다.","notifications-reply-upvote-multiple-users-with-title":"귀하가 토론방 글 __postTitle__에 남긴 댓글에 __number__명의 사용자가 <b>추천</b>을 남겼습니다.","notifications-reply-upvote-multiple-users-no-title":"귀하의 토론방 댓글에 __number__명의 사용자가 <b>추천</b>을 남겼습니다.","notifications-notifications":"알림","community-header-page":"문서","community-header-pages":"문서","community-header-add":"생성","community-header-add-new-page":"새 문서 생성","community-header-discuss":"토론방","community-header-explore":"둘러보기","community-header-wiki-activity":"위키 활동 내역","community-header-random-page":"임의 문서","community-header-community":"커뮤니티","community-header-videos":"동영상","community-header-images":"그림","community-header-forum":"포럼","community-header-admin-dashboard":"관리 대시보드","community-header-discussions-post":"Post","community-header-discussions-posts":"Posts"}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {"global-footer-follow-us-link-facebook":"Facebook","global-footer-follow-us-link-instagram":"Instagram","global-footer-follow-us-link-reddit":"Reddit","global-footer-follow-us-link-twitter":"Twitter","global-footer-follow-us-link-youtube":"Youtube","global-footer-follow-us-header":"Śledź nas","global-footer-fandom-overview-link-explore-wikis":"Odkrywaj wiki","global-footer-fandom-overview-link-vertical-games":"Gry","global-footer-fandom-overview-link-vertical-movies":"Filmy","global-footer-fandom-overview-link-vertical-tv":"TV","global-footer-international-header-subtitle":"Świat fanów","global-footer-create-wiki-link-start-wikia":"Utwórz wiki","global-footer-create-wiki-description":"Nie możesz znaleźć społeczności, którą uwielbiasz? Utwórz swoją własną i zacznij coś wspaniałego.","global-footer-advertise-header":"Reklamy","global-footer-advertise-link-contact":"Kontakt","global-footer-advertise-link-media-kit":"Materiały dla mediów","global-footer-community-apps-description":"Miej swoje ulubione fandomy zawsze pod ręką, a nigdy niczego nie przegapisz","global-footer-community-apps-header":"Aplikacje Społeczności","global-footer-community-header":"Społeczność","global-footer-community-link-community-central":"Centrum Społeczności","global-footer-community-link-fan-contributor-program":"Program Współtworzenia dla Fanów","global-footer-community-link-help":"Pomoc","global-footer-community-link-support":"Wsparcie","global-footer-community-link-wam-score":"Punktacja WAM","global-footer-company-overview-header":"Informacje","global-footer-company-overview-link-about":"O nas","global-footer-company-overview-link-careers":"Kariera","global-footer-company-overview-link-contact":"Kontakt","global-footer-company-overview-link-press":"Prasa","global-footer-company-overview-link-wikia-org":"Wikia.org","global-footer-site-overview-link-global-sitemap":"Globalna mapa strony","global-footer-site-overview-link-local-sitemap":"Lokalna mapa strony","global-footer-site-overview-link-terms-of-use":"Zasady Użytkowania","global-footer-site-overview-link-privacy-policy":"Polityka prywatności","global-footer-licensing-and-vertical-description":"__sitename__ jest społecznością FANDOMU __vertical__. Treści są dostępne na licencji __license__.","global-footer-licensing-and-vertical-description-param-vertical-tv":"TV","global-footer-licensing-and-vertical-description-param-vertical-games":"Gry","global-footer-licensing-and-vertical-description-param-vertical-books":"Książki","global-footer-licensing-and-vertical-description-param-vertical-comics":"Komiksy","global-footer-licensing-and-vertical-description-param-vertical-lifestyle":"Lifestyle","global-footer-licensing-and-vertical-description-param-vertical-music":"Muzyka","global-footer-licensing-and-vertical-description-param-vertical-movies":"Filmy","global-footer-full-site-link":"Zobacz pełną wersję","global-footer-mobile-site-link":"Zobacz wersję mobilną","global-footer-copyright-wikia":"Copyright __date__ Wikia, Inc.","global-navigation-anon-my-account":"Moje konto","global-navigation-anon-register":"Zarejestruj się","global-navigation-anon-register-description":"Nie masz konta?","global-navigation-anon-sign-in":"Zaloguj się","global-navigation-create-wiki-link-start-wikia":"Utwórz wiki","global-navigation-fandom-overview-link-vertical-games":"Gry","global-navigation-fandom-overview-link-vertical-movies":"Filmy","global-navigation-fandom-overview-link-vertical-tv":"TV","global-navigation-notifications-title":"Powiadomienia","global-navigation-messages-title":"Wiadomości","global-navigation-search-cancel":"Anuluj","global-navigation-search-placeholder-fandom":"Szukaj wieści i wiki...","global-navigation-search-placeholder-in-wiki":"Szukaj na __sitename__...","global-navigation-search-placeholder-inactive":"Szukaj","global-navigation-search-placeholder-wikis":"Szukaj wiki...","global-navigation-search-select-fandom":"Wieści z FANDOMU i Wiki","global-navigation-search-select-in-wiki":"Na tej wiki","global-navigation-search-select-wikis":"Wiki","global-navigation-user-help":"Pomoc","global-navigation-user-message-wall":"Moja tablica","global-navigation-user-my-preferences":"Preferencje","global-navigation-user-my-talk":"Moja dyskusja","global-navigation-user-sign-out":"Wyloguj","global-navigation-user-view-profile":"Zobacz profil","global-navigation-user-view-author-profile":"Profil autora","global-navigation-wikis-community-central":"Centrum Społeczności","global-navigation-wikis-explore":"Odkrywaj wiki","global-navigation-wikis-fandom-university":"Uniwersytet FANDOMU","global-navigation-wikis-header":"Wikis","notifications-no-notifications-message":"Brak powiadomień.","notifications-mark-all-as-read":"Oznacz wszystkie jako przeczytane","notifications-replied-by-multiple-users-with-title":"__mostRecentUser__ i __number__ innych użytkowników <b>odpowiedziało</b> na __postTitle__","notifications-replied-by-multiple-users-no-title":"__mostRecentUser__ i __number__ innych użytkowników <b>odpowiedziało</b> na dyskusję, którą śledzisz","notifications-replied-by-two-users-with-title":"Użytkownicy __firstUser__ i __secondUser__ <b>odpowiedzieli</b> na __postTitle__","notifications-replied-by-two-users-no-title":"Użytkownicy __firstUser__ i __secondUser__ <b>odpowiedzieli</b> na dyskusję, którą śledzisz","notifications-replied-by-with-title":"Użytkownik __user__ <b>odpowiedział</b> na __postTitle__","notifications-replied-by-no-title":"Użytkownik __user__ <b>odpowiedział</b> na dyskusję, którą śledzisz","notifications-post-upvote-single-user-with-title":"Jeden użytkownik <b>zagłosował</b> na twoją dyskusję: __postTitle__","notifications-post-upvote-single-user-no-title":"Jeden użytkownik <b>zagłosował</b> na twoją dyskusję","notifications-post-upvote-multiple-users-with-title":"__number__ użytkowników <b>zagłosowało</b> na twoją dyskusję: __postTitle__","notifications-post-upvote-multiple-users-no-title":"__number__ użytkowników <b>zagłosowało</b> na twoją dyskusję","notifications-reply-upvote-single-user-with-title":"Jeden użytkownik <b>zagłosował</b> na twoją odpowiedź w __postTitle__","notifications-reply-upvote-single-user-no-title":"Jeden użytkownik <b>zagłosował</b> na twoją odpowiedź","notifications-reply-upvote-multiple-users-with-title":"__number__ użytkowników <b>zagłosowało</b> na twoją odpowiedź w __postTitle__","notifications-reply-upvote-multiple-users-no-title":"__number__ użytkowników <b>zagłosowało</b> na twoją odpowiedź","notifications-notifications":"Powiadomienia","community-header-page":"Strona","community-header-pages":"Stron","community-header-add":"Dodaj","community-header-add-new-page":"Dodaj nową stronę","community-header-discuss":"Dyskutuj","community-header-explore":"Eksploruj","community-header-wiki-activity":"Aktywność na wiki","community-header-random-page":"Losowa strona","community-header-community":"Społeczność","community-header-videos":"Filmy","community-header-images":"Obrazy","community-header-forum":"Forum","community-header-admin-dashboard":"Panel administratora","community-header-discussions-post":"Post","community-header-discussions-posts":"Postów"}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {"global-footer-follow-us-link-facebook":"Facebook","global-footer-follow-us-link-instagram":"Instagram","global-footer-follow-us-link-reddit":"Reddit","global-footer-follow-us-link-twitter":"Twitter","global-footer-follow-us-link-youtube":"YouTube","global-footer-follow-us-header":"Siga-nos","global-footer-fandom-overview-link-explore-wikis":"Explorar Wikis","global-footer-fandom-overview-link-vertical-games":"Jogos","global-footer-fandom-overview-link-vertical-movies":"Filmes","global-footer-fandom-overview-link-vertical-tv":"TV","global-footer-international-header-subtitle":"O Reino dos Fãs","global-footer-create-wiki-link-start-wikia":"Começar uma wiki","global-footer-create-wiki-description":"Não consegue encontrar uma comunidade que você ama? Crie a sua própria e comece algo épico.","global-footer-advertise-header":"Anuncie","global-footer-advertise-link-contact":"Contato","global-footer-advertise-link-media-kit":"Kit de Imprensa","global-footer-community-apps-description":"Leve seus fandoms favoritos com você e fique por dentro de tudo","global-footer-community-apps-header":"Apps da comunidade","global-footer-community-header":"Comunidade","global-footer-community-link-community-central":"Central da Comunidade","global-footer-community-link-fan-contributor-program":"Programa Colaborador Fandom","global-footer-community-link-help":"Ajuda","global-footer-community-link-support":"Suporte","global-footer-community-link-wam-score":"Pontuação WAM","global-footer-company-overview-header":"Visão geral","global-footer-company-overview-link-about":"Sobre","global-footer-company-overview-link-careers":"Carreiras","global-footer-company-overview-link-contact":"Contato","global-footer-company-overview-link-press":"Imprensa","global-footer-company-overview-link-wikia-org":"Wikia.org","global-footer-site-overview-link-global-sitemap":"Mapa do site global","global-footer-site-overview-link-local-sitemap":"Mapa do site local","global-footer-site-overview-link-terms-of-use":"Termos de uso","global-footer-site-overview-link-privacy-policy":"Política de privacidade","global-footer-licensing-and-vertical-description":"__sitename__ é uma comunidade Fandom __vertical__. O conteúdo está disponível sob __license__.","global-footer-licensing-and-vertical-description-param-vertical-tv":"TV","global-footer-licensing-and-vertical-description-param-vertical-games":"Jogos","global-footer-licensing-and-vertical-description-param-vertical-books":"Livros","global-footer-licensing-and-vertical-description-param-vertical-comics":"Quadrinhos","global-footer-licensing-and-vertical-description-param-vertical-lifestyle":"Estilo de vida","global-footer-licensing-and-vertical-description-param-vertical-music":"Música","global-footer-licensing-and-vertical-description-param-vertical-movies":"Filmes","global-footer-full-site-link":"Ver site completo","global-footer-mobile-site-link":"Ver site móvel","global-footer-copyright-wikia":"Wikia © __date__. Todos os direitos reservados.","global-navigation-anon-my-account":"Minha Conta","global-navigation-anon-register":"Registre-se","global-navigation-anon-register-description":"Você não tem uma conta?","global-navigation-anon-sign-in":"Iniciar sessão","global-navigation-create-wiki-link-start-wikia":"Começar uma wiki","global-navigation-fandom-overview-link-vertical-games":"Jogos","global-navigation-fandom-overview-link-vertical-movies":"Filmes","global-navigation-fandom-overview-link-vertical-tv":"TV","global-navigation-notifications-title":"Notificações","global-navigation-messages-title":"Mensagens","global-navigation-search-cancel":"Cancelar","global-navigation-search-placeholder-fandom":"Procurar artigos e wikis...","global-navigation-search-placeholder-in-wiki":"Pesquisa __sitename__...","global-navigation-search-placeholder-inactive":"Pesquisar","global-navigation-search-placeholder-wikis":"Procurar por uma wiki...","global-navigation-search-select-fandom":"Histórias e Wikis FANDOM","global-navigation-search-select-in-wiki":"Nesta wiki","global-navigation-search-select-wikis":"Por uma wiki","global-navigation-user-help":"Ajuda","global-navigation-user-message-wall":"Mural de mensagens","global-navigation-user-my-preferences":"Minhas preferências","global-navigation-user-my-talk":"Minhas mensagens","global-navigation-user-sign-out":"Sair","global-navigation-user-view-profile":"Ver perfil","global-navigation-user-view-author-profile":"Perfil de autor","global-navigation-wikis-community-central":"Central da Comunidade","global-navigation-wikis-explore":"Explorar wikis","global-navigation-wikis-fandom-university":"Universidade FANDOM","global-navigation-wikis-header":"Wikis","notifications-no-notifications-message":"Nenhuma notificação ainda.","notifications-mark-all-as-read":"Marcar tudo como lido","notifications-replied-by-multiple-users-with-title":"__mostRecentUser__ e __number__ outros usuários <b>responderam</b> a __postTitle__","notifications-replied-by-multiple-users-no-title":"__mostRecentUser__ e __number__ outros usuários <b>responderam</b> a uma discussão que você está seguindo","notifications-replied-by-two-users-with-title":"__firstUser__ e __secondUser__ <b>responderam</b> a __postTitle__","notifications-replied-by-two-users-no-title":"__firstUser__ e __secondUser__ <b>responderam</b> a uma discussão que você está seguindo","notifications-replied-by-with-title":"__user__ <b>respondeu</b> a __postTitle__","notifications-replied-by-no-title":"__user__ <b>respondeu</b> a uma discussão que você está seguindo","notifications-post-upvote-single-user-with-title":"1 usuário <b>votou</b> na sua discussão __postTitle__","notifications-post-upvote-single-user-no-title":"1 usuário <b>votou</b> na sua discussão","notifications-post-upvote-multiple-users-with-title":"__number__ usuários <b>votaram</b> em sua discussão __postTitle__","notifications-post-upvote-multiple-users-no-title":"__number__ usuários <b>votaram</b> em sua discussão","notifications-reply-upvote-single-user-with-title":"1 usuário <b>votou</b>na sua resposta em __postTitle__","notifications-reply-upvote-single-user-no-title":"1 usuário <b>votou</b> na sua resposta","notifications-reply-upvote-multiple-users-with-title":"__number__ usuários <b>votaram</b> em sua resposta em __postTitle__","notifications-reply-upvote-multiple-users-no-title":"__number__ usuários <b>votaram</b> em sua resposta","notifications-notifications":"Notificações","community-header-page":"Página","community-header-pages":"Páginas","community-header-add":"Adicionar","community-header-add-new-page":"Adicionar nova página","community-header-discuss":"Converse","community-header-explore":"Explorar","community-header-wiki-activity":"Atividade na Wiki","community-header-random-page":"Página Aleatória","community-header-community":"Comunidade","community-header-videos":"Vídeos","community-header-images":"Imagens","community-header-forum":"Fórum","community-header-admin-dashboard":"Painel de Administração","community-header-discussions-post":"Posts","community-header-discussions-posts":"Posts"}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {"global-footer-follow-us-link-facebook":"Facebook","global-footer-follow-us-link-instagram":"Instagram","global-footer-follow-us-link-reddit":"Reddit","global-footer-follow-us-link-twitter":"Twitter","global-footer-follow-us-link-youtube":"YouTube","global-footer-follow-us-header":"Мы в социальных сетях","global-footer-fandom-overview-link-explore-wikis":"Исследуйте вики","global-footer-fandom-overview-link-vertical-games":"Видеоигры","global-footer-fandom-overview-link-vertical-movies":"Кино","global-footer-fandom-overview-link-vertical-tv":"ТВ","global-footer-international-header-subtitle":"Твой ФЭНДОМ","global-footer-create-wiki-link-start-wikia":"Создать вики","global-footer-create-wiki-description":"Не удаётся найти сообщество по интересующей вас теме? Создайте своё и положите начало легенде!","global-footer-advertise-header":"Реклама на сайте","global-footer-advertise-link-contact":"Связаться с нами","global-footer-advertise-link-media-kit":"Медиа-кит","global-footer-community-apps-description":"Оставайтесь в курсе всего происходящего на ваших любимых сообществах","global-footer-community-apps-header":"Приложения Фэндома","global-footer-community-header":"Сообщество","global-footer-community-link-community-central":"Вики Сообщества","global-footer-community-link-fan-contributor-program":"Программа авторов Фэндома","global-footer-community-link-help":"Справка","global-footer-community-link-support":"Поддержка","global-footer-community-link-wam-score":"Рейтинг WAM","global-footer-company-overview-header":"Обзор","global-footer-company-overview-link-about":"О нас","global-footer-company-overview-link-careers":"Вакансии","global-footer-company-overview-link-contact":"Обратная связь","global-footer-company-overview-link-press":"В прессе","global-footer-company-overview-link-wikia-org":"Wikia.org","global-footer-site-overview-link-global-sitemap":"Общая карта сайта","global-footer-site-overview-link-local-sitemap":"Локальная карта сайта","global-footer-site-overview-link-terms-of-use":"Условия использования","global-footer-site-overview-link-privacy-policy":"Конфиден­циальность","global-footer-licensing-and-vertical-description":"__sitename__ — это ФЭНДОМ на портале __vertical__. Содержание доступно в соответствии с лицензией __license__.","global-footer-licensing-and-vertical-description-param-vertical-tv":"ТВ","global-footer-licensing-and-vertical-description-param-vertical-games":"Видеоигры","global-footer-licensing-and-vertical-description-param-vertical-books":"Книги","global-footer-licensing-and-vertical-description-param-vertical-comics":"Комиксы","global-footer-licensing-and-vertical-description-param-vertical-lifestyle":"Увлечения","global-footer-licensing-and-vertical-description-param-vertical-music":"Музыка","global-footer-licensing-and-vertical-description-param-vertical-movies":"Кино","global-footer-full-site-link":"Полная версия","global-footer-mobile-site-link":"Мобильная версия","global-footer-copyright-wikia":"© __date__ Wikia, Inc.","global-navigation-anon-my-account":"Мой аккаунт","global-navigation-anon-register":"Зарегистрироваться","global-navigation-anon-register-description":"Нет учётной записи?","global-navigation-anon-sign-in":"Войти","global-navigation-create-wiki-link-start-wikia":"Создать вики","global-navigation-fandom-overview-link-vertical-games":"Видеоигры","global-navigation-fandom-overview-link-vertical-movies":"Кино","global-navigation-fandom-overview-link-vertical-tv":"ТВ","global-navigation-notifications-title":"Уведомления","global-navigation-messages-title":"Сообщения","global-navigation-search-cancel":"Отмена","global-navigation-search-placeholder-fandom":"Поиск статей и вики...","global-navigation-search-placeholder-in-wiki":"Поиск на __sitename__...","global-navigation-search-placeholder-inactive":"Поиск","global-navigation-search-placeholder-wikis":"Поиск вики...","global-navigation-search-select-fandom":"Статьи ФЭНДОМА и вики","global-navigation-search-select-in-wiki":"на этой вики","global-navigation-search-select-wikis":"вики","global-navigation-user-help":"Справка","global-navigation-user-message-wall":"Стена обсуждения","global-navigation-user-my-preferences":"Настройки","global-navigation-user-my-talk":"Обсуждение","global-navigation-user-sign-out":"Выйти","global-navigation-user-view-profile":"Моя страница","global-navigation-user-view-author-profile":"Профиль автора","global-navigation-wikis-community-central":"Вики Сообщества","global-navigation-wikis-explore":"Исследуйте вики","global-navigation-wikis-fandom-university":"Университет ФЭНДОМА","global-navigation-wikis-header":"Вики","notifications-no-notifications-message":"Уведомлений нет.","notifications-mark-all-as-read":"Отметить всё как прочитанное","notifications-replied-by-multiple-users-with-title":"__mostRecentUser__ и __number__ других <b>ответили</b> на сообщение __postTitle__","notifications-replied-by-multiple-users-no-title":"__mostRecentUser__ и __number__ других <b>ответили</b> в отслеживаемом вами обсуждении","notifications-replied-by-two-users-with-title":"__firstUser__ и __secondUser__ <b>ответили</b> на сообщение __postTitle__","notifications-replied-by-two-users-no-title":"__firstUser__ и __secondUser__ <b>ответили</b> в отслеживаемом вами обсуждении","notifications-replied-by-with-title":"__user__ <b>ответил(а)</b> на сообщение __postTitle__","notifications-replied-by-no-title":"__user__ <b>ответил(а)</b> в отслеживаемом вами обсуждении","notifications-post-upvote-single-user-with-title":"1 участник <b>оценил</b> ваше сообщение __postTitle__","notifications-post-upvote-single-user-no-title":"1 участник <b>оценил</b> ваше сообщение","notifications-post-upvote-multiple-users-with-title":"__number__ — столько участников <b>оценили</b> ваше сообщение __postTitle__","notifications-post-upvote-multiple-users-no-title":"__number__ — столько участников <b>оценили</b> ваше сообщение","notifications-reply-upvote-single-user-with-title":"1 участник <b>оценил</b> ваш ответ в обсуждении __postTitle__","notifications-reply-upvote-single-user-no-title":"1 участник <b>оценил</b> ваш ответ","notifications-reply-upvote-multiple-users-with-title":"__number__ — столько участников <b>оценили</b> ваш ответ в обсуждении __postTitle__","notifications-reply-upvote-multiple-users-no-title":"__number__ — столько участников <b>оценили</b> ваш ответ","notifications-notifications":"Уведомления","community-header-page":"Страница","community-header-pages":"Страницы","community-header-add":"Создать","community-header-add-new-page":"Создать cтраницу","community-header-discuss":"Общение","community-header-explore":"Исследовать","community-header-wiki-activity":"Вики-деятельность","community-header-random-page":"Случайная статья","community-header-community":"Сообщество","community-header-videos":"Видео","community-header-images":"Изображения","community-header-forum":"Форум","community-header-admin-dashboard":"Кабинет администратора","community-header-discussions-post":"Опубликовать","community-header-discussions-posts":"сообщение(я/й)"}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {"global-footer-follow-us-link-facebook":"Facebook","global-footer-follow-us-link-instagram":"Instagram","global-footer-follow-us-link-reddit":"Reddit","global-footer-follow-us-link-twitter":"Twitter","global-footer-follow-us-link-youtube":"YouTube","global-footer-follow-us-header":"關注我們","global-footer-fandom-overview-link-explore-wikis":"探索Wiki","global-footer-fandom-overview-link-vertical-games":"遊戲","global-footer-fandom-overview-link-vertical-movies":"電影","global-footer-fandom-overview-link-vertical-tv":"電視","global-footer-international-header-subtitle":"粉絲社群家園","global-footer-create-wiki-link-start-wikia":"創建Wiki","global-footer-create-wiki-description":"找不到你所喜愛的社區？那就創建你自己的社區展示你的愛好吧！","global-footer-advertise-header":"廣告投放","global-footer-advertise-link-contact":"聯繫我們","global-footer-advertise-link-media-kit":"媒體包","global-footer-community-apps-description":"和你最喜歡的粉絲社區保持同步，千萬不要錯過任何訊息。","global-footer-community-apps-header":"社區App","global-footer-community-header":"社區","global-footer-community-link-community-central":"社區中心","global-footer-community-link-fan-contributor-program":"粉絲貢獻者招募計劃","global-footer-community-link-help":"幫助","global-footer-community-link-support":"支援","global-footer-community-link-wam-score":"WAM分數","global-footer-company-overview-header":"概覽","global-footer-company-overview-link-about":"關於我們","global-footer-company-overview-link-careers":"公司招聘","global-footer-company-overview-link-contact":"聯繫我們","global-footer-company-overview-link-press":"新聞","global-footer-company-overview-link-wikia-org":"Wikia.org","global-footer-site-overview-link-global-sitemap":"全球網站地圖","global-footer-site-overview-link-local-sitemap":"本地網站地圖","global-footer-site-overview-link-terms-of-use":"使用條款","global-footer-site-overview-link-privacy-policy":"隱私政策","global-footer-licensing-and-vertical-description":"__sitename__是一個由粉絲所建立的__vertical__社區。內容允許以__license__授權使用。","global-footer-licensing-and-vertical-description-param-vertical-tv":"電視","global-footer-licensing-and-vertical-description-param-vertical-games":"遊戲","global-footer-licensing-and-vertical-description-param-vertical-books":"書籍","global-footer-licensing-and-vertical-description-param-vertical-comics":"漫畫","global-footer-licensing-and-vertical-description-param-vertical-lifestyle":"生活","global-footer-licensing-and-vertical-description-param-vertical-music":"音樂","global-footer-licensing-and-vertical-description-param-vertical-movies":"電影","global-footer-full-site-link":"查看完整版網頁","global-footer-mobile-site-link":"查看手機版網頁","global-footer-copyright-wikia":"版權所有__date__Wikia, Inc.","global-navigation-anon-my-account":"我的帳戶","global-navigation-anon-register":"註冊","global-navigation-anon-register-description":"沒有帳戶？","global-navigation-anon-sign-in":"登入","global-navigation-create-wiki-link-start-wikia":"創建維基","global-navigation-fandom-overview-link-vertical-games":"遊戲","global-navigation-fandom-overview-link-vertical-movies":"電影","global-navigation-fandom-overview-link-vertical-tv":"電視","global-navigation-notifications-title":"通知","global-navigation-messages-title":"訊息","global-navigation-search-cancel":"取消","global-navigation-search-placeholder-fandom":"搜尋文章和Wiki…","global-navigation-search-placeholder-in-wiki":"搜尋__sitename__","global-navigation-search-placeholder-inactive":"搜尋","global-navigation-search-placeholder-wikis":"搜尋Wiki...","global-navigation-search-select-fandom":"FANDOM文章和社區","global-navigation-search-select-in-wiki":"Wiki導航","global-navigation-search-select-wikis":"Wiki","global-navigation-user-help":"幫助","global-navigation-user-message-wall":"訊息牆","global-navigation-user-my-preferences":"個人設定","global-navigation-user-my-talk":"我的對話頁","global-navigation-user-sign-out":"登出","global-navigation-user-view-profile":"查看用戶檔案","global-navigation-user-view-author-profile":"作者資訊","global-navigation-wikis-community-central":"社區中心","global-navigation-wikis-explore":"探索Wiki","global-navigation-wikis-fandom-university":"FANDOM課堂","global-navigation-wikis-header":"Wiki","notifications-no-notifications-message":"沒有通知。","notifications-mark-all-as-read":"標記全部為已讀","notifications-replied-by-multiple-users-with-title":"__mostRecentUser__和__number__個其他使用者<b>回覆了</b>__postTitle__","notifications-replied-by-multiple-users-no-title":"__mostRecentUser__和__number__個其他使用者<b>回覆了</b>你所關注的討論文章","notifications-replied-by-two-users-with-title":"__firstUser__和__secondUser__<b>回覆了</b>__postTitle__","notifications-replied-by-two-users-no-title":"__firstUser__和__secondUser__<b>回覆了</b>你所關注的討論文章","notifications-replied-by-with-title":"__user__<b>回覆了</b>__postTitle__","notifications-replied-by-no-title":"__user__<b>回覆了</b>你所關注的討論文章","notifications-post-upvote-single-user-with-title":"一位用戶<b>讚了</b>你的討論文章__postTitle__","notifications-post-upvote-single-user-no-title":"一位用戶<b>讚了</b>你的討論文章","notifications-post-upvote-multiple-users-with-title":"__number__個使用者<b>讚了</b>你的討論文章__postTitle__","notifications-post-upvote-multiple-users-no-title":"__number__個使用者<b>讚了</b>你的討論文章","notifications-reply-upvote-single-user-with-title":"一位用戶<b>讚了</b>你對__postTitle__的回覆","notifications-reply-upvote-single-user-no-title":"一位用戶<b>讚了</b>你的回覆","notifications-reply-upvote-multiple-users-with-title":"__number__個使用者<b>讚了</b>你對__postTitle__的回覆","notifications-reply-upvote-multiple-users-no-title":"__number__個使用者<b>讚了</b>你的回覆","notifications-notifications":"通知","community-header-page":"頁面","community-header-pages":"個頁面","community-header-add":"增加","community-header-add-new-page":"增加新頁面","community-header-discuss":"討論","community-header-explore":"探索","community-header-wiki-activity":"Wiki動態","community-header-random-page":"隨機頁面","community-header-community":"社區","community-header-videos":"影片","community-header-images":"圖片","community-header-forum":"論壇","community-header-admin-dashboard":"管理員面板","community-header-discussions-post":"篇討論文章","community-header-discussions-posts":"篇討論文章"}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = {"global-footer-follow-us-link-facebook":"Facebook","global-footer-follow-us-link-instagram":"Instagram","global-footer-follow-us-link-reddit":"Reddit","global-footer-follow-us-link-twitter":"Twitter","global-footer-follow-us-link-youtube":"YouTube","global-footer-follow-us-header":"关注我们","global-footer-fandom-overview-link-explore-wikis":"探索维基","global-footer-fandom-overview-link-vertical-games":"游戏","global-footer-fandom-overview-link-vertical-movies":"电影","global-footer-fandom-overview-link-vertical-tv":"电视","global-footer-international-header-subtitle":"粉丝社群家园","global-footer-create-wiki-link-start-wikia":"创建维基","global-footer-create-wiki-description":"找不到你所喜爱的社区？那就创建一个你自己的社区展示你的爱好吧。","global-footer-advertise-header":"广告投放","global-footer-advertise-link-contact":"联系我们","global-footer-advertise-link-media-kit":"媒体服务","global-footer-community-apps-description":"和你最喜爱的粉丝社区保持同步，不要错过精彩内容。","global-footer-community-apps-header":"社区应用程序","global-footer-community-header":"社区","global-footer-community-link-community-central":"社区中心","global-footer-community-link-fan-contributor-program":"粉丝贡献者招募项目","global-footer-community-link-help":"帮助","global-footer-community-link-support":"支持","global-footer-community-link-wam-score":"WAM分数","global-footer-company-overview-header":"概述","global-footer-company-overview-link-about":"关于","global-footer-company-overview-link-careers":"公司招聘","global-footer-company-overview-link-contact":"联系我们","global-footer-company-overview-link-press":"新闻","global-footer-company-overview-link-wikia-org":"Wikia.org","global-footer-site-overview-link-global-sitemap":"全球网站地图","global-footer-site-overview-link-local-sitemap":"本地网站地图","global-footer-site-overview-link-terms-of-use":"使用条款","global-footer-site-overview-link-privacy-policy":"隐私政策","global-footer-licensing-and-vertical-description":"__sitename__是FANDOM上的一个__vertical__社区。內容允许以__license__授权使用。","global-footer-licensing-and-vertical-description-param-vertical-tv":"电视","global-footer-licensing-and-vertical-description-param-vertical-games":"游戏","global-footer-licensing-and-vertical-description-param-vertical-books":"书籍","global-footer-licensing-and-vertical-description-param-vertical-comics":"漫画","global-footer-licensing-and-vertical-description-param-vertical-lifestyle":"生活","global-footer-licensing-and-vertical-description-param-vertical-music":"音乐","global-footer-licensing-and-vertical-description-param-vertical-movies":"电影","global-footer-full-site-link":"查看完整网站","global-footer-mobile-site-link":"查看移动网站","global-footer-copyright-wikia":"版权所有__date__Wikia, Inc.","global-navigation-anon-my-account":"我的帐户","global-navigation-anon-register":"注册","global-navigation-anon-register-description":"没有帐户？","global-navigation-anon-sign-in":"登入","global-navigation-create-wiki-link-start-wikia":"创建维基","global-navigation-fandom-overview-link-vertical-games":"游戏","global-navigation-fandom-overview-link-vertical-movies":"电影","global-navigation-fandom-overview-link-vertical-tv":"电视","global-navigation-notifications-title":"提醒","global-navigation-messages-title":"消息","global-navigation-search-cancel":"取消","global-navigation-search-placeholder-fandom":"查询文章和社区...","global-navigation-search-placeholder-in-wiki":"搜索__sitename__...","global-navigation-search-placeholder-inactive":"搜索","global-navigation-search-placeholder-wikis":"检索维基...","global-navigation-search-select-fandom":"FANDOM文章和社区","global-navigation-search-select-in-wiki":"维基导航","global-navigation-search-select-wikis":"维基社区","global-navigation-user-help":"帮助","global-navigation-user-message-wall":"信息墙","global-navigation-user-my-preferences":"个人设定","global-navigation-user-my-talk":"我的对话页","global-navigation-user-sign-out":"登出","global-navigation-user-view-profile":"查看个人主页","global-navigation-user-view-author-profile":"作者简介","global-navigation-wikis-community-central":"社区中心","global-navigation-wikis-explore":"探索维基","global-navigation-wikis-fandom-university":"FANDOM课堂","global-navigation-wikis-header":"维基","notifications-no-notifications-message":"没有提醒。","notifications-mark-all-as-read":"全部标记为已读","notifications-replied-by-multiple-users-with-title":"__mostRecentUser__和__number__个其他用户<b>回复了</b>__postTitle__","notifications-replied-by-multiple-users-no-title":"__mostRecentUser__和__number__个其他用户<b>回复了</b>你所关注的一条讨论","notifications-replied-by-two-users-with-title":"__firstUser__和__secondUser__<b>回复了</b>__postTitle__","notifications-replied-by-two-users-no-title":"__firstUser__和__secondUser__<b>回复了</b>你所关注的一条讨论","notifications-replied-by-with-title":"__user__<b>回复了</b>__postTitle__","notifications-replied-by-no-title":"__user__<b>回复了</b>你所关注的一条讨论","notifications-post-upvote-single-user-with-title":"1个用户<b>赞了</b>你的讨论贴__postTitle__","notifications-post-upvote-single-user-no-title":"1个用户<b>赞了</b>你的讨论贴","notifications-post-upvote-multiple-users-with-title":"__number__个用户<b>赞了</b>你的讨论贴__postTitle__","notifications-post-upvote-multiple-users-no-title":"__number__个用户<b>赞了</b>你的讨论贴","notifications-reply-upvote-single-user-with-title":"1个用户<b>赞了</b>你对__postTitle__的回复","notifications-reply-upvote-single-user-no-title":"1个用户<b>赞了</b>你的回复","notifications-reply-upvote-multiple-users-with-title":"__number__个用户<b>赞了</b>你对__postTitle__的回复","notifications-reply-upvote-multiple-users-no-title":"__number__个用户<b>赞了</b>你的回复","notifications-notifications":"提醒","community-header-page":"页面","community-header-pages":"个页面","community-header-add":"添加","community-header-add-new-page":"添加新页面","community-header-discuss":"讨论版","community-header-explore":"发现","community-header-wiki-activity":"维基动态","community-header-random-page":"随机页面","community-header-community":"社区","community-header-videos":"视频","community-header-images":"图片","community-header-forum":"论坛","community-header-admin-dashboard":"管理员控制面板","community-header-discussions-post":"条帖子","community-header-discussions-posts":"条帖子"}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromNavResponse = fromNavResponse;
exports.validateUserData = validateUserData;
function fromNavResponse(json) {
    var data = json.user;
    if (!data) {
        return null;
    }

    var name = data.header.username.value;

    return {
        name: name,
        avatar: data.header.url
    };
}

function validateUserData(data) {
    return data && data.name && data.avatar ? data : null;
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".wds-global-navigation {\n  font-family: sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  position: fixed;\n  width: 100%;\n  z-index: 2000; }\n  .wds-global-navigation a:hover {\n    cursor: pointer; }\n  .wds-global-navigation .hidden {\n    display: none; }\n  .wds-global-navigation .global-navigation-user-sign-out form {\n    margin-bottom: 0; }\n  .wds-global-navigation.headroom {\n    will-change: transform;\n    transition: transform 200ms linear; }\n    .wds-global-navigation.headroom.headroom--pinned {\n      transform: translateY(0%); }\n    .wds-global-navigation.headroom.headroom--unpinned {\n      transform: translateY(-100%); }\n", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(3);

var _getStrings = __webpack_require__(7);

var _getStrings2 = _interopRequireDefault(_getStrings);

var _getOrCreateTemplate = __webpack_require__(8);

var _getOrCreateTemplate2 = _interopRequireDefault(_getOrCreateTemplate);

var _footer = __webpack_require__(36);

var _footer2 = _interopRequireDefault(_footer);

var _AttributeHelper = __webpack_require__(6);

var _AttributeHelper2 = _interopRequireDefault(_AttributeHelper);

var _style = __webpack_require__(42);

var _style2 = _interopRequireDefault(_style);

var _sprite = __webpack_require__(9);

var _sprite2 = _interopRequireDefault(_sprite);

var _styles = __webpack_require__(10);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// FIXME: Can this be included globally or reduced?


var FandomGlobalFooter = function (_HTMLElement) {
    _inherits(FandomGlobalFooter, _HTMLElement);

    function FandomGlobalFooter() {
        _classCallCheck(this, FandomGlobalFooter);

        return _possibleConstructorReturn(this, (FandomGlobalFooter.__proto__ || Object.getPrototypeOf(FandomGlobalFooter)).apply(this, arguments));
    }

    _createClass(FandomGlobalFooter, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            var _this2 = this;

            this.rootElement = this.attachShadow({ mode: 'open' });
            this.atts = new _AttributeHelper2.default(this);
            this.strings = (0, _getStrings2.default)(this.atts.langCode);

            fetch(this.atts.mwBase + '/api/v1/design-system/wikis/' + this.atts.cityId + '/' + this.atts.langCode + '/global-footer').then(function (response) {
                return response.json();
            }).then(function (footer) {
                return _this2._draw(footer);
            });
        }
    }, {
        key: '_getCSS',
        value: function _getCSS() {
            return '<style>' + _styles2.default.toString() + ' ' + _style2.default.toString() + '</style>';
        }
    }, {
        key: '_draw',
        value: function _draw(footer) {
            var content = (0, _footer2.default)({
                i18n: this.strings,
                model: footer
            });

            var template = (0, _getOrCreateTemplate2.default)('fandomGlobalFooter', this._getCSS() + _sprite2.default + content);

            ShadyCSS.prepareTemplate(template, 'fandom-global-footer');
            ShadyCSS.styleElement(this);
            this.rootElement.appendChild(document.importNode(template.content, true));
        }
    }]);

    return FandomGlobalFooter;
}(HTMLElement);

exports.default = FandomGlobalFooter;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <h2 class=\"wds-global-footer__header\">\n            <a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.header : stack1)) != null ? stack1.href : stack1), depth0))
    + "\" data-tracking-label=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.header : stack1)) != null ? stack1.tracking_label : stack1), depth0))
    + "\" title=\""
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.header : stack1)) != null ? stack1.title : stack1)) != null ? stack1.value : stack1), depth0))
    + "\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(5),depth0,{"name":"svg","hash":{"image":((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.header : stack1)) != null ? stack1["image-data"] : stack1)) != null ? stack1.name : stack1),"class":"wds-global-footer__header-logo"},"data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </a>\n        </h2>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<footer class=\"wds-global-footer\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.header : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"wds-global-footer__main\">\n        <div class=\"wds-global-footer__fandom-sections\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(1),depth0,{"name":"global-footer-section","hash":{"parentName":"fandom","name":"fandom-overview","model":((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.fandom_overview : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(1),depth0,{"name":"global-footer-section","hash":{"parentName":"fandom","name":"follow-us","model":((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.follow_us : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"wds-global-footer__wikia-sections\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(1),depth0,{"name":"global-footer-section","hash":{"parentName":"wikia","name":"company-overview","model":((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.company_overview : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(1),depth0,{"name":"global-footer-section","hash":{"parentName":"wikia","name":"site-overview","model":((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.site_overview : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(1),depth0,{"name":"global-footer-section","hash":{"parentName":"wikia","name":"community","model":((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.community : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(1),depth0,{"name":"global-footer-section","hash":{"parentName":"wikia","name":"create-wiki","model":((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.create_wiki : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(1),depth0,{"name":"global-footer-section","hash":{"parentName":"wikia","name":"community-apps","model":((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.community_apps : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(__webpack_require__(1),depth0,{"name":"global-footer-section","hash":{"parentName":"wikia","name":"advertise","model":((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.advertise : stack1)},"data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        </div>\n    </div>\n"
    + ((stack1 = container.invokePartial(__webpack_require__(40),depth0,{"name":"global-footer-bottom-bar","hash":{"model":(depth0 != null ? depth0.model : depth0)},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</footer>";
},"usePartial":true,"useData":true});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.href : stack1), depth0))
    + "\" class=\"wds-global-footer__link\" data-tracking-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.tracking_label : stack1), depth0))
    + "\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(5),depth0,{"name":"svg","hash":{"image":((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1["image-data"] : stack1)) != null ? stack1.name : stack1),"class":"wds-global-footer__image wds-icon"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</a>";
},"usePartial":true,"useData":true});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.href : stack1), depth0))
    + "\" class=\"wds-global-footer__link wds-is-"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.brand : stack1), depth0))
    + "\" data-tracking-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.tracking_label : stack1), depth0))
    + "\">\n    <div>"
    + alias2(__default(__webpack_require__(2)).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1)) != null ? stack1.key : stack1),{"name":"i18n","hash":{"ns":"design-system"},"data":data}))
    + "</div>\n"
    + ((stack1 = container.invokePartial(__webpack_require__(5),depth0,{"name":"svg","hash":{"image":"wds-icons-arrow","class":"wds-global-footer__image wds-icon"},"data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</a>";
},"usePartial":true,"useData":true});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.href : stack1), depth0))
    + "\" class=\"wds-global-footer__link\" data-tracking-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.tracking_label : stack1), depth0))
    + "\">"
    + alias2(__default(__webpack_require__(2)).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1)) != null ? stack1.key : stack1),{"name":"i18n","hash":{"ns":"design-system"},"data":data}))
    + "</a>\n";
},"useData":true});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"wds-global-footer__bottom-bar\">\n    <div class=\"wds-global-footer__bottom-bar-row wds-has-padding\">\n        "
    + ((stack1 = __default(__webpack_require__(41)).call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.licensing_and_vertical : stack1)) != null ? stack1.description : stack1),{"name":"license","hash":{},"data":data})) != null ? stack1 : "")
    + "\n    </div>\n    <div class=\"wds-global-footer__bottom-bar-row wds-has-border-top global-footer-full-site-link-wrapper\">\n        <a id=\"global-footer-full-site-link\" href=\"?useskin=oasis\" rel=\"nofollow\" class=\"wds-global-footer__button-link\" data-tracking-label=\"full-site-link\">\n            "
    + container.escapeExpression(__default(__webpack_require__(2)).call(alias1,"global-footer-full-site-link",{"name":"i18n","hash":{"ns":"design-system"},"data":data}))
    + "\n        </a>\n    </div>\n</div>";
},"useData":true});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = license;
function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function licenseLink(model) {
    return "<a href=\"" + escapeHtml(model.params.license.href) + "\" data-tracking-label=\"" + escapeHtml(model.params.license.tracking_label) + "\">\n        " + escapeHtml(model.params.license.title.value) + "\n    </a>";
}

function license(model) {
    return this.i18n[model.key].replace('__sitename__', escapeHtml(model.params.sitename.value)).replace('__vertical__', escapeHtml(this.i18n[model.params.vertical.key])).replace('__license__', licenseLink(model));
}

// {{license model.licensing_and_vertical.description.key
// model.licensing_and_vertical.description.params.sitename.value
// model.licensing_and_vertical.description.params.vertical.key}}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".wds-global-footer {\n  font-family: sans-serif; }\n", ""]);

// exports


/***/ })
/******/ ]);
});