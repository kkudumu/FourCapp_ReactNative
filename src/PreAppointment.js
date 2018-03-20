import React from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import { Label, Button } from 'native-base';

var myBackground = require('../assets/login.jpg');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class PreAppointment extends React.Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={myBackground} style={styles.backgroundImage}>
                    <View style={styles.headerView}>
                        <Label style={styles.headerText}>Read Instructions Carefully Before Making An Appointment:</Label>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales non est sed bibendum. Sed tortor dui, pellentesque et metus at, condimentum sollicitudin ex. Maecenas auctor tincidunt nunc, a efficitur nisl pulvinar vel. Nullam lacinia mauris at eros interdum viverra. Integer eu malesuada mi, eu finibus felis. </Text>
                    </View>
                    <Button
                    block
                    style={{backgroundColor: '#019664', marginTop: 5}}>
                        <Text style={{color:'white', fontSize: 16, fontFamily: 'Avenir-Medium'}}>Schedule An Appointment</Text>
                    </Button>
             
                </ImageBackground>
            </View>
        )
    }
}

const styles = {
    backgroundImage: {
        flex: 1,
        width: width,
        height: height
    },
    headerView: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        color: 'white',
        fontSize: 18,
        margin: 20,
        fontFamily: 'Avenir-Medium',
        textAlign: 'center'
    },
    textStyle: {
        color: 'white',
        marginTop: 25,
        margin: 10,
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Avenir-Medium',
        shadowColor: 'black',
        shadowOffset: {width: -1, height:1 },
        shadowOpacity: 1,
    }
    

}

export default PreAppointment;