import React, {useState} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import styles from './styles';
import NotificationHeader from '../../components/NotificationHeader/index';

function HistoryScreen(){
    const [history, setHistory] = useState([
        {
            id: 1,
            imageCoins: require('../../assets/images/quizIcons/historyCoins.png'),
            totalScore: '5',
            totalCoins: '500',
        },

        {
            id: 2,
            imageCoins: require('../../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },

        {
            id: 3,
            imageCoins: require('../../assets/images/quizIcons/historyCoins.png'),
            totalScore: '2',
            totalCoins: '200',
        },

        {
            id: 4,
            imageCoins: require('../../assets/images/quizIcons/historyCoins.png'),
            totalScore: '1',
            totalCoins: '100',
        },

        {
            id: 5,
            imageCoins: require('../../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },

        {
            id: 6,
            imageCoins: require('../../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },

        {
            id: 7,
            imageCoins: require('../../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },

        {
            id: 8,
            imageCoins: require('../../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },

        {
            id: 9,
            imageCoins: require('../../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },
        {
            id: 10,
            imageCoins: require('../../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },
        {
            id: 11,
            imageCoins: require('../../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },
        {
            id: 12,
            imageCoins: require('../../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },

    ])
    const _renderHistory = ({item}) => {
        return(
            <View style={styles.historyMainView}>
                <Image style={styles.historyCoinsImage} source={item.imageCoins}/>

                <View style={styles.historyCoinsView}>
                    <Text style={styles.historyTotalCoinsText}>{item.totalCoins} Coins</Text>
                    <Text style={styles.historyTotalCoins}><Text style={styles.historyScoredCoins}>{item.totalScore}</Text> out of 5</Text>
                </View>
            </View>
        )
    }
    return(
        <View style={styles.historyMainScreen}>
            <NotificationHeader title='History'/>

            <FlatList
        data={history}
        showsVerticalScrollIndicator={false}
        renderItem={_renderHistory}
        keyExtractor={(item, index) => index.toString()}
      />
        </View>
    )
}

export default HistoryScreen;