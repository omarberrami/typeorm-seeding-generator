export const toCamelCase = (str: string): string => {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};

export const camelToDashedCase = (str: string): string => str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
