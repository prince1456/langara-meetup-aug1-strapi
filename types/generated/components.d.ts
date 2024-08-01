import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    icon: 'alien';
  };
  attributes: {
    text: Attribute.String;
    subText: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero.hero': HeroHero;
    }
  }
}
