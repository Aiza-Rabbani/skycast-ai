import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 2000);
  }, []);

  return (
    <LinearGradient colors={['#0f2027','#203a43','#2c5364']} style={styles.container}>
      <Text style={styles.title}>☁️ SkyCast</Text>
      <Text style={styles.sub}>AI Weather Intelligence</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', alignItems:'center' },
  title:{ fontSize:40, color:'#fff', fontWeight:'700' },
  sub:{ color:'#ccc', marginTop:10, fontSize:14 }
});