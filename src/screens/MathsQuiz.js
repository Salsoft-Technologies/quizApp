import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View, Image, StatusBar} from 'react-native';
import Questions from '../../questions.json';
import styles from './styles';

import * as firebaseobj from 'firebase';
import {db} from '../../config';

if (!firebaseobj.apps.length) {
  firebaseobj.initializeApp(db);
}


function MathsQuiz({navigation}) {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);
  
  const [incorrectChecked, setIncorrectChecked] = useState(false);
  const [correctDisabled, setCorrectDisabled] = useState(false);
  const [incorrectDisabled, setIncorrectDisabled] = useState(false);
  const [fetchedQuestions, setFetechedQuestions] = useState([])

  const [openAnswers, setOpenAnswers] = useState(false);
  const [answer1, setAnswer] = useState(false);
  const [answer2, setAnswer2] = useState(false);
  const [answer3, setAnswer3] = useState(false);
  const [answer4, setAnswer4] = useState(false);
  const [answer5, setAnswer5] = useState(false);

  const fetchData = async () => {
    const allQuestions = await firebaseobj.database().ref("Questions");
    allQuestions.on("value", datasnap => {
      const theQuestions = datasnap.val();
      setFetechedQuestions(theQuestions);
      

    })
  }

  useEffect(()=>{
    fetchData()
  }, [])

  const renderProgress = () => {
    return (
      <View>
        {openAnswers === false && openAnswers === false ? (
          <View style={styles.progressMainView}>
            <View style={styles.newColor}></View>
            <View style={styles.newColor}></View>
            <View style={styles.newColor}></View>
            <View style={styles.newColor}></View>
            <View style={styles.newColor}></View>
          </View>
        ) : (
          <View style={styles.progressAlternativeView}>
            <View
              style={
                answer1 === true
                  ? styles.correctAnswerColor
                  : styles.incorrectAnswerColor
              }></View>
            <View
              style={
                answer2 === true
                  ? styles.correctAnswerColor
                  : styles.incorrectAnswerColor
              }></View>
            <View
              style={
                answer3 === true
                  ? styles.correctAnswerColor
                  : styles.incorrectAnswerColor
              }></View>
            <View
              style={
                answer4 === true
                  ? styles.correctAnswerColor
                  : styles.incorrectAnswerColor
              }></View>
            <View
              style={
                answer5 === true
                  ? styles.correctAnswerColor
                  : styles.incorrectAnswerColor
              }></View>

          </View>
        )}
      </View>
    );
  };

  const renderQuizHeading = () => {
    return <Text style={styles.quizHeading}>Mathematics Quiz</Text>;
  };

  const renderQuestionNo = () => {
    return (
      <Text style={styles.questionNo}>
        Question <Text style={styles.questionNoSize}>0{currentQuestion}</Text>
        <Text style={styles.totalQuestionsNo}>/05</Text>
      </Text>
    );
  };

  const renderQuestionDescription = () => {
    return (
      <Text style={styles.questionDescription}>
        {Questions[index].question}
      </Text>
    );
  };

  const ScoreIncrement = () => {
    setOpenAnswers(true);
    index === 0 && setAnswer(true);
    index === 1 && setAnswer2(true);
    index === 2 && setAnswer3(true);
    index === 3 && setAnswer4(true);
    index === 4 && setAnswer5(true);
    setScore(score + 1);
    setChecked(true);
    setIncorrectChecked(true);
    setIncorrectDisabled(true);
    setCorrectDisabled(true);
  };

  const ScoreDecrement = () => {
    setOpenAnswers(true);
    setScore(score - 1);
    setIncorrectChecked(true);
    setChecked(true);
    setCorrectDisabled(true);
    setIncorrectDisabled(true);
  };

  const nextQuestion = () => {
    setIncorrectDisabled(false);
    setCorrectDisabled(false);
    setChecked(false);
    setIncorrectChecked(false);
    setCurrentQuestion(currentQuestion + 1);
    const newQuestion = index + 1;
    if (newQuestion < Questions.length) {
      setIndex(newQuestion);
    } else {
      navigation.navigate('Results', {
        paramKey: score,
      });
      setCurrentQuestion(1);
      setIndex(0);
      setChecked(false);
      setIncorrectChecked(false);
      setCorrectDisabled(false);
      setIncorrectDisabled(false);
      setScore(0);
      setAnswer(false);
      setAnswer2(false);
      setAnswer3(false);
      setAnswer4(false);
      setAnswer5(false);
    }

    // _renderRestart()
  };

  const newLevel = (newArray) => {
    var i, j, temp;
    for (i = newArray.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  };

  const renderIncorrectAnswer = () => {
    const newArray = Questions[index].incorrect_answers;
    newLevel(newArray);
    return newArray.map((item, i) => {
      return (
        <TouchableOpacity
          disabled={correctDisabled}
          onPress={ScoreDecrement}
          key={i}
          style={styles.buttonIncorrectAnswer}>
          <View
            style={
              incorrectChecked === true
                ? styles.buttonIncorrectRedAnswerView
                : styles.buttonIncorrectAnswerView
            }>
            <Text
              style={
                incorrectChecked === true
                  ? styles.buttonIncorrectRedAnswerText
                  : styles.buttonIncorrectAnswerText
              }>
              {item}
            </Text>
            {incorrectChecked === true ? (
              <Image
                style={{height: 20, width: 20}}
                source={require('../assets/images/quizIcons/wrong.png')}
              />
            ) : (
              <Image
                source={require('../assets/images/quizIcons/circle.png')}
              />
            )}
          </View>
        </TouchableOpacity>
      );
    });
  };

  const renderCorrectAnswer = () => {
    return (
      <TouchableOpacity
        disabled={incorrectDisabled}
        onPress={ScoreIncrement}
        style={styles.buttonIncorrectAnswer}>
        <View
          style={
            checked === true
              ? styles.buttonCorrectAnswerView
              : styles.buttonIncorrectAnswerView
          }>
          <Text
            style={
              checked === true
                ? styles.buttonCorrectAnswerText
                : styles.buttonIncorrectAnswerText
            }>
            {Questions[index].correct_answer}
          </Text>
          {checked === true ? (
            <Image
              style={{height: 20, width: 20}}
              source={require('../assets/images/quizIcons/correct2.png')}
            />
          ) : (
            <Image source={require('../assets/images/quizIcons/circle.png')} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const renderAllAnswers = () => {
    const correctRandomNumber = Math.floor(Math.random() * Math.floor(3)) + 1;
    return (
      <View style={styles.allAnswers}>
        {correctRandomNumber < 3 ? (
          <View>
            {renderIncorrectAnswer()}
            {renderCorrectAnswer()}
          </View>
        ) : (
          <View>
            {renderCorrectAnswer()}
            {renderIncorrectAnswer()}
          </View>
        )}
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.mainFooterView}>
        <TouchableOpacity
          // onPress={() => navigation.navigate('Results'), {paramKey: score}}
          onPress={() =>
            navigation.navigate('Results', {
              paramKey: score,
            })
          }
          style={styles.quitButton}>
          <Image
            style={styles.quitButtonIcon}
            source={require('../assets/images/quizIcons/quit.png')}
          />
          <Text style={styles.quitButtonText}>Quit Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={nextQuestion} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.mainMathsQuiz}>
    {console.log(fetchedQuestions[index], 'finalQuestions')}
      <StatusBar backgroundColor="#12172e" />
      {renderQuizHeading()}
      {renderQuestionNo()}
      {renderProgress()}
      {renderQuestionDescription()}
      {renderAllAnswers()}
      {renderFooter()}
    </View>
  );
}

export default MathsQuiz;
