import {
  View,
  Text,
  useWindowDimensions,
  TextInput,
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
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

import React, { useState, useEffect } from 'react';

const EditAccount = ({ navigation }) => {
  const { width } = useWindowDimensions();

  const [image, setImage] = useState(null);

  const handleChoosePhoto = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const [gender, setGender] = useState('Male');
  const [male, setMale] = useState('#383660');
  const [female, setFemale] = useState('#383660');

  const Male = () => {
    setGender('Male');
    setMale('#E8545C');
    setFemale('#383660');
  };
  const Female = () => {
    setGender('Female');
    setFemale('#E8545C');
    setMale('#383660');
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
              Edit Account
            </Text>
            <Text></Text>
          </View>

          <View style={styles.account_form}>
            {/* <View style={styles.account_field}>
              <Text style={styles.acc_field_label}>Photo</Text>
              <View style={{flexDirection: 'column'}}>
                <View style={styles.accoung_img_con}>
                  {image && <Image source={{ uri: image }} style={[styles.account_img, styles.account_img_pick]} />}
                  <Image source={require('../assets/images/account.png')} style={[styles.account_img]}/>
                </View>
                <TouchableOpacity onPress={handleChoosePhoto} >
                  <Text style={styles.upload_btn}>Upload Image</Text>
                </TouchableOpacity>
              </View>
            </View> */}
            <View style={[styles.account_field, { alignItems: 'center' }]}>
              <Text style={styles.acc_field_label}>Username</Text>
              <TextInput
                style={styles.field_value}
                placeholderTextColor={'white'}
                defaultValue='Michael'
                placeholder='your username...'
              />
            </View>
            <View style={[styles.account_field]}>
              <Text style={styles.acc_field_label}>Gender</Text>
              <TouchableOpacity
                onPress={Male}
                style={[
                  styles.gender,
                  { backgroundColor: male, marginRight: 20 },
                ]}
              >
                <Ionicons
                  name='male'
                  style={{
                    fontSize: 18,
                    color: 'white',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={Female}
                style={[styles.gender, { backgroundColor: female }]}
              >
                <Ionicons
                  name='female'
                  style={{
                    fontSize: 18,
                    color: 'white',
                  }}
                />
              </TouchableOpacity>
              <TextInput
                name='gender'
                value={gender}
                style={{ display: 'none' }}
              />
            </View>
            <View style={[styles.account_field, { alignItems: 'center' }]}>
              <Text style={styles.acc_field_label}>Age</Text>
              <TextInput
                style={styles.field_value}
                placeholderTextColor={'white'}
                defaultValue='8'
                placeholder='your age...'
              />
            </View>
            <View style={[styles.account_field, { alignItems: 'center' }]}>
              <Text style={styles.acc_field_label}>Email</Text>
              <TextInput
                textContentType='emailAddress'
                keyboardType='email-address'
                style={styles.field_value}
                placeholderTextColor={'white'}
                defaultValue='michaelyori@gmail.com'
                placeholder='your email...'
              />
            </View>
            <View style={[styles.account_field, { alignItems: 'center' }]}>
              <Text style={styles.acc_field_label}>Old Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.field_value}
                placeholderTextColor={'white'}
                defaultValue='thisispasword'
                placeholder='Username'
              />
            </View>
            <View style={[styles.account_field, { alignItems: 'center' }]}>
              <Text style={styles.acc_field_label}>New Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.field_value}
                placeholderTextColor={'white'}
                defaultValue='newpasword'
                placeholder='Username'
              />
            </View>
          </View>

          <View style={[styles.bottom_buttons_full, { width: '92%' }]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Account')}
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
              <Text style={styles.bottom_btn_text}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Account')}
              style={[
                styles.bottom_btn,
                styles.bottom_btn_full,
                { paddingVertical: 14, borderRadius: 30 },
              ]}
              activeOpacity={0.7}
            >
              <Text style={styles.bottom_btn_text}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditAccount;
