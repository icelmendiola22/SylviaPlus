import React, { Component } from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DrawerButton from 'app/Components/DrawerButton.js';
import { NavigationActions } from 'react-navigation';

export default class Pref extends Component {
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };

  render () {
    return (
    <View>
      <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <DrawerButton />
      </TouchableOpacity>
      <Text style={styles.txt}>Preferences</Text>
      <Text style={styles.txt}>Orders and Returns</Text>
      <Text style={styles.txt}>Change Account Information</Text>
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
  txt: {
    fontFamily: 'serif',
    fontWeight: 'bold',
    fontSize: 18,
    height: 21,
    alignItems: 'center',
    letterSpacing: 0.01,
    color: '#636363',
    marginTop: 40,
    marginBottom: 18,
    marginLeft: 5,
  }
});
