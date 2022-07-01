import {ScreensName} from '@/screens';
import {colors} from '@/styles/globals';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import tailwind from 'twrnc';

interface ShelfCardProps {
  cardWidth: string;
  navigation: any;
  hasDiscount: boolean;
}

export const ShelfCard: React.FC<ShelfCardProps> = ({
  cardWidth,
  navigation,
  hasDiscount,
}: ShelfCardProps) => {
  return (
    <View
      style={tailwind`${cardWidth} h-full ${colors.defaultBackground} items-center justify-between rounded-2xl border ${colors.defaultBorder}`}>
      <TouchableOpacity style={tailwind`pb-4 w-full h-38 relative`}>
        {hasDiscount && (
          <View
            style={tailwind`absolute right-0 top-0 items-center justify-center bg-red-700 w-22 h-8 z-10 rounded-tr-2xl rounded-bl-2xl`}>
            <Text
              style={tailwind`${colors.defaultText} font-bold text-base text-center`}>
              40% OFF
            </Text>
          </View>
        )}
        <Image
          source={{uri: 'https://fakeimg.pl/1000/'}}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: '100%', height: '100%', borderRadius: 16}}
          resizeMode="cover"
          resizeMethod="scale"
        />
      </TouchableOpacity>
      <TouchableOpacity style={tailwind`w-full items-center justify-center `}>
        <Text style={tailwind`font-bold text-2xl ${colors.defaultText}`}>
          Título do produto
        </Text>
        <View style={tailwind`items-center py-4 justify-center`}>
          <Text style={tailwind`font-bold text-sm line-through text-blue-200`}>
            R$ 999,99
          </Text>
          <Text style={tailwind`font-bold text-2xl ${colors.defaultText}`}>
            R$ 599,99
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={tailwind`items-center justify-center py-4 bg-blue-700 w-full rounded-bl-2xl rounded-br-2xl`}
        onPress={() =>
          navigation?.navigate(ScreensName.products.defaultScreenName, {
            screen: ScreensName.products.details,
          })
        }>
        <Text
          style={tailwind`font-bold text-center ${colors.defaultText} w-full`}>
          Adicionar ao carrinho
        </Text>
      </TouchableOpacity>
    </View>
  );
};
