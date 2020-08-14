import { StyleSheet } from 'react-native';
import * as globals from '../../constants/global';

const styles = StyleSheet.create({
    cardBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardContent: {
        flexDirection: 'row',
    },
    itemImage: {
        width: globals.getDeviceWidth(90),
        height: globals.getDeviceWidth(90),
    },
    itemContent: {
        marginHorizontal: 12,
        alignSelf: 'flex-start',
    },
    itemTitle: {
        width: '100%',
        fontFamily: globals.FONT_BOLD,
        fontSize: 20,
        color: globals.DARK_TEXT_COLOR,
        textAlign: 'left',
        lineHeight: 24,
        letterSpacing: -0.32,
    },
    itemAddressContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    itemAddressIcon: {
        margin: 3,
        fontSize: 15,
        color: '#b8bbc6',
    },
    itemAddressText: {
        width: '100%',
        fontFamily: globals.FONT_REGULAR,
        fontSize: 15,
        color: '#b8bbc6',
        textAlign: 'left',
        lineHeight: 20,
        letterSpacing: -0.24,
    },
    bookmarkImage: {
        width: globals.getDeviceWidth(17),
        height: globals.getDeviceWidth(26),
    },
});

export default styles;
