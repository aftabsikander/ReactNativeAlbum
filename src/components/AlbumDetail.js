import React from 'react';
import {Image, Linking, Text, View} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({albumItem}) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = albumItem;

    const {
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        thumbnailStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>

                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{uri: image}}
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
            </CardSection>

        </Card>
    );
};

const styles = {
    headerContentStyle: {
        paddingLeft: 4,
        paddingRight: 4,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        fontSize: 18,
        color: '#000'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 2,
        marginRight: 2
    },
    thumbnailStyle: {
        borderRadius: 25,
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 350,
        flex: 1,
        width: null
    }
};


export default AlbumDetail;