import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import styles from './style';

const propTypes = {
    imageSource: Image.propTypes.source.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    onPress: PropTypes.func,
};

const defaultProps = {
    title: '',
    subTitle: '',
    onPress: () => {},
};

const ImageCard = ({ imageSource, title, subTitle, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
        <ImageBackground source={imageSource} style={styles.imageBackground}>
            <View style={styles.textContent}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textSubTitle}>{subTitle}</Text>
            </View>
        </ImageBackground>
    </TouchableOpacity>
);

ImageCard.propTypes = propTypes;
ImageCard.defaultProps = defaultProps;

export default ImageCard;
