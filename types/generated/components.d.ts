import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsBedIcons extends Struct.ComponentSchema {
  collectionName: 'components_components_bed_icons';
  info: {
    displayName: 'bedIcons';
  };
  attributes: {
    icons: Schema.Attribute.Enumeration<
      ['bulk-bed', 'single-bed', 'double-bed']
    >;
  };
}

export interface ComponentsCta extends Struct.ComponentSchema {
  collectionName: 'components_components_ctas';
  info: {
    description: '';
    displayName: 'Cta';
  };
  attributes: {
    externalUrl: Schema.Attribute.String;
    internalLink: Schema.Attribute.Relation<
      'oneToOne',
      'api::internal-link.internal-link'
    >;
    label: Schema.Attribute.String;
    style: Schema.Attribute.Enumeration<['button', 'link']>;
    type: Schema.Attribute.Enumeration<['button', 'link']>;
    variations: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline']
    >;
  };
}

export interface ComponentsGeolocation extends Struct.ComponentSchema {
  collectionName: 'components_components_geolocations';
  info: {
    displayName: 'geolocation';
  };
  attributes: {
    lat: Schema.Attribute.Decimal;
    long: Schema.Attribute.Decimal;
  };
}

export interface GlobalNavigation extends Struct.ComponentSchema {
  collectionName: 'components_global_navigations';
  info: {
    description: '';
    displayName: 'Navigation';
    icon: 'bulletList';
  };
  attributes: {
    Links: Schema.Attribute.Component<'global.navigation-items', true>;
    name: Schema.Attribute.String;
  };
}

export interface GlobalNavigationItems extends Struct.ComponentSchema {
  collectionName: 'components_global_navigation_items';
  info: {
    displayName: 'Navigation Items';
  };
  attributes: {
    externalUrl: Schema.Attribute.String;
    internalUrl: Schema.Attribute.Relation<
      'oneToOne',
      'api::internal-link.internal-link'
    >;
    label: Schema.Attribute.String;
  };
}

export interface ModulesMainHero extends Struct.ComponentSchema {
  collectionName: 'components_modules_main_heroes';
  info: {
    description: '';
    displayName: 'Main Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heroCTA: Schema.Attribute.Component<'components.cta', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ModulesPerks extends Struct.ComponentSchema {
  collectionName: 'components_modules_perks';
  info: {
    displayName: 'perks';
  };
  attributes: {
    icons: Schema.Attribute.Enumeration<
      [
        'air-conditioner',
        'badroom-essentials',
        'beach-essentials',
        'beach-view',
        'bed-linens',
        'cleaning-products',
        'coffee-maker',
        'dishes',
        'dryer-machine',
        'gas-stove',
        'hot-water',
        'kitchen-essentials',
        'microwave',
        'mountain-view',
        'oven',
        'parking',
        'pets',
        'pool',
        'refrigerator',
        'sea-front',
        'shower-products',
        'tv',
        'washer-machine',
        'wifi',
        'wine-glasses',
      ]
    >;
    label: Schema.Attribute.String;
  };
}

export interface ModulesReserveForm extends Struct.ComponentSchema {
  collectionName: 'components_modules_reserve_forms';
  info: {
    displayName: 'Reserve Form';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ModulesRoomCards extends Struct.ComponentSchema {
  collectionName: 'components_modules_room_cards';
  info: {
    description: '';
    displayName: 'roomCards';
  };
  attributes: {
    bedIcons: Schema.Attribute.Component<'components.bed-icons', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaKeywords: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    noFollow: Schema.Attribute.Boolean;
    noIndex: Schema.Attribute.Boolean;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.bed-icons': ComponentsBedIcons;
      'components.cta': ComponentsCta;
      'components.geolocation': ComponentsGeolocation;
      'global.navigation': GlobalNavigation;
      'global.navigation-items': GlobalNavigationItems;
      'modules.main-hero': ModulesMainHero;
      'modules.perks': ModulesPerks;
      'modules.reserve-form': ModulesReserveForm;
      'modules.room-cards': ModulesRoomCards;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
