import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AboutUs extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Contact Us</Text>
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
