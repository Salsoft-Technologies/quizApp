import React, {useState, useEffect, useContext} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import styles from './styles';
import NotificationHeader from '../../components/NotificationHeader/index';
import Loader from '../../components/AnimatedLoader/index';
import {AuthContext} from '../../navigation/AuthProvider';


import * as firebaseobj from 'firebase';
import {db} from '../../../config';
if (!firebaseobj.apps.length) {
    firebaseobj.initializeApp(db);
  }

function MyHistoryScreen({navigation}){
    const [historyData, setDataHistory] = useState([]);
    const { user } = useContext(AuthContext);
    const retrievedUser = user.uid;

    const gettingData = () => {
        const theDetails = firebaseobj.database().ref('Details');
        theDetails.on('value', datasnap => {
            const newDetails = datasnap.val()
            const newData = Object.values(newDetails);
            const sortedData = newData.sort((a,b) => new Date(...b.playedDate.split('-').reverse()) - new Date(...a.playedDate.split('-').reverse()))
            const theSortedData = sortedData.sort((a, b) => b.userScore - a.userScore);
            const newArray = theSortedData.filter(obj => obj.userId === retrievedUser);
            setDataHistory(newArray);
        })
    }

   

   useEffect(() => {
    gettingData()
   }, [])


    const renderAllHistory = ()=>{
        return(
            <>
                {historyData.map((data, index) => (
                    <View key={index} style={styles.historyMainView}>
                    <Image style={styles.historyCoinsImage} source={require('../../assets/images/quizIcons/historyCoins.png')}/>
                    <View style={styles.historyCoinsView}>
                    <Text style={styles.historyTotalCoinsText}>{data.userEmail}</Text>
                    <Text style={styles.historyTotalCoins}><Text style={styles.historyScoredCoins}>{data.userScore}</Text> out of 5</Text>
                    <Text style={styles.historyTotalCoins}>{data.playedDate}</Text>
                    </View>
                    </View>
                ))}
            </>
        )
    }
    return(
        <View style={styles.historyMainScreen}>
            <NotificationHeader title='My History'/>
            {
                historyData != '' ? <ScrollView>{renderAllHistory()}</ScrollView> : <Loader/>
            }
            
        </View>
    )
}

export default MyHistoryScreen;