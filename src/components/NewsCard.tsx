import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import styles from '../styles/global.styles';
import {Feed} from '../types';

const NewsCard = ({items}: {items: Feed}) => {
  return (
    <SafeAreaView style={styles.newsCard}>
      <Image
        style={styles.newsImage}
        source={
          items !== undefined && items.media.content
            ? {
                uri: items?.media?.content,
              }
            : require('../assets/placeholder-image.png')
        }
      />
      <View style={styles.newsContentHolder}>
        <Text style={styles.newsHeading}>{items.title}</Text>
        <Text numberOfLines={20}>{items.description}</Text>
      </View>
    </SafeAreaView>
  );
};

export default NewsCard;
