import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Trending extends React.Component {
    render() {
        const {trend, count} = this.props
        return(
            <View style={styles.trendContainer}>
                <Text style={styles.word}> #{trend} </Text>
                <Text style={styles.word}> {count} </Text>
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