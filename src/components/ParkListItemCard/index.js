import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Icon, Text } from 'native-base';
import styles from './style';

const propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    onSelect: PropTypes.func.isRequired,
};

const ParkListItemCard = ({ item, onSelect }) => (
    <Card>
        <CardItem>
            <Body style={styles.cardBody}>
                <TouchableOpacity
                    style={styles.cardContent}
                    onPress={() => {
                        onSelect(item);
                    }}
                >
                    <Image style={styles.itemImage} source={{ uri: item.imageUrls[1] }} />
                    <View style={styles.itemContent}>
                        <Text style={styles.itemTitle}>
                            {item.name} {' - '}
                        </Text>
                        <Text style={styles.itemTitle}>{item.type} </Text>
                        <View style={styles.itemAddressContainer}>
                            <Icon name="pin" style={styles.itemAddressIcon} />
                            <View style={{ flex: 1 }}>
                                <Text style={styles.itemAddressText}>{item.location}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <Image
                    style={styles.bookmarkImage}
                    source={require('../../assets/images/bookmark.png')}
                />
            </Body>
        </CardItem>
    </Card>
);

ParkListItemCard.propTypes = propTypes;

export default ParkListItemCard;
