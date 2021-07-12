import '~/assets/scss/styles.scss';
import BaseInputNote from './BaseInputNote';

export default {
  title: 'Library/Base Components/InputNote',
  component: BaseInputNote,
};

export const Default = () => ({
  components: { BaseInputNote },
  props: {
    variant: {
      default: 'info',
    },
  },
  template: `
    <BaseInputNote :variant="variant">
      Base Input Note ({{variant}}).
    </BaseInputNote>
  `,
});

export const Info = () => ({
  components: { BaseInputNote },
  template: `<BaseInputNote variant="info">A info input note for informational purposes.</BaseInputNote>`,
});

export const Warning = () => ({
  components: { BaseInputNote },
  template: `<BaseInputNote variant="warning">A warning input note for when there's a non-critical problem.</BaseInputNote>`,
});

export const Success = () => ({
  components: { BaseInputNote },
  template: `<BaseInputNote variant="success">A success input note for when something awesome has happened.</BaseInputNote>`,
});

export const Danger = () => ({
  components: { BaseInputNote },
  template: `<BaseInputNote variant="danger">A danger input note for when something unpleasant has happened.</BaseInputNote>`,
});
