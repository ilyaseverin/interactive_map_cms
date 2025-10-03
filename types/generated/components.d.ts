import type { Schema, Struct } from '@strapi/strapi';

export interface AboutContent extends Struct.ComponentSchema {
  collectionName: 'components_about_content';
  info: {
    displayName: '\u041A\u043E\u043D\u0442\u0435\u043D\u0442';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface BrandContent extends Struct.ComponentSchema {
  collectionName: 'components_brand_content';
  info: {
    displayName: '\u0421\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435';
  };
  attributes: {
    brand_colors: Schema.Attribute.JSON;
    extra_info: Schema.Attribute.RichText;
    logos: Schema.Attribute.Media<'images', true>;
    symbols: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ContactsMain extends Struct.ComponentSchema {
  collectionName: 'components_contacts_main';
  info: {
    displayName: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    map_embed: Schema.Attribute.Text;
    phones: Schema.Attribute.Component<'contacts.phone', true>;
    website: Schema.Attribute.String;
  };
}

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

export interface DocumentBasicInfo extends Struct.ComponentSchema {
  collectionName: 'components_document_basic_infos';
  info: {
    displayName: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435';
  };
  attributes: {
    category: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
  };
}

export interface DocumentFile extends Struct.ComponentSchema {
  collectionName: 'components_document_file';
  info: {
    displayName: '\u0424\u0430\u0439\u043B';
  };
  attributes: {
    file: Schema.Attribute.Media<'files'>;
  };
}

export interface EventAdditionalMaterials extends Struct.ComponentSchema {
  collectionName: 'components_event_additional_materials';
  info: {
    description: '\u0412\u0438\u0434\u0435\u043E \u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B';
    displayName: '\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B';
  };
  attributes: {
    attachments: Schema.Attribute.Component<'media.document', true>;
    videos: Schema.Attribute.Component<'media.video-link', true>;
  };
}

export interface EventBasicInfo extends Struct.ComponentSchema {
  collectionName: 'components_event_basic_infos';
  info: {
    description: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435, \u0434\u0430\u0442\u0430/\u0432\u0440\u0435\u043C\u044F, \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F, \u0441\u043B\u0430\u0433';
    displayName: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435';
  };
  attributes: {
    category: Schema.Attribute.String;
    datetime_start: Schema.Attribute.DateTime & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EventContentInfo extends Struct.ComponentSchema {
  collectionName: 'components_event_content_infos';
  info: {
    description: '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F';
    displayName: '\u041A\u043E\u043D\u0442\u0435\u043D\u0442';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    gallery: Schema.Attribute.Media<'images', true>;
  };
}

export interface EventLocationInfo extends Struct.ComponentSchema {
  collectionName: 'components_event_location_infos';
  info: {
    description: '\u0410\u0434\u0440\u0435\u0441 \u0438 \u0442\u043E\u0447\u043A\u0430 \u043D\u0430 \u043A\u0430\u0440\u0442\u0435';
    displayName: '\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F';
  };
  attributes: {
    location: Schema.Attribute.String;
    location_map_link: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::strapi-location-picker.location-picker',
        {
          info: true;
        }
      >;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero';
  info: {
    displayName: '\u0425\u0438\u0440\u043E';
  };
  attributes: {
    hero_image: Schema.Attribute.Media<'images'>;
    hero_subtitle: Schema.Attribute.String;
    hero_title: Schema.Attribute.String;
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

export interface MethodicBasicInfo extends Struct.ComponentSchema {
  collectionName: 'components_methodic_basic_infos';
  info: {
    displayName: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435';
  };
  attributes: {
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MethodicContent extends Struct.ComponentSchema {
  collectionName: 'components_methodic_content';
  info: {
    displayName: '\u041A\u043E\u043D\u0442\u0435\u043D\u0442';
  };
  attributes: {
    attachments: Schema.Attribute.Component<'media.document', true>;
    content: Schema.Attribute.RichText;
    links: Schema.Attribute.Component<'meta.link', true>;
  };
}

export interface NewsBasicInfo extends Struct.ComponentSchema {
  collectionName: 'components_news_basic_infos';
  info: {
    description: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A, \u0434\u0430\u0442\u0430, \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F, \u0441\u043B\u0430\u0433';
    displayName: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        '\u0413\u043B\u0430\u0432\u043D\u044B\u0435',
        '\u0420\u0435\u0433\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435',
      ]
    >;
    published_at_date: Schema.Attribute.Date & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NewsContentInfo extends Struct.ComponentSchema {
  collectionName: 'components_news_content_infos';
  info: {
    description: '\u0410\u043D\u043E\u043D\u0441 \u0438 \u043F\u043E\u043B\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442';
    displayName: '\u041A\u043E\u043D\u0442\u0435\u043D\u0442';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    excerpt: Schema.Attribute.Text;
  };
}

export interface NewsMedia extends Struct.ComponentSchema {
  collectionName: 'components_news_media';
  info: {
    description: '\u041E\u0431\u043B\u043E\u0436\u043A\u0430, \u0433\u0430\u043B\u0435\u0440\u0435\u044F, \u0432\u0438\u0434\u0435\u043E';
    displayName: '\u041C\u0435\u0434\u0438\u0430';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    gallery: Schema.Attribute.Media<'images', true>;
    video_links: Schema.Attribute.Component<'media.video-link', true>;
  };
}

export interface NewsMeta extends Struct.ComponentSchema {
  collectionName: 'components_news_meta';
  info: {
    description: '\u0422\u0435\u0433\u0438 \u0438 \u0434\u043E\u043F. \u043F\u043E\u043B\u044F';
    displayName: '\u041C\u0435\u0442\u0430';
  };
  attributes: {
    tags: Schema.Attribute.Component<'meta.tag', true>;
  };
}

export interface PageBasicInfo extends Struct.ComponentSchema {
  collectionName: 'components_page_basic_infos';
  info: {
    displayName: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435';
  };
  attributes: {
    category: Schema.Attribute.Enumeration<
      [
        '\u0410\u043D\u0442\u0438\u043C\u043E\u043D\u043E\u043F\u043E\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441',
        '\u0410\u043D\u0442\u0438\u043A\u043E\u0440\u0440\u0443\u043F\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C',
        '\u041F\u0440\u043E\u0442\u0438\u0432\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0442\u0435\u0440\u0440\u043E\u0440\u0438\u0437\u043C\u0443',
        '\u0410\u043D\u0442\u0438\u043D\u0430\u0440\u043A\u043E\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u044F',
      ]
    >;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageContent extends Struct.ComponentSchema {
  collectionName: 'components_page_content';
  info: {
    displayName: '\u041A\u043E\u043D\u0442\u0435\u043D\u0442';
  };
  attributes: {
    attachments: Schema.Attribute.Component<'media.document', true>;
    body: Schema.Attribute.RichText;
    links: Schema.Attribute.Component<'meta.link', true>;
  };
}

export interface PartnerBasicInfo extends Struct.ComponentSchema {
  collectionName: 'components_partner_basic_infos';
  info: {
    displayName: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'name'>;
    url: Schema.Attribute.String;
  };
}

export interface PartnerMedia extends Struct.ComponentSchema {
  collectionName: 'components_partner_media';
  info: {
    displayName: '\u041C\u0435\u0434\u0438\u0430';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface PersonBasicInfo extends Struct.ComponentSchema {
  collectionName: 'components_person_basic_infos';
  info: {
    displayName: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435';
  };
  attributes: {
    full_name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    position: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'full_name'>;
  };
}

export interface PersonMedia extends Struct.ComponentSchema {
  collectionName: 'components_person_media';
  info: {
    displayName: '\u041C\u0435\u0434\u0438\u0430';
  };
  attributes: {
    photo: Schema.Attribute.Media<'images'>;
  };
}

export interface PhotoAlbumBasicInfo extends Struct.ComponentSchema {
  collectionName: 'components_photo_album_basic_infos';
  info: {
    displayName: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435';
  };
  attributes: {
    external_album_url: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PhotoAlbumMedia extends Struct.ComponentSchema {
  collectionName: 'components_photo_album_media';
  info: {
    displayName: '\u041C\u0435\u0434\u0438\u0430';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    photos: Schema.Attribute.Media<'images', true>;
  };
}

export interface PressReleaseAttachments extends Struct.ComponentSchema {
  collectionName: 'components_press_release_attachments';
  info: {
    description: '\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B';
    displayName: '\u0412\u043B\u043E\u0436\u0435\u043D\u0438\u044F';
  };
  attributes: {
    attachments: Schema.Attribute.Component<'media.document', true>;
  };
}

export interface PressReleaseBasicInfo extends Struct.ComponentSchema {
  collectionName: 'components_press_release_basic_infos';
  info: {
    description: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A, \u0434\u0430\u0442\u0430, \u0430\u0432\u0442\u043E\u0440, \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F, \u0441\u043B\u0430\u0433';
    displayName: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435';
  };
  attributes: {
    author: Schema.Attribute.String;
    category: Schema.Attribute.String;
    published_at_date: Schema.Attribute.Date & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PressReleaseContentInfo extends Struct.ComponentSchema {
  collectionName: 'components_press_release_content_infos';
  info: {
    description: '\u0410\u043D\u043E\u043D\u0441 \u0438 \u0442\u0435\u043A\u0441\u0442';
    displayName: '\u041A\u043E\u043D\u0442\u0435\u043D\u0442';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    excerpt: Schema.Attribute.Text;
  };
}

export interface PressReleaseMedia extends Struct.ComponentSchema {
  collectionName: 'components_press_release_media';
  info: {
    description: '\u041E\u0431\u043B\u043E\u0436\u043A\u0430 \u0438 \u0433\u0430\u043B\u0435\u0440\u0435\u044F';
    displayName: '\u041C\u0435\u0434\u0438\u0430';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    gallery: Schema.Attribute.Media<'images', true>;
  };
}

export interface PressReleaseMeta extends Struct.ComponentSchema {
  collectionName: 'components_press_release_meta';
  info: {
    description: '\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430';
    displayName: '\u041C\u0435\u0442\u0430';
  };
  attributes: {
    keywords: Schema.Attribute.Component<'meta.tag', true>;
  };
}

export interface ProjectAttachments extends Struct.ComponentSchema {
  collectionName: 'components_project_attachments';
  info: {
    description: '\u0412\u043B\u043E\u0436\u0435\u043D\u0438\u044F';
    displayName: '\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B';
  };
  attributes: {
    attachments: Schema.Attribute.Component<'media.document', true>;
  };
}

export interface ProjectBasicInfo extends Struct.ComponentSchema {
  collectionName: 'components_project_basic_infos';
  info: {
    description: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A, \u0442\u0438\u043F, \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F, \u0441\u043B\u0430\u0433';
    displayName: '\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435';
  };
  attributes: {
    category: Schema.Attribute.String;
    material_type: Schema.Attribute.Enumeration<
      [
        '\u043D\u043E\u0432\u043E\u0441\u0442\u044C',
        '\u0430\u043D\u043E\u043D\u0441',
        '\u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435',
        '\u043F\u0440\u043E\u0447\u0435\u0435',
      ]
    >;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectContentInfo extends Struct.ComponentSchema {
  collectionName: 'components_project_content_infos';
  info: {
    description: '\u041F\u043E\u043B\u043D\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435';
    displayName: '\u041A\u043E\u043D\u0442\u0435\u043D\u0442';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface ProjectLinks extends Struct.ComponentSchema {
  collectionName: 'components_project_links';
  info: {
    description: '\u0412\u043D\u0435\u0448\u043D\u0438\u0435 \u0441\u0441\u044B\u043B\u043A\u0438';
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0438';
  };
  attributes: {
    external_links: Schema.Attribute.Component<'meta.link', true>;
  };
}

export interface ProjectMedia extends Struct.ComponentSchema {
  collectionName: 'components_project_media';
  info: {
    description: '\u041E\u0431\u043B\u043E\u0436\u043A\u0430, \u0433\u0430\u043B\u0435\u0440\u0435\u044F, \u0432\u0438\u0434\u0435\u043E';
    displayName: '\u041C\u0435\u0434\u0438\u0430';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'>;
    gallery: Schema.Attribute.Media<'images', true>;
    videos: Schema.Attribute.Component<'media.video-link', true>;
  };
}

export interface ProjectMeta extends Struct.ComponentSchema {
  collectionName: 'components_project_meta';
  info: {
    description: '\u0422\u0435\u0433\u0438 \u0438 \u0432\u043D\u0435\u0448\u043D\u0438\u0439 ID';
    displayName: '\u041C\u0435\u0442\u0430';
  };
  attributes: {
    external_id: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'meta.tag', true>;
  };
}

export interface ProjectSummary extends Struct.ComponentSchema {
  collectionName: 'components_project_summary';
  info: {
    description: '\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435';
    displayName: '\u0410\u043D\u043D\u043E\u0442\u0430\u0446\u0438\u044F';
  };
  attributes: {
    excerpt: Schema.Attribute.Text;
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
      'about.content': AboutContent;
      'brand.content': BrandContent;
      'contacts.main': ContactsMain;
      'contacts.phone': ContactsPhone;
      'document.basic-info': DocumentBasicInfo;
      'document.file': DocumentFile;
      'event.additional-materials': EventAdditionalMaterials;
      'event.basic-info': EventBasicInfo;
      'event.content-info': EventContentInfo;
      'event.location-info': EventLocationInfo;
      'homepage.hero': HomepageHero;
      'media.document': MediaDocument;
      'media.video-link': MediaVideoLink;
      'meta.link': MetaLink;
      'meta.tag': MetaTag;
      'methodic.basic-info': MethodicBasicInfo;
      'methodic.content': MethodicContent;
      'news.basic-info': NewsBasicInfo;
      'news.content-info': NewsContentInfo;
      'news.media': NewsMedia;
      'news.meta': NewsMeta;
      'page.basic-info': PageBasicInfo;
      'page.content': PageContent;
      'partner.basic-info': PartnerBasicInfo;
      'partner.media': PartnerMedia;
      'person.basic-info': PersonBasicInfo;
      'person.media': PersonMedia;
      'photo-album.basic-info': PhotoAlbumBasicInfo;
      'photo-album.media': PhotoAlbumMedia;
      'press-release.attachments': PressReleaseAttachments;
      'press-release.basic-info': PressReleaseBasicInfo;
      'press-release.content-info': PressReleaseContentInfo;
      'press-release.media': PressReleaseMedia;
      'press-release.meta': PressReleaseMeta;
      'project.attachments': ProjectAttachments;
      'project.basic-info': ProjectBasicInfo;
      'project.content-info': ProjectContentInfo;
      'project.links': ProjectLinks;
      'project.media': ProjectMedia;
      'project.meta': ProjectMeta;
      'project.summary': ProjectSummary;
      'ui.shortcut': UiShortcut;
    }
  }
}
