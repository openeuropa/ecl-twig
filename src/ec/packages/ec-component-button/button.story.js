import { storiesOf } from '@storybook/html';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

// Import data for demos
import dataPrimary from '@ecl/ec-specs-button/demo/data--primary';
import dataSecondary from '@ecl/ec-specs-button/demo/data--secondary';
import dataCall from '@ecl/ec-specs-button/demo/data--call';
import dataGhost from '@ecl/ec-specs-button/demo/data--ghost';
import dataSearch from '@ecl/ec-specs-button/demo/data--search';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';

import button from './button.html.twig';

import primaryDocs from './docs/primary.md';
import secondaryDocs from './docs/secondary.md';
import ctaDocs from './docs/cta.md';
import searchDocs from './docs/search.md';
import ghostDocs from './docs/ghost.md';

const iconPositionSettings = {
  before: 'before',
  after: 'after',
};

const iconsList = {};
iconsList.none = null;

uiIcons.forEach(icon => {
  iconsList[icon] = icon;
});

storiesOf('Components/Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withCode)
  .addDecorator(withNotes)
  .add(
    'primary',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);

      const iconPosition = select(
        'Icon position',
        iconPositionSettings,
        'after'
      );

      return button({
        label: text('Label', dataPrimary.label),
        variant: dataPrimary.variant,
        disabled: boolean('Disabled', false),
        icon_position: iconPosition,
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
          size: 'fluid',
        },
      });
    },
    {
      notes: { markdown: primaryDocs },
    }
  )
  .add(
    'secondary',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);

      const iconPosition = select(
        'Icon position',
        iconPositionSettings,
        'after'
      );

      return button({
        label: text('Label', dataSecondary.label),
        variant: dataSecondary.variant,
        disabled: boolean('Disabled', false),
        icon_position: iconPosition,
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
          size: 'fluid',
        },
      });
    },
    {
      notes: { markdown: secondaryDocs },
    }
  )
  .add(
    'call-to-action',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);

      const iconPosition = select(
        'Icon position',
        iconPositionSettings,
        'after'
      );

      return button({
        label: text('Label', dataCall.label),
        variant: dataCall.variant,
        disabled: boolean('Disabled', false),
        icon_position: iconPosition,
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
          size: 'fluid',
        },
      });
    },
    {
      notes: { markdown: ctaDocs },
    }
  )
  .add(
    'ghost',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);

      const iconPosition = select(
        'Icon position',
        iconPositionSettings,
        'after'
      );

      return button({
        label: text('Label', dataGhost.label),
        variant: dataGhost.variant,
        disabled: boolean('Disabled', false),
        icon_position: iconPosition,
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
          size: 'fluid',
        },
      });
    },
    {
      notes: { markdown: ghostDocs },
    }
  )
  .add(
    'search',
    () => {
      const iconsListSelect = select('Icon (sample)', iconsList, null);

      const iconPosition = select(
        'Icon position',
        iconPositionSettings,
        'after'
      );

      return button({
        label: text('Label', dataSearch.label),
        variant: dataSearch.variant,
        disabled: boolean('Disabled', false),
        icon_position: iconPosition,
        icon: {
          type: 'ui',
          name: iconsListSelect,
          path: defaultSprite,
          size: 'fluid',
        },
      });
    },
    {
      notes: { markdown: searchDocs },
    }
  );
