/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/weatherAPI.js":
/*!*******************************!*\
  !*** ./src/api/weatherAPI.js ***!
  \*******************************/
/*! exports provided: getWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeather\", function() { return getWeather; });\n\r\nconst getWeather = async (api, city) => {\r\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`\r\n    const response = await fetch(url)\r\n    try{\r\n        if(response.ok){\r\n           return response.json()\r\n        }\r\n    }catch(err){\r\n        console.log(err);\r\n        throw new Error(err)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/api/weatherAPI.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: openWeatherApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openWeatherApi\", function() { return openWeatherApi; });\nconst openWeatherApi = '99a4816af47b338490ced8ffe0a478da'\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _api_weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/weatherAPI */ \"./src/api/weatherAPI.js\");\n\r\n\r\n\r\nconst time  = document.querySelector('.time')\r\nconst date  = document.querySelector('.date')\r\nconst greeting = document.querySelector('.greeting')\r\nconst greetingName = document.querySelector('.greeting__name')\r\nconst focusName = document.querySelector('.focus__name')\r\nconst focus = document.querySelector('.focus')\r\nconst quote = document.querySelector('.quote-text')\r\nconst quoteCaption = document.querySelector('.quote-sign')\r\nconst main = document.querySelector('.main')\r\n\r\nconst weatherExtended = document.querySelector('.main-weather__extended')\r\nconst weatherShortened = document.querySelector('.main-weather__short-info')\r\nconst weatherIcon = document.querySelectorAll('.main-weather__type')\r\nconst weatherDescription = document.querySelector('.main-weather__text')\r\nconst weatherTemperature = document.querySelectorAll('.main-weather__temperature')\r\nconst weatherWind = document.querySelector('.main-weather__wind-speed')\r\nconst weatherHumidity = document.querySelector('.main-weather__humidity-value')\r\nconst weatherLocation = document.querySelector('.main-weather__location')\r\nconst changeWeatherBtn = document.querySelector('.change-weather-btn')\r\n\r\nconst refreshQuoteBtn = document.querySelector('.quote-refresh-btn')\r\nconst refreshBackground = document.querySelector('.change-picture-btn')\r\nconst refreshBackgroundContent = document.querySelector('.main-change-content')\r\n\r\nconst changeNameBtn = document.querySelector('.change-name-btn')\r\nconst changeFocusBtn =  document.querySelector('.change-focus-btn')\r\nconst extendWeatherBtn = document.querySelector('.open-extended-weather-btn')\r\n\r\n// -----------------TIME\r\nconst showTime = ()=>{\r\nconst Data = new Date(Date.now())\r\n\r\n    function determineDay(date){\r\n        if(!(date instanceof Date)) return\r\n        switch(date.getDay()){\r\n            case 0:\r\n                return \"Sunday\"\r\n            case 1:\r\n                return \"Monday\"\r\n            case 2:\r\n                return \"Tuesday\"\r\n            case 3:\r\n                return \"Wednesday\"\r\n            case 4:\r\n                return \"Thursday\"\r\n            case 5:\r\n                return \"Friday\"\r\n            case 6:\r\n                return \"Saturday\"\r\n            case 7:\r\n                return\r\n            default: return null\r\n        }\r\n    }\r\n    function determineMonth(date){\r\n        if(!(date instanceof Date)) return\r\n        switch(date.getMonth()){\r\n            case 0:\r\n                return \"January\"\r\n            case 1:\r\n                return \"February\"\r\n            case 2:\r\n                return \"March\"\r\n            case 3:\r\n                return \"April\"\r\n            case 4:\r\n                return \"May\"\r\n            case 5:\r\n                return \"June\"\r\n            case 6:\r\n                return \"July\"\r\n            case 7:\r\n                return \"August\"\r\n            case 8:\r\n                return \"September\"\r\n            case 9:\r\n                return \"October\"\r\n            case 10:\r\n                return \"November\"\r\n            case 11:\r\n                return \"December\"\r\n            default:\r\n                return null\r\n        }\r\n}\r\n    function checkZeros(seconds){\r\n        if(seconds.toString().length === 1){\r\n            return '0'+seconds.toString()\r\n        }else{\r\n            return seconds\r\n        }\r\n    }\r\n    const CurrentTime = `${checkZeros(Data.getHours())} : ${checkZeros(Data.getMinutes())} : ${checkZeros(Data.getSeconds())}`\r\n    const CurrentDate = `${determineDay(Data)} , ${Data.getDate()} of ${determineMonth(Data)} , ${Data.getFullYear()}`\r\n\r\n\r\n\r\n    time.innerHTML = CurrentTime\r\n    date.innerHTML = CurrentDate\r\n\r\n    setInterval( showTime,1000)\r\n}\r\n\r\n// -----------------TIME\r\n\r\n//----------------------get img-----------------------\r\n\r\n function getBgImg (){\r\n    const hour = new Date(Date.now()).getHours()\r\n\r\n    if(hour >= 5 && hour<10 ){\r\n        localStorage.setItem('bgImgType', 'morning')\r\n        localStorage.setItem('fontColor', 'white')\r\n        localStorage.setItem('textShadow', '3px 3px 2px black')\r\n    }else if(hour >= 10 && hour<17){\r\n        localStorage.setItem('bgImgType', 'day')\r\n        localStorage.setItem('fontColor', 'white')\r\n        localStorage.setItem('textShadow', '3px 3px 2px black')\r\n    }else if(hour >= 18 && hour<9){\r\n        localStorage.setItem('bgImgType', 'evening')\r\n        localStorage.setItem('fontColor', 'white')\r\n        localStorage.setItem('textShadow', '2px 2px black')\r\n    }else{\r\n        localStorage.setItem('bgImgType', 'night')\r\n        localStorage.setItem('fontColor', 'white')\r\n        localStorage.setItem('textShadow', '2px 2px black')\r\n    }\r\n    getBg(localStorage.getItem('bgImgType'))\r\n\r\n    main.style.color = localStorage.getItem('fontColor')\r\n    main.style.textShadow = localStorage.getItem('textShadow')\r\n\r\n}\r\n\r\nconst getBg = (bgImgType)=>{\r\n    let pictureId = Math.ceil(Math.random()*20)\r\n    main.style.background = `url(\"./../assets/images/${bgImgType}/${pictureId.toString()}.jpg\") 50% 50% no-repeat border-box`\r\n    main.style.backgroundSize = 'cover'\r\n}\r\n\r\n\r\n//----------------------get img-------------------\r\n//======================Store Username===============\r\n\r\nconst getUserName = () =>{\r\n    if(localStorage.getItem('userName') === \"\" ||  localStorage.getItem('userName') === null){\r\n        greetingName.innerText = '[Enter your name]'\r\n    }else {\r\n        greetingName.innerText = localStorage.getItem('userName')\r\n    }\r\n}\r\n\r\nconst getFocus = () =>{\r\n    if(localStorage.getItem('userFocus') === \"\" || localStorage.getItem('userFocus') === null){\r\n        focusName.innerText = '[Enter your focus]'\r\n    }else {\r\n        focusName.innerText = localStorage.getItem('userFocus')\r\n    }\r\n}\r\n\r\n\r\n// set username and focus\r\nconst setUserName = (e) =>{\r\n    if(e.target.innerText === ''){\r\n        return\r\n    }\r\n    localStorage.setItem('userName', e.target.innerText);\r\n}\r\n\r\nconst setFocus = (e) =>{\r\n    localStorage.setItem('userFocus', e.target.innerText);\r\n}\r\n\r\n// show username\r\n//====================================get quote========\r\n\r\nconst getQuote = async()=>{\r\n    const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`\r\n    const res = await fetch(url)\r\n    const data = await res.json()\r\n\r\n    quote.innerText = data.quoteText\r\n    quoteCaption.innerText = data.quoteAuthor\r\n}\r\n\r\n//====================================get quote========\r\n\r\n//=--------------------------get WEATHER=================\r\n\r\nconst setUsersCity = (e)=>{\r\n    localStorage.setItem('usersCity', e.target.innerText);\r\n}\r\n\r\nconst getUsersCity = ()=>{\r\n    if(localStorage.getItem('usersCity') === \"\" || localStorage.getItem('usersCity') === null){\r\n        weatherLocation.innerText = '[Enter your city]'\r\n    }else {\r\n        weatherLocation.innerText = localStorage.getItem('usersCity')\r\n    }\r\n}\r\n\r\nconst setWeather = async()=>{\r\n    if(localStorage.getItem('usersCity')){\r\n        const weatherInfo = await Object(_api_weatherAPI__WEBPACK_IMPORTED_MODULE_1__[\"getWeather\"])(_config__WEBPACK_IMPORTED_MODULE_0__[\"openWeatherApi\"], localStorage.getItem('usersCity'))\r\n        console.log(weatherInfo);\r\n        weatherIcon.forEach(icon=>{\r\n            icon.src = `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`\r\n        })\r\n        weatherDescription.innerText = weatherInfo.weather[0].description\r\n        weatherTemperature.forEach(temp=>{\r\n            temp.innerHTML = `<span>${weatherInfo.main.temp} &deg;C</span>`\r\n        })\r\n        weatherWind.innerText = weatherInfo.wind.speed\r\n        weatherHumidity.innerText = weatherInfo.main.humidity\r\n    }else{\r\n        weatherDescription.style.display = 'none'\r\n        weatherTemperature.style.display = 'none'\r\n        weatherWind.style.display = 'none'\r\n        weatherHumidity.style.display = 'none'\r\n        weatherLocation.innerText = '[enter city]'\r\n    }\r\n\r\n}\r\n\r\n//=--------------------------get WEATHER=================\r\n\r\n//======================Store Username===============\r\n\r\nconst checkEnterKeyOnSubmit = (element) =>{\r\n    element.addEventListener('keydown', (e)=>{\r\n        if(e.code === \"Enter\"){\r\n            element.blur()\r\n        }\r\n    })\r\n}\r\n\r\n//============CHANGE NAME=================================\r\ngreetingName.addEventListener('change', setUserName)\r\ngreetingName.addEventListener('blur', (e)=>{\r\n    setUserName(e)\r\n    getUserName()\r\n    greetingName.style.background = 'none'\r\n    greetingName.setAttribute('contenteditable', 'false')\r\n})\r\ncheckEnterKeyOnSubmit(greetingName)\r\n\r\nchangeNameBtn.addEventListener('click', ()=>{\r\n    greetingName.setAttribute('contenteditable', 'true')\r\n    greetingName.style.background = 'rgba(255,255,255, .4)'\r\n    greetingName.focus()\r\n})\r\n//============CHANGE NAME=================================\r\n\r\n//============CHANGE FOCUS=================================\r\nfocusName.addEventListener('keypress', setFocus)\r\nfocusName.addEventListener('blur', (e)=>{\r\n    setFocus(e)\r\n    getFocus()\r\n    focusName.style.background = 'none'\r\n    focusName.setAttribute('contenteditable', 'false')\r\n})\r\ncheckEnterKeyOnSubmit(focusName)\r\n\r\nchangeFocusBtn.addEventListener('click', ()=>{\r\n    focusName.setAttribute('contenteditable', 'true')\r\n    focusName.style.background = 'rgba(255,255,255, .4)'\r\n    focusName.focus()\r\n})\r\n//============CHANGE FOCUS=================================\r\n\r\n//============CHANGE WEATHER=================================\r\n\r\nweatherLocation.addEventListener('change', setUsersCity)\r\nweatherLocation.addEventListener('blur', (e)=>{\r\n    setUsersCity(e)\r\n    getUsersCity()\r\n    setWeather()\r\n    weatherLocation.style.background = 'none'\r\n    weatherLocation.setAttribute('contenteditable', 'false')\r\n})\r\ncheckEnterKeyOnSubmit(weatherLocation)\r\n\r\n\r\nchangeWeatherBtn.addEventListener('click', ()=>{\r\n    weatherLocation.setAttribute('contenteditable', 'true')\r\n    weatherLocation.style.background = 'rgba(255,255,255, .4)'\r\n    weatherLocation.focus()\r\n})\r\n\r\nextendWeatherBtn.addEventListener('click', ()=>{\r\n    if( weatherExtended.style.visibility === 'hidden'){\r\n        weatherExtended.style.visibility = 'visible'\r\n        weatherShortened.style.display = 'none'\r\n    }else{\r\n        weatherExtended.style.visibility = 'hidden'\r\n        weatherShortened.style.display = 'flex'\r\n    }\r\n\r\n})\r\n//============CHANGE WEATHER=================================\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', getQuote,getUsersCity)\r\n\r\nrefreshQuoteBtn.addEventListener('click', getQuote)\r\n\r\nrefreshBackground.addEventListener('click', ()=>{\r\n     getBg(localStorage.getItem('bgImgType'))\r\n\r\n    refreshBackground.disabled = 'disabled'\r\n    refreshBackgroundContent.classList.add('no-hover')\r\n    setTimeout(()=>{\r\n        refreshBackground.disabled = ''\r\n        refreshBackgroundContent.classList.remove('no-hover')\r\n    }, 2000)\r\n} )\r\n\r\n\r\n// ===================RUN------------------->>>\r\nshowTime()\r\ngetBgImg()\r\ngetUserName()\r\ngetFocus()\r\nsetWeather()\r\ngetUsersCity()\r\n// ===================RUN------------------->>>\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });