import {
  View,
  Text,
  useWindowDimensions,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from '../assets/styles/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState, useEffect } from 'react';
import { random_questions } from '../database/random';
import axios from 'axios';
import ls from 'react-native-local-storage';

const RandomQuiz = ({ navigation }) => {
  const [bg, setBg] = useState('white');
  const [iconColor, setIconColor] = useState('black');
  const [box_value_change, setCol] = useState('');

  const [countDown, setCountDown] = React.useState(5);
  const [startTimer, setTimer] = React.useState(true);
  const [checkerScore, setCheckerScore] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setItemNo(0);
    ls.get('id').then((data) => {
      setMyId(data);
    });
  }, []);

  const [myId, setMyId] = useState('');
  useEffect(() => {
    let timer = setInterval(() => {
      if (startTimer) {
        setCountDown(countDown > -1 ? countDown - 1 : -1);
      }
      if (itemNo > random_questions.length) {
        alert(`Finish. Your score is ${score}`);

        onFinish();
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
          category: 'random quiz',
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

    alert(`Finish. Your score is ${score}`);

    navigation.navigate('Home');
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

  const [imgshow, setBoxContent] = useState('none');
  const [showletter, setShowLetter] = useState('flex');
  const [buttontext, setButtonText] = useState('Word Card');
  const [showtitle, setShowTitle] = useState(0);

  const Change = () => {
    if (imgshow == 'none') {
      setBoxContent('flex');
      setShowLetter('none');
      setButtonText('Number Card');
      setShowTitle(1);
    } else {
      setBoxContent('none');
      setShowLetter('flex');
      setButtonText('Word Card');
      setShowTitle(0);
    }
  };

  const { width } = useWindowDimensions();

  const [itemNo, setItemNo] = useState(0);

  const [question, setQuestion] = useState(
    random_questions[itemNo].question_object,
  );
  const [choice1, setChoice1] = useState(random_questions[itemNo].choice1);
  const [choice2, setChoice2] = useState(random_questions[itemNo].choice2);
  const [choice3, setChoice3] = useState(random_questions[itemNo].choice3);
  const [choice4, setChoice4] = useState(random_questions[itemNo].choice4);

  const [answer, setAnswer] = useState(random_questions[itemNo].answer);
  const [chooseAnswer, setChooseAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [btnText, setBtnText] = useState('Good!');
  const [btn_action, setBtnAction] = useState(null);
  const numLimit = random_questions.length - 1;
  const [next, setNext] = useState(false);

  const [rightAns, setRightAns] = useState('');
  const [wrongAns, setWrongAns] = useState('');

  const nextItem = () => {
    const num = itemNo + 1;
    setItemNo(num);
    setChoice1(random_questions[num].choice1);
    setChoice2(random_questions[num].choice2);
    setChoice3(random_questions[num].choice3);
    setChoice4(random_questions[num].choice4);
    setAnswer(random_questions[num].answer);
    setQuestion(random_questions[num].question_object);
  };

  const selectedAns = (ans) => {
    if (ans == answer) {
      setBtnAction(true);
      setBtnText('Good!');
      setNext(true);
      setRightAns(answer);
      setWrongAns('');
      if (checkerScore == true) {
        setScore(score + 1);
      }
      setCheckerScore(true);
    } else {
      setBtnAction(false);
      setCheckerScore(false);
      setBtnText('Oops! Try Again');
      setNext(false);
      setWrongAns(ans);
    }
  };

  const clickedBtn = (next) => {
    if (next == true) {
      if (itemNo < numLimit) {
        nextItem();
        setBtnAction(null);
      } else {
        setBtnText('Finish');
        setNext('finish');
      }
    } else if (next == 'finish') {
      navigation.navigate('Complete2');
    } else {
      setBtnAction(null);
    }
    setRightAns('');
    setWrongAns('');
  };

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
        <Text style={{ marginBottom: '-8%', color: 'white', fontSize: 20 }}>
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
        <View style={styles.object_title}>
          <Text style={styles.object_text}>
            {random_questions[itemNo].question_object}
          </Text>
        </View>
        <View style={[styles.choices, { width: '95%' }]}>
          {/* If correct */}
          <TouchableOpacity
            onPress={() => selectedAns('1')}
            activeOpacity={0.7}
            style={[
              styles.btnchoice,
              {
                width: '47%',
                height: 145,
                backgroundColor:
                  rightAns == '1'
                    ? '#A7F4A3'
                    : wrongAns == '1'
                    ? '#F7C6C8'
                    : '#fff',
              },
            ]}
          >
            <Image
              source={choice1}
              style={[
                styles.choice_img,
                { width: 105, opacity: chooseAnswer === '1' ? 0.7 : 1 },
              ]}
            />
          </TouchableOpacity>
          {/* If Wrong */}
          <TouchableOpacity
            onPress={() => selectedAns('2')}
            activeOpacity={0.7}
            style={[
              styles.btnchoice,
              {
                width: '47%',
                height: 145,
                backgroundColor:
                  rightAns === '2'
                    ? '#A7F4A3'
                    : wrongAns == '2'
                    ? '#F7C6C8'
                    : '#fff',
              },
            ]}
          >
            <Image
              source={choice2}
              style={[
                styles.choice_img,
                { width: 105, opacity: chooseAnswer === '2' ? 0.7 : 1 },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectedAns('3')}
            activeOpacity={0.7}
            style={[
              styles.btnchoice,
              {
                width: '47%',
                height: 145,
                backgroundColor:
                  rightAns === '3'
                    ? '#A7F4A3'
                    : wrongAns == '3'
                    ? '#F7C6C8'
                    : '#fff',
              },
            ]}
          >
            <Image
              source={choice3}
              style={[
                styles.choice_img,
                { width: 105, opacity: chooseAnswer === '3' ? 0.7 : 1 },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => selectedAns('4')}
            activeOpacity={0.7}
            style={[
              styles.btnchoice,
              {
                width: '47%',
                height: 145,
                backgroundColor:
                  rightAns === '4'
                    ? '#A7F4A3'
                    : wrongAns == '4'
                    ? '#F7C6C8'
                    : '#fff',
              },
            ]}
          >
            <Image
              source={choice4}
              style={[
                styles.choice_img,
                { width: 105, opacity: chooseAnswer === '4' ? 0.7 : 1 },
              ]}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.bottom_buttons_full_random, { height: 80 }]}>
          {btn_action !== null && (
            <TouchableOpacity
              onPress={() => {
                clickedBtn(next);
              }}
              style={[
                styles.bottom_btn,
                styles.bottom_btn_full,
                {
                  alignItems: 'center',
                  width: '95%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  paddingVertical: 20,
                  position: 'relative',
                },
              ]}
              activeOpacity={0.7}
            >
              <Text style={[styles.bottom_btn_text, { fontSize: 20 }]}>
                {btnText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default RandomQuiz;

