import { View, Text, useWindowDimensions, StatusBar, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { colors } from '../assets/styles/Styles'
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import {Audio} from 'expo-av';

const Welcome = ({navigation}) => {
  
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
    <View style={[styles.container,{width}]}>
      <StatusBar  backgroundColor={'transparent'} translucent={true}  />
        <View style={styles.imgcon}>
          <Image source={require('../assets/images/welcome_screen1.png')} style={[styles.image, { resizeMode: 'contain'}]}/>
        </View>
        <View style={styles.texts}>
          <Text style={styles.title}>Learn to read and write</Text>
          <Text style={styles.descriptions}>Make learning easy for children{'\n'}with special needs.</Text>
        </View>
        <TouchableOpacity  
          activeOpacity={.5}
          onPress={ () =>{soundClick(); navigation.navigate('Welcome2'); }}
        >
          <LinearGradient
            style={styles.ovalbtn}  
            colors={['#fbb040', '#ef4136']}
            
            >
            <Text style={styles.ovalbtnText}> Next</Text>
            <Entypo name='chevron-thin-right' 
                style={{
                  fontSize: 12,
                   paddingLeft: 25,
                   paddingRight: 5,
                   right: 0,
                  color: colors.white,
                  
                  
             }} />
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.steps}>
             <View style={[styles.step,styles.stepActive]}></View>
             <View style={styles.step}></View>
             <View style={styles.step}></View>
        </View>

        <View style={styles.bottom_imgcon}>
          <Image source={require('../assets/images/welcome_screen1.png')} style={[styles.bottom_image, { resizeMode: 'contain'}]}/>
        </View>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colors.mainbg,
    
  },
  imgcon: {
    width: '100%'
  },
  image: {
      justifyContent: 'center',
      margin: 'auto',
      width: '100%',
      transform: [{scale:1.2}],
  },
  texts: {
    justifyContent: 'center',
    width: '100%',
    marginTop: '-25%',
    position: 'relative',
    marginBottom:30,
    
  },
  title: {
      fontSize: 32,
      maxWidth: '60%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 15,
      color: colors.white,
      textAlign: 'center',
      fontFamily: 'mulish_black',
      letterSpacing: 1,
  },
  descriptions: {
      color: colors.white,
      textAlign: 'center',
      fontSize: 14,
      letterSpacing:1,
      fontFamily: 'mulish_regular',
      lineHeight:22,
      
  },
  ovalbtn:{
    marginTop:30,
    paddingVertical:14,
    paddingHorizontal: 25,
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: { width: 10, height: 5 },
    shadowColor: 'black',
    borderRadius: 30,
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor : "#0000",
    zIndex:1,
    
    
    
  },
  ovalbtnText: {
    color: colors.white,
    paddingLeft:25,
    fontFamily: 'mulish_semibold',
    fontWeight:'700',
    letterSpacing:1,
    zIndex:100,
    
  },
  steps: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,

  },
  step : {
    padding: 4,
    borderRadius:50,
    backgroundColor: colors.white,
    marginHorizontal:1.5,
    opacity: 0.5,
  },
  stepActive: {
    paddingVertical: 4,
    paddingHorizontal:9,
    opacity:1,
    opacity: .9,
  },
  bottom_imgcon: {
    position: 'absolute',
    bottom: '-57%',
    maxWidth: '100%',
    transform: [{scale: 1.5}],
    opacity: 0.5,
    zIndex: -1
  },
  bottom_image:{
    maxWidth: '100%',
  }

});


export default Welcome;