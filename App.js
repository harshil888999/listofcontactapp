import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ContactListScreen from './src/contactListScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ContactListScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
