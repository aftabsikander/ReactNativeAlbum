import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    state = {albums: []};

    componentDidMount() {
        console.log('componentDidMount in AlbumList');
        //API call
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));

    }

    renderAlbums() {
        // Key={ used for performance improvement in real app we should use id as unique key names}
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} albumItem={album}/>)
    }


    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}


export default AlbumList;