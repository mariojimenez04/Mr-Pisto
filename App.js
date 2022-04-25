import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
      <Text style={styles.d_flex_1}>Texto 1
         <Text>Texto 2</Text>
      </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    contenedor: {
      marginHorizontal: 30
    },
    d_flex_1: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column'
    },
});

export default App;
