import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const props = {headerHeading: 'Hello New Albums from root', headerSubheading: 'sub heading'};
const App = () => {
    return (
        <View>
            {/*Passing multiple Props inside a components Way #1*/}
            {/*<Header {...props}/>*/}
            {/*Passing multiple Props inside a components Way #2*/}
            <Header headerHeading="Hello New Albums from root" headerSubheading="sub heading"/>
            <AlbumList/>
        </View>

    );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);


/*
import {AppRegistry} from 'react-native';
import App from './App';

AppRegistry.registerComponent('albums', () => App);
*/
