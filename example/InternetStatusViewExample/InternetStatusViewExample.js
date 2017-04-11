/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';


var InternetStatusView = require('react-native-internet-status-view');


export default class InternetStatusViewExample extends Component {
    render() {
        return (
            <View style={styles.container}>
                <InternetStatusView
                    textToDisplay="Sorry You're Not Connected to the Internet"
                    />
                <View style={styles.innerContainer}>
                    <Text style={styles.welcome}>
                        Turn Of Internet Connection to View the Callout
                    </Text>

                    <Text style={styles.instructions}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Text>
                </View>
               </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        margin: 10,
    },
    innerContainer:{
        height:Dimensions.get('window').height * 0.8,
        backgroundColor: '#fff',
    }
});

AppRegistry.registerComponent('InternetStatusViewExample', () => InternetStatusViewExample);
