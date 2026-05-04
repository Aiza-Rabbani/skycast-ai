import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function GroceryList() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() === '') return;
    setList([...list, { id: Date.now().toString(), name: item, purchased: false }]);
    setItem('');
  };

  const togglePurchased = (id) => {
    setList(
      list.map((i) =>
        i.id === id ? { ...i, purchased: !i.purchased } : i
      )
    );
  };

  const deleteItem = (id) => {
    setList(list.filter((i) => i.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Grocery List</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter item"
          value={item}
          onChangeText={setItem}
        />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <TouchableOpacity onPress={() => togglePurchased(item.id)}>
              <Text
                style={[
                  styles.itemText,
                  item.purchased && { textDecorationLine: 'line-through', color: 'gray' },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#bf1a90',
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#cccccc',
  },
  itemText: {
    fontSize: 16,
  },
  deleteText: {
    color: 'red',
    fontWeight: 'bold',
  },
});