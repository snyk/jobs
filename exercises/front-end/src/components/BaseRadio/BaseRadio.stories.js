import '~/assets/scss/styles.scss';
import BaseRadio from './BaseRadio';

export default {
  title: 'Library/Base Components/Radio',
  component: BaseRadio,
};

export const Default = () => ({
  components: { BaseRadio },
  template: `
    <div>
      <BaseRadio
        label="Default"
        name="group-1"
        value="1"
      />

      <BaseRadio
        label="Checked"
        name="group-2"
        value="1"
        checked
      />

      <BaseRadio
        label="Disabled"
        name="group-3"
        value="1"
        disabled
      />

      <BaseRadio
        label="Disabled and Checked"
        name="group-4"
        value="1"
        disabled
        checked
      />
    </div>
  `,
});

export const WithHTML = () => ({
  components: { BaseRadio },
  template: `
    <BaseRadio name="group-5" value="1" checked>
      BaseBadge with <a href="#">html inside</a>
    </BaseRadio>
  `,
});
WithHTML.storyName = '…with HTML';
