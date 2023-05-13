"use strict";

var butInstall = document.getElementById('buttonInstall'); // Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

window.addEventListener('beforeinstallprompt', function (event) {
  event.preventDefault();
  butInstall.style.visibility = 'visible';
  butInstall.textContent = 'Install!';
}); // TODO: Implement a click event handler on the `butInstall` element

butInstall.addEventListener('click', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          butInstall.setAttribute('disabled', true);
          butInstall.textContent = 'Installed!';

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}); // TODO: Add an handler for the `appinstalled` event

window.addEventListener('appinstalled', function (event) {
  console.log('appinstalled', event);
});
//# sourceMappingURL=install.dev.js.map
