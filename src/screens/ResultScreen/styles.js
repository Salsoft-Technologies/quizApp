import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
    topHeaderView: {
        alignItems: 'center',
      },
    
      topHeaderText: {
        color: '#fff',
        fontSize: 3.7 * vh,
        fontWeight: 'bold',
        paddingTop: 1.5 * vh
      },
    
      topHeaderImage: {
        alignSelf: 'center',
        paddingTop: 1.5 * vh,
      },
    
      topHeaderImageSize: {
        height: 30 * vh,
        width: 50 * vw,
      },
    
      congratulationsMessageText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 3.6 * vh,
        alignSelf: 'center',
        padding: 1.5 * vh,
      },
    
      subMessage: {
        color: '#b1b7bf',
        alignSelf: 'center',
        padding: 1 * vw,
        fontSize: 2.2 * vh,
      },
    
      yourScoreText: {
        color: 'white',
        fontSize: 2.3 * vh,
        color: '#5d6175',
        alignSelf: 'center',
        paddingTop: 3 * vh
      },
    
      totalQuestions: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 5 * vh,
        alignSelf: 'center',
        paddingTop: 2.5 * vh,
      },
    
      totalAnsweredQuestions: {
        color: '#10c398',
        fontWeight: 'bold',
        fontSize: 5 * vh,
        alignSelf: 'center',
        paddingTop: 1.5 * vh,
      },
    
      coinsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 2 * vh,
      },
    
      coinsText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 5 * vh,
      },
    
      footerView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 5.1 * vh,
      },
    
      shareButton: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingHorizontal: 7.5 * vw,
        paddingVertical: 2.3 * vh,
        borderRadius: 3.4 * vw,
        alignItems: 'center',
      },
    
      shareButtonIcon: {
        height: 2.4 * vh,
        width: 3.5 * vw,
      },
    
      shareButtonText: {
        paddingLeft: 1.5 * vw,
      },
    
      newQuizButton: {
        flexDirection: 'row',
        backgroundColor: '#06d3f6',
        paddingHorizontal: 7.5 * vw,
        paddingVertical: 2.3 * vh,
        borderRadius:  3.4 * vw,
      },
    
      newQuizText: {
        color: '#ffffff',
      },
    
      mainResultScreen: {
        flex: 1,
        backgroundColor: '#1d2544',
      },
})