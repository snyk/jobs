import '~/assets/scss/styles.scss';
import LayoutContainer from './LayoutContainer';

export default {
  title: 'Library/Base Components/Layout/Container',
  component: LayoutContainer,
};

export const Default = () => ({
  components: { LayoutContainer },
  template: `
    <LayoutContainer>
      <p>Applies max-width and centering of content within.</p>
       
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ipsum nunc,
      vehicula sed placerat non, condimentum vitae neque. Cras facilisis libero
      justo, eu iaculis massa condimentum ac. Integer sagittis nulla eget varius
      fermentum. Morbi cursus feugiat ex, id condimentum purus fringilla ut.
      Suspendisse sed condimentum massa. Duis interdum volutpat consequat. Aenean ut
      nibh augue. Donec ut lorem nisl.</p>
      
      <p>Etiam vitae purus felis. Nunc ultricies, nunc et accumsan tristique, justo odio 
      fermentum purus, eget aliquet dui leo ut quam. Maecenas eu velit eget lorem sodales 
      aliquam. Sed lorem nibh, imperdiet posuere tincidunt quis, porta at urna. Sed turpis 
      velit, vulputate vel elit id, tincidunt blandit risus. Vestibulum purus magna, 
      tempor posuere luctus eu, pharetra quis tellus. Aliquam viverra eget mauris at 
      vehicula. Vestibulum pretium lacus ut pretium viverra. In id nibh sagittis, iaculis 
      ex quis, aliquet elit. Quisque leo elit, auctor vel gravida nec, laoreet ut est. Duis
      eleifend lobortis congue. Donec feugiat neque nisi, at scelerisque nunc
      dignissim et.</p>
    </LayoutContainer>
  `,
});
