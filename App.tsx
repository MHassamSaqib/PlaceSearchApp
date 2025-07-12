import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { PlaceProvider } from './context/PlaceContext';
import MapComponent from './components/MapComponent';
import SearchComponent from './components/SearchComponent';
import HistoryComponent from './components/HistoryComponent';

export default function App() {
  return (
    <PlaceProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <SearchComponent />
        </View>
        <View style={styles.mapContainer}>
          <MapComponent />
        </View>
        <View style={styles.historyContainer}>
          <HistoryComponent />
        </View>
      </SafeAreaView>
    </PlaceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 10,
    zIndex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  historyContainer: {
    padding: 10,
    maxHeight: 200,
  },
});
