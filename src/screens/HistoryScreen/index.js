import React, {useState, useEffect} from 'react';
import {Text, View, Image, FlatList, ScrollView} from 'react-native';
import styles from './styles';
import NotificationHeader from '../../components/NotificationHeader/index';
import Loader from '../../components/AnimatedLoader/index';


import * as firebaseobj from 'firebase';
import {db} from '../../../config';
if (!firebaseobj.apps.length) {
    firebaseobj.initializeApp(db);
  }

function HistoryScreen({navigation}){
    const [historyData, setDataHistory] = useState([]);

    const gettingData = () => {
        const theDetails = firebaseobj.database().ref('Details');
        theDetails.on('value', datasnap => {
            const newDetails = datasnap.val()
            const newData = Object.values(newDetails);
            // const sortedData = newData.sort((a,b) => new Date(...b.playedDate.split('-').reverse()) - new Date(...a.playedDate.split('-').reverse()))
            const theSortedData = newData.sort((a, b) => b.userScore - a.userScore);
            setDataHistory(theSortedData)
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
                    <Image style={styles.historyCoinsImage} source={require('../../assets/images/quizIcons/victoryCoins.png')}/>
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
            <NotificationHeader title='All Users History'/>
            {
                historyData != '' ? <ScrollView>{renderAllHistory()}</ScrollView> : <Loader/>
            }
            
        </View>
    )
}

export default HistoryScreen;