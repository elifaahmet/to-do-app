import React from 'react';
import { typography } from '../styles'

export const interpolateStyles = (styles) => {
    const keys = Object.keys(styles);
    return keys.reduce((acc, key) => {
      const hyphenCaseKey = key.replace(
        /[A-Z]+/g,
        (subString) => `-${subString.toLowerCase()}`
      );
      acc += `${hyphenCaseKey}: ${styles[key]};\n`;
      return acc;
    }, '');
}

export function appendValuesWithUnits(
  cssObject,
  styleKeys,
) {
  const clone = JSON.parse(JSON.stringify(cssObject));

  styleKeys.forEach((key) => {
    if (
      Object.prototype.hasOwnProperty.call(clone, key) &&
      typeof clone[key] === 'number'
    ) {
      clone[key] = `${clone[key]}px`;
    }
  });

  return clone;
}

export function themeStylesToCssString(
  key
) {
  return interpolateStyles(
    appendValuesWithUnits(typography[key], ['fontSize', 'lineHeight'])
  );
}