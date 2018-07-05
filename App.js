import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { createTabNavigator } from 'react-navigation';
import EstadoCuenta  from './src/components/EstadoCuenta';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <EstadoCuenta/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
