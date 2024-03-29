import type { Schema, Attribute } from '@strapi/strapi';

export interface ImagesImages extends Schema.Component {
  collectionName: 'components_images_images';
  info: {
    displayName: 'images';
  };
  attributes: {};
}

export interface TechStackTechStack extends Schema.Component {
  collectionName: 'components_tech_stack_tech_stacks';
  info: {
    displayName: 'techStack';
  };
  attributes: {
    technology: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'images.images': ImagesImages;
      'tech-stack.tech-stack': TechStackTechStack;
    }
  }
}
