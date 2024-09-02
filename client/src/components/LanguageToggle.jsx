import { useEffect, useState } from "react";

export default function LanguageToggle() {

    const [languageToggle, setLanguageToggle] = useState("English");

    useEffect(() => {
      if (localStorage.getItem("languageToggle") == null) {
        localStorage.setItem("languageToggle", "English");
      }
      else {
        setLanguageToggle(localStorage.getItem("languageToggle"));
      }
    }, []);

  return (
    <select className="LanguageToggle"
        onChange={(e) => {
          setLanguageToggle(e.target.value);
          localStorage.setItem("languageToggle", e.target.value);
          window.location.reload()
        }}
        value={languageToggle}
    >
        <option value="English">English (UK)</option>
        <option value="Chinese">简体中文</option>
    </select>
  )
}
