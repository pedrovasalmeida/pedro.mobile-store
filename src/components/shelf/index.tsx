import React from 'react';
import {View, FlatList} from 'react-native';
import {ShelfCard} from './card';
import tailwind from 'twrnc';

interface ShelfProps {
  cardWidth: string;
  navigation: any;
  products: Array<any>;
}

export const Shelf: React.FC<ShelfProps> = ({
  cardWidth,
  navigation,
  products,
}: ShelfProps) => {
  return (
    <FlatList
      horizontal
      ItemSeparatorComponent={() => <View style={tailwind`w-4`} />}
      data={products}
      renderItem={({item}) => (
        <ShelfCard
          key={item}
          cardWidth={cardWidth}
          navigation={navigation}
          hasDiscount={Math.ceil(Math.random()) === 1}
        />
      )}
    />
  );
};
