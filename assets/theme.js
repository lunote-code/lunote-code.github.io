(function () {
  var KEY = 'lunote-theme';
  var root = document.documentElement;
  var input = document.getElementById('theme-dark');

  function syncTheme(dark) {
    root.dataset.theme = dark ? 'dark' : 'light';
    try {
      localStorage.setItem(KEY, dark ? 'dark' : 'light');
    } catch (e) {}
  }

  if (input) {
    try {
      var stored = localStorage.getItem(KEY);
      if (stored === 'dark') {
        input.checked = true;
        root.dataset.theme = 'dark';
      } else if (stored === 'light') {
        input.checked = false;
        root.dataset.theme = 'light';
      }
    } catch (e) {}

    input.addEventListener('change', function () {
      syncTheme(input.checked);
      input.blur();
    });
  }

  var navToggle = document.getElementById('nav-toggle');
  if (navToggle) {
    document.querySelectorAll('.site-nav a[href]').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.checked = false;
      });
    });
  }

  var langMenu = document.querySelector('.lang-menu');
  if (langMenu) {
    var langBtn = langMenu.querySelector('.lang-toggle');
    var langList = langMenu.querySelector('.lang-dropdown');
    var currentLang = document.documentElement.lang || 'en';
    var langLabels = { en: 'English', 'zh-Hans': '简体中文' };

    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(function (link) {
      var lang = link.getAttribute('hreflang');
      if (!lang || lang === 'x-default') return;

      var item = document.createElement('li');
      var option = document.createElement('a');
      option.href = new URL(link.href).pathname;
      option.lang = lang;
      option.hreflang = lang;
      option.textContent = langLabels[lang] || lang;
      option.setAttribute('role', 'option');
      if (lang === currentLang) {
        option.className = 'is-current';
        option.setAttribute('aria-current', 'true');
      }
      item.appendChild(option);
      langList.appendChild(item);
    });

    function setLangOpen(open) {
      langMenu.classList.toggle('is-open', open);
      langBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      langList.hidden = !open;
    }

    langBtn.addEventListener('click', function (event) {
      event.stopPropagation();
      setLangOpen(!langMenu.classList.contains('is-open'));
    });

    document.addEventListener('click', function () {
      setLangOpen(false);
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setLangOpen(false);
    });
  }
})();
