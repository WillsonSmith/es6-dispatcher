"use strict";

function Dispatcher() {
  var listeners = {};

  return {
    register: function register(type) {
      var _listeners$type;

      if (!listeners[type]) {
        listeners[type] = [];
      }

      for (var _len = arguments.length, callbacks = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        callbacks[_key - 1] = arguments[_key];
      }

      (_listeners$type = listeners[type]).push.apply(_listeners$type, callbacks);
    },
    remove: function remove(type, callback) {
      listeners[type] = listeners[type].filter(function (listener) {
        return listener !== callback;
      });
    },
    dispatch: function dispatch(event) {
      if (listeners[event.type]) {
        listeners[event.type].forEach(function (listener) {
          return listener(event);
        });
      }
    }
  };
}

//# sourceMappingURL=dispatcher.js.map