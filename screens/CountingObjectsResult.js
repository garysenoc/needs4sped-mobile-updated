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

const Account = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const [topicColor, setTopicColor] = useState([
    '#0BDF01',
    '#038F15',
    '#0BDF01',
    '#038F15',
  ]);
  const [score, setScore] = useState(100);

  const Topic = () => {
    var the_score = 0;
    if (score == 100) {
      var the_score = 0;
    }
    if (score >= 90 && score < 100) {
      var the_score = 0.5;
    }
    if (score >= 85 && score < 90) {
      var the_score = 0.7;
    }
    if (score >= 75 && score < 85) {
      var the_score = 1;
    }
    if (score >= 55 && score < 75) {
      var the_score = 1.5;
    }
    if (score >= 50 && score < 55) {
      var the_score = 2;
    }
    if (score >= 25 && score < 50) {
      var the_score = 2.5;
    }
    if (score >= 15 && score < 25) {
      var the_score = 3;
    }
    if (score >= 10 && score < 15) {
      var the_score = 3.6;
    }
    if (score >= 0 && score < 10) {
      var the_score = 4;
    }
    return (
      <View style={[styles.report_stat]}>
        {/* <LinearGradient
            style={styles.gradient_stat}
            // colors={['#0BDF01', '#038F15','#0BDF01', '#038F15']}   THIS IS FOR COUNTING OBJECTS
            // colors={['#FC9494', '#F9619F','#FC9494']}   THIS IS FOR OBJECT RECOGNITION
            // colors={['#FECD50', '#F5A53E','#FECD50']} THIS IS FOR LETTER RECOGNITION
            // NOTE: ADJUST THE SCALE OF GREYLAYER FOR SCORE EFFECTS. HIGHER SCORE= LOWER SCALE
  
            colors={topicColor}
          >
            <View
              style={[
                styles.greylayer,
                { transform: [{ scale: the_score }, { rotate: '90deg' }] },
              ]}
            ></View>
          </LinearGradient> */}
        {/* <View
            style={[
              styles.report_stat,
              {
                width: 120,
                height: 120,
                backgroundColor: 'white',
                borderRadius: 360,
              },
            ]}
          >
            <Text style={{ fontFamily: 'mulish_bold', fontSize: 36 }}>
              {score}
            </Text>
          </View> */}
      </View>
    );
  };

  const openLetter = () => {
    setTopicColor(['#0BDF01', '#038F15', '#0BDF01', '#038F15']);
    setScore(100);
  };
  const openObject = () => {
    setTopicColor(['#FC9494', '#F9619F', '#FC9494']);
    setScore(75);
  };
  const openCounting = () => {
    setTopicColor(['#FECD50', '#F5A53E', '#FECD50']);
    setScore(50);
  };

  return (
    <View style={[styles.container, { width }]}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
      />

      <View style={[styles.top_design]}>
        <Image
          source={require('../assets/images/curve.png')}
          style={[styles.curveimg, styles.curveimg1]}
        />
        <Image
          source={require('../assets/images/curve.png')}
          style={[styles.curveimg, styles.curveimg2]}
        />
        <Image
          source={require('../assets/images/curve.png')}
          style={[styles.curveimg, styles.curveimg3]}
        />
        <Image
          source={require('../assets/images/curve.png')}
          style={[styles.curveimg, styles.curveimg4]}
        />
        <Image
          source={require('../assets/images/curve.png')}
          style={[styles.curveimg, styles.curveimg5]}
        />
        <Image
          source={require('../assets/images/curve.png')}
          style={[styles.curveimg, styles.curveimg6]}
        />
      </View>

      <View style={[styles.main, { width, paddingBottom: 30 }]}>
        <View style={styles.topnav}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.7}
          >
            <AntDesign
              name='arrowleft'
              style={{
                fontSize: 28,
                color: 'white',
                alignSelf: 'flex-start',
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontFamily: 'mon_bold',
              fontSize: 16,
              paddingRight: 20,
            }}
          >
            Counting Objects Result
          </Text>
          <Text></Text>
        </View>
        <View
          style={[
            styles.user_con,
            {
              width: 140,
              height: 140,
              borderRadius: 360,
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}
        >
          <Image
            source={require('../assets/images/user1.png')}
            style={[
              styles.user,
              { resizeMode: 'contain', width: 120, height: 120 },
            ]}
          />
        </View>
        <Text
          style={{
            fontFamily: 'opensans_xbold',
            color: 'white',
            letterSpacing: 1,
            fontSize: 24,
          }}
        >
          Michael
        </Text>
        <View style={[styles.center_box, { height: 290, borderRadius: 30 }]}>
          <Text
            style={{
              fontFamily: 'mulish_bold',
              fontSize: 18,
              marginBottom: 30,
            }}
          >
            Check Your Progress
          </Text>

          {/* <Topic /> */}

          <View style={[styles.topics_bar, { marginBottom: 10 }]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LetterRecognitionResult')}
              style={styles.topic}
            >
              <Text style={styles.topic_text}>Letter{'\n'}Recognition</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ObjectRecogntionResult')}
              style={styles.topic}
            >
              <Text style={styles.topic_text}>Object{'\n'}Recognition</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.topics_bar, { marginBottom: 10 }]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CountingObjectsResult')}
              style={styles.topic}
            >
              <Text style={styles.topic_text}>Counting{'\n'}Objects</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('RandomQuizResult')}
              style={styles.topic}
            >
              <Text style={styles.topic_text}>Random{'\n'}Quiz</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.bottom_buttons_full, { width: '90%' }]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditAccount')}
            style={[
              styles.bottom_btn,
              styles.bottom_btn_full,
              {
                paddingVertical: 14,
                backgroundColor: '#383660',
                borderRadius: 30,
                marginBottom: 15,
              },
            ]}
            activeOpacity={0.7}
          >
            <Text style={styles.bottom_btn_text}>Edit Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Welcome')}
            style={[
              styles.bottom_btn,
              styles.bottom_btn_full,
              { paddingVertical: 14, borderRadius: 30 },
            ]}
            activeOpacity={0.7}
          >
            <Text style={styles.bottom_btn_text}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Account;

