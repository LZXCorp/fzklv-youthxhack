export function getCurrentSelectedLanguage() {
    if (localStorage.getItem("languageToggle") == null) {
        return "English"
    }
    else {
        return localStorage.getItem("languageToggle");
    }
}