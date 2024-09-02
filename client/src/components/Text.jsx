import { useState } from "react";
import { getCurrentSelectedLanguage } from "../../utils";

// eslint-disable-next-line react/prop-types
export default function Text({ english, chinese }) {
  // Destructure the state value from the useState hook
  const [language] = useState(getCurrentSelectedLanguage());

  return (
    <>
      {language === "English" ? (
        <>{english}</>
      ) : (
        <>{chinese}</>
      )}
    </>
  );
}