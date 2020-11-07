module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1604130613204, function(require, module, exports) {


var constants  = require("./constants");
var formatUrl  = require("./format");
var getOptions = require("./options");
var objUtils   = require("./util/object");
var parseUrl   = require("./parse");
var relateUrl  = require("./relate");



function RelateUrl(from, options)
{
	this.options = getOptions(options,
	{
		defaultPorts: {ftp:21, http:80, https:443},
		directoryIndexes: ["index.html"],
		ignore_www: false,
		output: RelateUrl.SHORTEST,
		rejectedSchemes: ["data","javascript","mailto"],
		removeAuth: false,
		removeDirectoryIndexes: true,
		removeEmptyQueries: false,
		removeRootTrailingSlash: true,
		schemeRelative: true,
		site: undefined,
		slashesDenoteHost: true
	});
	
	this.from = parseUrl.from(from, this.options, null);
}



/*
	Usage: instance=new RelateUrl(); instance.relate();
*/
RelateUrl.prototype.relate = function(from, to, options)
{
	// relate(to,options)
	if ( objUtils.isPlainObject(to) )
	{
		options = to;
		to = from;
		from = null;
	}
	// relate(to)
	else if (!to)
	{
		to = from;
		from = null;
	}
	
	options = getOptions(options, this.options);
	from = from || options.site;
	from = parseUrl.from(from, options, this.from);
	
	if (!from || !from.href)
	{
		throw new Error("from value not defined.");
	}
	else if (from.extra.hrefInfo.minimumPathOnly)
	{
		throw new Error("from value supplied is not absolute: "+from.href);
	}
	
	to = parseUrl.to(to, options);
	
	if (to.valid===false) return to.href;
	
	to = relateUrl(from, to, options);
	to = formatUrl(to, options);
	
	return to;
}



/*
	Usage: RelateUrl.relate();
*/
RelateUrl.relate = function(from, to, options)
{
	return new RelateUrl().relate(from, to, options);
}



// Make constants accessible from API
objUtils.shallowMerge(RelateUrl, constants);



module.exports = RelateUrl;

}, function(modId) {var map = {"./constants":1604130613205,"./format":1604130613206,"./options":1604130613207,"./util/object":1604130613208,"./parse":1604130613209,"./relate":1604130613217}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613205, function(require, module, exports) {


module.exports =
{
	// Output
	ABSOLUTE:      "absolute",
	PATH_RELATIVE: "pathRelative",
	ROOT_RELATIVE: "rootRelative",
	SHORTEST:      "shortest"
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613206, function(require, module, exports) {


var constants = require("./constants");



function formatAuth(urlObj, options)
{
	if (urlObj.auth && !options.removeAuth && (urlObj.extra.relation.maximumHost || options.output===constants.ABSOLUTE))
	{
		return urlObj.auth + "@";
	}
	
	return "";
}



function formatHash(urlObj, options)
{
	return urlObj.hash ? urlObj.hash : "";
}



function formatHost(urlObj, options)
{
	if (urlObj.host.full && (urlObj.extra.relation.maximumAuth || options.output===constants.ABSOLUTE))
	{
		return urlObj.host.full;
	}
	
	return "";
}



function formatPath(urlObj, options)
{
	var str = "";
	
	var absolutePath = urlObj.path.absolute.string;
	var relativePath = urlObj.path.relative.string;
	var resource = showResource(urlObj, options);
	
	if (urlObj.extra.relation.maximumHost || options.output===constants.ABSOLUTE || options.output===constants.ROOT_RELATIVE)
	{
		str = absolutePath;
	}
	else if (relativePath.length<=absolutePath.length && options.output===constants.SHORTEST || options.output===constants.PATH_RELATIVE)
	{
		str = relativePath;
		
		if (str === "")
		{
			var query = showQuery(urlObj,options) && !!getQuery(urlObj,options);
			
			if (urlObj.extra.relation.maximumPath && !resource)
			{
				str = "./";
			}
			else if (urlObj.extra.relation.overridesQuery && !resource && !query)
			{
				str = "./";
			}
		}
	}
	else
	{
		str = absolutePath;
	}
	
	if ( str==="/" && !resource && options.removeRootTrailingSlash && (!urlObj.extra.relation.minimumPort || options.output===constants.ABSOLUTE) )
	{
		str = "";
	}
	
	return str;
}



function formatPort(urlObj, options)
{
	if (urlObj.port && !urlObj.extra.portIsDefault && urlObj.extra.relation.maximumHost)
	{
		return ":" + urlObj.port;
	}
	
	return "";
}



function formatQuery(urlObj, options)
{
	return showQuery(urlObj,options) ? getQuery(urlObj, options) : "";
}



function formatResource(urlObj, options)
{
	return showResource(urlObj,options) ? urlObj.resource : "";
}



function formatScheme(urlObj, options)
{
	var str = "";
	
	if (urlObj.extra.relation.maximumHost || options.output===constants.ABSOLUTE)
	{
		if (!urlObj.extra.relation.minimumScheme || !options.schemeRelative || options.output===constants.ABSOLUTE)
		{
			str += urlObj.scheme + "://";
		}
		else
		{
			str += "//";
		}
	}
	
	return str;
}



function formatUrl(urlObj, options)
{
	var url = "";
	
	url += formatScheme(urlObj, options);
	url += formatAuth(urlObj, options);
	url += formatHost(urlObj, options);
	url += formatPort(urlObj, options);
	url += formatPath(urlObj, options);
	url += formatResource(urlObj, options);
	url += formatQuery(urlObj, options);
	url += formatHash(urlObj, options);
	
	return url;
}



function getQuery(urlObj, options)
{
	var stripQuery = options.removeEmptyQueries && urlObj.extra.relation.minimumPort;
	
	return urlObj.query.string[ stripQuery ? "stripped" : "full" ];
}



function showQuery(urlObj, options)
{
	return !urlObj.extra.relation.minimumQuery || options.output===constants.ABSOLUTE || options.output===constants.ROOT_RELATIVE;
}



function showResource(urlObj, options)
{
	var removeIndex = options.removeDirectoryIndexes && urlObj.extra.resourceIsIndex;
	var removeMatchingResource = urlObj.extra.relation.minimumResource && options.output!==constants.ABSOLUTE && options.output!==constants.ROOT_RELATIVE;
	
	return !!urlObj.resource && !removeMatchingResource && !removeIndex;
}



module.exports = formatUrl;

}, function(modId) { var map = {"./constants":1604130613205}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613207, function(require, module, exports) {


var objUtils = require("./util/object");



function getOptions(options, defaults)
{
	if ( objUtils.isPlainObject(options) )
	{
		var newOptions = {};
		
		for (var i in defaults)
		{
			if ( defaults.hasOwnProperty(i) )
			{
				if (options[i] !== undefined)
				{
					newOptions[i] = mergeOption(options[i], defaults[i]);
				}
				else
				{
					newOptions[i] = defaults[i];
				}
			}
		}
		
		return newOptions;
	}
	else
	{
		return defaults;
	}
}



function mergeOption(newValues, defaultValues)
{
	if (defaultValues instanceof Object && newValues instanceof Object)
	{
		if (defaultValues instanceof Array && newValues instanceof Array)
		{
			return defaultValues.concat(newValues);
		}
		else
		{
			return objUtils.shallowMerge(newValues, defaultValues);
		}
	}
	
	return newValues;
}



module.exports = getOptions;

}, function(modId) { var map = {"./util/object":1604130613208}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613208, function(require, module, exports) {


/*
	Deep-clone an object.
*/
function clone(obj)
{
	if (obj instanceof Object)
	{
		var clonedObj = (obj instanceof Array) ? [] : {};
		
		for (var i in obj)
		{
			if ( obj.hasOwnProperty(i) )
			{
				clonedObj[i] = clone( obj[i] );
			}
		}
		
		return clonedObj;
	}
	
	return obj;
}



/*
	https://github.com/jonschlinkert/is-plain-object
*/
function isPlainObject(obj)
{
	return !!obj && typeof obj==="object" && obj.constructor===Object;
}



/*
	Shallow-merge two objects.
*/
function shallowMerge(target, source)
{
	if (target instanceof Object && source instanceof Object)
	{
		for (var i in source)
		{
			if ( source.hasOwnProperty(i) )
			{
				target[i] = source[i];
			}
		}
	}
	
	return target;
}



module.exports =
{
	clone: clone,
	isPlainObject: isPlainObject,
	shallowMerge: shallowMerge
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613209, function(require, module, exports) {


var hrefInfo   = require("./hrefInfo");
var parseHost  = require("./host");
var parsePath  = require("./path");
var parsePort  = require("./port");
var parseQuery = require("./query");
var parseUrlString = require("./urlstring");
var pathUtils      = require("../util/path");



function parseFromUrl(url, options, fallback)
{
	if (url)
	{
		var urlObj = parseUrl(url, options);
		
		// Because the following occurs in the relate stage for "to" URLs,
		// such had to be mostly duplicated here
		
		var pathArray = pathUtils.resolveDotSegments(urlObj.path.absolute.array);
		
		urlObj.path.absolute.array  = pathArray;
		urlObj.path.absolute.string = "/" + pathUtils.join(pathArray);
		
		return urlObj;
	}
	else
	{
		return fallback;
	}
}



function parseUrl(url, options)
{
	var urlObj = parseUrlString(url, options);
	
	if (urlObj.valid===false) return urlObj;
	
	parseHost(urlObj, options);
	parsePort(urlObj, options);
	parsePath(urlObj, options);
	parseQuery(urlObj, options);
	hrefInfo(urlObj);
	
	return urlObj;
}



module.exports =
{
	from: parseFromUrl,
	to:   parseUrl
};

}, function(modId) { var map = {"./hrefInfo":1604130613210,"./host":1604130613211,"./path":1604130613212,"./port":1604130613213,"./query":1604130613214,"./urlstring":1604130613215,"../util/path":1604130613216}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613210, function(require, module, exports) {


function hrefInfo(urlObj)
{
	var minimumPathOnly     = (!urlObj.scheme && !urlObj.auth && !urlObj.host.full && !urlObj.port);
	var minimumResourceOnly = (minimumPathOnly && !urlObj.path.absolute.string);
	var minimumQueryOnly    = (minimumResourceOnly && !urlObj.resource);
	var minimumHashOnly     = (minimumQueryOnly && !urlObj.query.string.full.length);
	var empty               = (minimumHashOnly && !urlObj.hash);
	
	urlObj.extra.hrefInfo.minimumPathOnly     = minimumPathOnly;
	urlObj.extra.hrefInfo.minimumResourceOnly = minimumResourceOnly;
	urlObj.extra.hrefInfo.minimumQueryOnly    = minimumQueryOnly;
	urlObj.extra.hrefInfo.minimumHashOnly     = minimumHashOnly;
	urlObj.extra.hrefInfo.empty = empty;
}



module.exports = hrefInfo;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613211, function(require, module, exports) {


function parseHost(urlObj, options)
{
	// TWEAK :: condition only for speed optimization
	if (options.ignore_www)
	{
		var host = urlObj.host.full;
		
		if (host)
		{
			var stripped = host;
			
			if (host.indexOf("www.") === 0)
			{
				stripped = host.substr(4);
			}
			
			urlObj.host.stripped = stripped;
		}
	}
}



module.exports = parseHost;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613212, function(require, module, exports) {


function isDirectoryIndex(resource, options)
{
	var verdict = false;
	
	options.directoryIndexes.every( function(index)
	{
		if (index === resource)
		{
			verdict = true;
			return false;
		}
		
		return true;
	});
	
	return verdict;
}



function parsePath(urlObj, options)
{
	var path = urlObj.path.absolute.string;
	
	if (path)
	{
		var lastSlash = path.lastIndexOf("/");
		
		if (lastSlash > -1)
		{
			if (++lastSlash < path.length)
			{
				var resource = path.substr(lastSlash);
				
				if (resource!=="." && resource!=="..")
				{
					urlObj.resource = resource;
					path = path.substr(0, lastSlash);
				}
				else
				{
					path += "/";
				}
			}
			
			urlObj.path.absolute.string = path;
			urlObj.path.absolute.array = splitPath(path);
		}
		else if (path==="." || path==="..")
		{
			// "..?var", "..#anchor", etc ... not "..index.html"
			path += "/";
			
			urlObj.path.absolute.string = path;
			urlObj.path.absolute.array = splitPath(path);
		}
		else
		{
			// Resource-only
			urlObj.resource = path;
			urlObj.path.absolute.string = null;
		}
		
		urlObj.extra.resourceIsIndex = isDirectoryIndex(urlObj.resource, options);
	}
	// Else: query/hash-only or empty
}



function splitPath(path)
{
	// TWEAK :: condition only for speed optimization
	if (path !== "/")
	{
		var cleaned = [];
		
		path.split("/").forEach( function(dir)
		{
			// Cleanup -- splitting "/dir/" becomes ["","dir",""]
			if (dir !== "")
			{
				cleaned.push(dir);
			}
		});
		
		return cleaned;
	}
	else
	{
		// Faster to skip the above block and just create an array
		return [];
	}
}



module.exports = parsePath;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613213, function(require, module, exports) {


function parsePort(urlObj, options)
{
	var defaultPort = -1;
	
	for (var i in options.defaultPorts)
	{
		if ( i===urlObj.scheme && options.defaultPorts.hasOwnProperty(i) )
		{
			defaultPort = options.defaultPorts[i];
			break;
		}
	}
	
	if (defaultPort > -1)
	{
		// Force same type as urlObj.port
		defaultPort = defaultPort.toString();
		
		if (urlObj.port === null)
		{
			urlObj.port = defaultPort;
		}
		
		urlObj.extra.portIsDefault = (urlObj.port === defaultPort);
	}
}



module.exports = parsePort;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613214, function(require, module, exports) {

var hasOwnProperty = Object.prototype.hasOwnProperty;



function parseQuery(urlObj, options)
{
	urlObj.query.string.full = stringify(urlObj.query.object, false);
	
	// TWEAK :: condition only for speed optimization
	if (options.removeEmptyQueries)
	{
		urlObj.query.string.stripped = stringify(urlObj.query.object, true);
	}
}



function stringify(queryObj, removeEmptyQueries)
{
	var count = 0;
	var str = "";
	
	for (var i in queryObj)
	{
		if ( i!=="" && hasOwnProperty.call(queryObj, i)===true )
		{
			var value = queryObj[i];
			
			if (value !== "" || !removeEmptyQueries)
			{
				str += (++count===1) ? "?" : "&";
				
				i = encodeURIComponent(i);
				
				if (value !== "")
				{
					str += i +"="+ encodeURIComponent(value).replace(/%20/g,"+");
				}
				else
				{
					str += i;
				}
			}
		}
	}
	
	return str;
}



module.exports = parseQuery;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613215, function(require, module, exports) {


var _parseUrl = require("url").parse;



/*
	Customize the URL object that Node generates
	because:
	
	* necessary data for later
	* urlObj.host is useless
	* urlObj.hostname is too long
	* urlObj.path is useless
	* urlObj.pathname is too long
	* urlObj.protocol is inaccurate; should be called "scheme"
	* urlObj.search is mostly useless
*/
function clean(urlObj)
{
	var scheme = urlObj.protocol;
	
	if (scheme)
	{
		// Remove ":" suffix
		if (scheme.indexOf(":") === scheme.length-1)
		{
			scheme = scheme.substr(0, scheme.length-1);
		}
	}
	
	urlObj.host =
	{
		// TODO :: unescape(encodeURIComponent(s)) ? ... http://ecmanaut.blogspot.ca/2006/07/encoding-decoding-utf8-in-javascript.html
		full: urlObj.hostname,
		stripped: null
	};
	
	urlObj.path =
	{
		absolute:
		{
			array: null,
			string: urlObj.pathname
		},
		relative:
		{
			array: null,
			string: null
		}
	};
	
	urlObj.query =
	{
		object: urlObj.query,
		string:
		{
			full: null,
			stripped: null
		}
	};
	
	urlObj.extra =
	{
		hrefInfo:
		{
			minimumPathOnly: null,
			minimumResourceOnly: null,
			minimumQueryOnly: null,
			minimumHashOnly: null,
			empty: null,
			
			separatorOnlyQuery: urlObj.search==="?"
		},
		portIsDefault: null,
		relation:
		{
			maximumScheme: null,
			maximumAuth: null,
			maximumHost: null,
			maximumPort: null,
			maximumPath: null,
			maximumResource: null,
			maximumQuery: null,
			maximumHash: null,
			
			minimumScheme: null,
			minimumAuth: null,
			minimumHost: null,
			minimumPort: null,
			minimumPath: null,
			minimumResource: null,
			minimumQuery: null,
			minimumHash: null,
			
			overridesQuery: null
		},
		resourceIsIndex: null,
		slashes: urlObj.slashes
	};
	
	urlObj.resource = null;
	urlObj.scheme = scheme;
	delete urlObj.hostname;
	delete urlObj.pathname;
	delete urlObj.protocol;
	delete urlObj.search;
	delete urlObj.slashes;
	
	return urlObj;
}



function validScheme(url, options)
{
	var valid = true;
	
	options.rejectedSchemes.every( function(rejectedScheme)
	{
		valid = !(url.indexOf(rejectedScheme+":") === 0);
		
		// Break loop
		return valid;
	});
	
	return valid;
}



function parseUrlString(url, options)
{
	if ( validScheme(url,options) )
	{
		return clean( _parseUrl(url, true, options.slashesDenoteHost) );
	}
	else
	{
		return {href:url, valid:false};
	}
}



module.exports = parseUrlString;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613216, function(require, module, exports) {


function joinPath(pathArray)
{
	if (pathArray.length > 0)
	{
		return pathArray.join("/") + "/";
	}
	else
	{
		return "";
	}
}



function resolveDotSegments(pathArray)
{
	var pathAbsolute = [];
	
	pathArray.forEach( function(dir)
	{
		if (dir !== "..")
		{
			if (dir !== ".")
			{
				pathAbsolute.push(dir);
			}
		}
		else
		{
			// Remove parent
			if (pathAbsolute.length > 0)
			{
				pathAbsolute.splice(pathAbsolute.length-1, 1);
			}
		}
	});
	
	return pathAbsolute;
}



module.exports =
{
	join: joinPath,
	resolveDotSegments: resolveDotSegments
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613217, function(require, module, exports) {


var absolutize = require("./absolutize");
var relativize = require("./relativize");



function relateUrl(siteUrlObj, urlObj, options)
{
	absolutize(urlObj, siteUrlObj, options);
	relativize(urlObj, siteUrlObj, options);
	
	return urlObj;
}



module.exports = relateUrl;

}, function(modId) { var map = {"./absolutize":1604130613218,"./relativize":1604130613220}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613218, function(require, module, exports) {


var findRelation = require("./findRelation");
var objUtils     = require("../util/object");
var pathUtils    = require("../util/path");



function absolutize(urlObj, siteUrlObj, options)
{
	findRelation.upToPath(urlObj, siteUrlObj, options);
	
	// Fill in relative URLs
	if (urlObj.extra.relation.minimumScheme) urlObj.scheme = siteUrlObj.scheme;
	if (urlObj.extra.relation.minimumAuth)   urlObj.auth   = siteUrlObj.auth;
	if (urlObj.extra.relation.minimumHost)   urlObj.host   = objUtils.clone(siteUrlObj.host);
	if (urlObj.extra.relation.minimumPort)   copyPort(urlObj, siteUrlObj);
	if (urlObj.extra.relation.minimumScheme) copyPath(urlObj, siteUrlObj);
	
	// Check remaining relativeness now that path has been copied and/or resolved
	findRelation.pathOn(urlObj, siteUrlObj, options);
	
	// Fill in relative URLs
	if (urlObj.extra.relation.minimumResource) copyResource(urlObj, siteUrlObj);
	if (urlObj.extra.relation.minimumQuery)    urlObj.query = objUtils.clone(siteUrlObj.query);
	if (urlObj.extra.relation.minimumHash)     urlObj.hash  = siteUrlObj.hash;
}



/*
	Get an absolute path that's relative to site url.
*/
function copyPath(urlObj, siteUrlObj)
{
	if (urlObj.extra.relation.maximumHost || !urlObj.extra.hrefInfo.minimumResourceOnly)
	{
		var pathArray = urlObj.path.absolute.array;
		var pathString = "/";
		
		// If not erroneous URL
		if (pathArray)
		{
			// If is relative path
			if (urlObj.extra.hrefInfo.minimumPathOnly && urlObj.path.absolute.string.indexOf("/")!==0)
			{
				// Append path to site path
				pathArray = siteUrlObj.path.absolute.array.concat(pathArray);
			}
			
			pathArray   = pathUtils.resolveDotSegments(pathArray);
			pathString += pathUtils.join(pathArray);
		}
		else
		{
			pathArray = [];
		}
		
		urlObj.path.absolute.array  = pathArray;
		urlObj.path.absolute.string = pathString;
	}
	else
	{
		// Resource-, query- or hash-only or empty
		urlObj.path = objUtils.clone(siteUrlObj.path);
	}
}



function copyPort(urlObj, siteUrlObj)
{
	urlObj.port = siteUrlObj.port;
	
	urlObj.extra.portIsDefault = siteUrlObj.extra.portIsDefault;
}



function copyResource(urlObj, siteUrlObj)
{
	urlObj.resource = siteUrlObj.resource;
	
	urlObj.extra.resourceIsIndex = siteUrlObj.extra.resourceIsIndex;
}



module.exports = absolutize;

}, function(modId) { var map = {"./findRelation":1604130613219,"../util/object":1604130613208,"../util/path":1604130613216}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613219, function(require, module, exports) {


function findRelation_upToPath(urlObj, siteUrlObj, options)
{
	// Path- or root-relative URL
	var pathOnly = urlObj.extra.hrefInfo.minimumPathOnly;
	
	// Matching scheme, scheme-relative or path-only
	var minimumScheme = (urlObj.scheme===siteUrlObj.scheme || !urlObj.scheme);
	
	// Matching auth, ignoring auth or path-only
	var minimumAuth = minimumScheme && (urlObj.auth===siteUrlObj.auth || options.removeAuth || pathOnly);
	
	// Matching host or path-only
	var www = options.ignore_www ? "stripped" : "full";
	var minimumHost = minimumAuth && (urlObj.host[www]===siteUrlObj.host[www] || pathOnly);
	
	// Matching port or path-only
	var minimumPort = minimumHost && (urlObj.port===siteUrlObj.port || pathOnly);
	
	urlObj.extra.relation.minimumScheme = minimumScheme;
	urlObj.extra.relation.minimumAuth   = minimumAuth;
	urlObj.extra.relation.minimumHost   = minimumHost;
	urlObj.extra.relation.minimumPort   = minimumPort;
	
	urlObj.extra.relation.maximumScheme = !minimumScheme || minimumScheme && !minimumAuth;
	urlObj.extra.relation.maximumAuth   = !minimumScheme || minimumScheme && !minimumHost;
	urlObj.extra.relation.maximumHost   = !minimumScheme || minimumScheme && !minimumPort;
}



function findRelation_pathOn(urlObj, siteUrlObj, options)
{
	var queryOnly = urlObj.extra.hrefInfo.minimumQueryOnly;
	var hashOnly  = urlObj.extra.hrefInfo.minimumHashOnly;
	var empty     = urlObj.extra.hrefInfo.empty;	// not required, but self-documenting
	
	// From upToPath()
	var minimumPort   = urlObj.extra.relation.minimumPort;
	var minimumScheme = urlObj.extra.relation.minimumScheme;
	
	// Matching port and path
	var minimumPath = minimumPort && urlObj.path.absolute.string===siteUrlObj.path.absolute.string;
	
	// Matching resource or query/hash-only or empty
	var matchingResource = (urlObj.resource===siteUrlObj.resource || !urlObj.resource && siteUrlObj.extra.resourceIsIndex) || (options.removeDirectoryIndexes && urlObj.extra.resourceIsIndex && !siteUrlObj.resource);
	var minimumResource = minimumPath && (matchingResource || queryOnly || hashOnly || empty);
	
	// Matching query or hash-only/empty
	var query = options.removeEmptyQueries ? "stripped" : "full";
	var urlQuery = urlObj.query.string[query];
	var siteUrlQuery = siteUrlObj.query.string[query];
	var minimumQuery = (minimumResource && !!urlQuery && urlQuery===siteUrlQuery) || ((hashOnly || empty) && !urlObj.extra.hrefInfo.separatorOnlyQuery);
	
	var minimumHash = minimumQuery && urlObj.hash===siteUrlObj.hash;
	
	urlObj.extra.relation.minimumPath     = minimumPath;
	urlObj.extra.relation.minimumResource = minimumResource;
	urlObj.extra.relation.minimumQuery    = minimumQuery;
	urlObj.extra.relation.minimumHash     = minimumHash;
	
	urlObj.extra.relation.maximumPort     = !minimumScheme || minimumScheme && !minimumPath;
	urlObj.extra.relation.maximumPath     = !minimumScheme || minimumScheme && !minimumResource;
	urlObj.extra.relation.maximumResource = !minimumScheme || minimumScheme && !minimumQuery;
	urlObj.extra.relation.maximumQuery    = !minimumScheme || minimumScheme && !minimumHash;
	urlObj.extra.relation.maximumHash     = !minimumScheme || minimumScheme && !minimumHash;	// there's nothing after hash, so it's the same as maximumQuery
	
	// Matching path and/or resource with existing but non-matching site query
	urlObj.extra.relation.overridesQuery  = minimumPath && urlObj.extra.relation.maximumResource && !minimumQuery && !!siteUrlQuery;
}



module.exports =
{
	pathOn:   findRelation_pathOn,
	upToPath: findRelation_upToPath
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1604130613220, function(require, module, exports) {


var pathUtils = require("../util/path");



/*
	Get a path relative to the site path.
*/
function relatePath(absolutePath, siteAbsolutePath)
{
	var relativePath = [];
	
	// At this point, it's related to the host/port
	var related = true;
	var parentIndex = -1;
	
	// Find parents
	siteAbsolutePath.forEach( function(siteAbsoluteDir, i)
	{
		if (related)
		{
			if (absolutePath[i] !== siteAbsoluteDir)
			{
				related = false;
			}
			else
			{
				parentIndex = i;
			}
		}
		
		if (!related)
		{
			// Up one level
			relativePath.push("..");
		}
	});
	
	// Form path
	absolutePath.forEach( function(dir, i)
	{
		if (i > parentIndex)
		{
			relativePath.push(dir);
		}
	});
	
	return relativePath;
}



function relativize(urlObj, siteUrlObj, options)
{
	if (urlObj.extra.relation.minimumScheme)
	{
		var pathArray = relatePath(urlObj.path.absolute.array, siteUrlObj.path.absolute.array);
		
		urlObj.path.relative.array  = pathArray;
		urlObj.path.relative.string = pathUtils.join(pathArray);
	}
}



module.exports = relativize;

}, function(modId) { var map = {"../util/path":1604130613216}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1604130613204);
})()
//# sourceMappingURL=index.js.map