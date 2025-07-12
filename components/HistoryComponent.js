import React, { useContext } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { PlaceContext } from '../context/PlaceContext';

const HistoryComponent = () => {
  const { searchHistory, setSelectedPlace } = useContext(PlaceContext);

  const handleHistorySelect = (place) => {
    setSelectedPlace(place);
  };

  return (
    <View style={styles.historyContainer}>
      <Text style={styles.historyTitle}>Search History</Text>
      <FlatList
        data={searchHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.historyItem}
            onPress={() => handleHistorySelect(item)}
          >
            <Text style={styles.historyText}>{item.name}</Text>
            <Text style={styles.historyAddress}>{item.address}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  historyContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    maxHeight: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  historyText: {
    fontSize: 14,
    fontWeight: '500',
  },
  historyAddress: {
    fontSize: 12,
    color: '#666',
  },
});

export default HistoryComponent;