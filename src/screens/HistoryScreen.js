import React, {useState, useEffect} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import NotificationHeader from '../components/NotificationHeader/index';

function HistoryScreen(){
    const [history, setHistory] = useState([
        {
            id: 1,
            imageCoins: require('../assets/images/quizIcons/historyCoins.png'),
            totalScore: '5',
            totalCoins: '500',
        },

        {
            id: 2,
            imageCoins: require('../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },

        {
            id: 3,
            imageCoins: require('../assets/images/quizIcons/historyCoins.png'),
            totalScore: '2',
            totalCoins: '200',
        },

        {
            id: 4,
            imageCoins: require('../assets/images/quizIcons/historyCoins.png'),
            totalScore: '1',
            totalCoins: '100',
        },

        {
            id: 5,
            imageCoins: require('../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },

        {
            id: 6,
            imageCoins: require('../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },

        {
            id: 7,
            imageCoins: require('../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },

        {
            id: 8,
            imageCoins: require('../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },

        {
            id: 9,
            imageCoins: require('../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },
        {
            id: 10,
            imageCoins: require('../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },
        {
            id: 11,
            imageCoins: require('../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },
        {
            id: 12,
            imageCoins: require('../assets/images/quizIcons/historyCoins.png'),
            totalScore: '4',
            totalCoins: '400',
        },

    ])
    const _renderHistory = ({item}) => {
        return(
            <View style={{flexDirection: 'row', padding: 10, justifyContent: 'space-between', backgroundColor: '#403b5d', borderRadius: 15, marginTop: 10, paddingHorizontal: 20}}>
                <Image style={{backgroundColor: '#ecf5fe', borderRadius: 15, height: 80, width: 80}} source={item.imageCoins}/>

                <View style={{justifyContent: 'center'}}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{item.totalCoins} Coins</Text>
                    <Text style={{color:'white'}}><Text style={{fontSize: 20, color: '#10c398', fontWeight: 'bold'}}>{item.totalScore}</Text> out of 5</Text>
                </View>
            </View>
        )
    }
    return(
        <View style={{flex: 1, backgroundColor: '#12172e', padding: 20}}>
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