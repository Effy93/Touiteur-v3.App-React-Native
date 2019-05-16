import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Touit extends React.Component {
    render() {
        const {name, message} = this.props
        return(
            <View style={styles.container}>
                <Text style={styles.msg}> {message} </Text>
                <Text style={styles.nom}> {name} </Text>
            </View>
        );
    }
}

export default Touit;

const styles = StyleSheet.create ({
    container: {
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 4,
        margin: 14,
        padding: 10,
        backgroundColor: "#42393C",
        alignItems: "center"
    },
    msg: {
        color: "#fff",
        fontSize: 20,
    },
    nom: {
        color: "#8E6B2E",
        fontSize: 18,
        fontStyle: "italic",
    },
});