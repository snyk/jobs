import '~/assets/scss/styles.scss';
import BaseInputSubmit from './BaseInputSubmit';

export default {
  title: 'Library/Base components/InputSubmit',
  component: BaseInputSubmit,
};

export const Default = () => ({
  components: { BaseInputSubmit },
  props: {
    placeholder: { default: 'Enter your text here' },
    maxlength: { default: 50 },
  },
  template: `<BaseInputSubmit
    :placeholder="placeholder"
    :maxlength="maxlength"
  />`,
});

export const States = () => ({
  components: { BaseInputSubmit },
  template: `
    <div>
      <BaseInputSubmit
        label=":hover"
        state="hover"
        placeholder="Enter your text here"
        :maxlength="50"
      />
      <BaseInputSubmit
        label=":focus"
        state="focus"
        placeholder="Enter your text here"
        :maxlength="50"
      />
      <BaseInputSubmit
        label="[disabled]"
        disabled
        placeholder="Enter your text here"
        :maxlength="50"
      />
      <BaseInputSubmit
        label="Error"
        error
        placeholder="Enter your text here"
        :maxlength="50"
      />
    </div>
  `,
});

export const Sizes = () => ({
  components: { BaseInputSubmit },
  template: `
    <div>
      <BaseInputSubmit
        placeholder="Default size…"
        :maxlength="50"
      />
      <BaseInputSubmit
        placeholder="Small size…"
        :maxlength="50"
        size="small"
      />
    </div>
  `,
});

export const CustomButtonText = () => ({
  components: { BaseInputSubmit },
  props: {
    placeholder: { default: 'Enter your text here' },
    maxlength: { default: 50 },
  },
  template: `<BaseInputSubmit
    :placeholder="placeholder"
    :maxlength="maxlength"
  >Custom text for submit button</BaseInputSubmit>`,
});
