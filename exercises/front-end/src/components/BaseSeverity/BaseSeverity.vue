<template>
  <ul :class="containerComputedClasses" class="vue--severity">
    <template v-for="(item, index) in issueCounters">
      <li
        v-if="show(item, 'vulnerabilities')"
        :key="`${item.severity}_issue_${index}`"
        :class="countComputedClasses(item, 'vulnerabilities')"
        class="vue--severity__item"
        :data-snyk-ignore-wcag2aa="ignoreWcag2aa(item)"
      >
        <div v-if="!compact" class="vue--severity__count">
          <span
            class="vue--severity__label"
            :data-snyk-test="`Base Severity: ${item.severity} count`"
            >{{ issuesCount(item) }}</span
          >
        </div>
        <abbr
          :title="item.label + ' severity issues'"
          class="vue--severity__text"
        >
          <VulnIcon
            v-if="verbose"
            :size="14"
            class="vue--severity__type-icon"
          />
          <span class="vue--severity__label">{{ item.shortLabel }}</span>
        </abbr>
      </li>
      <li
        v-if="verbose && show(item, 'licenses')"
        :key="item.severity + '_license_' + index"
        :class="countComputedClasses(item, 'licenses')"
        class="vue--severity__item"
        :data-snyk-ignore-wcag2aa="ignoreWcag2aa(item)"
      >
        <div v-if="!compact" class="vue--severity__count">
          <span class="vue--severity__label">{{ item.licenses.count }}</span>
        </div>
        <abbr
          :title="item.label + ' severity license issues'"
          class="vue--severity__text"
        >
          <LicenseIcon
            v-if="verbose"
            :size="14"
            class="vue--severity__type-icon"
          />
          <span class="vue--severity__label">{{ item.shortLabel }}</span>
        </abbr>
      </li>
    </template>
  </ul>
</template>

<script>
import VulnIcon from '~/components/CustomIcons/Vuln';
import LicenseIcon from '~/components/CustomIcons/License';

export default {
  name: 'BaseSeverity',

  status: 'ready',

  components: {
    VulnIcon,
    LicenseIcon,
  },

  props: {
    /**
     * Number of critical severity vulnerabilities.
     */
    issuesCritical: {
      type: Number,
      default: 0,
    },
    /**
     * Number of high severity vulnerabilities.
     */
    issuesHigh: {
      type: Number,
      default: 0,
    },
    /**
     * Number of high severity license issues.
     */
    licensesHigh: {
      type: Number,
      default: 0,
    },
    /**
     * Number of medium severity vulnerabilities.
     */
    issuesMedium: {
      type: Number,
      default: 0,
    },
    /**
     * Number of medium severity license issues.
     */
    licensesMedium: {
      type: Number,
      default: 0,
    },
    /**
     * Number of low severity vulnerabilities.
     */
    issuesLow: {
      type: Number,
      default: 0,
    },
    /**
     * Number of low severity license issues.
     */
    licensesLow: {
      type: Number,
      default: 0,
    },
    /**
     * Render in compact view. Only severity labels with issues are displayed.
     */
    compact: {
      type: Boolean,
      default: false,
    },
    /**
     * Display issues broken down into vulnerabilities and license issues.
     */
    verbose: {
      type: Boolean,
      default: false,
    },
    /**
     * Adjust the size of the component
     */
    size: {
      type: String,
      default: 'default',
      validators(value) {
        return ['default', 'small'].includes(value);
      },
    },
    /**
     * If org\group supports critical severity
     * CRITICAL-SEVERITY-TAG: REMOVE WHEN CRITICAL IS OUT
     */
    showCriticalSeverity: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    issueCounters() {
      return [
        {
          severity: 'critical',
          label: 'Critical',
          shortLabel: 'C',
          vulnerabilities: {
            count: this.issuesCritical,
          },
          licenses: {
            count: 0,
          },
          total: this.issuesCritical,
        },
        {
          severity: 'high',
          label: 'High',
          shortLabel: 'H',
          vulnerabilities: {
            count: this.issuesHigh,
          },
          licenses: {
            count: this.licensesHigh,
          },
          total: this.issuesHigh + this.licensesHigh,
        },
        {
          severity: 'medium',
          label: 'Medium',
          shortLabel: 'M',
          vulnerabilities: {
            count: this.issuesMedium,
          },
          licenses: {
            count: this.licensesMedium,
          },
          total: this.issuesMedium + this.licensesMedium,
        },
        {
          severity: 'low',
          label: 'Low',
          shortLabel: 'L',
          vulnerabilities: {
            count: this.issuesLow,
          },
          licenses: {
            count: this.licensesLow,
          },
          total: this.issuesLow + this.licensesLow,
        },
      ];
    },
    containerComputedClasses() {
      return {
        'vue--severity--s': this.size === 'small',
        'vue--severity--compact': !this.verbose && this.compact,
        'vue--severity--verbose-compact': this.verbose && this.compact,
      };
    },
  },

  methods: {
    countComputedClasses(item, type) {
      return {
        [`vue--severity__item--${item.severity}`]: item[type].count > 0,
        'vue--severity__item--none': item[type].count === 0,
      };
    },
    issuesCount(item) {
      return this.formatNumber(
        this.verbose ? item.vulnerabilities.count : item.total,
      );
    },
    show(item, type) {
      if (
        type === 'vulnerabilities' &&
        this.compact &&
        this.issuesCount(item) === 0
      ) {
        return false;
      }
      if (type === 'licenses' && this.compact && item[type].count === 0) {
        return false;
      }
      if (item.severity === 'critical' && !this.showCriticalSeverity) {
        return false;
      }

      return true;
    },
    ignoreWcag2aa(item) {
      // Design decision - medium severity must be orange (not brown) and there's
      // more wiggle room for incidental information
      return item.severity === 'medium';
    },
    formatNumber(number) {
      if (number < 1000) {
        return Number.parseInt(number, 10);
      }
      if (number < 10000) {
        return Number.parseFloat(number / 1000).toFixed(1) + 'k';
      }
      if (number < 1000000) {
        return Number.parseInt(number / 1000, 10) + 'k';
      }
      return Number.parseInt(number / 1000000, 10) + 'M';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

.vue--severity {
  $self: &;

  display: inline-flex;
  font-size: rem(14px);
  line-height: rem(24px);
  list-style: none;
  margin: 0;
  padding: 0;

  &__item {
    display: flex;
    padding: 0;
    margin: 0 space(xxs) 0 0;

    &:last-of-type {
      margin-right: 0;
    }

    &--none {
      #{$self}__text {
        background-color: color(severity, none);
      }

      #{$self}__count {
        background-color: color(severity, none-muted);
        color: color(severity, none-text);
      }
    }

    &--critical {
      #{$self}__text {
        background-color: color(severity, critical);
      }

      #{$self}__count {
        color: color(severity, critical-text);
        background-color: color(severity, critical-muted);
      }
    }

    &--high {
      #{$self}__text {
        background-color: color(severity, high);
      }

      #{$self}__count {
        color: color(severity, high-text);
        background-color: color(severity, high-muted);
      }
    }

    &--medium {
      #{$self}__text {
        background-color: color(severity, medium);
      }

      #{$self}__count {
        color: color(severity, medium-text);
        background-color: color(severity, medium-muted);
      }
    }

    &--low {
      #{$self}__text {
        background-color: color(severity, low);
      }

      #{$self}__count {
        color: color(severity, low-text);
        background-color: color(severity, low-muted);
      }
    }
  }

  &__count {
    display: inline-block;
    background-color: color(ui, white);
    font-variant: proportional-nums;
    text-align: center;
    border-right: 1px solid color(ui, white);
    width: 2rem;
    border-radius: global(border-radius, micro) 0 0 global(border-radius, micro);
  }

  // Adjusting font-variant to proportional-nums
  // causes the count to be misaligned to the
  // baseline, this span adjusts it.
  &__label {
    position: relative;
    top: 1px;
  }

  &__text {
    color: color(base, inverted);
    padding: 0 space(xs) - 2px;
    text-align: center;
    text-decoration: none;
    width: rem(24px);
    border-radius: 0 global(border-radius, micro) global(border-radius, micro) 0;
    @include font-stack(semibold);
  }

  &--s {
    font-size: rem(12px);
    line-height: rem(21px);

    #{$self}__count {
      width: 1.6rem;
    }

    #{$self}__text {
      padding: 0 space(xxs) - 2px;
      width: rem(21px);
    }

    &#{$self}--compact {
      #{$self}__text {
        border-radius: global(border-radius, micro);
        min-width: auto;
        width: rem(21px);
      }
    }
  }

  &--compact {
    #{$self}__item {
      padding-left: 0;
      padding-right: 0;
    }
    #{$self}__text {
      border-radius: global(border-radius, micro);
      padding: 0;
      text-align: center;
    }
  }

  &--verbose-compact {
    #{$self}__item {
      padding-left: 0;
      padding-right: 0;
    }
    #{$self}__text {
      border-radius: global(border-radius, micro);
      padding: 0;
      text-align: center;
      width: rem(40px);
    }
  }
}
</style>
