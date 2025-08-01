import React from "react";

export const HTMLIcon = ({ className = "", size = 24 }) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    alt="HTML5"
    width={size}
    height={size}
    className={`${className} object-contain`}
  />
);

export const CSSIcon = ({ className = "", size = 24 }) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    alt="CSS3"
    width={size}
    height={size}
    className={`${className} object-contain`}
  />
);

export const JavaScriptIcon = ({ className = "", size = 24 }) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    alt="JavaScript"
    width={size}
    height={size}
    className={`${className} object-contain`}
  />
);

export const PythonIcon = ({ className = "", size = 24 }) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    alt="Python"
    width={size}
    height={size}
    className={`${className} object-contain`}
  />
);

export const SQLIcon = ({ className = "", size = 24 }) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    alt="SQL"
    width={size}
    height={size}
    className={`${className} object-contain`}
  />
);

export const AWSIcon = ({ className = "", size = 24 }) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    alt="AWS"
    width={size}
    height={size}
    className={`${className} object-contain`}
  />
);
