import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CategoryProducts extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Category Products</Text>
        <Text>(List of products in this category)</Text>
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
