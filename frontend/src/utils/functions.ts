export const stringSlicer = (str: string, n: number): string => {
  const newStr = str.slice(0, 1).toUpperCase() + str.slice(1);

  if (str.length > n) {
    return `${newStr.slice(0, n - 4)} ...`;
  }

  return newStr;
};