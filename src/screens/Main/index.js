import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, Alert } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { Header, ImageCard, ActionButton } from '../../components';
import {
    fetchParkListRequest,
    fetchCurrentParkRequest,
    setCurrentParkRequest,
} from '../../actions/park';
import * as globals from '../../constants/global';
import styles from './style';
import locationBg from '../../assets/images/CaliforniaPark.png';

class MainPage extends Component {
    constructor(props) {
        super(props);
        const { navigation } = props;
        this.state = {
            selectedPark: navigation.getParam('selectedPark', null),
        };
    }

    componentDidMount = () => {
        const { loadParkList, loadCurrentPark } = this.props;
        // Get the list of parks
        loadParkList();
        // Get the current selection
        loadCurrentPark();
    };

    onSelectPark = park => {
        this.setState({ selectedPark: park });
    };

    onConfirm = () => {
        const { selectedPark } = this.state;
        const { choosePark } = this.props;
        if (selectedPark) {
            // Set the current selection
            choosePark({ ...selectedPark });
            this.setState({ selectedPark: null });
        } else {
            Alert.alert('OOPS!', 'No park selected.');
        }
    };

    onSave = () => {
        const { currentPark } = this.props;
        if (!currentPark) {
            Alert.alert('OOPS!', 'Please select a park first.');
        }
    };

    render() {
        const { selectedPark } = this.state;
        const { navigation, location, parkCount } = this.props;
        return (
            <Container style={globals.styles.container}>
                <Header transparent onGoBack={navigation.goBack} />
                <Content contentContainerStyle={[globals.styles.content, styles.content]}>
                    <Text style={styles.titleText}>
                        {selectedPark ? 'Confirm Park Selection' : 'Select location'}
                    </Text>
                    <ImageCard
                        imageSource={selectedPark ? { uri: selectedPark.imageUrls[2] } : locationBg}
                        title={selectedPark ? selectedPark.name : location}
                        subTitle={selectedPark ? selectedPark.type : `${parkCount} places`}
                        onPress={() => {
                            navigation.navigate('ParkList', {
                                onSelectPark: this.onSelectPark,
                            });
                        }}
                    />
                    <ActionButton
                        text={selectedPark ? 'Confirm' : 'Save'}
                        onPress={selectedPark ? this.onConfirm : this.onSave}
                    />
                    <View style={styles.bottomView}>
                        <Text style={styles.commentText}>
                            {'Please note not all national parks are available.'}
                        </Text>
                        <Text style={styles.commentText}>
                            {'Verify if a reservation is needed for your visit.'}
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

MainPage.propTypes = {
    location: PropTypes.string,
    parkCount: PropTypes.number,
    currentPark: PropTypes.shape(),
    loadParkList: PropTypes.func.isRequired,
    loadCurrentPark: PropTypes.func.isRequired,
    choosePark: PropTypes.func.isRequired,
};

MainPage.defaultProps = {
    location: 'California',
    parkCount: 0,
    currentPark: null,
};

const mapStateToProps = state => ({
    parkCount: state.park.parkList.length,
    currentPark: state.park.currentPark,
});

const mapDispatchToProps = {
    loadParkList: fetchParkListRequest,
    loadCurrentPark: fetchCurrentParkRequest,
    choosePark: setCurrentParkRequest,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
