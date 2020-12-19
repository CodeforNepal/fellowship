module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/Ikq":
/***/ (function(module, exports) {

module.exports = require("remark-html");

/***/ }),

/***/ "1VTK":
/***/ (function(module, exports) {

module.exports = require("remark");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__("mw/K");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__("oyvS");

// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__("uo/4");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);

// CONCATENATED MODULE: ./lib/api.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const postsDirectory = Object(external_path_["join"])(process.cwd(), '_contents');
function getContentSlugs() {
  return external_fs_default.a.readdirSync(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = Object(external_path_["join"])(postsDirectory, `${realSlug}.md`);
  const fileContents = external_fs_default.a.readFileSync(fullPath, 'utf8');
  const {
    data,
    content
  } = external_gray_matter_default()(fileContents);
  const items = {}; // Ensure only the minimal needed data is exposed

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}
function getAllContents(fields = []) {
  const slugs = getContentSlugs();
  let contents = {};
  slugs.forEach(slug => {
    const content = getPostBySlug(slug, ['slug', ...fields]);
    contents = _objectSpread(_objectSpread({}, contents), {}, {
      [content.slug]: content
    });
  });
  return contents;
}
// EXTERNAL MODULE: ./components/markdown-styles.module.css
var markdown_styles_module = __webpack_require__("qtBi");
var markdown_styles_module_default = /*#__PURE__*/__webpack_require__.n(markdown_styles_module);

// CONCATENATED MODULE: ./components/MarkdownComponent.tsx

var __jsx = external_react_default.a.createElement;


const MarkdownComponent = ({
  content
}) => {
  return __jsx("div", {
    className: markdown_styles_module_default.a['markdown'],
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};

/* harmony default export */ var components_MarkdownComponent = (MarkdownComponent);
// CONCATENATED MODULE: ./components/AboutProgram.tsx

var AboutProgram_jsx = external_react_default.a.createElement;

const AboutProgram = props => {
  const {
    data
  } = props;
  return AboutProgram_jsx("div", {
    className: "relative pt-16 pb-32 flex content-center items-center justify-center",
    style: {
      minHeight: "80vh"
    }
  }, AboutProgram_jsx("div", {
    className: "absolute top-0 w-full h-full bg-center bg-cover",
    style: {
      backgroundImage: `url(${data.image})`
    }
  }, AboutProgram_jsx("span", {
    id: "blackOverlay",
    className: "w-full h-full absolute opacity-75 bg-black"
  })), AboutProgram_jsx("div", {
    className: "container relative mx-auto"
  }, AboutProgram_jsx("div", {
    className: "items-center flex flex-wrap"
  }, AboutProgram_jsx("div", {
    className: "w-full lg:w-4/5 px-4 ml-auto mr-auto text-center"
  }, AboutProgram_jsx("div", {
    className: "pr-12"
  }, AboutProgram_jsx("h1", {
    className: "text-white font-semibold md:text-5xl"
  }, data.title), AboutProgram_jsx("div", {
    className: "mt-4 tracking-wider leading-relaxed text-white"
  }, AboutProgram_jsx(components_MarkdownComponent, {
    content: data.content
  })))))), AboutProgram_jsx("div", {
    className: "top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden",
    style: {
      height: "70px",
      transform: "translateZ(0)"
    }
  }, AboutProgram_jsx("svg", {
    className: "absolute bottom-0 overflow-hidden",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none",
    version: "1.1",
    viewBox: "0 0 2560 100",
    x: "0",
    y: "0"
  }, AboutProgram_jsx("polygon", {
    className: "text-gray-300 fill-current",
    points: "2560 0 2560 100 0 100"
  }))));
};
// CONCATENATED MODULE: ./components/TextLeft.tsx

var TextLeft_jsx = external_react_default.a.createElement;

const TextLeft = props => {
  const {
    data
  } = props;
  return TextLeft_jsx("section", {
    className: "relative py-20 bg-gray-300"
  }, TextLeft_jsx("div", {
    className: "bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",
    style: {
      height: "80px",
      transform: "translateZ(0)"
    }
  }, TextLeft_jsx("svg", {
    className: "absolute bottom-0 overflow-hidden",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none",
    version: "1.1",
    viewBox: "0 0 2560 100",
    x: "0",
    y: "0"
  }, TextLeft_jsx("polygon", {
    className: "text-gray-300 fill-current",
    points: "2560 0 2560 100 0 100"
  }))), TextLeft_jsx("div", {
    className: "container mx-auto px-4"
  }, TextLeft_jsx("div", {
    className: "items-center flex flex-wrap"
  }, TextLeft_jsx("div", {
    className: "w-full md:w-5/12 ml-auto mr-auto px-4"
  }, TextLeft_jsx("div", {
    className: "md:pr-12"
  }, TextLeft_jsx("div", {
    className: "text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-500"
  }, TextLeft_jsx("i", {
    className: "fas fa-rocket text-xl"
  })), TextLeft_jsx("h3", {
    className: "text-3xl font-semibold"
  }, data.title), TextLeft_jsx("div", {
    className: "mt-4 text-lg leading-relaxed text-gray-700"
  }, TextLeft_jsx(components_MarkdownComponent, {
    content: data.content
  })))), TextLeft_jsx("div", {
    className: "w-full md:w-4/12 ml-auto mr-auto px-4"
  }, TextLeft_jsx("img", {
    alt: "...",
    className: "max-w-full rounded-lg shadow-lg",
    src: data.image
  })))));
};
// CONCATENATED MODULE: ./components/TextRight.tsx

var TextRight_jsx = external_react_default.a.createElement;

const TextRight = props => {
  const {
    data
  } = props;
  return TextRight_jsx("section", {
    className: "relative py-20"
  }, TextRight_jsx("div", {
    className: "bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",
    style: {
      height: "80px",
      transform: "translateZ(0)"
    }
  }, TextRight_jsx("svg", {
    className: "absolute bottom-0 overflow-hidden",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none",
    version: "1.1",
    viewBox: "0 0 2560 100",
    x: "0",
    y: "0"
  }, TextRight_jsx("polygon", {
    className: "text-white fill-current",
    points: "2560 0 2560 100 0 100"
  }))), TextRight_jsx("div", {
    className: "container mx-auto px-4"
  }, TextRight_jsx("div", {
    className: "items-center flex flex-wrap"
  }, TextRight_jsx("div", {
    className: "w-full md:w-4/12 ml-auto mr-auto px-4"
  }, TextRight_jsx("img", {
    alt: "...",
    className: "max-w-full rounded-lg shadow-lg",
    src: data.image
  })), TextRight_jsx("div", {
    className: "w-full md:w-5/12 ml-auto mr-auto px-4"
  }, TextRight_jsx("div", {
    className: "md:pr-12"
  }, TextRight_jsx("div", {
    className: "text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-secondary"
  }, TextRight_jsx("i", {
    className: "fas fa-rocket text-xl"
  })), TextRight_jsx("h3", {
    className: "text-3xl font-semibold"
  }, data.title), TextRight_jsx("div", {
    className: "mt-4 text-lg leading-relaxed text-gray-600"
  }, TextRight_jsx(components_MarkdownComponent, {
    content: data.content
  })))))));
};
// CONCATENATED MODULE: ./components/TextOnly.tsx

var TextOnly_jsx = external_react_default.a.createElement;

const TextOnly = props => {
  const {
    data
  } = props;
  return TextOnly_jsx("section", {
    className: "relative py-20"
  }, TextOnly_jsx("div", {
    className: "bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",
    style: {
      height: "80px",
      transform: "translateZ(0)"
    }
  }, TextOnly_jsx("svg", {
    className: "absolute bottom-0 overflow-hidden",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none",
    version: "1.1",
    viewBox: "0 0 2560 100",
    x: "0",
    y: "0"
  }, TextOnly_jsx("polygon", {
    className: "text-white fill-current",
    points: "2560 0 2560 100 0 100"
  }))), TextOnly_jsx("div", {
    className: "container mx-auto px-4"
  }, TextOnly_jsx("div", {
    className: "flex flex-wrap justify-center text-center mb-24"
  }, TextOnly_jsx("div", {
    className: "w-full lg:w-4/5 px-4"
  }, TextOnly_jsx("h2", {
    className: "text-4xl font-semibold"
  }, data.title), TextOnly_jsx("div", {
    className: "text-lg leading-relaxed m-4 text-gray-600 text-left pt-6"
  }, TextOnly_jsx(components_MarkdownComponent, {
    content: data.content
  }))))));
};
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./lib/constants.ts
const EXAMPLE_PATH = 'blog-starter-typescript';
const APP_NAME = 'Hawkins Fellowship - by Code for Nepal';
const HOME_OG_IMAGE_URL = 'https://codefornepal.org/assets/img/c4n_logo.png';
// CONCATENATED MODULE: ./components/meta.tsx

var meta_jsx = external_react_default.a.createElement;



const Meta = () => {
  return meta_jsx(head_default.a, null, meta_jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-touch-icon.png"
  }), meta_jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon.png"
  }), meta_jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon.png"
  }), meta_jsx("link", {
    rel: "manifest",
    href: "/favicon/site.webmanifest"
  }), meta_jsx("link", {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#000000"
  }), meta_jsx("link", {
    rel: "shortcut icon",
    href: "/favicon/favicon.ico"
  }), meta_jsx("meta", {
    name: "msapplication-TileColor",
    content: "#000000"
  }), meta_jsx("meta", {
    name: "msapplication-config",
    content: "/favicon/browserconfig.xml"
  }), meta_jsx("meta", {
    name: "theme-color",
    content: "#000"
  }), meta_jsx("link", {
    rel: "alternate",
    type: "application/rss+xml",
    href: "/feed.xml"
  }), meta_jsx("meta", {
    name: "description",
    content: `${APP_NAME}`
  }), meta_jsx("meta", {
    property: "og:image",
    content: HOME_OG_IMAGE_URL
  }));
};

/* harmony default export */ var meta = (Meta);
// CONCATENATED MODULE: ./components/Navbar.tsx

var Navbar_jsx = external_react_default.a.createElement;

const Navbar = props => {
  const {
    0: navbarOpen,
    1: setNavbarOpen
  } = Object(external_react_["useState"])(false);
  return Navbar_jsx(external_react_default.a.Fragment, null, Navbar_jsx("nav", {
    className: (props.transparent ? "top-0 absolute z-50 w-full" : "relative shadow-lg bg-white") + " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  }, Navbar_jsx("div", {
    className: "container px-4 mx-auto flex flex-wrap items-center justify-between"
  }, Navbar_jsx("div", {
    className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
  }, Navbar_jsx("a", {
    className: (props.transparent ? "text-white" : "text-gray-800") + " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase",
    href: "https://codefornepal.org"
  }, Navbar_jsx("img", {
    className: "h-12",
    src: "https://codefornepal.org/assets/img/c4n_logo.png",
    alt: "Code for Nepal"
  })), Navbar_jsx("button", {
    className: "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",
    type: "button",
    onClick: () => setNavbarOpen(!navbarOpen)
  }, Navbar_jsx("i", {
    className: (props.transparent ? "text-white" : "text-gray-800") + " fas fa-bars"
  }))), Navbar_jsx("div", {
    className: "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" + (navbarOpen ? " block rounded shadow-lg" : " hidden"),
    id: "example-navbar-warning"
  }, Navbar_jsx("ul", {
    className: "flex flex-col lg:flex-row list-none mr-auto"
  }, Navbar_jsx("li", {
    className: "flex items-center"
  }, Navbar_jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "#about"
  }, "About Us"))), Navbar_jsx("ul", {
    className: "flex flex-col lg:flex-row list-none lg:ml-auto"
  }, Navbar_jsx("li", {
    className: "flex items-center"
  }, Navbar_jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "https://www.facebook.com/codefornepal",
    target: "_blank",
    rel: "noreferrer noopener"
  }, Navbar_jsx("i", {
    className: (props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-facebook text-lg leading-lg "
  }), Navbar_jsx("span", {
    className: "lg:hidden inline-block ml-2"
  }, "Share"))), Navbar_jsx("li", {
    className: "flex items-center"
  }, Navbar_jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "https://twitter.com/codefornepal",
    target: "_blank",
    rel: "noreferrer noopener"
  }, Navbar_jsx("i", {
    className: (props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-twitter text-lg leading-lg "
  }), Navbar_jsx("span", {
    className: "lg:hidden inline-block ml-2"
  }, "Tweet"))), Navbar_jsx("li", {
    className: "flex items-center"
  }, Navbar_jsx("a", {
    className: (props.transparent ? "lg:text-white lg:hover:text-gray-300 text-gray-800" : "text-gray-800 hover:text-gray-600") + " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold",
    href: "https://github.com/code4Nepal",
    target: "_blank",
    rel: "noreferrer noopener"
  }, Navbar_jsx("i", {
    className: (props.transparent ? "lg:text-gray-300 text-gray-500" : "text-gray-500") + " fab fa-github text-lg leading-lg "
  }), Navbar_jsx("span", {
    className: "lg:hidden inline-block ml-2"
  }, "Star"))), Navbar_jsx("li", {
    className: "flex items-center"
  }, Navbar_jsx("button", {
    className: (props.transparent ? "bg-white text-gray-800 active:bg-gray-100" : "bg-pink-500 text-white active:bg-pink-600") + " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3",
    type: "button",
    style: {
      transition: "all .15s ease"
    }
  }, Navbar_jsx("i", {
    className: "far fa-check-circle"
  }), " Apply")))))));
};
// CONCATENATED MODULE: ./components/Footer.tsx

var Footer_jsx = external_react_default.a.createElement;
const Footer = () => {
  return Footer_jsx(external_react_default.a.Fragment, null, Footer_jsx("footer", {
    className: "relative bg-gray-800 pt-8 pb-6"
  }, Footer_jsx("div", {
    className: "bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",
    style: {
      height: "80px",
      transform: "translateZ(0)"
    }
  }, Footer_jsx("svg", {
    className: "absolute bottom-0 overflow-hidden",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none",
    version: "1.1",
    viewBox: "0 0 2560 100",
    x: "0",
    y: "0"
  }, Footer_jsx("polygon", {
    className: "text-gray-800 fill-current",
    points: "2560 0 2560 100 0 100"
  }))), Footer_jsx("div", {
    className: "container mx-auto px-4"
  }, Footer_jsx("div", {
    className: "flex flex-wrap"
  }, Footer_jsx("div", {
    className: "w-full lg:w-6/12 px-4"
  }, Footer_jsx("h4", {
    className: "text-3xl font-semibold text-gray-200"
  }, "Let's keep in touch!"), Footer_jsx("h5", {
    className: "text-lg mt-0 mb-2 text-gray-200"
  }, "Find us on any of these platforms, we respond 1-2 business days."), Footer_jsx("div", {
    className: "mt-6"
  }, Footer_jsx("button", {
    className: "bg-gray-200 text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3",
    type: "button"
  }, Footer_jsx("i", {
    className: "flex fab fa-twitter"
  })), Footer_jsx("button", {
    className: "bg-gray-200 text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3",
    type: "button"
  }, Footer_jsx("i", {
    className: "flex fab fa-facebook-square"
  })), Footer_jsx("button", {
    className: "bg-gray-200 text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3",
    type: "button"
  }, Footer_jsx("i", {
    className: "flex fab fa-github"
  })))), Footer_jsx("div", {
    className: "w-full lg:w-6/12 px-4"
  }, Footer_jsx("div", {
    className: "flex flex-wrap items-top mb-6"
  }, Footer_jsx("div", {
    className: "w-full lg:w-4/12 px-4 ml-auto"
  }, Footer_jsx("span", {
    className: "block uppercase text-white text-sm font-semibold mb-2"
  }, "Useful Links"), Footer_jsx("ul", {
    className: "list-unstyled"
  }, Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm",
    href: "https://www.creative-tim.com/presentation"
  }, "About Us")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm",
    href: "https://blog.creative-tim.com"
  }, "Blog")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm",
    href: "https://www.github.com/creativetimofficial"
  }, "Github")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm",
    href: "https://www.creative-tim.com/bootstrap-themes/free"
  }, "Free Products")))), Footer_jsx("div", {
    className: "w-full lg:w-4/12 px-4"
  }, Footer_jsx("span", {
    className: "block uppercase text-white text-sm font-semibold mb-2"
  }, "Other Resources"), Footer_jsx("ul", {
    className: "list-unstyled"
  }, Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-gray-200 hover:text-gray-400  font-semibold block pb-2 text-sm",
    href: "https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
  }, "MIT License")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-gray-200 hover:text-gray-400  font-semibold block pb-2 text-sm",
    href: "https://creative-tim.com/terms"
  }, "Terms & Conditions")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-gray-200 hover:text-gray-400  font-semibold block pb-2 text-sm",
    href: "https://creative-tim.com/privacy"
  }, "Privacy Policy")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-gray-200 hover:text-gray-400  font-semibold block pb-2 text-sm",
    href: "https://creative-tim.com/contact-us"
  }, "Contact Us"))))))), Footer_jsx("hr", {
    className: "my-6 border-gray-200"
  }), Footer_jsx("div", {
    className: "flex flex-wrap items-center md:justify-between justify-center"
  }, Footer_jsx("div", {
    className: "w-full md:w-4/12 px-4 mx-auto text-center"
  }, Footer_jsx("div", {
    className: "text-sm text-gray-200 font-semibold py-1"
  }, "Copyright \xA9 ", new Date().getFullYear(), " ", Footer_jsx("a", {
    href: "https://codefornepal.org",
    className: "text-gray-200 hover:text-gray-900"
  }, "Code for Nepal"), "."))))));
};
// CONCATENATED MODULE: ./components/Layout.tsx

var Layout_jsx = external_react_default.a.createElement;



const Layout = ({
  children
}) => {
  return Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(Navbar, {
    transparent: true
  }), Layout_jsx(meta, null), Layout_jsx("main", null, children), Layout_jsx(Footer, null));
};
// EXTERNAL MODULE: external "remark"
var external_remark_ = __webpack_require__("1VTK");
var external_remark_default = /*#__PURE__*/__webpack_require__.n(external_remark_);

// EXTERNAL MODULE: external "remark-html"
var external_remark_html_ = __webpack_require__("/Ikq");
var external_remark_html_default = /*#__PURE__*/__webpack_require__.n(external_remark_html_);

// CONCATENATED MODULE: ./lib/markdownToHtml.ts


async function markdownToHtml(markdown) {
  const result = await external_remark_default()().use(external_remark_html_default.a).process(markdown);
  return result.toString();
}
// CONCATENATED MODULE: ./config/index.tsx
const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfdX3PT_egW3Vsahj3NyNSY8dcjD7WTNfXjlvg7Ksu2o8CTcQ/viewform?embedded=true";
// CONCATENATED MODULE: ./pages/index.tsx

var pages_jsx = external_react_default.a.createElement;

function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { pages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const Index = ({
  allContents
}) => {
  return pages_jsx(Layout, null, pages_jsx(head_default.a, null, pages_jsx("title", null, APP_NAME)), pages_jsx(AboutProgram, {
    data: allContents.AboutProgram || {}
  }), pages_jsx(TextLeft, {
    data: allContents.AboutTheScholarship || {}
  }), pages_jsx(TextRight, {
    data: allContents.LearningOutcomes || {}
  }), pages_jsx(TextLeft, {
    data: allContents.PersonalDevelopment || {}
  }), pages_jsx(TextOnly, {
    data: allContents.ApplicationDetails || {}
  }), pages_jsx("section", {
    className: "pb-20 relative block bg-primary"
  }, pages_jsx("div", {
    className: "bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20",
    style: {
      height: "80px",
      transform: "translateZ(0)"
    }
  }, pages_jsx("svg", {
    className: "absolute bottom-0 overflow-hidden",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none",
    version: "1.1",
    viewBox: "0 0 2560 100",
    x: "0",
    y: "0"
  }, pages_jsx("polygon", {
    className: "text-primary fill-current",
    points: "2560 0 2560 100 0 100"
  }))), pages_jsx("div", {
    className: "container mx-auto px-4 lg:pt-24 lg:pb-64"
  }, pages_jsx("div", {
    className: "flex flex-wrap text-center justify-center"
  }, pages_jsx("div", {
    className: "w-full lg:w-4/5 px-4"
  }, pages_jsx("h2", {
    className: "text-4xl font-semibold text-white"
  }, "Apply Now"))))), pages_jsx("section", {
    className: "relative block py-24 lg:pt-0 bg-primary"
  }, pages_jsx("div", {
    className: "container mx-auto px-4"
  }, pages_jsx("div", {
    className: "flex flex-wrap justify-center lg:-mt-64 -mt-48"
  }, pages_jsx("div", {
    className: "w-full lg:w-4/5 px-4"
  }, pages_jsx("div", {
    className: "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200"
  }, pages_jsx("iframe", {
    title: "Application Form",
    src: formUrl,
    height: "700",
    frameBorder: 0,
    marginHeight: 0,
    marginWidth: 0
  }, "Loading\u2026")))))));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);
async function getStaticProps() {
  const allContentsNoHtml = getAllContents(['title', 'image', 'content']);
  const keys = Object.keys(allContentsNoHtml);
  const allContentsWithHtml = await new Promise(async resolve => {
    let newObjects = {};

    for (let i = 0; i < keys.length; i++) {
      const currentObject = allContentsNoHtml[keys[i]];
      const html = await markdownToHtml(currentObject.content);
      newObjects = pages_objectSpread(pages_objectSpread({}, newObjects), {}, {
        [keys[i]]: pages_objectSpread(pages_objectSpread({}, currentObject), {}, {
          content: html
        })
      });

      if (Object.keys(newObjects).length === keys.length) {
        resolve(newObjects);
      }
    }
  });
  return {
    props: {
      allContents: allContentsWithHtml
    }
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "qtBi":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"markdown": "markdown-styles_markdown__1x9gM"
};


/***/ }),

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });