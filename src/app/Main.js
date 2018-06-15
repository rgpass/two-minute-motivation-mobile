import React from 'react'
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native'

const { height, width } = Dimensions.get('window')

const Main = () => (
  <View style={styles.container}>
    <View style={[styles.centered, styles.titleContainer]}>
      <Text style={[styles.font, styles.titleText]}>Two-Minute Motivation</Text>
    </View>
    <View style={[styles.centered, styles.actionContainer]}>
      <Text style={[styles.font, styles.actionText]}>
        Clean your computer screen
      </Text>
    </View>
    <View style={[styles.centered, styles.nextContainer]}>
      <TouchableOpacity
        onPress={() => console.warn('pressed')}
        style={styles.nextButton}
      >
        <Text style={[styles.font, styles.nextButtonText]}>Next</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 2.5,
    paddingTop: 10,
    justifyContent: 'flex-end',
  },
  titleText: {
    fontSize: 48,
    textAlign: 'center',
  },
  actionContainer: {
    flex: 4,
  },
  actionText: {
    fontSize: 24,
    textAlign: 'center',
  },
  nextContainer: {
    flex: 2,
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#158CBA',
    borderRadius: 20,
    height: height * 0.2,
    width: width * 0.9,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 24,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontFamily: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
    }),
  },
})

export default Main
