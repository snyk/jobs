import '~/assets/scss/styles.scss';
import BaseLoadingSpinner from '~/components/BaseLoadingSpinner/BaseLoadingSpinner';

export default {
  title: 'Library/Base Components/LoadingSpinner',
  component: BaseLoadingSpinner,
  parameters: {
    componentSubtitle:
      'Our standard loading spinner for spinny loading goodness.',
  },
};

export const Default = () => ({
  components: { BaseLoadingSpinner },
  props: {
    size: {
      default: 'extra-small',
    },
    text: {
      default: '',
    },
    inline: {
      default: false,
    },
  },
  template: '<BaseLoadingSpinner :size="size" :inline="inline" :text="text" />',
});

export const Centered = () => ({
  components: { BaseLoadingSpinner },
  template: `
    <div>
      <BaseLoadingSpinner size="extra-small" />  
      <BaseLoadingSpinner size="small" />
      <BaseLoadingSpinner size="medium" />
      <BaseLoadingSpinner size="large" />
      <BaseLoadingSpinner size="extra-large" />
    </div>
  `,
});

export const CenteredWithText = () => ({
  components: { BaseLoadingSpinner },
  template: `
    <div>
      <BaseLoadingSpinner size="extra-small" text="Loading..."/>  
      <BaseLoadingSpinner size="small" text="Loading..."/>
      <BaseLoadingSpinner size="medium" text="Loading..."/>
      <BaseLoadingSpinner size="large" text="Loading..."/>
      <BaseLoadingSpinner size="extra-large" text="Loading..."/>
    </div>
  `,
});

export const Inline = () => ({
  components: { BaseLoadingSpinner },
  template: `
    <div>
      <BaseLoadingSpinner size="extra-small" inline />  
      <BaseLoadingSpinner size="small" inline />
      <BaseLoadingSpinner size="medium" inline />
      <BaseLoadingSpinner size="large" inline />
      <BaseLoadingSpinner size="extra-large" inline />
    </div>
  `,
});

export const InlineWithText = () => ({
  components: { BaseLoadingSpinner },
  template: `
    <div>
      <BaseLoadingSpinner size="extra-small" inline text="Loading..." />  
      <BaseLoadingSpinner size="small" inline text="Loading..." />
      <BaseLoadingSpinner size="medium" inline text="Loading..." />
      <BaseLoadingSpinner size="large" inline text="Loading..." />
      <BaseLoadingSpinner size="extra-large" inline text="Loading..." />
    </div>
  `,
});
