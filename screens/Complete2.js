import {
  View,
  Text,
  useWindowDimensions,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import colors from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from '../assets/styles/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState, useEffect } from 'react';

const Complete2 = ({ navigation }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
      />

      <LinearGradient
        colors={['#FCC70E', '#FCC70E', '#D4A86C']}
        style={[styles.complete_circle1, { opacity: 0.7 }]}
      />
      <LinearGradient
        colors={['#FCC70E', '#FCC70E', '#D4A86C']}
        style={[styles.complete_circle2, { opacity: 0.7 }]}
      />

      <View
        style={[styles.main, styles.complete_con, { width, paddingBottom: 30 }]}
      >
        <Image
          source={require('../assets/images/complete2.png')}
          style={[styles.complete_img, { width: '85%' }]}
        />

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: 'mon_bold',
              color: '#FFF853',
              fontSize: 34,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -1 },
              shadowOpacity: 1,
              textShadowRadius: 15,
              elevation: 2,
            }}
          >
            Congratulations!
          </Text>
          <Text
            style={{
              fontFamily: 'opensans_semibold',
              letterSpacing: 1,
              paddingHorizontal: 26,
              lineHeight: 22,
              marginTop: 15,
              textAlign: 'center',
              color: 'white',
              fontSize: 12,
            }}
          >
            You have successfully completed the second lesson. Your’e almost
            there!
          </Text>
        </View>
        <View style={[styles.bottom_buttons_full, { width: '90%' }]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Lesson3')}
            style={[
              styles.bottom_btn,
              styles.bottom_btn_full,
              {
                paddingVertical: 14,
                backgroundColor: '#383660',
                borderRadius: 15,
                marginBottom: 15,
              },
            ]}
            activeOpacity={0.7}
          >
            <Text style={styles.bottom_btn_text}>Lesson 3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={[
              styles.bottom_btn,
              styles.bottom_btn_full,
              { paddingVertical: 14, borderRadius: 15 },
            ]}
            activeOpacity={0.7}
          >
            <Text style={styles.bottom_btn_text}>Go back to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Complete2;
