var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./NotesTimeline/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./NotesTimeline/index.ts":
/*!********************************!*\
  !*** ./NotesTimeline/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function sent() {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n\n    while (_) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n\n        case 7:\n          op = _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n\n            _.ops.push(op);\n\n            break;\n          }\n\n          if (t[2]) _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n      }\n\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.NotesTimeline = void 0;\n\nvar NotesTimeline =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function NotesTimeline() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  NotesTimeline.prototype.init = function (context, notifyOutputChanged, state, container) {\n    return __awaiter(this, void 0, void 0, function () {\n      var ticketNumber, caseId, caseData;\n      return __generator(this, function (_a) {\n        // Add control initialization code\n        this._context = context;\n        this._container = document.createElement('div');\n        this._container.className = \"mainbody\";\n        ticketNumber = context.parameters.CaseNumber.raw || \"CAS-01047-N4P1T7\";\n        caseId = context.mode.contextInfo.entityId;\n        caseId != null ? caseId : \"b5328427-ee82-eb11-a812-000d3a6b0867\";\n        caseData = this.GetCaseData(); // caseData.CaseNotes = [];\n        //caseData.TaskDetails = [];\n        //var caseData = await this.GetCaseNotes(caseId, ticketNumber);\n\n        this._container.appendChild(this.CreateTreeStructure(caseData)); //this._container.appendChild(this.createHTMLStructure());\n\n\n        container.appendChild(this._container);\n        return [2\n        /*return*/\n        ];\n      });\n    });\n  }; //Below method creates mock Casedata for testing purpose.\n\n\n  NotesTimeline.prototype.GetCaseData = function () {\n    var casedata = new CaseModel();\n    casedata.casenumber = \"CAS-01047-N4P1T7\";\n    var task1 = new ChildEntityModel();\n    task1.name = \"Entity1\";\n    task1.Description = \"Entity 1 Description\";\n    var task2 = new ChildEntityModel();\n    task2.name = \"Entity 2\";\n    task2.Description = \"Entity 2 Desciprtion\";\n    var notes1 = new NotesModel();\n    notes1.Notesdate = new Date().toLocaleDateString();\n    notes1.notessubject = \"Notes Subject 1\";\n    notes1.notestext = \"This is a notes text for case CAS-01047-N4P1T7\";\n    notes1.notesowner = \"User 1\";\n    var notes2 = new NotesModel();\n    notes2.Notesdate = new Date().toLocaleDateString();\n    notes2.notessubject = \"Notes Subject 2\";\n    notes2.notestext = \"This is a notes text for task Briefing Notes\";\n    notes2.notesowner = \"User 2\";\n    task1.EntityNotes = [notes2, notes2, notes2];\n    var notes3 = new NotesModel();\n    notes3.Notesdate = new Date().toLocaleString();\n    notes3.notessubject = \"Notes Subject 3\";\n    notes3.notestext = \"This is a notes text for taks Response Letter\";\n    notes3.notesowner = \"User 1\";\n    task2.EntityNotes = [notes3, notes3, notes3];\n    casedata.CaseNotes = [notes1, notes1, notes1];\n    casedata.ChildEntities = [task1, task2];\n    return casedata;\n  };\n\n  NotesTimeline.prototype.CreateTreeStructure = function (caseData) {\n    var _this = this;\n\n    var nocasenotes = false;\n    var notasknotes = false;\n    var row = document.createElement('div');\n    row.className = \"row\";\n    var column = document.createElement('div');\n    column.className = \"col-md-4\";\n    var tree = document.createElement('ul');\n    tree.id = \"tree1\";\n    tree.className = \"tree\";\n    var case1 = this.createCaseElement(caseData);\n    var childTasks = this.createullistElement();\n\n    if (caseData.CaseNotes != null && caseData.CaseNotes.length > 0) {\n      caseData.CaseNotes.forEach(function (note) {\n        var notes1 = _this.CreateNotesElement(note);\n\n        childTasks.appendChild(notes1);\n      });\n      case1.appendChild(childTasks);\n    } else {\n      nocasenotes = true;\n    }\n\n    if (caseData.ChildEntities != null && caseData.ChildEntities.length > 0) {\n      caseData.ChildEntities.forEach(function (taskdata) {\n        var task1 = _this.createTaskElement(taskdata, false);\n\n        childTasks.appendChild(task1);\n\n        var childnotes1 = _this.createullistElement();\n\n        taskdata.EntityNotes.forEach(function (note) {\n          var notes1 = _this.CreateNotesElement(note);\n\n          childnotes1.appendChild(notes1);\n        });\n        task1.appendChild(childnotes1);\n        childTasks.appendChild(task1);\n      });\n      case1.appendChild(childTasks);\n    } else {\n      notasknotes = true;\n    }\n\n    if (nocasenotes && notasknotes) {\n      case1.appendChild(this.createErrorElement(\"No notes exists!\"));\n    }\n\n    tree.appendChild(case1);\n    column.appendChild(tree);\n    row.appendChild(column);\n    return row;\n  };\n\n  NotesTimeline.prototype.divElementOnClick = function () {\n    this.classList.toggle(\"active\");\n    var contents = this.getElementsByClassName(\"content\");\n    var i;\n\n    for (i = 0; i < contents.length; i++) {\n      var divtag = contents[i];\n\n      if (divtag.style.display === \"block\") {\n        divtag.style.display = \"none\";\n      } else {\n        divtag.style.display = \"block\";\n      }\n    }\n  };\n\n  NotesTimeline.prototype.CreateNotesElement = function (notes) {\n    var listElement = document.createElement('li');\n    listElement.style.textAlign = \"left\";\n    var notesElement = document.createElement('div');\n    notesElement.className = \"collapsible\";\n    notesElement === null || notesElement === void 0 ? void 0 : notesElement.addEventListener(\"click\", this.divElementOnClick);\n    var header = document.createElement(\"div\");\n    header.appendChild(document.createTextNode(notes.notesowner));\n    header.className = \"header\";\n    var footer = document.createElement(\"div\");\n    footer.appendChild(document.createTextNode(notes.Notesdate.toString()));\n    footer.className = \"footer\";\n    var noteText = document.createElement(\"div\");\n    noteText.innerHTML = notes.notestext;\n    var bodyElement = document.createElement('div');\n    bodyElement.className = \"content\";\n    bodyElement.appendChild(header);\n    bodyElement.appendChild(noteText);\n    bodyElement.appendChild(footer);\n    notesElement.style.width = \"200px\"; //notesElement.prepend(this.createIcon(\"Notes\"));\n\n    notesElement.appendChild(document.createTextNode(notes.notessubject));\n    notesElement.appendChild(bodyElement);\n    listElement.appendChild(notesElement);\n    return listElement;\n  };\n\n  NotesTimeline.prototype.createTaskElement = function (taskdata, anchorTag) {\n    var listElement = document.createElement('li');\n    listElement.style.textAlign = \"left\";\n    var taskElement = document.createElement('div');\n    taskElement.className = \"task\";\n    taskElement.style.width = \"330px\"; //taskElement.prepend(this.createIcon(\"Task\"));\n\n    if (anchorTag) {\n      var anchor = document.createElement('a');\n      anchor.href = \"#\";\n      anchor.appendChild(document.createTextNode(taskdata.name + \" - \" + taskdata.Description));\n      taskElement.appendChild(anchor);\n    } else {\n      taskElement.appendChild(document.createTextNode(taskdata.name + \" - \" + taskdata.Description));\n    }\n\n    listElement.appendChild(taskElement);\n    return listElement;\n  };\n\n  NotesTimeline.prototype.createCaseElement = function (caseData) {\n    var listElement = document.createElement('li');\n    listElement.style.textAlign = \"left\";\n    listElement.style.width = \"500px\"; //listElement.prepend(this.createIcon(\"Case\"));\n\n    listElement.appendChild(document.createTextNode(caseData.casenumber));\n    return listElement;\n  };\n\n  NotesTimeline.prototype.createErrorElement = function (errorMessage) {\n    var listElement = document.createElement('li');\n    var errorElement = document.createElement('div');\n    errorElement.style.textAlign = \"left\";\n    errorElement.appendChild(document.createTextNode(errorMessage));\n    listElement.appendChild(errorElement);\n    return listElement;\n  };\n\n  NotesTimeline.prototype.createullistElement = function () {\n    var ullistElement = document.createElement('ul');\n    ullistElement.className = \"ullist\";\n    return ullistElement;\n  };\n\n  NotesTimeline.prototype.GetCaseNotes = function (targetId, ticketnumber) {\n    return __awaiter(this, void 0, void 0, function () {\n      var caseDetails, fetchCaseNotes, caseid, finalnotesQuery, response, tasksQuery, finaltaskQuery, response1, taskarrray, fetchTaskNotes, taskid, i, taskData, finalnotesQuery, response_1;\n\n      var _this = this;\n\n      return __generator(this, function (_a) {\n        switch (_a.label) {\n          case 0:\n            caseDetails = new CaseModel();\n            fetchCaseNotes = \"<fetch>\\n\\t\\t<entity name=\\\"annotation\\\" >\\n\\t\\t  <attribute name=\\\"createdon\\\" />\\n\\t\\t  <attribute name=\\\"createdby\\\" />\\n\\t\\t  <attribute name=\\\"subject\\\" />\\n\\t\\t  <attribute name=\\\"notetext\\\" />\\n\\t\\t  <filter>\\n\\t\\t\\t<condition attribute=\\\"objectid\\\" operator=\\\"eq\\\" value=\\\"incidentid\\\" uitype=\\\"incident\\\" />\\n\\t\\t  </filter>\\n\\t\\t</entity>\\n\\t  </fetch>\";\n            caseid = /incidentid/gi;\n            finalnotesQuery = \"?fetchXml=\" + encodeURIComponent(fetchCaseNotes.replace(caseid, targetId));\n            caseDetails.casenumber = ticketnumber;\n            return [4\n            /*yield*/\n            , this.retrieveCRMRecords(\"annotation\", finalnotesQuery)];\n\n          case 1:\n            response = _a.sent();\n\n            if (response.entities.length > 0) {\n              response.entities.forEach(function (entity) {\n                var note = new NotesModel();\n                note.Notesdate = entity[\"createdon@OData.Community.Display.V1.FormattedValue\"];\n                note.notesowner = entity[\"_createdby_value@OData.Community.Display.V1.FormattedValue\"];\n                note.notessubject = entity[\"subject\"];\n                note.notestext = entity[\"notetext\"];\n                caseDetails.CaseNotes.push(note);\n              });\n            }\n\n            tasksQuery = \"<fetch>\\n\\t\\t<entity name=\\\"task\\\" >\\n\\t\\t  <attribute name=\\\"subject\\\" />\\n\\t\\t  <attribute name=\\\"cos_cbutasktype\\\" />\\n\\t\\t  <filter>\\n\\t\\t\\t<condition attribute=\\\"regardingobjectid\\\" operator=\\\"eq\\\" value=\\\"incidentid\\\" uitype=\\\"incident\\\" />\\n\\t\\t  </filter>\\n\\t\\t</entity>\\n\\t  </fetch>\";\n            finaltaskQuery = \"?fetchXml=\" + encodeURIComponent(tasksQuery.replace(caseid, targetId));\n            return [4\n            /*yield*/\n            , this.retrieveCRMRecords(\"task\", finaltaskQuery)];\n\n          case 2:\n            response1 = _a.sent();\n            taskarrray = [];\n\n            if (response1.entities.length > 0) {\n              response1.entities.forEach(function (entity) {\n                return __awaiter(_this, void 0, void 0, function () {\n                  var taskdata;\n                  return __generator(this, function (_a) {\n                    taskdata = new ChildEntityModel();\n                    taskdata.name = entity[\"subject\"];\n                    taskdata.Description = entity[\"cos_cbutasktype@OData.Community.Display.V1.FormattedValue\"];\n                    taskdata.ChildEntityId = entity[\"activityid\"];\n                    taskarrray.push(taskdata);\n                    return [2\n                    /*return*/\n                    ];\n                  });\n                });\n              });\n            }\n\n            fetchTaskNotes = \"<fetch>\\n\\t\\t<entity name=\\\"annotation\\\" >\\n\\t\\t\\t<attribute name=\\\"createdon\\\" />\\n\\t\\t\\t<attribute name=\\\"createdby\\\" />\\n\\t\\t\\t<attribute name=\\\"subject\\\" />\\n\\t\\t\\t<attribute name=\\\"notetext\\\" />\\n\\t\\t\\t<filter>\\n\\t\\t\\t\\t<condition attribute=\\\"objectid\\\" operator=\\\"eq\\\" value=\\\"taskid\\\" uitype=\\\"task\\\" />\\n\\t\\t\\t</filter>\\n\\t\\t</entity>\\n\\t\\t</fetch>\";\n            taskid = /taskid/gi;\n            i = 0;\n            _a.label = 3;\n\n          case 3:\n            if (!(i < taskarrray.length)) return [3\n            /*break*/\n            , 6];\n            taskData = taskarrray[i];\n            finalnotesQuery = \"?fetchXml=\" + encodeURIComponent(fetchTaskNotes.replace(taskid, taskData.ChildEntityId));\n            return [4\n            /*yield*/\n            , this.retrieveCRMRecords(\"annotation\", finalnotesQuery)];\n\n          case 4:\n            response_1 = _a.sent();\n\n            if (response_1.entities.length > 0) {\n              response_1.entities.forEach(function (entity) {\n                var note = new NotesModel();\n                note.Notesdate = entity[\"createdon@OData.Community.Display.V1.FormattedValue\"];\n                note.notesowner = entity[\"_createdby_value@OData.Community.Display.V1.FormattedValue\"];\n                note.notessubject = entity[\"subject\"];\n                note.notestext = entity[\"notetext\"];\n                taskData.EntityNotes.push(note);\n              });\n              caseDetails.ChildEntities.push(taskData);\n            }\n\n            _a.label = 5;\n\n          case 5:\n            i++;\n            return [3\n            /*break*/\n            , 3];\n\n          case 6:\n            return [2\n            /*return*/\n            , caseDetails];\n        }\n      });\n    });\n  };\n\n  NotesTimeline.prototype.retrieveCRMRecords = function (entityName, query) {\n    return __awaiter(this, void 0, void 0, function () {\n      var result, error_1;\n      return __generator(this, function (_a) {\n        switch (_a.label) {\n          case 0:\n            _a.trys.push([0, 2, 3, 4]);\n\n            return [4\n            /*yield*/\n            , this.getResults(entityName, query)];\n\n          case 1:\n            result = _a.sent();\n            return [2\n            /*return*/\n            , result];\n\n          case 2:\n            error_1 = _a.sent(); // display error message within error section of tile\n\n            return [2\n            /*return*/\n            , Promise.reject(error_1)];\n\n          case 3:\n            return [7\n            /*endfinally*/\n            ];\n\n          case 4:\n            return [2\n            /*return*/\n            ];\n        }\n      });\n    });\n  };\n\n  NotesTimeline.prototype.getResults = function (entityName, query) {\n    return __awaiter(this, void 0, void 0, function () {\n      var a;\n      return __generator(this, function (_a) {\n        return [2\n        /*return*/\n        , a = this._context.webAPI.retrieveMultipleRecords(entityName, query).then(function success(result) {\n          //  return result.entities;\n          return result;\n        }, function (error) {\n          return Promise.reject(error);\n        })];\n      });\n    });\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  NotesTimeline.prototype.updateView = function (context) {// Add code to update control view\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  NotesTimeline.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  NotesTimeline.prototype.destroy = function () {// Add code to cleanup control if necessary\n  };\n\n  return NotesTimeline;\n}();\n\nexports.NotesTimeline = NotesTimeline;\n\nvar CaseModel =\n/** @class */\nfunction () {\n  function CaseModel() {\n    this.ChildEntities = [];\n    this.CaseNotes = [];\n  }\n\n  return CaseModel;\n}();\n\nvar ChildEntityModel =\n/** @class */\nfunction () {\n  function ChildEntityModel() {\n    this.EntityNotes = [];\n  }\n\n  return ChildEntityModel;\n}();\n\nvar NotesModel =\n/** @class */\nfunction () {\n  function NotesModel() {}\n\n  return NotesModel;\n}();\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./NotesTimeline/index.ts?");

/***/ })

/******/ });
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('Cos.CRM.PCFCOntrols.NotesTimeline', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.NotesTimeline);
} else {
	var Cos = Cos || {};
	Cos.CRM = Cos.CRM || {};
	Cos.CRM.PCFCOntrols = Cos.CRM.PCFCOntrols || {};
	Cos.CRM.PCFCOntrols.NotesTimeline = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.NotesTimeline;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}