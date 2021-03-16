import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, View, Image, StatusBar, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';

function QuizList() {
  const navigation = useNavigation();
  const [firstList, setFirstList] = useState([
    {
      id: 1,
      quizName: 'Mathematics',
      image: require('../../assets/images/quizIcons/maths.png'),
      to: ()=> navigation.navigate('Maths')
    },

    {
      id: 2,
      quizName: 'Science',
      image: require('../../assets/images/quizIcons/science.png'),
    },

    {
      id: 3,
      quizName: 'Drama',
      image: require('../../assets/images/quizIcons/drama.png'),
    },

    {
      id: 4,
      quizName: 'Art & Craft',
      image: require('../../assets/images/quizIcons/art.png'),
    },

    {
      id: 5,
      quizName: 'Knowledge',
      image: require('../../assets/images/quizIcons/knowledge.png'),
    },

    {
      id: 6,
      quizName: 'Language',
      image: require('../../assets/images/quizIcons/language.png'),
    },
  ]);

  const _renderFirstItems = ({item}) => {
    return (
      <TouchableOpacity onPress={item.to} style={styles.categoriesMainView}>
        <View>
          <Image style={styles.allQuizIcons} source={item.image} />
        </View>

        <View>
          <Text style={styles.allQuizName}>{item.quizName}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  
  return (
    <>
     <FlatList
      style={styles.allQuizList}
        data={firstList}
        renderItem={_renderFirstItems}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
}

export default QuizList;
