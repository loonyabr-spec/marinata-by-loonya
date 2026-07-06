const THEME_KEY = "mowi_theme";

function initTheme() {

    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === "light") {

        enableLightTheme();

    } else {

        enableDarkTheme();

    }

    const button = document.getElementById("themeButton");

    if (!button)
        return;

    button.addEventListener("click", toggleTheme);

    updateThemeButton();

}

function toggleTheme() {

    if (document.body.classList.contains("light")) {

        enableDarkTheme();

    } else {

        enableLightTheme();

    }

    updateThemeButton();

}

function enableDarkTheme() {

    document.body.classList.remove("light");

    localStorage.setItem(THEME_KEY, "dark");

}

function enableLightTheme() {

    document.body.classList.add("light");

    localStorage.setItem(THEME_KEY, "light");

}

function updateThemeButton() {

    const button = document.getElementById("themeButton");

    if (!button)
        return;

    const t = TRANSLATIONS[currentLanguage];

    if (document.body.classList.contains("light")) {

        button.textContent = "🌙 " + t.darkTheme;

    } else {

        button.textContent = "☀️ " + t.lightTheme;

    }

}