import { View, Text, useWindowDimensions, StatusBar,StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import {styles} from '../assets/styles/Styles'
import React, { useState, useEffect }  from 'react'
import {Audio} from 'expo-av';

const Lesson1 = ({navigation}) => {

  const {width}= useWindowDimensions();

  const [sound, setSound] = useState();
  async function soundClick() {
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/sounds/click.mp3')
    );
    setSound(sound);
    await sound.playAsync(); 
  }
  return (
    <View style={[styles.container,{width,backgroundColor:'white'}]}>
      <StatusBar  backgroundColor={'transparent'} translucent={true}  />
        
        <Image source={require('../assets/images/lesson1a.png')} style={[styles.lesson_img1]}/>
        <Image source={require('../assets/images/lesson1b.png')} style={[styles.lesson_img2]}/>
      <View style={[styles.main,styles.complete_con,{width, paddingBottom:30}]}>
      
      <View style={{justifyContent:'center',alignItems:'center',marginTop:-30}}>
          <Text style={{
            fontFamily:'mon_bold', 
            color:'#fff', 
            fontSize:20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -1 },
            shadowOpacity:  1,
            textShadowRadius: 15,
            elevation: 2,
            paddingBottom:10,
            }}>Lesson 1</Text>
          <Text style={{
            fontFamily:'mon_bold', 
            color:'#fff', 
            fontSize:28,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -1 },
            shadowOpacity:  1,
            textShadowRadius: 15,
            elevation: 2,
            }}>Letter Recognition</Text>
        </View>
      <Image source={require('../assets/images/lesson1.png')} style={[styles.lesson_img]}/>

        
        <View style={[styles.bottom_buttons_full,{width:'90%'}]}>
           
            <TouchableOpacity  
             onPress={ () =>{soundClick(); navigation.navigate('LetterRecognition'); }}
            style={[
              styles.bottom_btn,
              styles.bottom_btn_full,
              {paddingVertical:14,borderRadius: 15}
              ]} activeOpacity={0.7}>
              <Text style={styles.bottom_btn_text}>Start Now!</Text>
            </TouchableOpacity> 
        </View>
      </View>

    </View>
  )
}


export default Lesson1;