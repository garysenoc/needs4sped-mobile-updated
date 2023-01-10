import {
  View,
  Text,
  useWindowDimensions,
  StatusBar,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { colors } from '../assets/styles/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import { StateContext } from '../context/StateContext';
import ls from 'react-native-local-storage';

const Login = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [data, setData] = useContext(StateContext);

  const login = async () => {
    try {
      if (!username || !password) {
        alert('Fill up all the fields.');
        console.log(username, password);
        return;
      }

      const res = await axios.post(
        'http://192.168.1.16:5000/api/user/login-user',
        {
          email: username,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      // console.log(res.data.data.UserAccount);
      setData(res.data.data.UserAccount);
      ls.save('id', res.data.data.UserAccount._id).then(() => {
        ls.get('id').then((data) => {
          console.log('get: ', data);
        });
        // output should be "get: Kobe Bryant"
      });

      console.log('data', data);
      navigation.navigate('Home');
    } catch (e) {
      console.log(e.response.data);
      alert('Invalid crdentials');
    }
  };

  return (
    <View style={[styles.container, { width }]}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ScrollView
        showVerticalScrollIndicator={false}
        style={{ width }}
      >
        <Image
          source={require('../assets/images/Vector-1.png')}
          style={[styles.login_img1, { resizeMode: 'contain' }]}
        />
        <Image
          source={require('../assets/images/Vector.png')}
          style={[styles.login_img2, { resizeMode: 'contain' }]}
        />
        <View style={styles.logpage}>
          <Image
            source={require('../assets/images/logo1.png')}
            style={[styles.logo, { resizeMode: 'contain' }]}
          />
          <View style={[styles.logform, { width }]}>
            <Text style={styles.form_title}>LOGIN</Text>
            <View style={styles.form_fields}>
              <View style={styles.field_con}>
                <Text style={styles.field_label}>Username</Text>
                <TextInput
                  style={styles.field}
                  onChangeText={(text) => {
                    setUserName(text);
                  }}
                />
              </View>
              <View style={styles.field_con}>
                <Text style={styles.field_label}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.field}
                  onChangeText={(text) => {
                    setPassword(text);
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.form_btn}
                activeOpacity={0.5}
                onPress={() => {
                  // navigation.navigate('Home');
                  login();
                }}
              >
                <Text style={styles.form_btn_text}>Login</Text>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity  
              style={styles.google_btn}
              activeOpacity={.5}
              onPress={() => navigation.navigate('Home')}
                >
                <Image source={require('../assets/images/google.png')} style={[styles.google_logo]}/>
                <Text style={styles.googlebtn_text}>Login with Google</Text>
          </TouchableOpacity> */}
            <Text
              style={{
                fontFamily: 'mulish_bold',
                fontSize: 12,
                marginTop: '5%',
              }}
            >
              Don't Have an account yet? Sign Up!
            </Text>
            <TouchableOpacity
              style={[styles.form_btn, { alignSelf: 'center' }]}
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Signup')}
            >
              <Text style={[styles.form_btn_text]}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colors.mainbg,
  },
  login_img1: {
    position: 'absolute',
    width: '60%',
    top: 30,
    left: 0,
    opacity: 0.8,
  },
  login_img2: {
    position: 'absolute',
    width: '70%',
    top: 60,
    right: 40,
    opacity: 0.8,
    transform: [{ scale: 1.3 }],
  },
  logpage: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 110,
    marginTop: 0,
    marginBottom: -20,
  },
  logform: {
    paddingVertical: 40,
    paddingHorizontal: 45,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  form_title: {
    fontFamily: 'mulish_black',
    color: '#000',
    fontSize: 26,
    letterSpacing: 1,
    paddingBottom: 20,
  },
  form_fields: {
    width: '100%',
  },
  field_con: {
    width: '100%',
    paddingVertical: 10,
  },
  field_label: {
    fontFamily: 'opensans_regular',
    alignContent: 'flex-start',
    fontSize: 12,
    letterSpacing: 1,
    paddingBottom: 10,
  },
  field: {
    backgroundColor: '#F5F7FB',
    borderRadius: 10,
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  form_btn: {
    backgroundColor: '#7352F9',
    borderRadius: 30,
    paddingVertical: 12,
    width: '37%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  form_btn_text: {
    color: 'white',
    fontFamily: 'mulish_bold',
    fontSize: 14,
    letterSpacing: 1,
  },
  google_btn: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: -1, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 4,
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    position: 'relative',
    marginTop: 40,
    marginBottom: 50,
  },
  google_logo: {
    position: 'absolute',
    top: 14,
    resizeMode: 'contain',
    left: '10%',
    width: 20,
  },
  googlebtn_text: {
    fontFamily: 'roboto_med',
    color: '#000',
    fontSize: 14,
  },
});

export default Login;
