import React from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Tour } from '../types';

type DetailTravelRouteProp = RouteProp<RootStackParamList, 'DetailTravel'>;

type Props = {
  route: DetailTravelRouteProp;
};

export default function DetailTravel({ route }: Props) {
  const { tour } = route.params;
  const navigation = useNavigation(); // Use navigation prop to handle navigation

  return (
    <>
      <ScrollView>
        <ImageBackground source={tour.image} style={{ width: '100%', height: 500 }}>
          <SafeAreaView>
            <View style={{ paddingHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row', height: '100%' }}>
              <TouchableOpacity 
                style={{ 
                  width: 40, 
                  height: 40, 
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  borderRadius: 20 
                }}
                onPress={() => navigation.goBack()}  // Attach goBack to the back button
              >
                <Ionicons name="chevron-back" size={24} color="white" />
              </TouchableOpacity>

              <View style={{ alignItems: 'center', justifyContent: 'space-between', paddingBottom: 80 }}>
                <TouchableOpacity 
                  style={{ 
                    width: 40, 
                    height: 40, 
                    backgroundColor: '#fff', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    borderRadius: 20 
                  }}
                >
                  <Ionicons name="heart-outline" size={24} color="blue" />
                </TouchableOpacity>
                <View>
                  {tour.images.map((galleryImage, index) => (
                    <TouchableOpacity 
                      key={index}
                      style={{ 
                        width: 60, 
                        height: 60, 
                        backgroundColor: '#fff', 
                        padding: 5, 
                        borderRadius: 10, 
                        marginBottom: 10 
                      }}
                    >
                      <Image source={galleryImage.image} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>

        <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 30, bottom: 30 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              {tour.title}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{tour.price}</Text>
              <Text>/person</Text>
            </View>
          </View>

          <View style={{ marginVertical: 10 }}>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <TouchableOpacity style={{ paddingVertical: 10, marginRight: 10 }}>
                <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20 }}>Overview</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ paddingVertical: 10, marginRight: 10 }}>
                <Text>Reviews</Text>
              </TouchableOpacity>
            </View>

            <View style={{ marginBottom: 20, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ 
                  backgroundColor: 'white', 
                  shadowOffset: { width: 5, height: 10 }, 
                  shadowRadius: 5, 
                  padding: 5, 
                  borderRadius: 5, 
                  marginRight: 10, 
                  shadowOpacity: 0.25 
                }}>
                  <Ionicons name="time" size={24} color="blue" />
                </View>
                <View style={{ marginRight: 20 }}>
                  <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Duration</Text>
                  <Text style={{ fontWeight: '500', fontSize: 14 }}>{tour.duration}</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ 
                  backgroundColor: 'white', 
                  shadowOffset: { width: 5, height: 10 }, 
                  shadowRadius: 5, 
                  padding: 5, 
                  borderRadius: 5, 
                  marginRight: 10, 
                  shadowOpacity: 0.25 
                }}>
                  <Ionicons name="star" size={24} color="blue" />
                </View>
                <View style={{ marginRight: 20 }}>
                  <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Rating</Text>
                  <Text style={{ fontWeight: '500', fontSize: 14 }}>{tour.rating} out of 5</Text>
                </View>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Description</Text>
              <Text>{tour.description}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={{ 
        position: 'absolute', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        padding: 20, 
        backgroundColor: 'blue', 
        borderRadius: 30, 
        width: '100%', 
        height: 80, 
        alignItems: 'center' 
      }}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#fff', marginBottom: 20 }}>Book Now</Text>
        </View>
      </View>
    </>
  );
}
