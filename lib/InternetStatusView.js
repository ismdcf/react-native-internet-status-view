/**
 * Created by Ismail M.I.M
 *
 *
 */

'use strict'

import {
    Text,
    NetInfo,
    Animated,
    Easing
} from 'react-native'
const React = require('react')
const styles = require('./InternetStatusViewStyles')
const DEFAULT_COMPONENT_HEIGHT = 25

var componentHeight = 0
var InternetStatusView = React.createClass({
  componentWillMount: function () {
    if (this.props.style) {
      componentHeight = this.props.style.height || DEFAULT_COMPONENT_HEIGHT
    }
    NetInfo.isConnected.fetch().done((isConnected) => { this._updateConnectionStatus(isConnected) })
    NetInfo.isConnected.addEventListener('change', this._updateConnectionStatus)
  },
  componentWillUnmount () {
    NetInfo.isConnected.removeEventListener('change', this._updateConnectionStatus)
  },
  _updateConnectionStatus (isConnected) {
    this.setState({isConnected})
    this.animateErrorView(isConnected)
  },
  getInitialState: function () {
    return {
      isConnected: true,
      heightValue: new Animated.Value(0)
    }
  },
  animateErrorView (visibility) {
    if (!visibility) {
      Animated.timing(
                this.state.heightValue,
        {
          toValue: componentHeight,
          easing: Easing.linear,
          duration: 400
        }
            ).start()
    } else {
      Animated.timing(
                this.state.heightValue,
        {
          toValue: 0,
          easing: Easing.linear,
          duration: 400
        }
            ).start()
    }
  },
  render () {
    var textToDisplay = this.props.textToDisplay || 'No Internet Connection'
    var errorTextContainer = this.props.style || styles.errorTextContainer
    return (
      <Animated.View style={[errorTextContainer, {height: this.state.heightValue}]} >
        <Text style={styles.errorTextShow}>{textToDisplay}</Text>
      </Animated.View>
    )
  }
})

module.exports = InternetStatusView
