import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TrafficLight() {
  const [color, setColor] = useState('red');

  const changeLight = () => {
    if (color === 'red') setColor('green');
    else if (color === 'green') setColor('yellow');
    else setColor('red');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Traffic Light</Text>

      <View style={styles.lightContainer}>
        <View style={[styles.light, { backgroundColor: color === 'red' ? 'red' : '#555' }]} />
        <View style={[styles.light, { backgroundColor: color === 'yellow' ? 'yellow' : '#555' }]} />
        <View style={[styles.light, { backgroundColor: color === 'green' ? 'green' : '#555' }]} />
      </View>

      <TouchableOpacity style={styles.button} onPress={changeLight}>
        <Text style={styles.buttonText}>Change Light</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  lightContainer: {
    backgroundColor: '#14050e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  light: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#d02aa6',
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
  },
});