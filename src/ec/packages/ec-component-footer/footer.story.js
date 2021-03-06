import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import { backToTop, identity, sections, common } from './demo/data';

import footer from './footer.html.twig';
import notes from './docs/footer.md';

backToTop.icon.path = defaultSprite;
identity.follow.links.forEach(link => {
  if (link.icon) {
    link.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
  }
});
sections.forEach(s => {
  s.links.forEach(l => {
    if (l.icon) {
      l.icon.path = defaultSprite; // eslint-disable-line no-param-reassign
    }
  });
});

storiesOf('Components/Footer', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'corporate',
    () => footer({ back_to_top: backToTop, sections, common }),
    {
      notes: { markdown: notes },
    }
  )
  .add(
    'custom',
    () => footer({ back_to_top: backToTop, identity, sections, common }),
    {
      notes: { markdown: notes },
    }
  );
