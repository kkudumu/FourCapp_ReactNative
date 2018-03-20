import React from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import { Label, Button } from 'native-base';

var myBackground = require('../assets/login.jpg');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class PrePayFees extends React.Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={myBackground} style={styles.backgroundImage}>
                <View style={styles.headerView}>
                <Label style={styles.headerText}>Read Instructions Carefully Before Paying:</Label>
                </View>
                <View style={styles.infoView}>
                <Label style={styles.labelStyle}>•To pay your fees, click the button below</Label>
                <Label style={styles.labelStyle}>•You will be directed to Paypal </Label>
                <Label style={styles.labelStyle}>•On that page, enter the amount you want to pay in the "Unit Price" box and then follow the indicated directions</Label>
                <Label style={styles.labelStyle}>****YOU MUST ENTER THE FAMILY ID# AND FAMILY NAME IN THE SPECIAL INSTRUCTIONS****</Label>
                <Label style={styles.labelStyle}>Note: The family ID# and family name can be found on the billing statement.</Label>
                </View>
                <View>
                <Button
                 block
                 style={{backgroundColor: '#019664', marginTop: 20}}>
                    <Text style={{color:'white'}}>Pay Fees</Text>
                </Button>
                </View>

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
    labelStyle: {
        textAlign: 'center', 
        color: 'white', 
        margin: 10
    },
    headerView: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        color: 'white',
        fontSize: 18,
        fontFamily: 'Avenir-Medium'
    },
    infoView: {
        marginTop: 50,
    },
}

export default PrePayFees;