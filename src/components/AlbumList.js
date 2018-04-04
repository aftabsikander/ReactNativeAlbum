import React, {Component} from 'react';
import {Text, View} from 'react-native';

class AlbumList extends Component {
    componentDidMount() {
        console.log('componentDidMount in AlbumList');
    }

    render() {
        return (
            <View>
                <Text>Album List!!!</Text>
            </View>
        );
    }
}

export default AlbumList;