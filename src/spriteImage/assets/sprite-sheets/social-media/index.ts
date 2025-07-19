import SVG_IMAGE from './icons.svg';

const SOCIAL_MEDIA_SHEET = {
  source: SVG_IMAGE,
  iconSize: 32,
  columns: 3,
  totalIcons: 14,
};

enum SocialMediaEnum {
  WhatsApp = 0,
  Android = 1,
  FaceBook = 2,
  Discord = 3,
  GitHub = 4,
  Mozila = 5,
  LinkedIn = 6,
  Instagram = 7,
  Messenger = 8,
  Opera = 9,
  Spyke = 10,
  App = 11,
  Twitter = 12,
  Youtube = 13,
}

export { SOCIAL_MEDIA_SHEET, SocialMediaEnum };
