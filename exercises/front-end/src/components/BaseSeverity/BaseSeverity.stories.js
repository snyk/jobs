import '~/assets/scss/styles.scss';
import BaseSeverity from './BaseSeverity';

export default {
  title: 'Library/Base Components/Severity',
  component: BaseSeverity,
};

export const Default = () => ({
  components: { BaseSeverity },
  props: {
    issuesCritical: {
      default: 1,
    },
    issuesHigh: {
      default: 0,
    },
    issuesMedium: {
      default: 0,
    },
    issuesLow: {
      default: 0,
    },
    licensesHigh: {
      default: 0,
    },
    licensesMedium: {
      default: 0,
    },
    licensesLow: {
      default: 0,
    },
    size: {
      default: null,
    },
    compact: {
      default: false,
    },
    verbose: {
      default: false,
    },
  },
  template: `
  <BaseSeverity 
    :issues-high="issuesHigh"
    :licenses-high="licensesHigh"
    :issues-medium="issuesMedium"
    :licenses-medium="licensesMedium"
    :issues-low="issuesLow"
    :licenses-low="licensesLow"
    :size="size"
    :compact="compact"
    :verbose="verbose"
  />`,
});

export const Expanded = () => `
  <BaseSeverity
    :issues-high="23"
    :licenses-high="2"
    :issues-medium="6"
    :licenses-medium="1"
    :issues-low="1"
    :licenses-low="0"
  />
`;

export const Compact = () => `
  <BaseSeverity
    :issues-high="23"
    :licenses-high="2"
    :issues-medium="6"
    :licenses-medium="1"
    :issues-low="1"
    :licenses-low="0"
    compact
  />
`;

export const Verbose = () => `
  <BaseSeverity
    :issues-high="4"
    :licenses-high="2"
    :issues-medium="0"
    :licenses-medium="1"
    :issues-low="8"
    :licenses-low="0"
    compact
    verbose
  />
`;

export const Sizes = () => `
  <div>
    <div style="margin-bottom: 24px;">
      <BaseSeverity
        style="margin-right: 24px;"
        :issues-high="23"
        :licenses-high="2"
        :issues-medium="6"
        :licenses-medium="1"
        :issues-low="8"
        :licenses-low="0"
      />
      <BaseSeverity
        :issues-high="23"
        :licenses-high="2"
        :issues-medium="6"
        :licenses-medium="1"
        :issues-low="8"
        :licenses-low="0"
        size="small"
      />
    </div>
    <div>
      <BaseSeverity
        style="margin-right: 24px;"
        :issues-high="23"
        :licenses-high="2"
        :issues-medium="6"
        :licenses-medium="1"
        :issues-low="1"
        :licenses-low="0"
        compact
      />
      <BaseSeverity
        :issues-high="23"
        :licenses-high="2"
        :issues-medium="6"
        :licenses-medium="1"
        :issues-low="1"
        :licenses-low="0"
        size="small"
        compact
      />
    </div>
  </div>
`;

export const Extreme = () => `
  <BaseSeverity
    :issues-high="1876"
    :issues-medium="237654"
    :issues-low="6784923"
  />
`;

export const Critical = () => ({
  components: { BaseSeverity },
  props: {
    showCriticalSeverity: {
      default: true,
    },
  },
  template: `
  <div>
    <div style="margin-bottom: 24px;">
      <BaseSeverity
        style="margin-right: 24px;"
        :issues-critical="5"
        :issues-high="23"
        :licenses-high="2"
        :issues-medium="6"
        :licenses-medium="1"
        :issues-low="8"
        :licenses-low="0"
        :show-critical-severity="showCriticalSeverity"
      />
      <BaseSeverity
      :issues-critical="7"
      :issues-high="23"
      :licenses-high="2"
      :issues-medium="6"
      :licenses-medium="1"
      :issues-low="8"
      :licenses-low="0"
      size="small"
      :show-critical-severity="showCriticalSeverity"
      />
      </div>
      <div style="margin-bottom: 24px;">
      <BaseSeverity
      :issues-critical="0"
      :issues-high="23"
      :licenses-high="2"
      :issues-medium="6"
      :licenses-medium="1"
      :issues-low="8"
      :licenses-low="0"
      size="small"
      :show-critical-severity="showCriticalSeverity"
      />
    </div>
    <div style="margin-bottom: 24px;">
      <BaseSeverity
        style="margin-right: 24px;"
        :issues-critical="9"
        :issues-high="23"
        :licenses-high="2"
        :issues-medium="6"
        :licenses-medium="1"
        :issues-low="1"
        :licenses-low="0"
        compact
        :show-critical-severity="showCriticalSeverity"
      />
      <BaseSeverity
      :issues-critical="2"
      :issues-high="23"
      :licenses-high="2"
      :issues-medium="6"
      :licenses-medium="1"
      :issues-low="1"
      :licenses-low="0"
      size="small"
      compact
      :show-critical-severity="showCriticalSeverity"
      />
    </div>
    <div style="margin-bottom: 24px;">
    <BaseSeverity
    :issues-critical="3"
    :issues-high="4"
    :licenses-high="0"
    :issues-medium="2"
    :licenses-medium="1"
    :issues-low="8"
    :licenses-low="0"
    compact
    verbose
    :show-critical-severity="showCriticalSeverity"
  />
    </div>
    <div>
    <BaseSeverity style="margin-right: 24px;"
    :issues-critical="44257"
    :issues-high="18765"
    :issues-medium="237654"
    :issues-low="6784923"
    :show-critical-severity="showCriticalSeverity"
    />
    <BaseSeverity
    :issues-critical="42257"
    :issues-high="18765"
    :issues-medium="237654"
    :issues-low="6784923"
    size="small"
    :show-critical-severity="showCriticalSeverity"
    />
    </div>
  </div>
  `,
});
Critical.storyName = '…with critical';
