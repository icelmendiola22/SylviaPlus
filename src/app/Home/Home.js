import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

import MenuButton from 'app/DrawerNavigator/MenuButton.js'


export default class Home extends Component {
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };
  render () {
    return (
      <View>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <MenuButton />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
