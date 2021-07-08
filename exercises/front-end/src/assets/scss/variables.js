/** -----------------------------------------------------------
IMPORTANT: Due to build issues with Storybook, we've had to
duplicate the color declarations, these colors are for JavaScript,
please also update the CSS accessible colors in 
src/assets/scss/tokens/_colors.scss
------------------------------------------------------------ */

const brand = 'hsl(244, 40%, 20%)'; // #211f47
const brandLight = 'hsl(244, 25%, 40%)'; // #504d80

const neutral12 = 'hsl(244, 8%, 12%)';
const neutral24 = 'hsl(244, 8%, 24%)';
const neutral36 = 'hsl(244, 8%, 36%)';
const neutral42 = 'hsl(244, 8%, 42%)';
const neutral48 = 'hsl(244, 8%, 48%)';
const neutral66 = 'hsl(244, 8%, 66%)';
const neutral72 = 'hsl(244, 8%, 72%)';
const neutral78 = 'hsl(244, 8%, 78%)';
const neutral84 = 'hsl(244, 8%, 84%)';
const neutral90 = 'hsl(244, 8%, 90%)';
const neutral96 = 'hsl(244, 8%, 96%)';
const neutral98 = 'hsl(244, 8%, 98%)';

const complementaryBlue = 'hsl(212, 39%, 48%)'; // #4a77a9
const complementaryBurgundy = 'hsl(340, 100%, 30%)'; // #990033

// severity none
const severityNone = 'hsl(0, 0%, 75%)'; // #BEBEBE
const severityNoneMuted = 'hsl(0, 0%, 91%)'; // #E7E7E7
const severityNoneText = 'hsl(0, 0%, 51%)'; // #828282

// severity low
const severityLow = 'hsl(243, 11%, 57%)'; // #88879E
const severityLowMuted = 'hsl(0, 0%, 93%)'; // #EEEEEE
const severityLowText = 'hsl(244, 15%, 40%)'; // #585675

// severity medium
const severityMedium = 'hsl(36, 100%, 42%)'; // #D68000
const severityMediumMuted = 'hsl(32, 100%, 90%)'; // #FFE8CD
const severityMediumText = 'hsl(32, 66%, 35%)'; // #925C1E

// severity high
const severityHigh = 'hsl(18, 78%, 45%)'; // #CE5019
const severityHighMuted = 'hsl(18, 100%, 90%)'; // #FFDBCC
const severityHighText = 'hsl(18, 76%, 35%)'; // #9B3D15

// severity critical
const severityCritical = 'hsl(0, 74%, 39%)'; // #AB1A1A
const severityCriticalMuted = 'hsl(3, 100%, 92%)'; // #FFDAD8
const severityCriticalText = 'hsl(4, 68%, 37%)'; // #9E261E

const action = 'hsl(244, 40%, 45%)'; // #4b45a1
const actionCreate = 'hsl(180, 70%, 27%)'; // #157777
const actionDestroy = 'hsl(0, 80%, 40%)'; // #b81414
const actionActive = 'hsl(32, 90%, 45%)'; // #f59f3d

const highlight = 'hsl(196, 100%, 80%)'; // #99e4ff
const selection = '	hsl(47, 100%, 51%)'; // #FFC705

const canvas = 'hsl(210, 67%, 98%)'; // #f6fafd
const white = 'hsl(0, 0%, 100%)'; // #ffffff
const offWhite = neutral98;
const codeBackground = 'hsl(70, 8%, 15%)'; // #272822;
const chipGrey = neutral90;
const chipBlue = 'hsl(213, 73%, 90%)';
const chipOrange = 'hsl(20, 91%, 91%)';

const gradientPurpleStart = 'hsl(275, 55%, 42%)';
const gradientPurpleEnd = 'hsl(259, 69%, 37%)';

const consoleNotice = 'hsl(244, 44%, 80%)';
const consoleWarning = 'hsl(32, 100%, 66%)';
const consoleSuccess = 'hsl(88, 60%, 66%)';
const consoleError = 'hsl(0, 100%, 66%)';
const consoleLink = 'hsl(180, 67%, 41%)'; //#23b0b0

const socialTwitter = 'hsl(208, 80 %, 61 %)';

const colors = {
  neutral: {
    12: neutral12,
    24: neutral24,
    36: neutral36,
    42: neutral42,
    48: neutral48,
    66: neutral66,
    72: neutral72,
    78: neutral78,
    84: neutral84,
    90: neutral90,
    96: neutral96,
    98: neutral98,
  },
  base: {
    bg: canvas,
    body: neutral24,
    heading: neutral12,
    dimmed: neutral48,
    inverted: white,
    anchor: action,
    anchorHover: action,
    anchorVisited: neutral24,
  },
  action: {
    default: action,
    create: actionCreate,
    destroy: actionDestroy,
    active: actionActive,
  },
  ui: {
    highlight,
    selection,
    canvas,
    white,
    offWhite,
    codeBackground,
  },
  chip: {
    default: chipGrey,
    blue: chipBlue,
    orange: chipOrange,
  },
  brand: {
    default: brand,
    light: brandLight,
  },
  alert: {
    info: `mix(${action}, ${white}, 0.1 * 100%)`,
    infoBorder: `mix(${action}, ${white}, 0.6 * 100%)`,
    infoText: action,
    infoDismissBg: `rgba(${action}, 0.05)`,
    infoDismissBorder: `rgba(${action}, 0.1)`,
    success: `mix(${actionCreate}, ${white}, 0.1 * 100%)`,
    successBorder: `mix(${actionCreate}, ${white}, 0.4 * 100%)`,
    successText: `darken(${actionCreate}, 2%)`,
    successDismissBg: `rgba(${actionCreate}, 0.05)`,
    successDismissBorder: `rgba(${actionCreate}, 0.1)`,
    warning: `mix(${actionActive}, ${white}, 0.1 * 100%)`,
    warningBorder: `mix(${actionActive}, ${white}, 0.6 * 100%)`,
    warningText: `darken(${actionActive}, 11%)`,
    warningDismissBg: `rgba(${actionActive}, 0.05)`,
    warningDismissBorder: `rgba(${actionActive}, 0.1)`,
    danger: `mix(${actionDestroy}, ${white}, 0.1 * 100%)`,
    dangerBorder: `mix(${actionDestroy}, ${white}, 0.4 * 100%)`,
    dangerText: actionDestroy,
    dangerDismissBg: `rgba(${actionDestroy}, 0.05)`,
    dangerDismissBorder: `rgba(${actionDestroy}, 0.1)`,
  },
  complementary: {
    blue: complementaryBlue,
    burgundy: complementaryBurgundy,
  },
  disabled: {
    border: neutral84,
    bg: neutral96,
    text: neutral48,
  },
  input: {
    bg: white,
    border: neutral48,
    borderFocus: action,
    shadowInset: neutral48,
  },
  severity: {
    critical: severityCritical,
    criticalMuted: severityCriticalMuted,
    criticalText: severityCriticalText,
    high: severityHigh,
    highMuted: severityHighMuted,
    highText: severityHighText,
    medium: severityMedium,
    mediumMuted: severityMediumMuted,
    mediumText: severityMediumText,
    low: severityLow,
    lowMuted: severityLowMuted,
    lowText: severityLowText,
    none: severityNone,
    noneMuted: severityNoneMuted,
    noneText: severityNoneText,
  },
  gradient: {
    purpleStart: gradientPurpleStart,
    purpleEnd: gradientPurpleEnd,
  },
  console: {
    bg: neutral12,
    muted: neutral72,
    notice: consoleNotice,
    warning: consoleWarning,
    success: consoleSuccess,
    error: consoleError,
    link: consoleLink,
  },
  social: {
    twitter: socialTwitter,
  },
};

module.exports = { colors };
