import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

class Trending extends React.Component {
    render() {
        const {trend, count} = this.props
        return(
            <View style={styles.trendContainer}>
                <TouchableOpacity onPress={() => Alert.alert(
                 trend,`Nb occurence : ${count}`,
                 [ { text: 'retour' },],
                 { cancelable: true })}>
                 <Text style={styles.word}> #{trend} </Text>
               </TouchableOpacity>

            </View>
        );
    }
}

export default Trending;

const styles = StyleSheet.create ({
    trendContainer: {
        color: "black",
        flex: 1,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 4,
        textAlign: "center",
    },
    word: {
        textAlign: "center",
    }
});