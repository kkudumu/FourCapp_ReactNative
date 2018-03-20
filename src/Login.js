import React from 'react';
import { View, Text, ImageBackground, Image, Dimensions } from 'react-native';
import {Form, Item, Label, Input, Button} from 'native-base';
import firebase from 'firebase';

var myBackground = require('../assets/login.jpg');
var myLogo = require('../assets/newlogo2.png');
var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    login = () => {
        var email = this.state.email;
        var password = this.state.password;

        this.props.signIn(email, password);
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground source={myBackground} style={styles.backgroundImage}>
                <Image source={myLogo} style={styles.logoImage}>
                </Image>
                    <View style={styles.inputStyle}>
                        <Form>
                            <Item floatingLabel>
                                <Label style={{color:'white'}}>Email</Label>
                                <Input
                                    autoCorrect={false}
                                    onChangeText={(email) => this.setState({email})}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Label style={{color:'white'}}>Password</Label>
                                <Input
                                    autoCorrect={false}
                                    onChangeText={(password) => this.setState({password})}
                                    secureTextEntry
                                />
                            </Item>
                        </Form>
                        <View style={{marginTop: 40}}>
                            <Button
                                primary
                                block
                                onPress={this.login}
                            >
                            <Text style={{color:'white'}}>Log In</Text>
                            </Button>
                        </View>
                        <View>
                        <Text 
                            style={styles.createAccountText}
                            onPress={() => this.props.switchScreen("createAccount")}
                        >Don't have an account? Create one here.</Text>
                        </View>
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
        marginTop: 100,
        width: width,
        resizeMode: 'contain',
    },
    inputStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10,
        marginBottom: 200
    },
    createAccountText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 20
    }
}

export default Login;