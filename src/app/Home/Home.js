import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Constants from 'expo-constants';
// Import Swiper for image carousel on top of page
import Swiper from 'react-native-web-swiper';
// Import Ionicons for icons
import { Ionicons } from '@expo/vector-icons';
// Import components for header
import DrawerButton from 'app/Components/DrawerButton.js';
import HeaderLogo from 'app/Components/HeaderLogo.js';
import SearchBarIcon from 'app/Components/SearchBarIcon.js';
import ShoppingCartIcon from 'app/Components/ShoppingCartIcon.js';
// Import data for Bestsellers section
import BestsellersData from 'app/Home/BestsellersData.js';

// Get width of iPhone/Android screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class Home extends Component {
  // toggleDrawer is a static function that controls the drawer menu button
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };
  // toggleSearch is a static function that navigates to the search page
  toggleSearch = () => {
    this.props.navigation.navigate('Ninth');
  };
  // toggleSearch is a static function that navigates to the shopping cart page
  toggleCart = () => {
    this.props.navigation.navigate('Eleventh');
  };
  // toggleSearch is a static function that navigates to the category products page
  toggleCategoryProds= () => {
    this.props.navigation.navigate('Twelfth');
  };
  // toggleSearch is a static function that navigates to the product page
  toggleProdPage= () => {
    this.props.navigation.navigate('Thirtheenth');
  };
  // toggleSearch is a static function that navigates to the collections page
  toggleCollections = () => {
    this.props.navigation.navigate('Fourth');
  };
  // Renders cards under Bestsellers section
  _renderBestsellers(item) {
      return (
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => this.toggleProdPage()}>
            <View style={styles.card}>
              <Image source={item.img} style={styles.cardImage} />
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <SafeAreaView>
          {/* Header */}
          <View style={styles.headerContainer}>
            {/* Start of flex row for header */}
            <View style={styles.headerFlexRow}>
              {/* Drawer icon for side menu */}
              <View style={styles.menuIcon}>
                <TouchableOpacity onPress={() => this.toggleDrawer()}>
                  <DrawerButton />
                </TouchableOpacity>
              </View>
              {/* Logo */}
              <View style={styles.logoHeader}>
                <HeaderLogo />
              </View>
              {/* Search and Cart icon */}
              <View style={styles.searchCartIcon}>
                <TouchableOpacity onPress={() => this.toggleSearch()}>
                  <SearchBarIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.toggleCart()}>
                  <ShoppingCartIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Body */}
          <View style={styles.scrollContainer}>
            <ScrollView>
              {/* Start of flex column */}
              <View style={styles.bodyContainer}>
                {/* First flex column for image carousel */}
                <View style={styles.swiperContainer}>
                  <Swiper
                    from={0}
                    minDistanceForAction={0.1}
                    controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '',
                      prevTitle: '',
                    }}
                  >
                    {/* Slide 1 */}
                    <View style={styles.swiperSlide}>
                      <TouchableOpacity onPress={() => this.toggleProdPage()}>
                        <Image
                          source={require('assets/testImage1.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    {/* Slide 2 */}
                    <View style={styles.swiperSlide}>
                      <TouchableOpacity onPress={() => this.toggleProdPage()}>
                        <Image
                          source={require('assets/testImage2.png')}
                          style={{width: 350, height: 150}}
                        />
                      </TouchableOpacity>
                    </View>
                    {/* Slide 3 */}
                    <View style={styles.swiperSlide}>
                      <TouchableOpacity onPress={() => this.toggleProdPage()}>
                        <Image
                          source={require('assets/testImage3.png')}
                          style={{resizeMode: 'center'}}
                        />
                      </TouchableOpacity>
                    </View>
                  </Swiper>
                </View>
                {/* Second flex column for Collections title */}
                <View style={styles.collectionsTitleContainer}>
                  <Text style={styles.sectionTitle}>Collections</Text>
                  <TouchableOpacity onPress={() => this.toggleCollections()}>
                    <View style={styles.flexDirRow}>
                      <Text style={styles.viewMoreText}>View more </Text>
                      <Ionicons
                        name="ios-arrow-forward"
                        size={16}
                        style={styles.viewMoreIcon}
                      />
                  </View>
                  </TouchableOpacity>
                </View>
                {/* Third flex column for Collections categories */}
                {/* Row one of collections categories */}
                <View style={styles.collectionsRow}>
                  {/* Exotic Mixes */}
                  <TouchableOpacity onPress={() => this.toggleCategoryProds()}>
                    <View style={styles.categoryContainer}>
                      <Image
                        source={require('assets/exoticMixes.png')}
                      />
                      <Text style={styles.categoryText}>Exotic Mixes</Text>
                    </View>
                  </TouchableOpacity>
                  {/* Nature Beauty */}
                  <TouchableOpacity onPress={() => this.toggleCategoryProds()}>
                    <View style={styles.categoryContainer}>
                      <Image
                        source={require('assets/natureBeauty.png')}
                      />
                      <Text style={styles.categoryText}>Nature Beauty</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* Row two of collections categories */}
                <View style={styles.collectionsRow}>
                  {/* Global Treasure */}
                  <TouchableOpacity onPress={() => this.toggleCategoryProds()}>
                    <View style={styles.categoryContainer}>
                      <Image
                        source={require('assets/globalTreasure.png')}
                      />
                      <Text style={styles.categoryText}>Global Treasure</Text>
                    </View>
                  </TouchableOpacity>
                  {/* Heritage Touch */}
                  <TouchableOpacity onPress={() => this.toggleCategoryProds()}>
                    <View style={styles.categoryContainer}>
                      <Image
                        source={require('assets/heritageTouch.png')}
                      />
                      <Text style={styles.categoryText}>Heritage Touch</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                {/* Fourth flex column for Bestsellers title */}
                <Text style={styles.sectionTitle}>Bestsellers</Text>
                {/* Bestsellers horizontal ScrollView */}
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator='false'>
                  <View style={{flexDirection: 'row'}}>
                    {BestsellersData.map(item => {
                      return this._renderBestsellers(item);
                    })}
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  headerContainer: {
    height: 50
  },
  headerFlexRow: {
    flex: 1,
    flexDirection: 'row'
  },
  menuIcon: {
    width: width / 8,
    height: 50,
  },
  logoHeader: {
    width: width/8 * 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchCartIcon: {
    width: width/8 * 2,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  scrollContainer: {
    height: height,
    paddingBottom: 75
  },
  bodyContainer: {
    flex: 1,
    marginHorizontal: 10,
    flexDirection: 'column'
  },
  swiperContainer: {
    height: 300
  },
  swiperSlide: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  collectionsTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#636363',
    marginVertical: 10
  },
  flexDirRow: {
    flexDirection: 'row',
    marginTop: 20
  },
  viewMoreText: {
    fontSize: 13
  },
  viewMoreIcon: {
    width: 15,
    height: 25
  },
  collectionsRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 5
  },
  categoryContainer: {
    width: width/2 - 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F4F4'
  },
  categoryText: {
    fontStyle: 'italic',
    alignSelf: 'flex-start',
    color: '#636363'
  },
  card: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 173,
    marginEnd: 17,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#F2F2F2',
    marginBottom: 30
  },
  cardContainer: {
    justifyContent: 'center'
  },
  cardImage: {
    width: 170,
    height: 180,
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: 'center'
  },
  cardPrice: {
    color: '#636363',
    fontStyle: 'italic',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 30
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
  }
});
