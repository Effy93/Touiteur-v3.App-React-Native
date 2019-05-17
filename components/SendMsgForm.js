import React from 'react';
import { sendMessage } from '../TouitAPI';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, Image } from 'react-native';

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
                  this.setState( { message : "" })
            } else {
                Alert.alert(
                    'Une erreur est survenue',
                    response.error
                );
            }
        });
    }

    changeMessage = (value) => this.setState( {message : value }) ;

    render() {
        const { message } = this.state
        return(
            <View style={styles.containerRow}>
                <View style={styles.containerInput}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Votre pseudo"
                        placeholderTextColor= "#fff"
                        onChangeText={(name) => this.setState({name})}   
                    />
                    <TextInput 
                        style={styles.input}
                        value={message}
                        placeholder="Votre message" 
                        placeholderTextColor= "#fff"
                        onChangeText={this.changeMessage}
                        multiline={true}
                    />
                </View>
                <TouchableHighlight style={styles.bouton} onPress={this.submit}>
                    <Image style={styles.arrow} source={require('../assets/arrow2.png')} />
                </TouchableHighlight>
            </View>
        );
    }
}

export default SendMsgForm;

const styles = StyleSheet.create ({
    containerRow: {
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#8E6B2E",
        borderRadius: 10,
        margin: 4,
        padding: 8,
        backgroundColor: "#42393C",
        alignItems: "center",
        height: 140,
    },
    containerInput: {
        flexGrow: 2,
        alignItems: "center"
    },
    bouton: {
        flex: 1,
        alignItems : "center",
    },
    arrow: {
        width: 40,
        height: 40,
        alignItems : "flex-start",
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        color: "#fff",
        backgroundColor: "#261F22",
        margin: 4,
        paddingHorizontal: 10,
        height: 40,
        fontSize: 18,
        width: 300,
    },
   
    
});