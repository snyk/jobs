import '~/assets/scss/styles.scss';
import BaseSelect from './BaseSelect';

export default {
  title: 'Library/Base Components/Select',
  component: BaseSelect,
};

export const Default = () => ({
  components: { BaseSelect },
  props: {
    label: {
      default: 'Default label',
    },
    options: {
      default: [
        { title: 'Option 1', value: '1' },
        { title: 'Option 2', value: '2' },
        { title: 'Option 3', value: '3' },
      ],
    },
    size: {
      default: null,
    },
    error: {
      default: false,
    },
    fillWidth: {
      default: false,
    },
    inline: {
      default: false,
    },
    note: {
      default: '',
    },
  },
  data() {
    return {
      value: '1',
    };
  },
  template: `
    <BaseSelect
      :label="label"
      :options="options"
      :size="size"
      :error="error"
      :fill-width="fillWidth"
      :inline="inline"
      v-model="value"
      :note="note"
    />
  `,
});

export const FillWidth = () => ({
  components: { BaseSelect },
  props: {
    selectOptions: {
      default: [
        {
          value: '1',
          title: 'Option 1',
        },
        {
          value: '2',
          title: 'Option 2',
        },
        {
          value: '3',
          title: 'Option 3',
        },
      ],
    },
  },
  template: `
  <BaseSelect
    label="Fill width select"
    :options="selectOptions"
    fill-width
  />
  `,
});
FillWidth.storyName = '…as full width';

export const States = () => ({
  components: { BaseSelect },
  props: {
    selectOptions: {
      default: [
        {
          value: '1',
          title: 'Option 1',
        },
        {
          value: '2',
          title: 'Option 2',
        },
        {
          value: '3',
          title: 'Option 3',
        },
      ],
    },
  },
  template: `
    <div>
      <BaseSelect
        label=":hover"
        state="hover"
        :options="selectOptions"
      />
      <BaseSelect
        label=":docus"
        state="focus"
        :options="selectOptions"
      />
      <BaseSelect
        label="[disabled]"
        :options="selectOptions"
        disabled
      />
      <BaseSelect
        label="Error"
        :options="selectOptions"
        error
      />
    </div>
  `,
});
States.storyName = '…with states';

export const Sizes = () => ({
  components: { BaseSelect },
  props: {
    selectOptions: {
      default: [
        {
          value: '1',
          title: 'Option 1',
        },
        {
          value: '2',
          title: 'Option 2',
        },
        {
          value: '3',
          title: 'Option 3',
        },
      ],
    },
  },
  template: `
    <div>
      <BaseSelect
        label="Default"
        :options="selectOptions"
      />
      <BaseSelect
        label="Small"
        :options="selectOptions"
        size="small"
      />
    </div>
  `,
});
Sizes.storyName = '…with sizes';

export const Inline = () => ({
  components: { BaseSelect },
  props: {
    selectOptions: {
      default: [
        {
          value: '1',
          title: 'Option 1',
        },
        {
          value: '2',
          title: 'Option 2',
        },
        {
          value: '3',
          title: 'Option 3',
        },
      ],
    },
  },
  template: `
    <BaseSelect
      label="Inline"
      :options="selectOptions"
      inline
    />
  `,
});
Inline.storyName = '…as inline';

export const PreSelected = () => ({
  components: { BaseSelect },
  props: {
    selectOptions: {
      default: [
        {
          value: '1',
          title: 'Option 1',
        },
        {
          value: '2',
          title: 'Option 2',
        },
        {
          value: '3',
          title: 'Option 3',
        },
      ],
    },
  },
  data() {
    return {
      value: '2',
    };
  },
  template: `
    <BaseSelect
      :options="selectOptions"
      v-model="value"
    />
  `,
});
PreSelected.storyName = '…as pre selected';

export const Notes = () => ({
  components: { BaseSelect },
  props: {
    selectOptions: {
      default: [
        {
          value: '1',
          title: 'Option 1',
        },
        {
          value: '2',
          title: 'Option 2',
        },
        {
          value: '3',
          title: 'Option 3',
        },
      ],
    },
  },
  template: `
  <div>
    <BaseSelect
      label="With note"
      :options="selectOptions"
      note="Passwords must contain at least one capital letter, a number, and a special character."
    />
    <BaseSelect
      label="Error with note"
      :options="selectOptions"
      error
      note="This is a required field"
    />
  </div>
  `,
});
Notes.storyName = '…with note';

export const MinimalVariant = () => ({
  components: { BaseSelect },
  props: {
    options: {
      default: [
        { title: 'Option 1', value: '1' },
        { title: 'Option 2', value: '2' },
        { title: 'Option 3', value: '3' },
      ],
    },
  },
  data() {
    return {
      value: '1',
    };
  },
  template: `
    <BaseSelect
      variant="minimal"
      :options="options"
      v-model="value"
    />
  `,
});

MinimalVariant.storyName = '…as minimal variant';
export const InvertedMinimalVariant = () => ({
  components: { BaseSelect },
  props: {
    options: {
      default: [
        { title: 'Option 1', value: '1' },
        { title: 'Option 2', value: '2' },
        { title: 'Option 3', value: '3' },
      ],
    },
  },
  data() {
    return {
      value: '1',
    };
  },
  template: `
    <div style="background-color: hsl(244, 8%, 24%);">
      <BaseSelect
        variant="minimal-inverted"
        :options="options"
        v-model="value"
      />
    </div>
  `,
});
InvertedMinimalVariant.storyName = '…as inverted minimal variant';
