"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDb = exports.putDb = void 0;

var _idb = require("idb");

var initdb = function initdb() {
  return regeneratorRuntime.async(function initdb$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", (0, _idb.openDB)('jate', 1, {
            upgrade: function upgrade(db) {
              if (db.objectStoreNames.contains('jate')) {
                console.log('jate database already exists');
                return;
              }

              db.createObjectStore('jate', {
                keyPath: 'id',
                autoIncrement: true
              });
              console.log('jate database created');
            }
          }));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}; // TODO: Add logic to a method that accepts some content and adds it to the database


var putDb = function putDb(content) {
  var jateDB, tx, store, request, result;
  return regeneratorRuntime.async(function putDb$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _idb.openDB)("jate", 1));

        case 2:
          jateDB = _context2.sent;
          tx = jateDB.transaction("jate", "readwrite");
          store = tx.objectStore("jate");
          request = store.put({
            id: 1,
            value: content
          });
          _context2.next = 8;
          return regeneratorRuntime.awrap(request);

        case 8:
          result = _context2.sent;
          console.log("🚀 - data saved to the database", result);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // TODO: Add logic for a method that gets all the content from the database


exports.putDb = putDb;

var getDb = function getDb() {
  var jateDB, tx, store, request, result;
  return regeneratorRuntime.async(function getDb$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _idb.openDB)("jate", 1));

        case 2:
          jateDB = _context3.sent;
          tx = jateDB.transaction("jate", "readonly");
          store = tx.objectStore("jate");
          request = store.getAll();
          _context3.next = 8;
          return regeneratorRuntime.awrap(request);

        case 8:
          result = _context3.sent;
          console.log("🚀 - data read from database", result);
          return _context3.abrupt("return", result.value);

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getDb = getDb;
initdb();
//# sourceMappingURL=database.dev.js.map
