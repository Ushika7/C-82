import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
          <SafeAreaView style = {styles.droidSafeArea}/>
          <View style={styles.cardContainer}>
          <View style={styles.storyImage}>
            <Image source={require("../assets/story_image_1.png")} style={{
              resizeMode: 'contain',
              width: Dimensions.get('window').width-60,
              height: 250,
              borderRadius: 10
            }}>

            </Image>
            </View>
            <View style={styles.titleContainer}>
            <View style={styles.titleTextContainer}>
            <View style={styles.storyTitle}>
              <Text style={styles.storyTitleText}>{this.props.story.title}</Text>
              </View>
              <View style={styles.storyAuthor}>
              <Text style={styles.storyAuthorText}>{this.props.story.Author}</Text>
              </View>
              </View>
              </View>
              <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionText}>{this.props.story.description}</Text>
              </View>
              <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
              <View style={styles.likeIcon}>
                <Ionicons name = {"heart"} size={30} color={"white"} style={{width:30, marginLeft: 20, marginTop:5}}/>

              </View>
              <View>
                <Text style={styles.likeText}>12k</Text>
              </View>
              </View>
              </View>
              </View>
              

          <Text style={{ color: "white" }}>Story Card!</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
