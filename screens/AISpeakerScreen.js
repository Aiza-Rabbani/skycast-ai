import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';
import { LinearGradient } from 'expo-linear-gradient';

export default function AISpeakerScreen({ route }) {

  const { data } = route.params;

  const type = data.weather?.[0]?.main?.toLowerCase();

  let advice = "🌤 Normal weather, stay safe";

  if (type === "clear") advice = "☀️ Sunny day! Wear sunglasses & enjoy sunshine";
  if (type === "rain") advice = "🌧 Rain incoming! Take umbrella & enjoy the vibes";
  if (type === "clouds") advice = "☁️ Cloudy skies, perfect for chill walk";
  if (data.main.temp > 35) advice = "🔥 Very hot! Stay hydrated & avoid sun";

  const speak = () => {
    Speech.speak(`Weather in ${data.name}. ${advice.replace(/🌤|☀️|🌧|☁️|🔥/g,'')}`);
  };

  return (
    <LinearGradient colors={['#141e30','#243b55']} style={styles.container}>

      <Text style={styles.title}>🤖 AI Voice Assistant</Text>

      <View style={styles.card}>
        <Text style={styles.city}>📍 {data.name}</Text>
        <Text style={styles.advice}>{advice}</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={speak}>
        <Text style={{ color:'#fff', fontSize:16 }}>🔊 Speak Weather</Text>
      </TouchableOpacity>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },

  title:{
    fontSize:28,
    color:'#fff',
    fontWeight:'bold',
    marginBottom:20
  },

  card:{
    backgroundColor:'rgba(255,255,255,0.12)',
    padding:25,
    borderRadius:20,
    width:'100%',
    alignItems:'center',
    borderWidth:1,
    borderColor:'rgba(255,255,255,0.2)'
  },

  city:{
    fontSize:22,
    color:'#fff',
    marginBottom:10
  },

  advice:{
    color:'#ddd',
    fontSize:16,
    textAlign:'center'
  },

  btn:{
    marginTop:25,
    backgroundColor:'#ff7e5f',
    padding:15,
    borderRadius:15,
    width:'80%',
    alignItems:'center'
  }
});