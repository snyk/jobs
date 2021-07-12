import '~/assets/scss/styles.scss';
import BaseInput from './BaseInput';

export default {
  title: 'Library/Base Components/Input',
  component: BaseInput,
};

export const Default = () => ({
  components: { BaseInput },
  props: {
    label: {
      default: 'Label text',
    },
    placeholder: {
      default: 'Write your text here',
    },
    state: {
      default: null,
    },
    size: {
      default: null,
    },
    inline: {
      default: false,
    },
    error: {
      default: false,
    },
    note: {
      default: '',
    },
  },
  template: `
    <BaseInput
      :label="label"
      :placeholder="placeholder"
      :state="state"
      :size="size"
      :inline="inline"
      :error="error"
      :note="note"
    />
  `,
});

export const States = () => ({
  components: { BaseInput },
  template: `
  <div>
    <BaseInput
      label=":hover"
      state="hover"
      placeholder="Write your text"
      id="input-2"
    />
    <BaseInput
      label=":focus"
      state="focus"
      placeholder="Write your text"
      id="input-3"
    />
    <BaseInput
      label="[disabled]"
      disabled
      value="Write your text"
      id="input-4"
    />
    <BaseInput
      label="Error"
      error
      placeholder="This is a required field"
      id="input-5"
    />
  </div>
`,
});

export const Notes = () => ({
  components: { BaseInput },
  template: `
  <div>
    <BaseInput
      label="With note"
      type="password"
      note="Passwords must contain at least one capital letter, a number, and a special character."
    />
    <BaseInput
      label="Error with note"
      error
      note="This is a required field"
    />
  </div>
`,
});

export const Types = () => ({
  components: { BaseInput },
  template: `
  <div>
    <BaseInput
      label="Text input"
      placeholder="Write your text"
      id="input-1"
    />
    <BaseInput
      type="number"
      label="Number input"
      placeholder="1-10"
      :value="9"
      id="input-9"
      :min="0"
      :max="10"
    />
    <BaseInput
      type="date"
      label="Date input"
      id="input-10"
    />
  </div>
`,
});

export const Inline = () => ({
  components: { BaseInput },
  template: `
  <BaseInput
    label="Inline"
    placeholder="your_org"
    id="inline-input-1"
    inline
  />
`,
});

export const Size = () => ({
  components: { BaseInput },
  template: `
  <div>
    <BaseInput
      label="Default size"
      placeholder="Write your text"
      id="input-1"
    />
    <BaseInput
      label="Small size"
      placeholder="Write your text"
      id="input-2"
      size="small"
    />
  </div>
`,
});
