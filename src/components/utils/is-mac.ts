export const isMac = (): boolean => {
  return navigator && !!navigator.userAgent.match(/Mac OS/i);
};
