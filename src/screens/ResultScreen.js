import React from 'react';
import {Text, View, StatusBar, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Questions from '../../questions.json';
import styles from './styles';

function ResultScreen({route, navigation}) {
  const {paramKey} = route.params;
  const renderQuizResultText = () => {
    return (
      <View style={styles.topHeaderView}>
        <Text style={styles.topHeaderText}>Quiz Result</Text>
        <View style={styles.topHeaderImage}>
        {
          paramKey > 3 ? (
            <Image
            style={styles.topHeaderImageSize}
            source={require('../images/victoryCup.png')}
          />
          ) :
          <Image
            style={styles.topHeaderImageSize}
            source={require('../images/lost.png')}
          />
        }
         
        </View>
      </View>
    );
  };

  const renderMessage = () => {
    return (
      <View>
      {
        paramKey > 3 ? (
          <Text style={styles.congratulationsMessageText}>Congratulations!</Text>
        ) : (
          <Text style={styles.congratulationsMessageText}>Try Again!</Text>
        )
      }

      {
        paramKey > 3 ? (
          <Text style={styles.subMessage}>
          Your knowledge is amazing. You are the Champion
        </Text>
        ) : (
          <Text style={styles.subMessage}>
          The more you learn, the more you earn
        </Text>
        )
      }
        {renderScore()}
    
        
      </View>
    );
  };

  const renderScore = () => {
    return (
      <View>
        <Text style={styles.yourScoreText}>Y O U R S C O R E</Text>
        <Text style={styles.totalAnsweredQuestions}> {paramKey} <Text style={styles.totalQuestions}>/ {Questions.length}</Text></Text>
        {renderCoins()}
      </View>
    );
  };

  const renderCoins = () => {
    return (
      <View>
        <Text style={styles.yourScoreText}>E A R N E D   C O I N S</Text>
        {paramKey > 3 ? (
          <View style={styles.coinsView}>
          <Image source={require('../assets/images/quizIcons/coins.png')} />

          <Text style={styles.coinsText}>500</Text>
        </View>
        ) : (
          <View style={styles.coinsView}>
          <Image source={require('../assets/images/quizIcons/lessCoins.png')} />

          <Text style={styles.coinsText}>200</Text>
        </View>
        )}
       
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.footerView}>
        <TouchableOpacity
          style={styles.shareButton}>
          <Image style={styles.shareButtonIcon} source={require('../assets/images/quizIcons/share.png')} />
          <Text style={styles.shareButtonText}>Share Results</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> navigation.navigate('MyTab', {
                screen: 'Home',
                params: {},
              })} style={styles.newQuizButton}>

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
