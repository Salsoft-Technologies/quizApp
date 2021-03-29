import React from 'react';
import {Text, View, Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NotificationHeader from '../../components/NotificationHeader/index';
import styles from './styles';

function SettingsScreen({navigation}){

    const renderQuizBar = () => {
        return(
            <ScrollView>
            <TouchableOpacity onPress={()=> navigation.navigate('AllQuiz')} style={styles.touchableRow}>
                <View style={styles.rowView}>
                <Image style={styles.rowIconSize3} source={require('../../assets/images/quizIcons/about.png')}/>
                <Text style={styles.rowText}>TAKE QUIZ</Text>
                </View>
                <Image style={styles.rowIcon} source={require('../../assets/images/quizIcons/greater.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Notification')} style={styles.touchableRow}>
                <View style={styles.rowView}>
                <Image style={styles.rowIconSize3} source={require('../../assets/images/quizIcons/about.png')}/>
                <Text style={styles.rowText}>MY HISTORY</Text>
                </View>
                <Image style={styles.rowIcon} source={require('../../assets/images/quizIcons/greater.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('About')} style={styles.touchableRow}>
                <View style={styles.rowView}>
                <Image style={styles.rowIconSize3} source={require('../../assets/images/quizIcons/about.png')}/>
                <Text style={styles.rowText}>ABOUT</Text>
                </View>
                <Image style={styles.rowIcon} source={require('../../assets/images/quizIcons/greater.png')}/>
            </TouchableOpacity>

            </ScrollView>
            
        )
    }
    return(
        <View style={styles.mainSettingsScreen}>
        <NotificationHeader title='Settings'/>
        {renderQuizBar()}
            
        </View>
    )
}

export default SettingsScreen