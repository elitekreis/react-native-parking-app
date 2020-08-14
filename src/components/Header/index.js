import React from 'react';
import PropTypes from 'prop-types';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import * as globals from '../../constants/global';
import styles from './style';

const propTypes = {
    title: PropTypes.string,
    transparent: PropTypes.bool,
    onGoBack: PropTypes.func,
};

const defaultProps = {
    title: '',
    transparent: false,
    onGoBack: null,
};

const HeaderComponent = ({ title, transparent, onGoBack }) => (
    <Header
        transparent={transparent}
        style={globals.styles.header}
        iosBarStyle="dark-content"
        androidStatusBarColor={globals.WHITE_COLOR}
    >
        {onGoBack && (
            <Left style={{ flex: 1 }}>
                <Button
                    iconLeft
                    transparent
                    light
                    onPress={() => {
                        onGoBack();
                    }}
                >
                    <Icon name="md-arrow-back" style={styles.backIcon} />
                </Button>
            </Left>
        )}
        <Body style={{ flex: 3, alignItems: 'center' }}>
            <Title style={styles.titleText}>{title}</Title>
        </Body>
        <Right style={{ flex: 1 }} />
    </Header>
);

HeaderComponent.propTypes = propTypes;
HeaderComponent.defaultProps = defaultProps;

export default HeaderComponent;
