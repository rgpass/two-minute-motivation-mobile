import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { func } from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#158CBA',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
  },
})

class Next extends Component {
  constructor(props) {
    super(props)

    const { height, width } = Dimensions.get('window')

    this.state = {
      height: height * 0.2,
      width: width * 0.9,
    }

    this.onLayout = this.onLayout.bind(this)
  }

  onLayout() {
    const { height, width } = Dimensions.get('window')

    this.setState({
      height: height * 0.2,
      width: width * 0.9,
    })
  }

  render() {
    const { onLayout } = this
    const { containerStyle, onPress, textStyle } = this.props
    const { height, width } = this.state

    return (
      <View onLayout={onLayout} style={[containerStyle, styles.container]}>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button, { height, width }]}
        >
          <Text style={[textStyle, styles.text]}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Next.propTypes = {
  onPress: func.isRequired,
  containerStyle: View.propTypes.style,
  textStyle: Text.propTypes.style,
}

Next.defaultProps = {
  containerStyle: {},
  textStyle: {},
}

export default Next
