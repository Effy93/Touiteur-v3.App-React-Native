import React from 'react';
import { getTrendingWords } from '../TouitAPI';
import Trending from './Trending';

import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

class TrendingContainer extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            trendingList: [],
            count: 0,
        }
        this.refresh()
    } 
    componentDidMount() {
        //  function flechée () => { }
        setInterval( () => this.refresh(), 5000);
    }
    refresh() {
        getTrendingWords( (response) => {
            let trendingBox = []
            for(let trend in response ) {
                trendingBox.push( [response[trend], trend])
            }
            this.setState( { trendingList: trendingBox } )
            console.log(this.state.trendingList);
        } )
    }
    render() {
        const {trendingList, count} = this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.titre}> TENDANCE </Text>
                <FlatList
                    data={trendingList.sort((a,b) => b[0] - a[0]).slice(count, count +10)}
                    keyExtractor={ (item, index) => index.toString() }
                    renderItem={ ( {item} ) => <Trending trend = {item[1]} count = {item[0]}  />  }
                />
            </View>
        );
    }
}

export default TrendingContainer;

const styles = StyleSheet.create ({
    container: {
        margin: 4,
        padding: 4,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    titre: {
        // borderWidth: 4,
        // borderEndColor: "#8E6B2E",
        // paddingLeft: 130,
        // paddingRight: 130,
    },
});