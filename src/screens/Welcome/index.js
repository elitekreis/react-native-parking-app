import React from 'react';
import { View, StatusBar, ImageBackground } from 'react-native';
import { Container, Content, Text } from 'native-base';
import { ActionButton } from '../../components';
import * as globals from '../../constants/global';
import styles from './style';

const Welcome = ({ navigation }) => (
    <Container style={globals.styles.container}>
        <ImageBackground
            source={require('../../assets/images/bg.png')}
            style={{ width: '100%', height: '100%' }}
        >
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor={globals.STATUS_BAR_COLOR}
            />
            <Content contentContainerStyle={globals.styles.content}>
                <View style={{ marginTop: globals.getDeviceHeight(120) }}>
                    <Text style={styles.boldText}>ADVENTURE</Text>
                    <Text style={styles.boldText}>IS ONLY</Text>
                    <Text style={styles.boldText}>A CLICK</Text>
                    <Text style={styles.boldText}>AWAY.</Text>
                </View>
                <View style={{ marginTop: globals.getDeviceHeight(30) }}>
                    <Text style={styles.smallText}>Select an image to find the right</Text>
                    <Text style={styles.smallText}>national park to visit</Text>
                </View>
                <ActionButton
                    text="Start"
                    style={{ marginTop: globals.getDeviceHeight(180) }}
                    onPress={() => navigation.navigate('Main')}
                />
            </Content>
        </ImageBackground>
    </Container>
);

export default Welcome;
