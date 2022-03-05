export const regexOnlyNum = /[^0-9]/g; // regex that only allows numeric input

export const regexOnlyDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/; // regex that only allows a date in formata acc. to  http://tools.ietf.org/html/rfc3339 e.g. 2020-04-20

export const dayInMilliSeconds = (1000 * 60 * 60 * 24) - 1; // 86399999;

// Email regex validation
export const validateEmail = (email) => {
  if (!email) { return false; }
  const trimmedEmail = email.toLowerCase().trim();
  const regex = /^([+.-\w]+)([@])([\w+.-]+\w)([.])(\w+)$/;
  return regex.test(trimmedEmail);
};

export const dateToMiddayTimestamp = (date: string) => {
  // Transform date to midday value if date_format is date
  const halfDayInMs = (1000 * 60 * 60 * 12); // 43.200.000 ms
  // TODO: Get local time and transform to local midday instead of UTC
  return new Date((new Date(date).setHours(0, 0, 0, 0).valueOf() + halfDayInMs));
};

// Convert Hex Color to rgba with opacity
// https://gist.github.com/danieliser/b4b24c9f772066bcf0a6
export const convertHexToRGBA = (hexCode, opacity) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r},${g},${b},${opacity})`;
};

export const getSortedMapIds = (map: { [key: string]: any }): string[] => {
  // Map keys, filter false contents, sort according to "date" (key as epoch)
  return Object.keys(map || {}).filter(f => map[f]).sort((a, b) => parseInt(a) - parseInt(b));
};


// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
export const countryToFlag = (isoCode) => {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
      .toUpperCase()
      .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
};

// Creates UID based from Timestamp by reversing timestamp and ... // TODO:
// Properties: 
// - unique-ish (local, for one user) // TODO: true uniqueness for use in database across users
// - not ascending/ decending (to avoid heating in firebase database)
// - reversible (to be useable for creation date)
export const createTimestampBasedNumberUID = () => new Date().valueOf().toString().split("").reverse().join("");

export const capitalizeFirstLetter = (string: string): string => {
  if (!string || typeof string !== 'string') { return ''; };
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
};