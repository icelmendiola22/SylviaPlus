import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class OrderDetails extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Order details Page</Text>
        <Text>(Detailed info about the order)</Text>
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
