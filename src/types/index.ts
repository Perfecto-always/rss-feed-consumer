import RssParser from 'react-native-rss-parser';
export interface Feed extends RssParser.FeedItem {
  media: Media;
}

interface Media {
  content?: string;
  credit?: string;
  description?: string;
}

export interface Items {
  label: string;
  value: string;
}
