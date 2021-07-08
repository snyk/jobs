import 'html-validate/jest';
import * as axe from 'axe-core';

const red = '\x1b[31m';
const reset = '\x1b[0m';
const cyan = '\x1b[36m';

module.exports = {
  toBeAccessible,
};

/**
 * @param {Wrapper} wrapper A @vue/test-utils Wrapper instance
 *
 * @returns { pass: Boolean, message: String } A Jest results object
 */
async function toBeAccessible(wrapper) {
  // Convert the test-utils wrapper to stringified HTML
  const html = wrapper.html();

  /**
   * Forked from
   * https://github.com/dequelabs/axe-core/blob/master/doc/examples/jest_react/test-helpers.js
   *
   * axe requires real nodes to work with, wrap everything in a `<div>`
   */
  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container);

  try {
    await axe.configure({
      rules: [
        {
          id: 'landmark-no-duplicate-banner',
          enabled: false,
        },
        {
          id: 'landmark-no-duplicate-contentinfo',
          enabled: false,
        },
        {
          id: 'landmark-unique',
          enabled: false,
        },
      ],
    });
    const { violations } = await axe.run(container);
    const pass = violations.length === 0;

    if (pass) {
      return { pass };
    } else {
      const message = formatViolationsError(violations);

      return {
        pass,
        message: () =>
          this.utils.matcherHint('.toBeAccessible', undefined, '') +
          `\n\n${message}`,
      };
    }
  } catch ({ message }) {
    // If some error occurs, fails the test and return a message
    return {
      pass: false,
      message: () => message,
    };
  } finally {
    document.body.removeChild(container);
  }
}

function formatViolationsError(violations) {
  return violations
    .map(({ nodes, help, helpUrl }) => {
      const nodeErrors = nodes
        .map(({ html }) => `  ${red}${html}${reset}`)
        .join('\n');

      return `● ${help}:\n\n${nodeErrors}\n\n  See ${cyan}${helpUrl}${reset} for more information`;
    })
    .join('\n\n');
}

expect.extend({
  toBeAccessible,
});
