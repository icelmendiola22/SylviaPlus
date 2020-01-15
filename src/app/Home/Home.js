import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MenuButton from 'app/DrawerNavigator/MenuButton.js'

export default class Home extends Component {
  // toggleDrawer is a static function that controls the drawer menu button
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };

  render () {
    return (
      // Drawer menu button
      <View>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <MenuButton />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Not using this style so might need to delete later on
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
});
