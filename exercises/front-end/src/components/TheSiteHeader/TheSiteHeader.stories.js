import '~/assets/scss/styles.scss';
import TheSiteHeader from './TheSiteHeader';

export default {
  title: 'Library/TheSiteHeader',
  component: TheSiteHeader,
};

export const Default = () => ({
  components: { TheSiteHeader },
  template: `<TheSiteHeader />`,
});
