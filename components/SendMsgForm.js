import React from 'react';
import { sendMessage } from '../TouitAPI';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';

class SendMsgForm extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            message:"",
        }
    }
    submit = () => {
        const {name, message} = this.state;
        sendMessage(name, message, (response) =>
        {
            if(response.hasOwnProperty("success")) {
                Alert.alert(
                    'Succès',
                    'Message envoyé',
                  );
            } else {
                Alert.alert(
                    'Une erreur est survenue',
                    response.error
                );
            }
        });
    }
    render() {
        return(
            <View style={styles.container} >
                <TextInput 
                    style={styles.input}
                    placeholder="Votre pseudo"
                    onChangeText={(name) => this.setState({name})}   
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Votre message" 
                    onChangeText={(message) => this.setState({message})}
                />
                <TouchableHighlight style={styles.bouton} onPress={this.submit}>
                    <Text style={styles.boutonText}> Envoyer </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

export default SendMsgForm;

const styles = StyleSheet.create ({
    container: {
        borderWidth: 2,
        borderColor: "#8E6B2E",
        borderRadius: 10,
        margin: 4,
        padding: 10,
        backgroundColor: "#42393C",
        alignItems: "center",
        height: 150,
    },
    bouton: {
        backgroundColor: "#261F22",
        paddingHorizontal: 40,
        paddingVertical: 4,
        marginVertical: 10,
        borderRadius: 20,
        borderColor: '#fff',
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: '#fff',
    },
    boutonText: {
        color: "#fff"
    },
    input: {
        width: "100%",
        borderColor: 'gray',
        borderWidth: 1,
        color: "#fff",
        backgroundColor: "#261F22",
        margin: 4,
        height: 40,
        fontSize: 20,
    }
    
});