import React, { useContext, useRef } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PlaceContext } from '../context/PlaceContext';

const MapComponent = () => {
  const { selectedPlace } = useContext(PlaceContext);
  const mapRef = useRef(null);

  const initialRegion = {
    latitude: 37.7749, // Default to San Francisco
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  if (selectedPlace && mapRef.current) {
    mapRef.current.animateToRegion({
      latitude: selectedPlace.latitude,
      longitude: selectedPlace.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  }

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={initialRegion}
    >
      {selectedPlace && (
        <Marker
          coordinate={{
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
          }}
          title={selectedPlace.name}
          description={selectedPlace.address}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default MapComponent;