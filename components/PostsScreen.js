import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Button } from 'react-native';
import useFetch from '../hooks/useFetch'; // adjust path if your hook is elsewhere

export default function PostsScreen() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  // State to control how many posts are visible
  const [visibleCount, setVisibleCount] = useState(10);

  // Function to load more posts
  const loadMorePosts = () => {
    if (data) {
      setVisibleCount(prev => Math.min(prev + 10, data.length));
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 20 }} />;
  }

  if (error) {
    return <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>

      <FlatList
        data={data ? data.slice(0, visibleCount) : []} // Safe slicing
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={[styles.cardTitle, { color: '#ffffff' }]}>{item.title}</Text>
            <Text style={{ color: '#f0f0f0' }}>{item.body}</Text>
          </View>
        )}
        onEndReached={loadMorePosts}       // Load more posts when scrolling
        onEndReachedThreshold={0.5}
      />

      {/* Optional button to load more manually */}
      {data && visibleCount < data.length && (
        <Button title="Load More Posts" onPress={loadMorePosts} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 15, paddingHorizontal: 10 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  card: {
    backgroundColor: '#b01782',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  cardTitle: { fontWeight: 'bold', marginBottom: 5, fontSize: 16 },
});