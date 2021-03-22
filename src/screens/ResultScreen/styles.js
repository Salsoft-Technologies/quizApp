import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    topHeaderView: {
        alignItems: 'center',
      },
    
      topHeaderText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 10
      },
    
      topHeaderImage: {
        alignSelf: 'center',
        paddingTop: 10,
      },
    
      topHeaderImageSize: {
        height: 200,
        width: 200,
      },
    
      congratulationsMessageText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center',
        padding: 10,
      },
    
      subMessage: {
        color: '#b1b7bf',
        alignSelf: 'center',
        padding: 5,
        fontSize: 15,
      },
    
      yourScoreText: {
        color: 'white',
        fontSize: 16,
        color: '#5d6175',
        alignSelf: 'center',
        paddingTop: 20,
      },
    
      totalQuestions: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        alignSelf: 'center',
        paddingTop: 5,
      },
    
      totalAnsweredQuestions: {
        color: '#10c398',
        fontWeight: 'bold',
        fontSize: 35,
        alignSelf: 'center',
        paddingTop: 5,
      },
    
      coinsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
      },
    
      coinsText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
      },
    
      footerView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 40,
      },
    
      shareButton: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
      },
    
      shareButtonIcon: {
        height: 15,
        width: 15,
      },
    
      shareButtonText: {
        paddingLeft: 5,
      },
    
      newQuizButton: {
        flexDirection: 'row',
        backgroundColor: '#06d3f6',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 15,
      },
    
      newQuizText: {
        color: '#ffffff',
      },
    
      mainResultScreen: {
        flex: 1,
        backgroundColor: '#1d2544',
      },
})