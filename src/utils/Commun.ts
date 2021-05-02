/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
const isEmpty = (obj: any): boolean =>
    obj === undefined || obj === null
        ? true
        : Array.isArray(obj) || typeof obj === 'string'
        ? obj.length === 0
        : Object.entries(obj).length === 0 && obj.constructor === Object;

const isNotEmpty = (obj: any): boolean => !isEmpty(obj);

export { isEmpty, isNotEmpty };
