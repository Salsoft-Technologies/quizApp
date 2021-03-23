import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

function optionalFooter(props, navigation){
    optionalFooter.propTypes = {
        title: PropTypes.string,
        customStyle: PropTypes.object,
        destination: PropTypes.func
      };

    const renderFooter = () => {
        return(
            <TouchableOpacity onPress={props.destination} style={props.customStyle ? props.customStyle : styles.footerView}>
                <Image style={styles.arrowIcon} source={require('../../assets/images/quizIcons/rightArrow.png')}/>
                <Text style={styles.tourText}>
                {props.title}
                </Text>
            </TouchableOpacity>
        )
    }
    return(
        <>
        {renderFooter()}
        </>
    )
}

export default optionalFooter;