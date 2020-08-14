import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { Container, Content } from 'native-base';
import { Header, ParkListItemCard } from '../../components';
import * as globals from '../../constants/global';
import styles from './style';

class ParkList extends Component {
    onSelectPark = park => {
        const { navigation } = this.props;
        navigation.state.params.onSelectPark(park);
        navigation.goBack();
    };

    render() {
        const { parkList, navigation } = this.props;
        return (
            <Container style={globals.styles.container}>
                <Header title="California Parks" onGoBack={navigation.goBack} />
                <Content contentContainerStyle={[globals.styles.content, styles.content]}>
                    <FlatList
                        data={parkList}
                        renderItem={({ item }) => (
                            <ParkListItemCard item={item} onSelect={this.onSelectPark} />
                        )}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                    />
                </Content>
            </Container>
        );
    }
}

ParkList.propTypes = {
    parkList: PropTypes.arrayOf(PropTypes.object),
};

ParkList.defaultProps = {
    parkList: [],
};

const mapStateToProps = state => ({
    parkList: state.park.parkList,
});

export default connect(mapStateToProps)(ParkList);
