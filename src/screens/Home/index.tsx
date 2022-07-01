import {Shelf} from '@/components/shelf';
import React from 'react';
import {
  ImageBackground,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import tailwind from 'twrnc';

interface HomeProps {
  navigation: any;
}

export const Home: React.FC<HomeProps> = ({navigation}: HomeProps) => {
  const dimensions = useWindowDimensions();

  return (
    <ScrollView style={tailwind`w-full h-full`}>
      <View style={tailwind`bg-zinc-900 w-full h-full pb-12`}>
        <View style={tailwind`w-full h-60 mb-8`}>
          <SwiperFlatList
            autoplay
            pagingEnabled
            showPagination
            autoplayDelay={5}
            autoplayLoop
            data={[0, 1, 2, 3, 4]}
            style={tailwind`w-full h-full`}
            renderItem={({item}) => (
              <View key={item} style={tailwind`w-full`}>
                <ImageBackground
                  source={{uri: 'https://fakeimg.pl/1000/'}}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{width: dimensions.width, height: 256}}
                  resizeMode="cover"
                  resizeMethod="scale"
                />
              </View>
            )}
          />
        </View>
        <View style={tailwind`w-full h-80 mb-8`}>
          <Shelf
            cardWidth={'w-54'}
            navigation={navigation}
            products={[0, 1, 2, 3]}
          />
        </View>
        <View style={tailwind`w-full h-80`}>
          <Shelf
            cardWidth={'w-54'}
            navigation={navigation}
            products={[0, 1, 2, 3]}
          />
        </View>
        <View style={tailwind`w-full h-60 mt-8`}>
          <SwiperFlatList
            autoplay
            pagingEnabled
            showPagination
            autoplayDelay={5}
            autoplayLoop
            data={[0, 1, 2, 3, 4]}
            style={tailwind`w-full h-full`}
            renderItem={({item}) => (
              <View key={item} style={tailwind`w-full`}>
                <ImageBackground
                  source={{uri: 'https://fakeimg.pl/1000/'}}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{width: dimensions.width, height: 256}}
                  resizeMode="cover"
                  resizeMethod="scale"
                />
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};
