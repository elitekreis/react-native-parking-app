import { Dimensions, StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

// Colors
export const WHITE_COLOR = '#ffffff';
export const BLACK_COLOR = '#000000';
export const GRAY_COLOR = '#f4f4f5';
export const YELLOW_COLOR = '#ff8c00';
export const DARK_TEXT_COLOR = '#1e2432';
export const LIGHT_TEXT_COLOR = '#0a1f44';
export const STATUS_BAR_COLOR = '#ffffff00';

// Fonts
export const FONT_REGULAR = 'Montserrat-Regular';
export const FONT_BOLD = 'Montserrat-BOLD';
export const FONT_EXTRA_BOLD = 'Montserrat-ExtraBold';
export const FONT_BLACK = 'Montserrat-Black';

export const FONT_SIZE_LG = 44;
export const FONT_SIZE_MD = 28;
export const FONT_SIZE_SM = 17;

// Screen values
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export function getDeviceWidth(width) {
    return Math.round((width * DEVICE_WIDTH) / DESIGN_WIDTH);
}
export function getDeviceHeight(height) {
    return Math.round((height * DEVICE_HEIGHT) / DESIGN_HEIGHT);
}

// Global styles
export const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE_COLOR,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        width: DEVICE_WIDTH,
        paddingHorizontal: '5%',
    },
    header: {
        height: 54 + getStatusBarHeight(),
        paddingTop: getStatusBarHeight(),
        backgroundColor: WHITE_COLOR,
        borderWidth: 0,
        elevation: 0,
    },
});
