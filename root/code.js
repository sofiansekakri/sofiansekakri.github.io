(() => {
  'use strict';
  if (!$ || !$.ajax) return;
  console.log('ready', window.location.href);
  $('.urlredirect').on('click', () => {
    window.open('https://community.fandom.com/wiki/User:Crazybloy2');
  });
})();
