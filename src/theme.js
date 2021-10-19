function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    //document.documentElement.className = themeName;
	document.documentElement.style.setProperty(
      "--background",
      (themeName == "theme-dark") ? "#262833" : "#fff"
    );
    document.documentElement.style.setProperty("--text", (themeName == "theme-dark") ? "#fff" : "#262833")
}

export function keepTheme() {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-light')
    }
  } else {
    setTheme('theme-light')
  }
}

export default setTheme
