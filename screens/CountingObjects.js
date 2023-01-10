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
import { counting_objects } from '../database/counting_objects';
import axios from 'axios';
import ls from 'react-native-local-storage';

const CountingObjects = ({ navigation }) => {
  const [bg, setBg] = useState('white');
  const [iconColor, setIconColor] = useState('black');
  const [box_value_change, setCol] = useState('');

  const [countDown, setCountDown] = React.useState(3);
  const [startTimer, setTimer] = React.useState(true);
  const [checkerScore, setCheckerScore] = useState(true);
  const [score, setScore] = useState(0);

  const [myId, setMyId] = useState('');

  useEffect(() => {
    setItemNo(0);
    ls.get('id').then((data) => {
      setMyId(data);
    });
  }, []);

  useEffect(() => {
    let timer = setInterval(() => {
      if (startTimer) {
        setCountDown(countDown > -1 ? countDown - 1 : -1);
      }
    }, 1000);
    if (countDown == 0) {
      setCountDown(-1);
      console.log(countDown - 1);

      alert(`Finish. Your score is ${score}`);

      onFinish();
    }

    return () => {
      clearInterval(timer);
    };
  }, [countDown, startTimer]);

  const resetCountDown = () => {
    setCountDown(60);
  };

  const onFinish = () => {
    console.log(myId);
    axios
      .post(
        'http://192.168.1.16:5000/api/score/create-score',
        {
          userId: myId,
          score: score,
          category: 'counting objects',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    // alert(`Finish. Your score is ${score}`);

    navigation.navigate('Complete3');
  };

  const onPress = () => {
    if (bg == 'white') {
      setBg('#EE2D7B');
      setIconColor('white');
      setCol({
        color: '#fff',
        textShadowColor: 'black',
        textShadowRadius: 5,
        textShadowOffset: { width: 1, height: 1 },
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      });
    } else {
      setBg('white');
      setIconColor('black');
      setCol('');
    }
  };

  const [bg2, setBg2] = useState('white');
  const [iconColor2, setIconColor2] = useState('black');
  const onPress2 = () => {
    if (bg2 == 'white') {
      setBg2('#EE2D7B');
      setIconColor2('white');
    } else {
      setBg2('white');
      setIconColor2('black');
    }
  };

  const [bg3, setBg3] = useState('white');
  const [iconColor3, setIconColor3] = useState('black');
  const onPress3 = () => {
    if (bg3 == 'white') {
      setBg3('#EE2D7B');
      setIconColor3('white');
    } else {
      setBg3('white');
      setIconColor3('black');
    }
  };

  const { width } = useWindowDimensions();

  const [itemNo, setItemNo] = useState(0);
  const [question, setQuestion] = useState(
    counting_objects[itemNo].question_number,
  );
  const [choice1, setChoice1] = useState(counting_objects[itemNo].choice1);
  const [choice2, setChoice2] = useState(counting_objects[itemNo].choice2);
  const [choice3, setChoice3] = useState(counting_objects[itemNo].choice3);
  const [choice4, setChoice4] = useState(counting_objects[itemNo].choice4);
  const [choice5, setChoice5] = useState(counting_objects[itemNo].choice5);
  const [choice6, setChoice6] = useState(counting_objects[itemNo].choice6);

  const [answer, setAnswer] = useState(counting_objects[itemNo].answer);

  const [chooseAnswer, setChooseAnswer] = useState('');

  const [isCorrect, setIsCorrect] = useState(null);

  const [btnText, setBtnText] = useState('Submit');

  const [backColor, setBackColor] = useState('E8545C');
  const numLimit = counting_objects.length - 1;
  const nextItem = () => {
    const num = itemNo + 1;
    setItemNo(num);
    setChoice1(counting_objects[num].choice1);
    setChoice2(counting_objects[num].choice2);
    setChoice3(counting_objects[num].choice3);
    setChoice4(counting_objects[num].choice4);
    setChoice5(counting_objects[num].choice5);
    setChoice6(counting_objects[num].choice6);
    setAnswer(counting_objects[num].answer);

    setQuestion(counting_objects[num].question_number);
  };

  const actionButton = () => {
    if (btnText == 'Submit') {
      if (chooseAnswer == answer) {
        setIsCorrect(true);

        setBackColor('E8545C');
        if (checkerScore == true) {
          setScore(score + 1);
        }

        if (itemNo < numLimit) {
          setBtnText('Next');
        } else {
          setBtnText('Finish');
        }
      } else {
        setCheckerScore(false);
        setIsCorrect(false);
        setBtnText('Go Back');
        setBackColor('F19336');
      }
    } else if (btnText == 'Finish') {
      alert(`Finish. Your score is ${score}`);
      navigation.navigate('Complete3');
    } else if (btnText == 'Next') {
      setBtnText('Submit');
      setChooseAnswer('');
      nextItem();
      setIsCorrect(null);
      setBackColor('E8545C');
    } else {
      setIsCorrect(null);
      setChooseAnswer('');
      setBtnText('Submit');
      setBackColor('E8545C');
    }
  };

  const chosen = (
    <LinearGradient
      style={{
        width: '100%',
        position: 'absolute',
        zIndex: -1,
        height: '100%',
        transform: [{ scale: 1.7 }, { rotate: '-45deg' }],
      }}
      colors={['#22E5E6', '#B38DE4']}
    />
  );

  return (
    <View style={[styles.container, { width }]}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
      />

      <View style={[styles.circles]}>
        <View style={[styles.circle, styles.circle1]}></View>
        <View style={[styles.circle, styles.circle2]}></View>
        <View style={[styles.circle, styles.circle3]}></View>
        <View style={[styles.circle, styles.circle4]}></View>
        <View style={[styles.circle, styles.circle5]}></View>
        <View style={[styles.circle, styles.circle6]}></View>
        <View style={[styles.circle, styles.circle7]}></View>
      </View>

      <View style={[styles.main, { width, paddingBottom: 30 }]}>
        <Text style={{ marginBottom: '-23%', color: 'white', fontSize: 20 }}>
          {parseInt(countDown / 60)}: {countDown % 60}
        </Text>
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
              }}
            />
          </TouchableOpacity>
          <Text style={{ color: 'white', fontFamily: 'mon_bold' }}>
            {itemNo + 1}/{numLimit + 1}
          </Text>
          <View style={styles.right_navbtns}>
            <TouchableOpacity
              onPress={onPress3}
              activeOpacity={0.7}
              style={[styles.navbtn, { backgroundColor: bg3 }]}
            >
              <Image
                source={require('../assets/images/sound.png')}
                style={[
                  styles.btnicon,
                  { resizeMode: 'contain', tintColor: iconColor3 },
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.center_box_exercises}>
          {isCorrect && (
            <>
              <Text
                style={[styles.box_title, { color: '#F19336', fontSize: 18 }]}
              >
                Awesome!
              </Text>
              <Text
                style={[
                  styles.box_title,
                  {
                    color: '#000',
                    fontFamily: 'mon_semibold',
                    fontSize: 12,
                    top: 55,
                  },
                ]}
              >
                Proceed to the next number.
              </Text>
            </>
          )}
          {isCorrect === false && (
            <>
              <Text
                style={[styles.box_title, { color: '#F19336', fontSize: 18 }]}
              >
                Oops!
              </Text>
              <Text
                style={[
                  styles.box_title,
                  {
                    color: '#000',
                    fontFamily: 'mon_semibold',
                    fontSize: 12,
                    top: 55,
                  },
                ]}
              >
                Can you try that again?
              </Text>
            </>
          )}
          <View style={styles.box_content}>
            {/* if correct */}
            {isCorrect && (
              <Image
                source={require('../assets/images/abc/correct.png')}
                style={[styles.box_value_img, { width: '50%', marginTop: 50 }]}
              />
            )}
            {/* if wrong */}
            {isCorrect === false && (
              <Image
                source={require('../assets/images/abc/wrong.png')}
                style={[styles.box_value_img, { width: '50%', marginTop: 50 }]}
              />
            )}

            {isCorrect === null && (
              <Image
                source={question}
                style={[styles.box_value_img, { width: '70%', marginTop: 0 }]}
              />
            )}
          </View>
        </View>
        {/* CHOISES */}
        <View style={styles.choices}>
          <TouchableOpacity
            onPress={() => setChooseAnswer('1')}
            activeOpacity={0.7}
            style={[styles.btnchoice, { overflow: 'hidden' }]}
          >
            {chooseAnswer === '1' && chosen}
            <Image
              source={choice1}
              style={[styles.choice_img]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setChooseAnswer('2')}
            activeOpacity={0.7}
            style={[styles.btnchoice, { overflow: 'hidden' }]}
          >
            {chooseAnswer === '2' && chosen}
            <Image
              source={choice2}
              style={[styles.choice_img]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setChooseAnswer('3')}
            activeOpacity={0.7}
            style={[styles.btnchoice, { overflow: 'hidden' }]}
          >
            {chooseAnswer === '3' && chosen}
            <Image
              source={choice3}
              style={[styles.choice_img]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setChooseAnswer('4')}
            activeOpacity={0.7}
            style={[styles.btnchoice, { overflow: 'hidden' }]}
          >
            {chooseAnswer === '4' && chosen}
            <Image
              source={choice4}
              style={[styles.choice_img]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setChooseAnswer('5')}
            activeOpacity={0.7}
            style={[styles.btnchoice, { overflow: 'hidden' }]}
          >
            {chooseAnswer === '5' && chosen}
            <Image
              source={choice5}
              style={[styles.choice_img]}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setChooseAnswer('6')}
            activeOpacity={0.7}
            style={[styles.btnchoice, { overflow: 'hidden' }]}
          >
            {chooseAnswer === '6' && chosen}
            <Image
              source={choice6}
              style={[styles.choice_img]}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.bottom_buttons_full}>
          <TouchableOpacity
            onPress={() => actionButton()}
            style={[
              styles.bottom_btn,
              styles.bottom_btn_full,
              { backgroundColor: '#' + backColor },
            ]}
            activeOpacity={0.7}
          >
            <Text style={styles.bottom_btn_text}>{btnText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CountingObjects;
