import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';
import styles from './style';

const propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.shape(),
};

const defaultProps = {
    text: '',
    onPress: () => {},
    style: null,
};

const ActionButton = ({ text, onPress, style }) => (
    <Button style={[styles.button, style]} onPress={onPress}>
        <Text uppercase={false} style={styles.buttonText}>
            {text}
        </Text>
    </Button>
);

ActionButton.propTypes = propTypes;
ActionButton.defaultProps = defaultProps;

export default ActionButton;
