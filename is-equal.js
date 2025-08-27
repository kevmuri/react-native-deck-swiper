export function isEqual(a, b) {
  if (a === b) return true;

  if (typeof a !== typeof b) return false;

  if (a && b && typeof a === 'object') {
    if (Array.isArray(a) !== Array.isArray(b)) return false;

    if (Array.isArray(a)) {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        if (!isEqual(a[i], b[i])) return false;
      }
      return true;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
      if (!b.hasOwnProperty(key) || !isEqual(a[key], b[key])) return false;
    }
    return true;
  }

  return false;
}

