import type { Schema, Struct } from '@strapi/strapi';

export interface ContactsPhone extends Struct.ComponentSchema {
  collectionName: 'components_contacts_phones';
  info: {
    description: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043E\u0442\u0434\u0435\u043B\u0430/\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430';
    displayName: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface MediaDocument extends Struct.ComponentSchema {
  collectionName: 'components_media_documents';
  info: {
    description: '\u0424\u0430\u0439\u043B \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430 \u0441 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435\u043C';
    displayName: '\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442';
  };
  attributes: {
    description: Schema.Attribute.Text;
    file: Schema.Attribute.Media<'files'>;
    title: Schema.Attribute.String;
  };
}

export interface MediaVideoLink extends Struct.ComponentSchema {
  collectionName: 'components_media_video_links';
  info: {
    description: '\u0412\u0438\u0434\u0435\u043E-\u0441\u0441\u044B\u043B\u043A\u0430 (YouTube/VK/RuTube/\u0414\u0440\u0443\u0433\u043E\u0435)';
    displayName: '\u0412\u0438\u0434\u0435\u043E-\u0441\u0441\u044B\u043B\u043A\u0430';
  };
  attributes: {
    open_in_vk: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    provider: Schema.Attribute.Enumeration<
      ['YouTube', 'RuTube', 'VK', '\u0414\u0440\u0443\u0433\u043E\u0435']
    > &
      Schema.Attribute.DefaultTo<'\u0414\u0440\u0443\u0433\u043E\u0435'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MetaLink extends Struct.ComponentSchema {
  collectionName: 'components_meta_links';
  info: {
    description: '\u0412\u043D\u0435\u0448\u043D\u044F\u044F \u0441\u0441\u044B\u043B\u043A\u0430';
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MetaTag extends Struct.ComponentSchema {
  collectionName: 'components_meta_tags';
  info: {
    description: '\u041F\u0440\u043E\u0441\u0442\u043E\u0439 \u0442\u0435\u0433';
    displayName: '\u0422\u0435\u0433';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface UiShortcut extends Struct.ComponentSchema {
  collectionName: 'components_ui_shortcuts';
  info: {
    description: '\u0417\u043D\u0430\u0447\u043E\u043A-\u044F\u0440\u043B\u044B\u043A \u0434\u043B\u044F \u0433\u043B\u0430\u0432\u043D\u043E\u0439';
    displayName: '\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043F\u0435\u0440\u0435\u0445\u043E\u0434';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contacts.phone': ContactsPhone;
      'media.document': MediaDocument;
      'media.video-link': MediaVideoLink;
      'meta.link': MetaLink;
      'meta.tag': MetaTag;
      'ui.shortcut': UiShortcut;
    }
  }
}
