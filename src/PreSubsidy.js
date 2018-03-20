import React from 'react';
import { View, ScrollView, Text, ImageBackground, Dimensions } from 'react-native';
import { Label, Button } from 'native-base';

var myBackground = require('../assets/login.jpg');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class PreSubsidy extends React.Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={myBackground} style={styles.backgroundImage}>
                    <View style={styles.headerView}>
                        <Label style={styles.headerText}>Read Instructions Carefully Before Applying For A Subsidy:</Label>
                    </View>
                    <View>
                        <Text style={styles.textStyle}>The 4C Centralized Eligibility List (4C CEL) is access to free or low cost child care and preschool programs in Santa Clara County.</Text>
                        <Text style={styles.textStyle}>The 4C Council operates a countywide list of income-eligible families that need child care financial assistance. This is a free service that connects families to over 170 child care locations that receive funding from the California Department of Education to help low-to moderate-income families in their area.</Text>
                        <Text style={styles.textStyle}>Applicants should update their status on 4C CEL every three months by calling 408-487-0749.</Text>
                        <Text style={styles.textStyle}>Due to the high demand for subsidized child care in Santa Clara county, there is no guarantee that everyone who applies will receive assistance.</Text>
                    </View>
                    <Button
                    block
                    style={{backgroundColor: '#019664', marginTop: 5}}>
                        <Text style={{color:'white', fontSize: 16, fontFamily: 'Avenir-Medium'}}>Apply For A Subsidy</Text>
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

export default PreSubsidy;