import React from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import { Label } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import { Col, Row, Grid } from "react-native-easy-grid";

var myBackground = require('../assets/login.jpg');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class OptionScreen extends React.Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={myBackground} style={styles.backgroundImage}>
                <Grid>
                    <Col>
                    <Row>
                    <View style={styles.topLeftView}>
                    <Icon 
                    name="money"
                    style={styles.topLeftIcon}
                    />
                    <Label style={{fontFamily: 'Helvetica Neue', marginTop: 10}}>Pay Family Fees</Label>
                    </View>
                    </Row>


                    <Row>
                    <View style={styles.bottomLeftView}>
                    <Icon 
                    name="calendar"
                    style={styles.bottomLeftIcon}
                    />
                    <Label style={{fontFamily: 'Helvetica Neue', marginTop: 10, marginLeft: 10, marginRight: 10, textAlign: 'center'}}>Make An Appointment</Label>
                    </View>
                    </Row>

                    </Col>
                
                    <Col>

                    <Row>
                    <View style={styles.topRightView}>
                    <Icon 
                    name="video-camera"
                    style={styles.topRightIcon}
                    />
                    <Label style={{fontFamily: 'Helvetica Neue', marginTop: 10, marginLeft: 5}}>Media</Label>
                    </View>
                    </Row>

                    <Row>
                    <View style={styles.bottomRightView}>
                    <Icon 
                    name="file-text-o"
                    style={styles.bottomRightIcon}
                    />
                    <Label style={{fontFamily: 'Helvetica Neue', marginTop: 10, marginLeft: 5, textAlign:'center'}}>Apply For Subsidy</Label>
                    </View>
                    </Row>
                    </Col>
                </Grid>
                
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
    topLeftView: {
        marginTop: 180,
        marginLeft: 40,
        marginRight: 20,
    },
    topLeftIcon: {
        textAlign:'center',
        fontSize: 70,
    },
    topRightView: {
        marginTop: 180,
        marginLeft: 40,
        marginRight: 20,
    },
    topRightIcon: {
        textAlign:'center',
        fontSize: 70,
    },
    bottomLeftView: {
        marginBottom: -100,
        marginLeft: 43,
        marginRight: 20,
    },
    bottomLeftIcon: {
        textAlign:'center',
        fontSize: 70,
    },
    bottomRightView: {
        marginTop: 5,
        marginLeft: 30,
        marginRight: 20,
    },
    bottomRightIcon: {
        textAlign:'center',
        fontSize: 70,
    }
}

export default OptionScreen;