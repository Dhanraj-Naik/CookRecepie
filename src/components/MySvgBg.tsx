import React from 'react';
import SVGImg from '../assets/icons/login_bg.svg';
import Svg, { Path } from 'react-native-svg';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = (windowWidth * 234) / 393; // maintain the aspect ratio

// Define the interface for any props used in the component.
interface MySvgBgProps {
    someProp: string,
}


const MySvgBg: React.FC<MySvgBgProps> = (props) => {

    const { someProp } = props;

    return (
        // <SVGImg/>
        <Svg width={windowWidth} height={windowHeight} viewBox="0 0 393 234" fill="none">
            <Path d="M172.72 208C142.703 209.625 81.1039 199.251 -1 233.518V0H394V128.321C344.684 198.692 335.021 199.215 175.129 207.87L172.72 208Z" fill="#FA9E31" />
        </Svg>
    );

};

export default MySvgBg;
