import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DetailScreen({ route }) {

  const { data } = route.params;

  const type = data.weather?.[0]?.main?.toLowerCase();

  let msg = "🌤 Balanced weather, enjoy your day!";
  let emoji = "🌤️";

  if (type === "clear") {
    msg = "☀️ Perfect sunny day! Great for photos & outdoor fun!";
    emoji = "☀️";
  }

  if (type === "rain") {
    msg = "🌧 Rainy vibes! Stay cozy, enjoy tea & umbrella walks!";
    emoji = "🌧️";
  }

  if (type === "clouds") {
    msg = "☁️ Soft cloudy sky, peaceful weather for relaxation!";
    emoji = "☁️";
  }

  if (data.main.temp > 35) {
    msg = "🔥 Very hot weather! Stay hydrated & avoid sunlight!";
    emoji = "🔥";
  }

  return (
    <LinearGradient colors={['#ffecd2','#fcb69f']} style={styles.container}>

      <Text style={styles.title}>🧠 AI Weather Insight</Text>

      <View style={styles.card}>
        <Text style={styles.city}>📍 {data.name}</Text>
        <Text style={styles.temp}>{Math.round(data.main.temp)}°C</Text>

        <Text style={styles.msg}>{emoji} {msg}</Text>
      </View>

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
    fontSize:26,
    fontWeight:'bold',
    marginBottom:20
  },

  card:{
    backgroundColor:'rgba(255,255,255,0.6)',
    padding:25,
    borderRadius:25,
    width:'100%',
    alignItems:'center'
  },

  city:{
    fontSize:22,
    fontWeight:'bold'
  },

  temp:{
    fontSize:50,
    fontWeight:'200',
    marginVertical:10
  },

  msg:{
    fontSize:16,
    textAlign:'center',
    marginTop:10
  }
});