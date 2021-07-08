<!-- cSpell:words renderable  -->
<template>
  <ul :class="computedClasses" class="vue--tree">
    <li :data-snyk-test="testString" class="vue--tree__item">
      <div
        :tabindex="tabindex"
        class="vue--tree__package"
        @click="handleCollapse"
        @keyup.enter="handleCollapse"
      >
        <a
          :href="testUrl"
          :title="packageTitle"
          class="vue--tree__link"
          @click.stop
        >
          {{ packageTitle }}
        </a>
        <BaseLoadingSpinner
          v-if="isRoot && collapsing"
          class="vue--tree__spinner"
          size="small"
        />
      </div>
      <template v-if="isRoot || !collapsed">
        <ProjectDependenciesTree
          v-for="(nodeDependency, i) in Object.values(pkg.dependencies)"
          :key="i"
          :dep-graph="nodeDependency"
          :parent-nest-length="Object.keys(pkg.dependencies).length"
          :index="i"
          :force-collapsed-state="collapseState"
          :is-root="false"
        />
      </template>
    </li>
  </ul>
</template>

<script>
import BaseLoadingSpinner from '~/components/BaseLoadingSpinner/BaseLoadingSpinner';

import { isInList } from '~/lib/prop-validators';

/**
 * The `Tree` component renders a Snyk dependency tree with associated vulnerabilities and license issues.
 */
export default {
  name: 'ProjectDependenciesTree',

  status: 'ready',

  components: {
    BaseLoadingSpinner,
  },

  props: {
    /**
     * RenderableGraph, i.e. hydrated with vuln data and indices.
     * Use `toRenderableGraph` in `/frontend/src/lib/dep-graph-utils.js`
     */
    depGraph: {
      type: Object,
      required: true,
    },
    /**
     * Point in dep graph being rendered.
     */
    isRoot: {
      type: Boolean,
      default: true,
    },
    /**
     * @ignore
     */
    index: {
      type: Number,
      default: 0,
    },
    /**
     * @ignore
     */
    parentNestLength: {
      type: Number,
      required: false,
      default: 0,
    },
    /**
     * Hide license issue labels.
     */
    suppressLicenseLabels: {
      type: Boolean,
      default: false,
    },
    /**
     * Hide issue labels.
     */
    suppressIssueLabels: {
      type: Boolean,
      default: false,
    },
    /**
     * Force collapsed state for child dependencies.
     */
    forceCollapsedState: {
      type: String,
      default: 'expanded',
      validator: isInList(['expanded', 'collapsed']),
    },
  },

  data() {
    return {
      collapseState: this.forceCollapsedState,
      collapsed: false,
      collapsing: false,
    };
  },

  computed: {
    pkg() {
      return this.depGraph;
    },
    dependencies() {
      return this.pkg.dependencies;
    },
    name() {
      return this.pkg.name;
    },
    version() {
      return this.pkg.version;
    },
    computedClasses() {
      return {
        'vue--tree--collapsible': this.isCollapsible,
        'vue--tree--collapsed': this.isCollapsible && this.collapsed,
        'vue--tree--last': this.last,
        'vue--tree--collapsed-all':
          this.isRoot && this.collapseState === 'collapsed',
        'vue--tree--collapsing': this.collapsing,
      };
    },
    testUrl() {
      return `https://snyk.io/test/npm/${this.name}@${this.version}`;
    },
    packageTitle() {
      const excludeVersions = ['0.0.0'];

      if (!this.name || this.name === 'project') return 'Project';

      if (!this.version) return this.name;

      const label = !excludeVersions.includes(this.version)
        ? `${this.name}@${this.version}`
        : this.name;

      return label;
    },
    nestLength() {
      if (!this.dependencies) return 0;

      return Object.keys(this.dependencies).length;
    },
    tabindex() {
      return this.isCollapsible || this.isRoot ? 0 : -1;
    },
    last() {
      return (
        (this.nestLength >= this.parentNestLength &&
          this.index + 1 == this.parentNestLength) ||
        (this.parentNestLength == this.index + 1 && this.nestLength > 0)
      );
    },
    isCollapsible() {
      return this.nestLength > 0 && this.parentNestLength !== 0;
    },
    testString() {
      const childDepCount = Object.keys(this.dependencies).length
        ? Object.keys(this.dependencies).length
        : 0;
      return `${this.name}#${childDepCount}`;
    },
  },

  watch: {
    forceCollapsedState: {
      handler() {
        this.collapseState = this.forceCollapsedState;
        this.handleForceCollapsedState();
      },
      deep: true,
    },
  },

  created() {
    this.handleForceCollapsedState();
  },

  methods: {
    handleForceCollapsedState() {
      if (this.collapseState === 'expanded') {
        this.collapsed = false;
      }
      if (this.collapseState === 'collapsed') {
        this.collapsed = true;
      }
    },
    handleCollapse() {
      if (!this.isRoot) {
        this.toggleCollapsed();
      }
    },
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/utils';

.vue--tree {
  $self: &;

  border-left: none !important; // Override legacy
  display: block;
  list-style: none;
  margin: 0;
  padding: 0 0 0 space(m);
  position: relative;
  width: 100%;

  &::before {
    background-color: color(neutral, 72);
    content: '';
    display: block;
    height: calc(100% + 12px);
    left: space(s);
    position: absolute;
    top: -31px;
    width: 2px;
  }

  &:first-child {
    padding-left: 0;

    &::before {
      display: none;
    }
  }

  &:first-child > #{$self}__item:first-child > #{$self}__package {
    background-color: color(neutral, 96);
    margin-top: 0;

    &::before {
      display: none;
    }
  }

  &--collapsed-all {
    &:first-of-type > #{$self}__item:first-child > #{$self}__package {
      cursor: default;
      &::after {
        display: none;
      }
    }
  }

  &--collapsible {
    > #{$self}__item:first-child > #{$self}__package {
      cursor: pointer;
      transition: box-shadow 0.2s ease;

      &:hover {
        box-shadow: inset 0 0 0 1px color(action), 0 0 0 1px color(action);
      }

      &::after {
        border: 1px solid color(neutral, 72);
        content: '-';
        display: block;
        height: 20px;
        font-size: 1.2em;
        line-height: 1.3;
        position: absolute;
        text-align: center;
        right: 6px;
        top: 8px;
        width: 20px;

        @include media-query(m) {
          line-height: 1.1;
        }
      }
    }

    &#{$self}--collapsed {
      > #{$self}__item:first-child > #{$self}__package {
        &::after {
          content: '+';
          line-height: 1.3;

          @include media-query(m) {
            line-height: 1.2;
          }
        }
      }
    }

    &#{$self}--collapsing {
      > #{$self}__item:first-child > #{$self}__package {
        &::after {
          display: none;
        }
      }
    }
  }

  &--last {
    &::before {
      height: 51px;
    }
  }

  &__spinner {
    background-color: color(neutral, 84);
    height: 34px;
    margin-top: 13px;
    position: absolute;
    transform: translateY(-50%);
    right: 1px;
    width: 34px;
    z-index: 10;
  }

  &__item {
    padding: 0;
    margin: 0;

    &--hidden {
      display: none;
    }
  }

  &__package {
    align-items: center;
    background-color: color(ui, white);
    border-radius: 2px;
    box-shadow: inset 0 0 0 1px color(neutral, 72), 0 0 0 2px transparent;
    display: flex;
    font-size: rem(14px);
    line-height: 1.6;
    font-variant: proportional-nums;
    height: 38px;
    margin: space(s) 0;
    padding: space(s) * 0.5 space(xxl) space(s) * 0.5 space(s);
    position: relative;
    z-index: 2;

    @include media-query(m) {
      font-size: 1rem;
    }

    &::before {
      background-color: color(neutral, 72);
      content: '';
      display: block;
      height: 2px;
      left: -#{space(s)};
      margin-top: -1px;
      position: absolute;
      top: 50%;
      width: space(s);
      z-index: 1;
    }
  }

  &__expand-all-spinner {
    float: right;
  }

  &__severity {
    left: -#{space(s) * 0.5};
    margin-right: space(xxxs);
    position: relative;
    flex-shrink: 0;
  }

  &__status {
    display: flex;
    color: color(base, inverted);
    font-size: 0.875rem;
    padding: space(s);

    @include media-query(m) {
      font-size: 1rem;
      padding-top: 0;
      padding-bottom: 0;
    }

    .folding-cube {
      margin-right: space(s);
    }

    span {
      line-height: 1.9;
    }
  }

  &__link,
  &__label {
    display: inline-block;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    top: 2px;
  }

  &__badge {
    margin-left: 1em;
  }

  &__link {
    border: none !important; // Override legacy styles.

    &:hover {
      color: color(action);
      text-decoration: underline;
    }
  }
}
</style>
