import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  ActivityIndicator, Keyboard, StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {

  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const apiKey = "65f23c7aa30e95ae4cf4a700c52faf1f";
  const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchWeather = async () => {
    if (!city.trim()) return setError("Enter city name");

    setLoading(true);
    setError('');

    try {
      const res = await fetch(url + city + `&appid=${apiKey}`);
      const json = await res.json();

      if (json.cod !== 200) {
        setError("City not found");
        setLoading(false);
        return;
      }

      const type = json.weather?.[0]?.main?.toLowerCase();

      let theme = ['#4facfe','#00f2fe'];

      if (type === "clear") theme = ['#f7971e','#ffd200'];
      else if (type === "rain") theme = ['#667db6','#0082c8'];
      else if (type === "clouds") theme = ['#bdc3c7','#2c3e50'];
      else if (json.main.temp > 35) theme = ['#ff512f','#f09819'];

      setData({ ...json, theme });

      Keyboard.dismiss();
    } catch (e) {
      setError("Network error");
    }

    setLoading(false);
  };

  return (
    <LinearGradient colors={data?.theme || ['#c9d6ff','#e2e2e2']} style={styles.container}>

      {/* HEADER */}
      <Text style={styles.title}>☁️ SkyCast</Text>
      <Text style={styles.subtitle}>Smart Weather Assistant</Text>

      {/* INPUT CARD */}
      <View style={styles.inputCard}>
        <TextInput
          placeholder="Search city..."
          placeholderTextColor="#999"
          style={styles.input}
          value={city}
          onChangeText={setCity}
          onSubmitEditing={searchWeather}
        />

        <TouchableOpacity style={styles.btn} onPress={searchWeather}>
          <Text style={{ color:'#fff' }}>Search</Text>
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator color="#fff" />}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      {/* RESULT CARD */}
{data && (
  <View style={styles.card}>

    {/* CITY + TEMP */}
    <Text style={styles.city}>📍 {data.name}</Text>
    <Text style={styles.temp}>🌡️ {Math.round(data.main.temp)}°</Text>

    {/* SUB TEXT */}
    <Text style={{ color:'#fff', marginBottom:15 }}>
      🌤 Weather loaded successfully
    </Text>

    {/* AI INSIGHT BUTTON */}
    <TouchableOpacity
      style={{
        backgroundColor:'#ff6b6b',
        padding:12,
        borderRadius:12,
        marginTop:10,
        width:'100%',
        alignItems:'center'
      }}
      onPress={() => navigation.navigate("Details", { data })}
    >
      <Text style={{color:'#fff'}}>☀️ AI Weather Insight</Text>
    </TouchableOpacity>

    {/* VOICE ASSISTANT BUTTON */}
    <TouchableOpacity
      style={{
        backgroundColor:'#4facfe',
        padding:12,
        borderRadius:12,
        marginTop:10,
        width:'100%',
        alignItems:'center'
      }}
      onPress={() => navigation.navigate("AISpeaker", { data })}
    >
      <Text style={{color:'#fff'}}>🔊 Voice Assistant</Text>
    </TouchableOpacity>

    {/* TRAVEL TIPS BUTTON */}
    <TouchableOpacity
      style={{
        backgroundColor:'#2ecc71',
        padding:12,
        borderRadius:12,
        marginTop:10,
        width:'100%',
        alignItems:'center'
      }}
      onPress={() => navigation.navigate("TravelTips")}
    >
      <Text style={{color:'#fff'}}>🌍 Travel Tips</Text>
    </TouchableOpacity>

  </View>
)}

    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  container:{ flex:1, padding:20 },

  title:{
    fontSize:34,
    fontWeight:'700',
    color:'#fff',
    marginTop:50
  },

  subtitle:{
    color:'#eee',
    marginBottom:20
  },

  inputCard:{
    backgroundColor:'rgba(255,255,255,0.2)',
    padding:15,
    borderRadius:20,
    flexDirection:'row',
    alignItems:'center'
  },

  input:{
    flex:1,
    color:'#fff'
  },

  btn:{
    backgroundColor:'#000',
    padding:10,
    borderRadius:10
  },

  card:{
    marginTop:30,
    backgroundColor:'rgba(255,255,255,0.25)',
    padding:25,
    borderRadius:25,
    alignItems:'center'
  },

  city:{ fontSize:28, color:'#fff', fontWeight:'600' },

  temp:{ fontSize:60, color:'#fff', fontWeight:'200' },

  action:{
    marginTop:10,
    backgroundColor:'#000',
    padding:12,
    borderRadius:12,
    width:'100%',
    alignItems:'center'
  },

  error:{ color:'#fff', marginTop:10 }
});