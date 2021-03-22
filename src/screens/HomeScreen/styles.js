import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
    mainScreenView: {
        backgroundColor: '#d8e2e8',
        flex: 1,
      },
    
      mainCardView: {
        flexDirection: 'row',
        backgroundColor: '#000000',
        marginHorizontal: 4 * vw,
        bottom: 12 * vh,
        borderRadius: 3.5 * vw
      },
    
      cardImage: {
        height: 26 * vh,
        width: 36 * vw,
        borderTopLeftRadius: 3.5 * vw,
        borderBottomLeftRadius: 3.5 * vw,
      },
    
      cardMainTextView: {
        justifyContent: 'center',
        paddingLeft: 2 * vw
      },
    
      cardTextView: {
        padding: 2 * vw,
      },
    
      cardHeadingTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 4 * vh,
      },
    
      cardSubTextView: {
        marginBottom: 0.2 * vh,
        marginLeft: 2 * vw,
      },
    
      cardSubTextStyle: {
        color: '#5c5c5c',
        fontSize: 2 * vh,
      },
    
      mainViewTopCategoriesText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 7.5 * vh
      },
    
      topCategoriesTextStyle: {
        fontSize: 3 * vh,
        fontWeight: 'bold',
      },
    
      topCategoriesButton: {
        backgroundColor: '#d5f0f6',
        alignSelf: 'center',
        paddingHorizontal: 2.3 * vh,
        padding: 1.5 * vw,
        borderRadius: 2 * vw,
      },
    
      topCategoriesButtonText: {
        color: '#4edbf6',
        fontWeight: 'bold',
      },
    
      categoriesMainView: {
        height: 120,
        width: 100,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        borderRadius: 15,
        marginLeft: 15,
        marginBottom: 20,
      },
    
      allQuizIcons: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        marginTop: 20,
      },
    
      allQuizName: {
        paddingTop: 10,
        color: '#484f53',
        alignSelf: 'center',
      },
    
      allQuizList: {
        bottom: 30,
        alignSelf: 'center',
        marginRight: 5,
      },
})