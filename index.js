import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => {
    const props = {headerHeading: 'Hello New Albums from root', headerSubheading: "sub heading"};
    return (
        // Passing multiple Props inside a components Way #1
        //<Header {...props}/>

        // Passing multiple Props inside a components Way #2
        <Header headerHeading="Hello New Albums from root" headerSubheading="sub heading"/>
    );
};

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

/*
import {AppRegistry} from 'react-native';
import App from './App';

AppRegistry.registerComponent('albums', () => App);
*/
