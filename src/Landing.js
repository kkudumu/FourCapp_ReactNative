import React from 'react';
import { View, Text, Platform, ImageBackground, Image, Dimensions } from 'react-native';
import { Button } from 'native-base';

var myBackground = require('../assets/landing.jpg');
var logoImage = require('../assets/newlogo2.png');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class Landing extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <ImageBackground 
            style={styles.container} 
            source={myBackground}>
            <Image style={styles.logoHeader} source={logoImage}>
            </Image>
                <Text 
                style={styles.welcomeText}>
                Providing Services to Families, Children and Seniors 
                </Text>
                <Text 
                style={styles.welcomeText2}>
                Pay your fees, apply for subsidies, schedule appointments, and more!
                </Text>
                    <View style={styles.viewStyle}>
                    <Button
                        full
                        style={styles.buttonStyle}
                        onPress={() => this.props.switchScreen("login")}
                    >
                        <Text style={styles.buttonText}>Get Started</Text>
                    </Button>
                    </View>
            </ImageBackground>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        marginTop: Platform.OS === "android" ? 24 : 0
    },
    logoHeader: {
        marginTop: 40,
        width: width,
        resizeMode: 'contain'
    },
    viewStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        marginTop: 45,
        marginLeft: 10,
        marginRight:10,
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Avenir',
        shadowColor: 'black',
        shadowOffset: {width: -1, height:1 },
        shadowOpacity: 1,
    },
    welcomeText2: {
        marginTop: 70,
        marginLeft:18,
        marginRight:18,
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Avenir',
        shadowColor: 'black',
        shadowOffset: {width: -1, height:1 },
        shadowOpacity: 1,
    },
    buttonStyle: {
        margin: 10,
        marginTop: 100,
        backgroundColor: 'rgba(0, 102, 204, 0.80)',
        height: 65,
        width: 200,
        alignSelf: 'center'

    },
    buttonText: {
        color: 'white',
        fontSize: 22
    },


}

export default Landing;