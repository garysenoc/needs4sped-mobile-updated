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
import React, { useState, useEffect, useContext } from 'react';
import colors from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from '../assets/styles/Styles';
import { Audio } from 'expo-av';
import { StateContext } from '../context/StateContext';

const Home = ({ navigation }) => {
  const [sound, setSound] = useState();

  const [data, setData] = useContext(StateContext);

  async function soundClick() {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/sounds/click.mp3'),
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    console.log('home', data);
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container]}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ScrollView
        showVerticalScrollIndicator={false}
        style={{ width }}
      >
        <View style={[styles.top_circle, { width }]}></View>
        <View style={[styles.top_circle2, { width }]}></View>

        <View style={styles.home_header}>
          <View style={styles.greeting}>
            <Text style={styles.reg_text}>Need4Sped</Text>
            <Text style={styles.primary_text}>Welcome!</Text>
          </View>
          <TouchableOpacity
            style={styles.user_con}
            onPress={() => {
              soundClick();
              navigation.navigate('Account');
            }}
          >
            <Image
              source={require('../assets/images/user.png')}
              style={[styles.user, { resizeMode: 'contain' }]}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <View style={styles.heading_con}>
            <Text style={styles.heading_reg}>LESSONS</Text>
          </View>

          <View style={styles.dashboard_halfs}>
            <TouchableOpacity
              onPress={() => {
                soundClick();
                navigation.navigate('ABC');
              }}
              activeOpacity={0.7}
              style={styles.btn_dashboard}
            >
              <LinearGradient
                style={styles.dashboard}
                colors={['#806FE5', '#5D3DE5']}
              >
                <View style={styles.label_con}>
                  <Text style={styles.top_label}>ABC</Text>
                </View>
                <Text style={styles.dashboard_title}>Letter{'\n'}Tracing</Text>
                <Image
                  source={require('../assets/images/abc.png')}
                  style={[styles.dashboard_img, { resizeMode: 'contain' }]}
                />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn_dashboard}
              onPress={() => {
                soundClick();
                navigation.navigate('Numbers');
              }}
            >
              <LinearGradient
                style={styles.dashboard}
                colors={['#FB8410', '#EF3951']}
              >
                <View style={styles.label_con}>
                  <Text style={styles.top_label}>123</Text>
                </View>
                <Text
                  style={[styles.dashboard_title, styles.dashboard_title_sm]}
                >
                  Counting{'\n'}Numbers
                </Text>
                <Image
                  source={require('../assets/images/counting.png')}
                  style={[styles.dashboard_img, { resizeMode: 'contain' }]}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.heading_con}>
            <Text style={styles.heading_reg}>EXERCISES</Text>
          </View>

          <View style={styles.dashboard_full}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn_dashboard}
              onPress={() => {
                soundClick();
                navigation.navigate('LetterRecognition');
              }}
            >
              <LinearGradient
                style={styles.dashboard_full_width}
                colors={['#00D89C', '#017C1E']}
              >
                <Image
                  source={require('../assets/images/letter.png')}
                  style={[
                    styles.dashboard_img_left_1,
                    { resizeMode: 'contain' },
                  ]}
                />

                <View style={styles.right_texts}>
                  <Text style={styles.right_title}>Letter Recognition</Text>
                  <Text style={styles.right_description}>
                    Match the given uppercase letter to its correct lowercase
                    letter.
                  </Text>
                  {/* <Text style={styles.status}>Completed 100%</Text>
                    <View style={styles.bar}>
                      <View style={[styles.barstat,styles.barstat100]}></View>
                    </View> */}
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.dashboard_full}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn_dashboard}
              onPress={() => {
                soundClick();
                navigation.navigate('ObjectRecognition');
              }}
            >
              <LinearGradient
                style={styles.dashboard_full_width}
                colors={['#FB9193', '#EF307C']}
              >
                <Image
                  source={require('../assets/images/object.png')}
                  style={[
                    styles.dashboard_img_left_1,
                    { resizeMode: 'contain' },
                  ]}
                />

                <View style={styles.right_texts}>
                  <Text style={styles.right_title}>Object Recognition</Text>
                  <Text style={styles.right_description}>
                    Identify and click the correct picture of the object
                    written.
                  </Text>
                  {/* <Text style={styles.status}>Completed 75%</Text>
                    <View style={styles.bar}>
                      <View style={[styles.barstat,styles.barstat75]}></View>
                    </View> */}
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={[styles.dashboard_full]}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn_dashboard}
              onPress={() => {
                soundClick();
                navigation.navigate('CountingObjects');
              }}
            >
              <LinearGradient
                style={styles.dashboard_full_width}
                colors={['#FEEE77', '#FF9C07']}
              >
                <Image
                  source={require('../assets/images/lesson3.png')}
                  style={[styles.dashboard_img_left, { resizeMode: 'contain' }]}
                />

                <View style={styles.right_texts}>
                  <Text style={styles.right_title}>Counting Objects</Text>
                  <Text style={styles.right_description}>
                    Count the number of objects and click the corresponding
                    number.
                  </Text>
                  {/* <Text style={styles.status}>Completed 50%</Text>
                    <View style={styles.bar}>
                      <View style={[styles.barstat,styles.barstat50]}></View>
                    </View> */}
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={[styles.dashboard_full, { marginBottom: 20 }]}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btn_dashboard}
              onPress={() => {
                soundClick();
                navigation.navigate('RandomQuiz');
              }}
            >
              <LinearGradient
                style={styles.dashboard_full_width}
                colors={['#37FFF3', '#0085FF']}
              >
                <Image
                  source={require('../assets/images/1234.png')}
                  style={[styles.dashboard_img_left, { resizeMode: 'contain' }]}
                />

                <View style={styles.right_texts}>
                  <Text style={styles.right_title}>Random Quiz</Text>
                  <Text style={styles.right_description}>
                    A combination of the previous exercises to test your overall
                    knowledge.
                  </Text>
                  {/* <Text style={styles.status}>Completed 50%</Text>
                    <View style={styles.bar}>
                      <View style={[styles.barstat,styles.barstat50]}></View>
                    </View> */}
                </View>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
