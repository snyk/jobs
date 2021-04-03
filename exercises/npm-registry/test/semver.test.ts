import { isSemVerFilter, getLatestSemVer } from '../src/semver'

describe('semver filtering', () => {
  it('determines when a filter is valid', () => {
    expect(isSemVerFilter('1.0.0')).toBeFalsy();
    expect(isSemVerFilter('^1.0.0')).toBeTruthy();
  });

  it('finds the latest minor release', () => {
    const versions = ['1.0.0', '1.1.0', '1.2.0', '1.3.0', '2.0.0'];
    const expected = '1.3.0'

    expect(getLatestSemVer('^1.1.0', versions)).toEqual(expected);
    //expect(getLatestSemVer('1.x', versions)).toEqual(expected);
    //expect(getLatestSemVer('1.X', versions)).toEqual(expected);
    //expect(getLatestSemVer('1', versions)).toEqual(expected);
  });

  it('finds the latest minor release with a patch', () => {
    const versions = ['1.0.0', '1.1.0', '1.2.0', '1.3.0', '1.3.1', '2.0.0'];
    const expected = '1.3.1'

    expect(getLatestSemVer('^1.1.0', versions)).toEqual(expected);
    //expect(getLatestSemVer('1.x', versions)).toEqual(expected);
    //expect(getLatestSemVer('1.X', versions)).toEqual(expected);
    //expect(getLatestSemVer('1', versions)).toEqual(expected);
  });
});
