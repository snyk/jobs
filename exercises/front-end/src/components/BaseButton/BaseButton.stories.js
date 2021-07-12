import '~/assets/scss/styles.scss';
import BaseButton from './BaseButton';
import BaseLoadingSpinner from '~/components/BaseLoadingSpinner/BaseLoadingSpinner';

export default {
  title: 'Library/Base Components/Button',
  component: BaseButton,
  parameters: {
    componentSubtitle:
      "It's a button, you click it, stuff happens, it's pretty awesome!",
  },
};

export const Default = () => ({
  components: { BaseButton },
  props: {
    variant: {
      default: 'cta',
    },
    ghost: {
      default: false,
    },
    size: {
      default: null,
    },
    text: {
      default: 'Default',
    },
    disabled: {
      default: false,
    },
    type: {
      default: 'button',
    },
  },
  template: `
    <BaseButton 
      :variant="variant" 
      :size="size" 
      :disabled="disabled" 
      :ghost="ghost"
      :type="type"
      v-text="text" 
    />`,
});

export const Solid = () => ({
  components: { BaseButton },
  template: `
    <div>
      <BaseButton>Call-to-action</BaseButton>
      <BaseButton variant="danger">Danger</BaseButton>  
    </div>
  `,
});
Solid.storyName = '…as solid';

export const Ghost = () => ({
  components: { BaseButton },
  template: `
    <div>
      <BaseButton ghost>Ghost call-to-action</BaseButton>
      <BaseButton variant="danger" ghost>Ghost danger</BaseButton>
      <BaseButton variant="basic" ghost>Ghost basic</BaseButton>
    </div>
  `,
});
Ghost.storyName = '…as ghost';

export const Inverted = () => ({
  components: { BaseButton },
  template: `
    <div style="background-color:#999">
      <BaseButton variant="inverted">Inverted</BaseButton>
      <BaseButton variant="inverted" ghost>Inverted</BaseButton>
    </div>
  `,
});
Inverted.storyName = '…as inverted';

export const Link = () => ({
  components: { BaseButton },
  template: `
    <div>
      <BaseButton variant="link">Link button</BaseButton>
      <BaseButton variant="cta-link">CTA link button</BaseButton>
      <span style="background-color:#999">
        <BaseButton variant="inverted-link">Inverted link button</BaseButton>
      </span>
      <BaseButton variant="dimmed-link">Dimmed link button</BaseButton>
    </div>
  `,
});
Link.storyName = '…as link';

export const States = () => ({
  components: { BaseButton },
  template: `
    <div>
      <h3>Small</h3>
      <div style="display: flex">
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0">Default</div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0">:hover</div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0">:focus</div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0">[disabled]</div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton size="small">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="hover" size="small">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="focus" size="small">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="focus" disabled size="small">Call-To-Action</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton size="small">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="hover" size="small">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="focus" size="small">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="focus" disabled size="small">Call-To-Action</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" size="small">Danger</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" state="hover" size="small">Danger</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" state="focus" size="small">Danger</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" state="focus" disabled size="small">Danger</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton ghost size="small">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton ghost state="hover" size="small">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton ghost state="focus" size="small">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton ghost state="focus" disabled size="small">Ghost</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost size="small">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost state="hover" size="small">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost state="focus" size="small">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost state="focus" disabled size="small">Ghost</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost size="small">Basic</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost state="hover" size="small">Basic</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost state="focus" size="small">Basic</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost state="focus" disabled size="small">Basic</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="link" size="small">Link</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="link" state="hover" size="small">Link</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="link" state="focus" size="small">Link</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="link" state="focus" disabled size="small">Link</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" size="small">Dimmed Link</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" state="hover" size="small">Dimmed Link</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" state="focus" size="small">Dimmed Link</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" state="focus" disabled size="small">Dimmed Link</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="cta-link" size="small">Call-To-Action Link</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="cta-link" state="hover" size="small">Call-To-Action Link</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="cta-link" state="focus" size="small">Call-To-Action Link</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="cta-link" state="focus" disabled size="small">Call-To-Action Link</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px; background-color: hsl(244,8%,24%);">
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="inverted" size="small">Inverted</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="hover" size="small">Inverted</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" size="small">Inverted</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" disabled size="small">Inverted</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px; background-color: hsl(244,8%,24%);">
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="inverted" ghost size="small">Inverted</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="inverted" ghost state="hover" size="small">Inverted</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" size="small">Inverted</BaseButton></div>
          <div style="height: 32px; line-height: 32px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" disabled size="small">Inverted</BaseButton></div>
        </div>
      </div>
      <h3>Default</h3>
      <div style="display: flex">
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0">Default</div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0">:hover</div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0">:focus</div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0">[disabled]</div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton>Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="hover">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="focus">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="focus" disabled>Call-To-Action</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton>Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="hover">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="focus">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="focus" disabled>Call-To-Action</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger">Danger</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" state="hover">Danger</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" state="focus">Danger</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" state="focus" disabled>Danger</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton ghost>Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton ghost state="hover">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton ghost state="focus">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton ghost state="focus" disabled>Ghost</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost>Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost state="hover">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost state="focus">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost state="focus" disabled>Ghost</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost>Basic</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost state="hover">Basic</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost state="focus">Basic</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost state="focus" disabled>Basic</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="link">Link</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="link" state="hover">Link</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="link" state="focus">Link</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="link" state="focus" disabled>Link</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link">Dimmed Link</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" state="hover">Dimmed Link</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" state="focus">Dimmed Link</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" state="focus" disabled>Dimmed Link</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="cta-link">Call-To-Action Link</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="cta-link" state="hover">Call-To-Action Link</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="cta-link" state="focus">Call-To-Action Link</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="cta-link" state="focus" disabled>Call-To-Action Link</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px; background-color: hsl(244,8%,24%);">
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="inverted">Inverted</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="hover">Inverted</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus">Inverted</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" disabled>Inverted</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px; background-color: hsl(244,8%,24%);">
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="inverted" ghost>Inverted</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="inverted" ghost state="hover">Inverted</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus">Inverted</BaseButton></div>
          <div style="height: 38px; line-height: 38px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" disabled>Inverted</BaseButton></div>
        </div>
      </div>
      <h3>Large</h3>
      <div style="display: flex">
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0">Default</div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0">:hover</div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0">:focus</div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0">[disabled]</div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton size="large">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="hover" size="large">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="focus" size="large">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="focus" disabled size="large">Call-To-Action</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton size="large">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="hover" size="large">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="focus" size="large">Call-To-Action</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton state="focus" disabled size="large">Call-To-Action</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" size="large">Danger</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" state="hover" size="large">Danger</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" state="focus" size="large">Danger</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" state="focus" disabled size="large">Danger</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton ghost size="large">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton ghost state="hover" size="large">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton ghost state="focus" size="large">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton ghost state="focus" disabled size="large">Ghost</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost size="large">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost state="hover" size="large">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost state="focus" size="large">Ghost</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost state="focus" disabled size="large">Ghost</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost size="large">Basic</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost state="hover" size="large">Basic</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost state="focus" size="large">Basic</BaseButton></div>
          <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost state="focus" disabled size="large">Basic</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="link" size="large">Link</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="link" state="hover" size="large">Link</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="link" state="focus" size="large">Link</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="link" state="focus" disabled size="large">Link</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" size="large">Dimmed Link</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" state="hover" size="large">Dimmed Link</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" state="focus" size="large">Dimmed Link</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" state="focus" disabled size="large">Dimmed Link</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="cta-link" size="large">Call-To-Action Link</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="cta-link" state="hover" size="large">Call-To-Action Link</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="cta-link" state="focus" size="large">Call-To-Action Link</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="cta-link" state="focus" disabled size="large">Call-To-Action Link</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px; background-color: hsl(244,8%,24%);">
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="inverted" size="large">Inverted</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="hover" size="large">Inverted</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" size="large">Inverted</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" disabled size="large">Inverted</BaseButton></div>
        </div>
        <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px; background-color: hsl(244,8%,24%);">
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="inverted" ghost size="large">Inverted</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="inverted" ghost state="hover" size="large">Inverted</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" size="large">Inverted</BaseButton></div>
          <div style="height: 46px; line-height: 46px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" disabled size="large">Inverted</BaseButton></div>
        </div>
      </div>
        <h3>Extra Large</h3>
        <div style="display: flex">
          <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
            <div style="height: 50px; line-height: 28.8px; margin: 12px 24px 0">Default</div>
            <div style="height: 50px; line-height: 28.8px; margin: 12px 24px 0">:hover</div>
            <div style="height: 50px; line-height: 28.8px; margin: 12px 24px 0">:focus</div>
            <div style="height: 50px; line-height: 28.8px; margin: 12px 24px 0">[disabled]</div>
          </div>
          <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
            <div style="margin: 0 0 12px 0"><BaseButton size="extra-large">Call-To-Action</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton state="hover" size="extra-large">Call-To-Action</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton state="focus" size="extra-large">Call-To-Action</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton state="focus" disabled size="extra-large">Call-To-Action</BaseButton></div>
          </div>
          <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
            <div style="margin: 0 0 12px 0"><BaseButton size="extra-large">Call-To-Action</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton state="hover" size="extra-large">Call-To-Action</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton state="focus" size="extra-large">Call-To-Action</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton state="focus" disabled size="extra-large">Call-To-Action</BaseButton></div>
          </div>
          <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
            <div style="margin: 0 0 12px 0"><BaseButton variant="danger" size="extra-large">Danger</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton variant="danger" state="hover" size="extra-large">Danger</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton variant="danger" state="focus" size="extra-large">Danger</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton variant="danger" state="focus" disabled size="extra-large">Danger</BaseButton></div>
          </div>
          <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
            <div style="margin: 0 0 12px 0"><BaseButton ghost size="extra-large">Ghost</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton ghost state="hover" size="extra-large">Ghost</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton ghost state="focus" size="extra-large">Ghost</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton ghost state="focus" disabled size="extra-large">Ghost</BaseButton></div>
          </div>
          <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
            <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost size="extra-large">Ghost</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost state="hover" size="extra-large">Ghost</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost state="focus" size="extra-large">Ghost</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton variant="danger" ghost state="focus" disabled size="extra-large">Ghost</BaseButton></div>
          </div>
          <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
            <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost size="extra-large">Basic</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost state="hover" size="extra-large">Basic</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost state="focus" size="extra-large">Basic</BaseButton></div>
            <div style="margin: 0 0 12px 0"><BaseButton variant="basic" ghost state="focus" disabled size="extra-large">Basic</BaseButton></div>
          </div>
          <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="link" size="extra-large">Link</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="link" state="hover" size="extra-large">Link</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="link" state="focus" size="extra-large">Link</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="link" state="focus" disabled size="extra-large">Link</BaseButton></div>
          </div>
          <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" size="extra-large">Dimmed Link</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" state="hover" size="extra-large">Dimmed Link</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" state="focus" size="extra-large">Dimmed Link</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="dimmed-link" state="focus" disabled size="extra-large">Dimmed Link</BaseButton></div>
          </div>
          <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px;">
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="cta-link" size="extra-large">Call-To-Action Link</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="cta-link" state="hover" size="extra-large">Call-To-Action Link</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="cta-link" state="focus" size="extra-large">Call-To-Action Link</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="cta-link" state="focus" disabled size="extra-large">Call-To-Action Link</BaseButton></div>
          </div>
          <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px; background-color: hsl(244,8%,24%);">
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="inverted" size="extra-large">Inverted</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="hover" size="extra-large">Inverted</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" size="extra-large">Inverted</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" disabled size="extra-large">Inverted</BaseButton></div>
          </div>
          <div style="display: inline-flex; flex-direction: column; padding: 24px 12px 12px; background-color: hsl(244,8%,24%);">
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="inverted" ghost size="extra-large">Inverted</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="inverted" ghost state="hover" size="extra-large">Inverted</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" size="extra-large">Inverted</BaseButton></div>
            <div style="height: 50px; line-height: 28.8px; margin: 0 0 12px 0"><BaseButton variant="inverted" state="focus" disabled size="extra-large">Inverted</BaseButton></div>
          </div>
        </div>
      </div>
    </div>
  `,
});
States.storyName = '…all states';

export const Sizes = () => ({
  components: { BaseButton },
  template: `
    <div>
      <BaseButton size="small">Small button</BaseButton>
      <BaseButton>Default button</BaseButton>
      <BaseButton size="large">Large button</BaseButton>
      <BaseButton size="extra-large">Extra Large</BaseButton>
    </div>
  `,
});
Sizes.storyName = '…with sizes';

export const Disabled = () => ({
  components: { BaseButton },
  template: '<BaseButton disabled>Disabled</BaseButton>',
});
Disabled.storyName = '…as disabled';

export const Loading = () => ({
  components: { BaseButton, BaseLoadingSpinner },
  template: `
    <div>
      <BaseButton size="small" disabled><BaseLoadingSpinner size="small" /></BaseButton>
      <BaseButton disabled><BaseLoadingSpinner size="medium" /></BaseButton>
      <BaseButton size="large" disabled><BaseLoadingSpinner size="large" /></BaseButton>
    </div>
  `,
});
Loading.storyName = '…as loading';
