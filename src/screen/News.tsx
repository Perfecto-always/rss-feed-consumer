import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import RssParser from 'react-native-rss-parser';
import {Feed} from '../types';
import NewsCard from '../components/NewsCard';
import DropDownPicker from 'react-native-dropdown-picker';
import {getAllSections, sections} from '../utils/sections';
import {root} from '../styles/global.styles';
import Loader from '../components/Loader';

const News = () => {
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [section, setSection] =
    React.useState<typeof sections[number]>('Technology');
  const [items, setItems] = React.useState(getAllSections());
  const [news, setNews] = React.useState<Feed[]>();

  const fetcher = async () => {
    await fetch(`https://api.nytimes.com/services/xml/rss/nyt/${section}.xml`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/xml',
      },
    })
      .then(res => res.text())
      .then(data => RssParser.parse(data))
      .then((data: any) => {
        setNews(data.items as Feed[]);
      });
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
      fetcher();
    }, 1000);

    setNews(undefined);
    return () => clearTimeout(timeoutId);
    // @ts-ignore
  }, [section]);

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <DropDownPicker
          open={open}
          value={section}
          items={items}
          setOpen={setOpen}
          setValue={setSection}
          setItems={setItems}
          style={{marginBottom: root.padding}}
          listMode="SCROLLVIEW"
        />
        {news ? (
          news.map((item, index) => <NewsCard key={index} items={item} />)
        ) : (
          <Loader />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default News;
