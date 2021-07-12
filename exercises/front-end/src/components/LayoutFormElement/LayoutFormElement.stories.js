import '~/assets/scss/styles.scss';
import LayoutFormElement from './LayoutFormElement';

export default {
  title: 'Library/Base Components/Layout/FormElement',
  component: LayoutFormElement,
  parameters: {
    componentSubtitle:
      'The `LayoutFormElement` component ensures consistent spacing between form fields and labels.',
  },
};

export const Default = () => ({
  components: { LayoutFormElement },
  template: `
    <StoryContainer>
      <LayoutFormElement>
        <template #label>
          <label for="example">Label 1</label>
        </template>
        <input type="text" placeholder="Any kind of form element..." style="border: 1px solid #ddd; background-color: #fff; padding: 12px; width: 100%;"/>
      </LayoutFormElement>

      <LayoutFormElement>
        <template #label>
          <label for="example">Label 2</label>
        </template>
        <input type="text" placeholder="Another type of input..." style="border: 1px solid #ddd; background-color: #fff; padding: 12px; width: 100%;"/>
      </LayoutFormElement>

      <LayoutFormElement>
        <template #label>
          <label for="example">Label 3</label>
        </template>
        <input type="text" placeholder="Fill your boots..." style="border: 1px solid #ddd; background-color: #fff; padding: 12px; width: 100%;"/>
      </LayoutFormElement>
    <StoryContainer>
  `,
});

export const Regular = () => ({
  components: { LayoutFormElement },
  template: `
    <StoryContainer>
      <LayoutFormElement regular>
        <template #label>
          <label for="example">Label 1</label>
        </template>
        <input type="text" placeholder="Any kind of form element..." style="border: 1px solid #ddd; background-color: #fff; padding: 12px; width: 100%;"/>
      </LayoutFormElement>

      <LayoutFormElement regular>
        <template #label>
          <label for="example">Label 2</label>
        </template>
        <input type="text" placeholder="Another type of input..." style="border: 1px solid #ddd; background-color: #fff; padding: 12px; width: 100%;"/>
      </LayoutFormElement>

      <LayoutFormElement regular>
        <template #label>
          <label for="example">Label 3</label>
        </template>
        <input type="text" placeholder="Fill your boots..." style="border: 1px solid #ddd; background-color: #fff; padding: 12px; width: 100%;"/>
      </LayoutFormElement>
    <StoryContainer>
  `,
});
Regular.storyName = '…with regular weight';

export const Inline = () => ({
  components: { LayoutFormElement },
  template: `
    <StoryContainer>
      <LayoutFormElement inline>
        <template #label>
          <label for="example">Label 1</label>
        </template>
        <input type="text" placeholder="Any kind of form element..." style="border: 1px solid #ddd; background-color: #fff; padding: 12px; width: 100%;"/>
      </LayoutFormElement>

      <LayoutFormElement inline>
        <template #label>
          <label for="example">Label 2</label>
        </template>
        <input type="text" placeholder="Another type of input..." style="border: 1px solid #ddd; background-color: #fff; padding: 12px; width: 100%;"/>
      </LayoutFormElement>

      <LayoutFormElement inline>
        <template #label>
          <label for="example">Label 3</label>
        </template>
        <input type="text" placeholder="Fill your boots..." style="border: 1px solid #ddd; background-color: #fff; padding: 12px; width: 100%;"/>
      </LayoutFormElement>
    <StoryContainer>
  `,
});
Inline.storyName = '…as inline';

export const CustomSpacing = () => ({
  components: { LayoutFormElement },
  template: `
    <StoryContainer>
      <LayoutFormElement spacing="xs">
        <label for="example"><input type="checkbox" /> Label 1</label>
      </LayoutFormElement>
      
      <LayoutFormElement spacing="xs">
        <label for="example"><input type="checkbox" /> Label 2</label>
      </LayoutFormElement>
      
      <LayoutFormElement spacing="xs">
        <label for="example"><input type="checkbox" /> Label 3</label>
      </LayoutFormElement>
    <StoryContainer>
  `,
});
CustomSpacing.storyName = '…with custom spacing';
CustomSpacing.parameters = {
  docs: {
    storyDescription: `For elements like checkboxes and radio inputs you can customise the spacing
      between adjacent elements using the \`spacing\` prop. All global spacing sizes are
      available.`,
  },
};
