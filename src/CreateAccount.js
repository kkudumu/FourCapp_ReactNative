import React from 'react';
import { View, Text, ImageBackground, Image, Dimensions } from 'react-native';
import { Form, Item, Label, Input, Button } from 'native-base';
import firebase from 'firebase';

var myLogo = require('../assets/newlogo2.png');
var myBackground = require('../assets/login.jpg');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class CreateAccount extends React.Component {
    state = {
        firstName:"",
        lastName: "",
        email: "",
        password: ""
    }
    
    createUserAccount = () => {
        var firstName = this.state.firstName;
        var lastName = this.state.lastName;
        var email = this.state.email;
        var password = this.state.password;

        this.props.create(firstName, lastName, email, password);
    }

    render(){
        return(
            <View style={{flex:1}}>
                <ImageBackground source={myBackground} style={styles.backgroundImage}>
                <Image source={myLogo} style={styles.logoImage}>
                </Image>
                    <View style={styles.inputStyle}>
                        <Label style={styles.labelStyle}>Create An Account</Label>
                        <Form>
                            <Item 
                            style={{margin:10}}
                            rounded>
                                <Input
                                    style={{color: 'white'}}
                                    placeholder='First Name'
                                    placeholderTextColor='white'
                                    autoCorrect={false}
                                    onChangeText={(firstName) => this.setState({firstName})}
                                />
                            </Item>
                            <Item 
                            style={{margin:10}}
                            rounded>
                                <Input
                                    style={{color: 'white'}}
                                    placeholderTextColor='white'
                                    placeholder='Last Name'
                                    autoCorrect={false}
                                    onChangeText={(lastName) => this.setState({lastName})}
                                />
                            </Item>
                            <Item 
                            style={{margin:10}}
                            rounded>
                                <Input
                                    style={{color: 'white'}}
                                    placeholderTextColor='white'
                                    placeholder='Email'
                                    autoCorrect={false}
                                    onChangeText={(email) => this.setState({email})}
                                />
                            </Item>
                            <Item 
                            style={{margin:10}}
                            rounded>
                                <Input
                                    style={{color: 'white'}}
                                    placeholderTextColor='white'
                                    placeholder='Password'
                                    autoCorrect={false}
                                    onChangeText={(password) => this.setState({password})}
                                    secureTextEntry
                                />
                            </Item>
                        </Form>
                        <Button
                            style={{margin:15}}
                            primary
                            block
                            onPress={this.createUserAccount}
                        >
                         <Text style={{color:'white', fontSize:20}}>Sign Up</Text>
                        </Button>
                        <Label
                        style={styles.goBack}
                        onPress={() => this.props.switchScreen("login")}
                        >Go Back</Label>
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
    logoImage: {
        marginTop: 50,
        width: width,
        resizeMode: 'contain',
    },
    inputStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 20,
        marginBottom: 150
    },
    labelStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: "HelveticaNeue-Medium",
        marginBottom: 15,
        shadowColor: 'black',
        shadowOffset: {width: -1, height:1 },
        shadowOpacity: 1,
    },
    goBack: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: "Helvetica Neue",
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: {width: -1, height:1 },
        shadowOpacity: 1,
    }
}


export default CreateAccount;