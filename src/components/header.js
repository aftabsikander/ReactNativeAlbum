import React from 'react';
import {Platform, Text, View} from 'react-native';

//Make a component
const Header = (props) => {
    //Destructing statement
    const {textStyle, viewStyle, textSubHeadingStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerHeading}</Text>
            <Text style={textSubHeadingStyle}>{props.headerSubheading}</Text>
        </View>
    );
};

// Make the component available to other parts of the app
export default Header;


const styles = {
    viewStyle: {
        backgroundColor: '#4286f4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        ...Platform.select({
            ios: {
                paddingTop: 20,
                shadowOpacity: 0.2
            },
            android: {
                elevation: 6
            }
        }),
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    },
    textSubHeadingStyle: {
        fontSize: 10
    }
};