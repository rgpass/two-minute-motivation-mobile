import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { shape } from 'prop-types'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#158CBA',
    borderRadius: 20,
    height: height * 0.2,
    width: width * 0.9,
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
})

const Next = props => (
  <View style={[props.containerStyle, styles.container]}>
    <TouchableOpacity
      onPress={() => console.warn('pressed')}
      style={styles.button}
    >
      <Text style={[props.textStyle, styles.text]}>Next</Text>
    </TouchableOpacity>
  </View>
)

Next.propTypes = {
  containerStyle: shape,
  textStyle: shape,
}

Next.defaultProps = {
  containerStyle: {},
  textStyle: {},
}

export default Next
