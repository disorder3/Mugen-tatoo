"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SERVER_URL = "http://localhost:4001"; //serveur sur lequel l'application web communique

var Reservation = function Reservation() {
  var imageFiles = React.useRef(null); //créer une référence à l'élément de formulaire de type "file" qui permet à l'utilisateur de sélectionner des images. La référence "imageFiles" est initialisée à "null" car elle ne contient pas encore de valeur. Cela permet de stocker une référence à l'élément de formulaire de sorte que vous puissiez y accéder plus tard pour manipuler les fichiers sélectionnés, tels que les envoyer au serveur.
  var formRef = React.useRef(null); // permet de stocker une référence à l'élément de formulaire de sorte que vous puissiez y accéder plus tard pour manipuler le formulaire, tels que soumettre les données ou vérifier les erreurs.

  var _React$useState = React.useState({
      firstname: "",
      lastname: "",
      birthday: "",
      email: "",
      message: ""
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    formData = _React$useState2[0],
    setFormData = _React$useState2[1]; // stocker les valeurs saisies par l'utilisateur dans ces champs de formulaire, et de les utiliser pour soumettre les données ou vérifier les erreurs. La fonction "setFormData" est utilisée pour mettre à jour les données du formulaire dans l'état lorsque les champs du formulaire sont modifiés.
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    errors = _React$useState4[0],
    setErrors = _React$useState4[1]; //stocker les erreurs renvoyées par le serveur lorsque la soumission du formulaire échoue
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    loading = _React$useState6[0],
    setLoading = _React$useState6[1]; //utilisé pour indiquer si une requête est en cours d'exécution. Il est initialisé à "false" et est géré à l'aide de "setLoading".
  var _React$useState7 = React.useState(false),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    reserved = _React$useState8[0],
    setReserved = _React$useState8[1]; // créer un état pour stocker l'information de réservation. Il initialise cet état à false, ce qui indique que l'utilisateur n'a pas encore réservé un tatouage. La fonction "setReserved" est utilisée pour mettre à jour la valeur de l'état "reserved" lorsque l'utilisateur réserve un tatouage avec succès

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var fd = formData; //une copie de l'état actuel des données de formulaire, il met à jour la propriété correspondant au nom de champ avec la valeur entrée par l'utilisateur
    fd[name] = value; //objet qui va contenir les données du formulaire
    setFormData(fd); //mettre à jour l'état des données de formulaire avec les nouvelles données saisies par l'utilisateur.
  }; //La fonction "handleChange" est utilisée pour gérer les changements de l'état des champs de formulaire lorsque l'utilisateur entre des données.

  var showError = function showError(name) {
    if (!errors) return null;
    var error = errors.find(function (e) {
      return e.param === name;
    });
    if (!error) return null;
    return /*#__PURE__*/React.createElement("span", {
      className: "error"
    }, error.msg);
  }; //Cette fonction "showError" prend en entrée le nom d'un champ de formulaire et vérifie s'il existe des erreurs pour ce champ
  //Il commence par vérifier s'il y a des erreurs en utilisant "if (!errors) return null;", qui signifie que s'il n'y a pas d'erreur, il ne fait rien et retourne "null". S'il y a des erreurs, la fonction utilise la méthode "find()" pour rechercher l'erreur associée au nom de champ donné. Si l'erreur existe, elle est retournée sous forme de message d'erreur. Cette fonction permet d'afficher des messages d'erreur spécifiques à chaque champ de formulaire lorsque des erreurs sont détectées lors de la validation du formulaire.

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
      var body, res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            //définit une fonction asynchrone qui prend en paramètre un événement "e" (généralement l'événement de soumission de formulaire). Cette fonction sera appelée lorsque l'utilisateur soumet le formulaire
            e.preventDefault(); //est utilisée pour annuler l'événement de soumission de formulaire par défaut. En appelant "preventDefault()" sur l'événement de soumission, cela empêche le navigateur de recharger la page ou de suivre le lien d'action du formulaire
            body = new FormData(); // crée un nouveau objet FormData
            Object.keys(formData).forEach(function (key) {
              return body.append(key, formData[key]);
            }); //utilise la méthode forEach() pour parcourir les clés de l'objet formData et ajouter chaque champ de formulaire au corps de la requête FormData. Il utilise la méthode .append() de l'objet FormData pour ajouter chaque champ de formulaire. La méthode .append() prend en compte deux paramètres: le nom du champ et sa valeur. Cela permet de regrouper les données de formulaire dans un seul objet pour faciliter leur transmission au serveur.

            body.append("image", imageFiles.current.files[0]); //utilise la méthode .append() de l'objet FormData pour ajouter le fichier image à l'objet FormData. Il utilise "image" comme nom de champ pour le fichier image, ce qui indique au serveur qu'il s'agit d'une image, et il utilise la référence à l'objet imageFiles pour accéder au fichier sélectionné. Il utilise l'index [0] pour sélectionner le premier fichier de la liste des fichiers sélectionnés, car il ne prend en compte qu'un seul fichier à la fois. Cela permet d'ajouter le fichier image aux données de formulaire pour qu'il puisse être envoyé au serveur en même temps que les autres données de formulaire.

            setLoading(true); //modifie l'état "loading" pour indiquer que la demande est en cours d'exécution. Il est utilisé pour afficher un indicateur de chargement à l'utilisateur pour informer qu'une requête HTTP est en cours d'exécution et qu'il faut attendre la réponse du serveur.
            _context.prev = 5;
            _context.next = 8;
            return axios.post("".concat(SERVER_URL, "/reservation"), body);
          case 8:
            res = _context.sent;
            // utilise la méthode "post" d'Axios pour envoyer les données de formulaire au serveur. Il utilise une URL dynamique qui est générée à partir de la variable d'environnement SERVER_URL et de l'URL de la route de réservation. Il passe l'objet FormData en tant que corps de la requête.
            if (res.data) {
              formRef.current.reset();
              setReserved(true);
              setErrors(null); //Si la requête est réussie, il utilise la référence à l'élément de formulaire pour réinitialiser le formulaire, met à jour l'état "reserved" pour indiquer que la réservation a été effectuée avec succès et met à jour l'état "errors" pour indiquer qu'il n'y a pas d'erreurs.
            }
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](5);
            setErrors(_context.t0.response.data.errors); //Si la requête échoue, il utilise l'objet d'erreur pour récupérer les erreurs de réponse et les stocke dans l'état "errors" pour les afficher ultérieurement.
          case 15:
            setLoading(false); //met à jour l'état "loading" pour indiquer que la demande est terminée.
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 12]]);
    }));
    return function handleSubmit(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("form", {
    ref: formRef,
    onSubmit: handleSubmit
  }, reserved && /*#__PURE__*/React.createElement("article", {
    className: "message is-success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "message-body"
  }, "vous avez r\xE9serv\xE9 avec succ\xE8s")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "lastname"
  }, "Nom"), /*#__PURE__*/React.createElement("input", {
    className: "input ".concat(showError("lastname") !== null ? "is-danger" : ""),
    id: "lastname",
    type: "text",
    placeholder: "Nom",
    name: "lastname",
    onChange: handleChange
  }), showError("lastname")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "firstname"
  }, "Pr\xE9nom"), /*#__PURE__*/React.createElement("input", {
    className: "input ".concat(showError("firstname") !== null ? "is-danger" : ""),
    id: "firstname",
    type: "text",
    placeholder: "Pr\xE9nom",
    name: "firstname",
    onChange: handleChange
  }), showError("firstname")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "birthday"
  }, "Date de naissance"), /*#__PURE__*/React.createElement("input", {
    className: "input ".concat(showError("birthday") !== null ? "is-danger" : ""),
    id: "birthday",
    type: "date",
    name: "birthday",
    onChange: handleChange
  }), showError("birthday")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    className: "input ".concat(showError("email") !== null ? "is-danger" : ""),
    id: "email",
    type: "email",
    placeholder: "Email",
    name: "email",
    onChange: handleChange
  }), showError("email")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "file"
  }, "Piece-jointe"), /*#__PURE__*/React.createElement("input", {
    ref: imageFiles,
    className: "input ".concat(showError("image") !== null ? "is-danger" : ""),
    id: "file",
    type: "file",
    name: "images",
    accept: "image/png, image/jpg, image/jpeg, image/gif"
  }), showError("image")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-5"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "message"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    className: "textarea ".concat(showError("message") !== null ? "is-danger" : ""),
    id: "message",
    name: "message",
    onChange: handleChange
  }), showError("message")), /*#__PURE__*/React.createElement("div", {
    className: "Logn"
  }, /*#__PURE__*/React.createElement("button", {
    disabled: loading,
    className: "button is-danger",
    type: "submit"
  }, loading ? "Envoi en cours" : "Envoyer"), /*#__PURE__*/React.createElement("button", {
    disabled: loading,
    className: "button is-danger",
    type: "reset"
  }, "Effacer")), /*#__PURE__*/React.createElement("div", {
    className: "field.res has-text-centered"
  }, /*#__PURE__*/React.createElement("p", null, "Ou envoyez moi simplement un e-mail sur"), /*#__PURE__*/React.createElement("a", {
    className: "mail",
    href: "mailto:mugen.tattoo.contact@gmail.com"
  }, "mugen.tattoo.contact@gmail.com"))) //fin structure html
  ;
};

ReactDOM.render( /*#__PURE__*/React.createElement(Reservation, null), document.getElementById("reservation")); // permet de placer le composant dans la page web à l'endroit où l'élément avec cet ID se trouve