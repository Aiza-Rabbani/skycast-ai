import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet } from 'react-native';

export default function LiveSearch() {
  const books = [
    'Harry Potter',
    'Lord of the Rings',
    'The Hobbit',
    'Game of Thrones',
    'The Hunger Games',
    'Twilight',
    'Percy Jackson',
    'Divergent',
    'The Maze Runner',
    'Eragon'
  ];

  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(books);

  useEffect(() => {
    const result = books.filter((book) =>
      book.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  }, [query]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Search</Text>

      <TextInput
        style={styles.input}
        placeholder="Search books..."
        placeholderTextColor="#888"
        value={query}
        onChangeText={setQuery}
      />

      {filtered.length === 0 ? (
        <Text style={styles.noResults}>No results found</Text>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    marginVertical: 20, 
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5', 
    borderRadius: 8
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#0f0b0e',
    textAlign: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#932262',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  item: { 
    fontSize: 18, 
    paddingVertical: 6, 
    paddingHorizontal: 10,
    backgroundColor: '#bc38a6',
    marginVertical: 3,
    borderRadius: 5,
    color: '#ddccd6'
  },
  noResults: {
    fontSize: 16,
    color: '#c62828',
    textAlign: 'center',
    marginTop: 10
  }
});