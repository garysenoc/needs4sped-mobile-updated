import {
  View,
  Text,
  useWindowDimensions,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';

import colors from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from '../assets/styles/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import ls from 'react-native-local-storage';

const Account = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const [topicColor, setTopicColor] = useState([
    '#0BDF01',
    '#038F15',
    '#0BDF01',
    '#038F15',
  ]);
  const [score, setScore] = useState(100);
  const [myId, setMyId] = useState('');
  const [scores, setScores] = useState([]);
  const [predictResult, setPredictResult] = useState();

  //   useEffect(getData, []);

  const res = useRef(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    ls.get('id').then((data) => {
      setMyId(data);
    });

    // axios
    //   .post(
    //     'http://192.168.1.16:5000/api/score/get-score',
    //     {
    //       userId: myId,
    //     },
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //       },
    //     },
    //   )
    //   .then((response) => {
    //     // console.log(response.data.data.letterRecognition);
    //     // console.log(response.data.regressionData.resultLetterRecognition[1]);
    //     setScores(response?.data?.data?.letterRecognition);
    //     setPredictResult(
    //       response?.data?.data?.regressionData?.resultLetterRecognition[1],
    //     );
    //     setLoading(false);

    //     // setScores(response.data.data);

    //     // console.log(predictResult);

    //     // console.log(scores);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // getData();
    // getDataPredict();

    // axios
    //   .post(
    //     'http://192.168.1.16:5000/api/score/get-score',
    //     {
    //       userId: myId,
    //     },
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Accept: 'application/json',
    //       },
    //     },
    //   )
    //   .then((response) => {
    //     // console.log(response.data.data.letterRecognition);
    //     console.log(response?.data.regressionData.resultLetterRecognition[1]);
    //     setScores(response?.data?.data?.letterRecognition);
    //     setPredictResult(
    //       response?.data.regressionData.resultLetterRecognition[1],
    //     );
    //     // console.log(predictResult);

    //     // console.log(scores);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    return () => {
      console.log(scores);
    };
  }, []);

  const getData = () => {
    console.log(myId);
    axios
      .post(
        'http:192.168.1.8:8080/api/score/get-score',
        {
          userId: myId,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      )
      .then((response) => {
        console.log(response?.data?.data);
        setScores(response?.data?.data?.randomQuiz);
        setPredictResult(response?.data?.data?.predictRandomQuiz);

        // setScores(response.data.data);

        // console.log(predictResult);

        // console.log(scores);
      })
      .catch((err) => {
        console.log(err);
      });
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

      <View style={{ flexDirection: 'row' }}></View>

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
            Random Quiz Result
          </Text>
          <Text></Text>
        </View>
        <View
          style={[
            styles.center_box,
            {
              height: 'auto',
              borderRadius: 30,
              marginBottom: '90%',
              flex: 1,
            },
          ]}
        >
          <Text style={{ marginTop: 20, fontSize: 25 }}>Result</Text>

          <View style={{ flexDirection: 'column', flex: 1, height: 'auto' }}>
            {scores?.map((value, key) => {
              return (
                <View
                  style={{ flexDirection: 'row' }}
                  key={key}
                >
                  <Text style={{ fontSize: 20 }}>Score: </Text>
                  <Text style={{ fontSize: 20 }}> {value.score}</Text>
                </View>
              );
            })}

            <View>
              <Text style={{ fontSize: 25, marginTop: 20 }}>
                Predicted next score: {predictResult}
              </Text>
            </View>
            <Button
              onPress={() => {
                getData();
              }}
              title=' Get Data'
            />
          </View>

          {/* <Topic /> */}
        </View>
      </View>
    </View>
  );
};

export default Account;

