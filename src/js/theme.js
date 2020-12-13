const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const themeSwitch = document.querySelector('.theme-switch__toggle');

if (localStorage.getItem('setting')) {
  let setting = localStorage.getItem('setting');
  body.classList.add(setting);
  if (setting === 'dark-theme') {
    themeSwitch.checked = true;
  }
}
themeSwitch.addEventListener('change', function () {
  body.className = '';
  if (this.checked) {
    body.classList.add(Theme.DARK);
    localStorage.setItem('setting', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('setting', Theme.LIGHT);
  }
});