export function versionParser(rawVersion) {
/**
 NB: this is a very naive implementation and should *not* go into production.
 * @param  {string} rawVersion - Representation of the version number with its requirements
 * @return {string} A single version number
 */
  return rawVersion
    .substring(rawVersion.indexOf('^'))
      .replace('^', '')
        .replace('~', '')
          .split(' ')[0];
}