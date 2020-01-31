import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BackButton from 'app/Components/BackButton.js'
import { SearchBar } from 'react-native-elements';


export default class SearchPage extends React.Component {
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    
      render() {
        const { search } = this.state;

      }
    
  render () {
    const { search } = this.state;

    return (
    <View>
        <SearchBar
        platform="android"
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
        
      />
      
        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
          <BackButton />
        </TouchableOpacity>
    </View>
    );
  }
}


