import React from 'react';
import { StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import SendMsgForm from './components/SendMsgForm';
import TouitContainer from './components/TouitContainer';
import TrendingContainer from './components/TrendingContainer';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior= "padding" enabled>
        
        <Header/> 
        <ScrollView>

          <TouitContainer />
          <TrendingContainer />
          <Footer/> 

        </ScrollView>
        <SendMsgForm />
        
      </KeyboardAvoidingView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261F22',
    paddingTop: 40,
    padding: 10,
  },
});
