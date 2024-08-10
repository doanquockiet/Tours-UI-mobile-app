import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './HomeScreenStyle';
import CATEGORY from '../config/CATEGORY';
import { RootStackParamList } from '../../App';
import { TourCategory } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import ADVANTURES from '../config/ADVANTURES';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <View style={styles.wrap}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>
            Discover
          </Text>
          <Image style={styles.img_avt} source={require('../../assets/image/Avatar.png')} />
        </View>

        <ScrollView style={styles.scrollView} horizontal>
          {CATEGORY.map((category: TourCategory, index: number) => (
            <TouchableOpacity
              style={styles.touchOPT}
              key={category.id}
              onPress={() => setActiveCategory(index)}
            >
              <Text style={[styles.catetitle, activeCategory === index ? { color: 'blue' } : { color: 'black' }]}>
                {category.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={{ fontSize: 20, color: 'black' }}>
          {CATEGORY[activeCategory].tours.length + ' '}
          {CATEGORY[activeCategory].title}
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={280}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          pagingEnabled
        >
          {CATEGORY[activeCategory].tours.map((tour, index) => (
            <TouchableOpacity
              style={styles.touchOPTImg}
              key={index}
              onPress={() => navigation.navigate('DetailTravel', { tour })}
            >
              <View style={styles.wrapImg}>
                <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                  <Ionicons name="heart" color={'#fff'} size={40} style={{ margin: 10 }} />
                </TouchableOpacity>
                <Text style={styles.textImg}>{tour.title}</Text>
              </View>
              <Image style={{ width: '100%', height: '100%' }} source={tour.image} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center' }}>
          <Text style={styles.feeling}>Feeling Adventurous? </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: '500', marginTop: 20, color: 'blue' }}>Show All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal pagingEnabled style={{ marginVertical: 20 }} showsHorizontalScrollIndicator={false}>
          {ADVANTURES.map((advanture) => (
            <TouchableOpacity 
              key={advanture.id} 
              style={{ marginRight: 20, padding: 10, alignItems: 'center' }}
            >
              <View style={styles.advantures}>
                <Image style={{ width: '100%', height: '100%', marginTop: 10 }} resizeMode='contain' source={advanture.image} />
              </View>
              <Text style={styles.titleAdv}>{advanture.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
