import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainScreenView: {
        backgroundColor: '#d8e2e8',
        flex: 1,
      },
    
      mainCardView: {
        flexDirection: 'row',
        backgroundColor: '#000000',
        marginHorizontal: 20,
        bottom: 80,
        borderRadius: 15,
      },
    
      cardImage: {
        height: 180,
        width: 150,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
      },
    
      cardMainTextView: {
        justifyContent: 'center',
        paddingLeft: 10,
      },
    
      cardTextView: {
        padding: 10,
      },
    
      cardHeadingTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
      },
    
      cardSubTextView: {
        marginBottom: 10,
        marginLeft: 12,
      },
    
      cardSubTextStyle: {
        color: '#5c5c5c',
        fontSize: 14,
      },
    
      mainViewTopCategoriesText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 50,
      },
    
      topCategoriesTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
    
      topCategoriesButton: {
        backgroundColor: '#d5f0f6',
        alignSelf: 'center',
        paddingHorizontal: 15,
        padding: 5,
        borderRadius: 10,
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