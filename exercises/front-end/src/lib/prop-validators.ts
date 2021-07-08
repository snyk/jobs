/**
 * When using custom validators in Vue the default behaviour is to just state
 * that validation failed, without providing a reason.
 *
 * This library provides a convenient set of validators, with custom output,
 * to provide a more useful, actionable, error message when developing
 *
 * Validators in Vue are only run in development mode, and will be stripped out
 * in production.
 */

/**
 * Check that the value is in the list of acceptable values
 * @param list The list of permitted values
 */
export function isInList(list: string[]) {
  return (value: string) => {
    if (list.includes(value)) {
      return true;
    } else {
      const listString = list.join(', ');
      console.error(`${value} is not in the permitted list: ${listString}`);
      return false;
    }
  };
}

/**
 * Check that every required key is present in the provided object
 * @param requiredKeys The list of required keys
 */
export function hasRequiredKeys(requiredKeys: string[]) {
  return (value: Record<string, any>) => {
    const providedKeys = Object.keys(value);
    for (const key of requiredKeys) {
      if (!providedKeys.includes(key)) {
        console.error(`Required key ${key} not present in provided value`);
        return false;
      }
    }
    return true;
  };
}

/**
 * Check that only specified permitted keys are present in the prop
 * @param permittedKeys The list of keys that the object may (but is not required) to have
 */
export function onlyHasPermittedKeys(permittedKeys: string[]) {
  return (value: Record<string, any>) => {
    const keys = Object.keys(value);
    for (const key of keys) {
      if (!permittedKeys.includes(key)) {
        console.error(`The key ${key} is not permitted`);
        return false;
      }
    }
    return true;
  };
}

/**
 * Check that the prop is an object with the keys we would expect on an org
 */
export function isValidOrg() {
  return (org: object) => hasRequiredKeys(['name', 'displayName', 'id'])(org);
}

/**
 * In the absence of Typescript in Vue, check that an array is a String array
 */
export function isStringArray() {
  return (arr: any) => {
    if (arr.every((item: any) => item.constructor === String)) {
      return true;
    }

    console.error('One or more elements was not a String.');
    return false;
  };
}
