import React, {useContext} from 'react';
import {Text, View, Image, StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../components/Header/index';
import QuizList from '../../components/QuizList/index';
import styles from './styles';



function HomeScreen({navigation, route}) {
  const { name } = route.params;

  const renderCard = () => {
    return (
      <View style={styles.mainCardView}>
        <Image
          style={styles.cardImage}
          source={require('../../assets/images/mainImages/CardImage2.jpg')}

        />

        <View style={styles.cardMainTextView}>
          <View style={styles.cardTextView}>
            <Text style={styles.cardHeadingTextStyle}>Play &</Text>
            <Text style={styles.cardHeadingTextStyle}>Win</Text>
          </View>

          <View style={styles.cardSubTextView}>
            <Text style={styles.cardSubTextStyle}>
              De Finibus Bonorum et {'\n'}Malorum for use
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderTopQuizCategories = () => {
    return (
      <View style={styles.mainViewTopCategoriesText}>
        <Text style={styles.topCategoriesTextStyle}>Top Quiz Categories</Text>

        <TouchableOpacity onPress={()=> navigation.navigate('AllQuiz')} style={styles.topCategoriesButton}>
          <Text style={styles.topCategoriesButtonText}>View All</Text>
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <View style={styles.mainScreenView}>
    <StatusBar backgroundColor='#2a2b31'/>
    <Header title= {name}/>
      {renderCard()}
      {renderTopQuizCategories()}
      <QuizList/>
    </View>
  );
}

export default HomeScreen;
