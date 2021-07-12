import '~/assets/scss/styles.scss';
import BaseBadge from './BaseBadge';

export default {
  title: 'Library/Base Components/Badge',
  component: BaseBadge,
};

export const Default = () => ({
  components: { BaseBadge },
  props: {
    variant: {
      default: 'default',
    },
    size: {
      default: null,
    },
    uppercase: {
      default: true,
    },
    ghost: {
      default: false,
    },
    pill: {
      default: false,
    },
    defaultSlot: {
      default: 'Label Text',
    },
  },
  template: `<BaseBadge v-bind="$props">{{ defaultSlot }}</BaseBadge>`,
});

export const Variants = () => ({
  components: { BaseBadge },
  template: `
    <StoryLayoutContainer columned>
      <StoryLayoutItem>
        <BaseBadge>Default</BaseBadge>
        <BaseBadge variant="action">Action</BaseBadge>
        <BaseBadge variant="action-create">Action Create</BaseBadge>
      </StoryLayoutItem>
      <StoryLayoutItem>
        <BaseBadge variant="complementary-blue">Complementary Blue</BaseBadge>
        <BaseBadge variant="complementary-burgundy">Complementary Burgundy</BaseBadge>
      </StoryLayoutItem>
      <StoryLayoutItem>
        <BaseBadge variant="critical-severity">Critical Severity</BaseBadge>
        <BaseBadge variant="high-severity">High Severity</BaseBadge>
        <BaseBadge variant="medium-severity">Medium Severity</BaseBadge>
        <BaseBadge variant="low-severity">Low Severity</BaseBadge>
        <BaseBadge variant="no-severity">No Severity</BaseBadge>
      </StoryLayoutItem>
      <StoryLayoutItem>
        <BaseBadge variant="info">Info</BaseBadge>
        <BaseBadge variant="warning">Warning</BaseBadge>
        <BaseBadge variant="success">Success</BaseBadge>
        <BaseBadge variant="danger">Danger</BaseBadge>
      </StoryLayoutItem>
      <StoryLayoutItem>
        <BaseBadge variant="social-twitter">Social Twitter</BaseBadge>
      </StoryLayoutItem>
    </StoryLayoutContainer>
  `,
});
Variants.storyName = '…with variants';

export const Ghost = () => ({
  components: { BaseBadge },
  template: `
  <StoryLayoutContainer columned>
    <StoryLayoutItem>
      <BaseBadge ghost>Default</BaseBadge>
      <BaseBadge variant="action" ghost>Action</BaseBadge>
      <BaseBadge variant="action-create" ghost>Action Create</BaseBadge>
    </StoryLayoutItem>
    <StoryLayoutItem>
      <BaseBadge variant="complementary-blue" ghost>Complementary Blue</BaseBadge>
      <BaseBadge variant="complementary-burgundy" ghost>Complementary Burgundy</BaseBadge>
    </StoryLayoutItem>
    <StoryLayoutItem>
      <BaseBadge variant="critical-severity" ghost>Critical Severity</BaseBadge>
      <BaseBadge variant="high-severity" ghost>High Severity</BaseBadge>
      <BaseBadge variant="medium-severity" ghost>Medium Severity</BaseBadge>
      <BaseBadge variant="low-severity" ghost>Low Severity</BaseBadge>
      <BaseBadge variant="no-severity" ghost>No Severity</BaseBadge>
    </StoryLayoutItem>
    <StoryLayoutItem>
      <BaseBadge variant="info" ghost>Info</BaseBadge>
      <BaseBadge variant="warning" ghost>Warning</BaseBadge>
      <BaseBadge variant="success" ghost>Success</BaseBadge>
      <BaseBadge variant="danger" ghost>Danger</BaseBadge>
    </StoryLayoutItem>
    <StoryLayoutItem>
        <BaseBadge variant="social-twitter" ghost>Social Twitter</BaseBadge>
      </StoryLayoutItem>
  </StoryLayoutContainer>
  `,
});
Ghost.storyName = '…as ghost';

export const Sizes = () => ({
  components: { BaseBadge },
  template: `
    <div>
      <BaseBadge size="extra-small">Extra Small label</BaseBadge>  
      <BaseBadge size="small">Small label</BaseBadge>
      <BaseBadge>Default label</BaseBadge>
      <BaseBadge size="large">Large label</BaseBadge>
    </div>
  `,
});
Sizes.storyName = '…with sizes';

export const Pill = () => ({
  components: { BaseBadge },
  template: `
    <div>
      <BaseBadge size="extra-small" pill>Extra Small label</BaseBadge>  
      <BaseBadge size="small" pill>Small label</BaseBadge>
      <BaseBadge pill>Default label</BaseBadge>
      <BaseBadge size="large" pill>Large label</BaseBadge>
    </div>
  `,
});
Pill.storyName = '…as pill';

export const Lowercase = () => ({
  components: { BaseBadge },
  template: `
    <div>
      <BaseBadge size="extra-small" :uppercase="false">Extra Small label</BaseBadge>
      <BaseBadge size="small" :uppercase="false">Small label</BaseBadge>
      <BaseBadge :uppercase="false">Default label</BaseBadge>
      <BaseBadge size="large" :uppercase="false">Large label</BaseBadge>
    </div>
  `,
});
Lowercase.storyName = '…as lowercase';

export const Inverted = () => ({
  components: { BaseBadge },
  template: `
  <div style="background-color: hsl(244,8%,24%); padding: 12px;">
    <BaseBadge variant="inverted" pill>Inverted</BaseBadge>
  </div>
  `,
});
Inverted.storyName = '…as inverted';

export const InvertedGhost = () => ({
  components: { BaseBadge },
  template: `
  <div style="background-color: hsl(244,8%,24%); padding: 12px;">
    <BaseBadge variant="inverted" ghost pill>Inverted</BaseBadge>
  </div>
  `,
});
InvertedGhost.storyName = '…as ghost inverted';
