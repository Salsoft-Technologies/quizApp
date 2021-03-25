import React, {useContext, useEffect} from 'react';
import {Text, View, StatusBar, Image, Share} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import * as firebaseobj from 'firebase';
import {db} from '../../../config';

if (!firebaseobj.apps.length) {
  firebaseobj.initializeApp(db);
}

import {AuthContext} from '../../navigation/AuthProvider';

function ResultScreen({route, navigation}) {
  const {paramKey, paramKey2, name} = route.params;
  const {user} = useContext(AuthContext);

  useEffect(() => {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    const currentDate = date + '-' + month + '-' + year;
    const currentTime = hours + ':' + minutes + ':' + seconds;
    const Details = firebaseobj.database().ref('Details');
    Details.push({
      userId: user.uid,
      userEmail: user.email,
      userScore: paramKey,
      playedDate: currentDate,
      playedTime: currentTime,
    });
  });
  const renderQuizResultText = () => {
    return (
      <View style={styles.topHeaderView}>
        <Text style={styles.topHeaderText}>Quiz Results</Text>
        <View style={styles.topHeaderImage}>
          {paramKey >= 3 ? (
            <Image
              style={styles.topHeaderImageSize}
              source={require('../../assets/images/mainImages/victoryCup.png')}
            />
          ) : (
            <Image
              style={styles.topHeaderImageSize}
              source={require('../../assets/images/mainImages/lost.png')}
            />
          )}
        </View>
      </View>
    );
  };

  const onShare = async () => {
    const passedMessage = `You have cleared the quiz with score of ${paramKey} `;
    const failedMessage = `You have failed the quiz with score of ${paramKey}`;
    const theMessage = paramKey >= 3 ? passedMessage : failedMessage 
    try {
      const result = await Share.share({
        message: theMessage,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const renderMessage = () => {
    return (
      <View>
        {paramKey >= 3 ? (
          <Text style={styles.congratulationsMessageText}>
            Congratulations!
          </Text>
        ) : (
          <Text style={styles.congratulationsMessageText}>Try Again!</Text>
        )}

        {paramKey >= 3 ? (
          <Text style={styles.subMessage}>Your knowledge is amazing.</Text>
        ) : (
          <Text style={styles.subMessage}>
            The more you learn, the more you earn
          </Text>
        )}
        {renderScore()}
      </View>
    );
  };

  const renderScore = () => {
    return (
      <View>
        <Text style={styles.yourScoreText}>Y O U R  S C O R E</Text>
        <Text style={styles.totalAnsweredQuestions}>
          {' '}
          {paramKey}{' '}
          <Text style={styles.totalQuestions}>
            / {paramKey2 ? paramKey2 : 5}
          </Text>
        </Text>
        {renderCoins()}
      </View>
    );
  };

  const renderCoins = () => {
    const scoredCoins =
      paramKey == 1
        ? 100
        : paramKey == 2
        ? 200
        : paramKey == 3
        ? 300
        : paramKey == 4
        ? 400
        : paramKey == 5
        ? 500
        : 0;
    return (
      <View>
        <Text style={styles.yourScoreText}>E A R N E D  C O I N S</Text>

        <View style={styles.coinsView}>
          <Image source={require('../../assets/images/quizIcons/coins.png')} />

          <Text style={styles.coinsText}>{scoredCoins}</Text>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.footerView}>
        <TouchableOpacity onPress={() => onShare()} style={styles.shareButton}>
          <Image
            style={styles.shareButtonIcon}
            source={require('../../assets/images/quizIcons/share.png')}
          />
          <Text style={styles.shareButtonText}>Share Results</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('MyTab', {
              screen: 'Home',
              params: {},
            })
          }
          style={styles.newQuizButton}>
          <Text style={styles.newQuizText}>Take New Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.mainResultScreen}>
      <StatusBar backgroundColor="#1d2544" />
      {renderQuizResultText()}
      {renderMessage()}
      {renderFooter()}
    </View>
  );
}

export default ResultScreen;
