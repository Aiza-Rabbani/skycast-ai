import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TravelTipsScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>🌍 Travel Tips</Text>

      <Text style={styles.text}>
        • Check weather before travel{"\n"}
        • Carry water always{"\n"}
        • Avoid extreme heat hours{"\n"}
        • Keep emergency essentials
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#000', padding:20 },
  title:{ fontSize:26, color:'#fff', marginBottom:20 },
  text:{ color:'#ccc', fontSize:16, lineHeight:24 }
});