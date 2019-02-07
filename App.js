import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { createTabNavigator } from 'react-navigation';
import EstadoCuenta  from './src/components/EstadoCuenta';
import Dashboard from './src/components/Dashboard';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Dashboard/>
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
