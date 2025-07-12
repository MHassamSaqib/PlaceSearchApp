import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PlaceContext = createContext();

export const PlaceProvider = ({ children }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    loadSearchHistory();
  }, []);

  useEffect(() => {
    saveSearchHistory();
  }, [searchHistory]);

  const loadSearchHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('searchHistory');
      if (history) {
        setSearchHistory(JSON.parse(history));
      }
    } catch (error) {
      console.error('Error loading search history:', error);
    }
  };

  const saveSearchHistory = async () => {
    try {
      await AsyncStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    } catch (error) {
      console.error('Error saving search history:', error);
    }
  };

  const addToHistory = (place) => {
    setSearchHistory((prev) => {
      const updatedHistory = [place, ...prev.filter((item) => item.id !== place.id)].slice(0, 10);
      return updatedHistory;
    });
  };

  return (
    <PlaceContext.Provider value={{ selectedPlace, setSelectedPlace, searchHistory, addToHistory }}>
      {children}
    </PlaceContext.Provider>
  );
};