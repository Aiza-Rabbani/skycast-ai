import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(60);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running && seconds > 0) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    if (seconds === 0) {
      Alert.alert('Time is up!');
      setRunning(false);
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running, seconds]);

  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setSeconds(60);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countdown Timer</Text>
      <Text style={styles.time}>{seconds}s</Text>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#4CAF50' }]} onPress={start}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: '#F44336' }]} onPress={pause}>
          <Text style={styles.buttonText}>Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor:  '#FF9800'  }]} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginVertical: 20 },
  title: { fontSize: 20, fontWeight: 'bold' },
  time: { fontSize: 40, marginVertical: 10 },
  row: { flexDirection: 'row', width: '80%', justifyContent: 'space-between' },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});