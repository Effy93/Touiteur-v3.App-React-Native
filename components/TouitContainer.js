import React from 'react';
import { getMessages } from '../TouitAPI';
import Touit from './Touit';

import { StyleSheet, Text, View , ScrollView, FlatList, TouchableHighlight } from 'react-native';

class TouitContainer extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            touits: [],
            ts: 0,
            count: 0,
        }
    } 
    componentDidMount() {
        this.refresh()
        setInterval( () => this.refresh(), 5000);
    }
    refresh() {
        getMessages(this.state.ts, (response) => {
            this.setState({touits: [...this.state.touits, ...response.messages], ts: response.ts} )
        } )
    }
    msgSuivant = () => {
        this.setState( {
            count: this.state.count + 10
        } )
    };
    msgPrecedent = () => {
        this.setState( {
            count: this.state.count - 10
        } )
    };
    render() {
        const { touits, count } = this.state;
        return(
            <View style={styles.container}>
                {count >= 10 ?
                    <TouchableHighlight onPress={this.msgPrecedent}>
                       <Text style={styles.boutons}> Précédent </Text>
                    </TouchableHighlight> 
                    : <Text></Text>
                }
                <FlatList
                    data={touits.slice().reverse().slice(count, count +10)}
                    keyExtractor={
                    (item, index) => index.toString()
                    }
                    renderItem={
                    ( {item} ) => <Touit {...item} /> 
                    }
                />
                {count < touits.length - 10 ?
                    <TouchableHighlight onPress={this.msgSuivant}>
                        <Text style={styles.boutons}> Suivant </Text>
                    </TouchableHighlight>
                    : <Text></Text>
                }
            </View>
        );
    }
}

export default TouitContainer;

const styles = StyleSheet.create ({
    container: {
        borderWidth: 1,
        borderColor: "#8E6B2E",
        margin: 4,
        marginTop: 6,
        backgroundColor: "#261F22",
        height: 400,
    },
    boutons: {
        color: "#fff",
        textAlign: "center",
        fontSize: 24,
        margin: 4,
        backgroundColor: "#42393C",
    },
});