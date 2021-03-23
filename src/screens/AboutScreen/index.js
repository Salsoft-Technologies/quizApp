import React from 'react';
import {useState} from 'react';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import styles from './styles';

function AboutScreen({navigation}) {
  const [data, setData] = useState([
    {
      id: 1,
      icon: require('../../assets/images/quizIcons/M.png'),
      heading: 'Maths',
      description:
        'Maths is one of the weakest points of students nowadays. However it is quite easy and necessary.',
    },

    {
      id: 2,
      icon: require('../../assets/images/quizIcons/A.png'),
      heading: 'Astronomy',
      description:
        'Studying about space is nowadays in a trend and it gives a lot of ways to explore world.',
    },

    {
      id: 3,
      icon: require('../../assets/images/quizIcons/S.png'),
      heading: 'Science',
      description:
        'Studying about science is nowadays in a trend and it gives a lot of ways to explore world.',
    },
  ]);

  const renderAboutHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={styles.headerView}>
        <Image source={require('../../assets/images/navigation/setting.png')} />
      </TouchableOpacity>
    );
  };

  const renderImageContainer = () => {
    return (
      <View>
        <Image
          style={styles.imageSize}
          source={require('../../assets/images/mainImages/study.png')}
        />
      </View>
    );
  };

  const renderHeading = () => {
    return (
      <View style={styles.headingView}>
        <Text style={styles.aboutText}>
          about<Text style={styles.meText}> me</Text>
        </Text>
      </View>
    );
  };

  const renderDescription = () => {
    return (
      <Text style={styles.descriptionText}>
        We are ambitious about expanding knowledge among all. We believe that
        knowledge can win you the world no matter where you belong to.
      </Text>
    );
  };

  const _renderItems = ({item}) => {
    return (
      <View style={styles.itemsView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.iconSize} source={item.icon} />
          <Text style={styles.quizHeadingText}>{item.heading}</Text>
        </View>

        <Text style={styles.quizDescriptionText}>{item.description}</Text>
      </View>
    );
  };

  const renderList = () => {
    return (
      <FlatList
        data={data}
        renderItem={_renderItems}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  const renderFooter = () => {
      return(
          <TouchableOpacity onPress={()=> navigation.navigate('AllQuiz')} style={styles.footerView}>
              <Image style={styles.arrowIcon} source={require('../../assets/images/quizIcons/rightArrow.png')}/>

              <Text style={styles.tourText}>
              Take a Tour
              </Text>
          </TouchableOpacity>
      )
  }

  return (
    <View style={styles.mainSettingScreen}>
      <StatusBar backgroundColor="#141733" />
      {renderAboutHeader()}
      {renderImageContainer()}
      {renderHeading()}
      {renderDescription()}
      {renderList()}
      {renderFooter()}
    </View>
  );
}

export default AboutScreen;
