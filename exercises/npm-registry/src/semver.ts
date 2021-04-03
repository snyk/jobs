/*
  Not implemented: 
    - any major releases ('*'/x/latest)
    - the 1.x/1 form of minor releases
    - any patch releases (1.1/1.1.x/~1.1.1)
    - non major/minor/patch numbers (eg '-preview' or other meta data) 
    - range sets (^1.0.0 || ^2.0.0)

  Basically, use the official npm semver library in real life :)
*/

export const isSemVerFilter = function (requestedVersion: string): boolean {
  return requestedVersion.startsWith('^');
}

export const getLatestSemVer = function (filter: string, allVersions: string[]): string {
  const filterMajor = parseInt(filter.replace('^', '').split('.')[0]);

  const largest = allVersions
    .map(version => version.split('.').map(x => parseInt(x)))
    .filter(version => version[0] == filterMajor)
    .sort(semVerAsc())
    .pop() ?? [];

  return largest.join('.');
}

function semVerAsc(): ((a: number[], b: number[]) => number) | undefined {
    return (a, b) => {
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[2] < b[2]) {
            return -1;
        }
        if (a[2] > b[2]) {
            return 1;
        }
        return 0;
    };
}
