import type { Schema, Attribute } from '@strapi/strapi';

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.String;
    Img: Attribute.Media;
  };
}

export interface HomeHome extends Schema.Component {
  collectionName: 'components_home_homes';
  info: {
    displayName: 'Home';
    icon: 'house';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'header.header': HeaderHeader;
      'home.home': HomeHome;
    }
  }
}
