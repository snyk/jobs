const { validateDigestArgs, getDigest } = require('../../cli/index');
const { getDockerContentDigest } = require('../../lib/index.js');

describe('test validateDigestArgs', () => {
  test('validate valid args', () => {
    const args = { repo: 'alpine', tag: '3' };
    expect(validateDigestArgs(args)).toBeTruthy();
  });
  test('validate missing arg', () => {
    const args = { repo: 'alpine' };
    expect(validateDigestArgs(args)).toBeFalsy();
  });
  test('validate wrong type arg', () => {
    const args = { repo: 1, tag: true };
    expect(validateDigestArgs(args)).toBeFalsy();
  });
});

jest.mock('../../lib/index.js', () => ({
  getDockerContentDigest: jest.fn()
}))

describe('test getDigest', () => {
    test('valid repo and tag', async () => {
    getDockerContentDigest.mockReturnValueOnce('sha256:abcd');
    const args = { repo: 'alpine', tag: '3' };
    expect(await getDigest(args.repo, args.tag)).toEqual('sha256:abcd');
  });
  test('handles unknown error', async () => {
    getDockerContentDigest.mockRejectedValue(new Error());
    const args = { repo: 'alpine', tag: '3'};
    await expect(getDigest(args.repo, args.tag)).rejects.toThrow();
  });
  test('handles unauthorized Error for non existent tag', async () => {
    const unAuthorizedError = { statusCode: 404 };
    getDockerContentDigest.mockRejectedValue(unAuthorizedError);
    const args = { repo: 'alpine', tag: 'nonExistentTag'};
    await !expect(getDigest(args.repo, args.tag)).rejects.toThrow();
  });
  test('handles not found Error for non existent', async () => {
    const notFoundError = { statusCode: 401 };
    getDockerContentDigest.mockRejectedValue(notFoundError);
    const args = { repo: 'nonExistentRepo', tag: '3'};
    await !expect(getDigest(args.repo, args.tag)).rejects.toThrow();
  });
});



