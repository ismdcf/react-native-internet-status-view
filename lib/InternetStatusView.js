/**
 * Created by Ismail M.I.M
 *
 * Version: 0.0.0
 *
 */

'use strict';

const React = require('react');
import {
    Text,
    View,
    NetInfo,
    Animated,
    Easing

} from 'react-native';

const styles = require('./InternetStatusViewStyles');

var InternetStatusView = React.createClass({
    componentWillMount: function () {
        NetInfo.isConnected.fetch().done((isConnected) => {this._updateConnectionStatus(isConnected)});
        NetInfo.isConnected.addEventListener('change',this._updateConnectionStatus);
    },
    componentWillUnmount(){
        NetInfo.isConnected.removeEventListener('change',this._updateConnectionStatus);
    },
    _updateConnectionStatus(isConnected){
        this.setState({isConnected});
        this.animateErrorView(isConnected);
    },
    getInitialState: function () {
        return {
            isConnected: true,
            heightValue: new Animated.Value(0),
        }
    },
    animateErrorView(visibility){
        if (!visibility){
            Animated.timing(
                this.state.heightValue,                 
                {
                    toValue: 25,
                    easing: Easing.linear,
                    duration: 400
                }
            ).start();
        }else {
            Animated.timing(
                this.state.heightValue,                 
                {
                    toValue: 0,
                    easing: Easing.linear,
                    duration: 400
                }
            ).start();
        }

    },
    render(){
        var textToDisplay = this.props.textToDisplay != null ? this.props.textToDisplay : "No Internet Connection" ;
        return (
            <Animated.View style={[styles.errorTextContainer,{height:this.state.heightValue}]} >
                <Text style={styles.errorTextShow}>{textToDisplay}</Text>
            </Animated.View>
        );
    }
});

module.exports = InternetStatusView;