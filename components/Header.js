import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'; 

class Header extends React.Component {
    render() {
        image_uri = "https://media1.tenor.com/images/613897b546ee80754966ea4600b0a426/tenor.gif?itemid=10630002"
        image_path = ""
        return(
            <View style={styles.header}>
                <Text style={styles.titre}> Cuick touit touiteur </Text>
             
                <Text style={styles.sousTitre}> Une application conçut avec React Native &hearts; </Text>
                <Image style={styles.logo} source={require('../assets/tenor2.gif')} />
            </View>
        ); 
    }
}

export default Header;

const styles = StyleSheet.create ({
    header: {
        margin: 4,
        padding: 10,
        // backgroundColor: "#42393C",
        alignItems: "center",
        // position: "fixed",
    },
    titre: {
        color: "#8E6B2E",
        fontSize: 30,
        fontFamily: "Chalkduster",
    },
    sousTitre: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "Chalkduster",
        // fontFamily: "Roboto"
    },
    logo: {
        width: "100%",
        height: 100,
        margin: 0,
        padding: 0,
        // borderWidth: 2,
        // borderColor: "#fff",
        // borderRadius: 20,
    },
});