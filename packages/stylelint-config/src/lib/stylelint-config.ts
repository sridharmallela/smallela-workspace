// Combination of Standard and recommended
// https://github.com/stylelint/stylelint-config-recommended/blob/master/index.js
// https://github.com/stylelint/stylelint-config-standard/blob/master/index.js
// https://stylelint.io/user-guide/configure
export const STYLE_LINT_CONFIG = {
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment']
      }
    ],
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['include', 'extend', 'keyframes'] }
    ],
    'block-no-empty': true,
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'stylelint-commands']
      }
    ],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block']
      }
    ],
    'declaration-block-no-duplicate-properties': [
      true,
      { ignore: ['consecutive-duplicates-with-different-values'] }
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block']
      }
    ],
    'font-family-name-quotes': 'always-where-required',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': [true, { ignore: ['custom-properties'] }],
    'media-feature-name-no-unknown': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'property-no-unknown': true,
    'rule-empty-line-before': [
      'always-multi-line',
      { except: ['after-single-line-comment'], ignore: ['after-comment'] }
    ],
    'selector-attribute-quotes': 'always',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-element-no-unknown': [
      true,
      { ignorePseudoElements: ['ng-deep'] }
    ],
    'selector-type-case': 'lower',
    'selector-type-no-unknown': [
      true,
      { ignoreTypes: ['/^mat-/', '/^ng-/', '/^pvd-/', '/^pwe-/'] }
    ],
    'string-no-newline': true
  },
  ignoreFiles: ['**/*.js']
};
