import React from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';
import TopTabView from './TopTabView';
import ChildViewBasedOnTab from './ChildViewBasedOnTab';
import GiveRewardModal from './GiveRewardModal';

function ViewWithTabBar2(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [currentUserData, setCurrentUserData] = React.useState({
    imageUrl: 'http://placehold.it/120x120&text=image1',
    FirstName: 'Jane',
    lastName: 'Deo',
    moneyInfo: {amountGiven: 100, amountReceived: 250, currencyType: '$'},
  });

  const [currentChildIndex, setCurrentChildIndex] = React.useState(0);
  const [giveRewardModalVisibility, setGiveRewardModalVisibility] =
    React.useState(false);

  const CurrentUserView = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../assets/user1.jpg')}
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
          }}
        />
        <View style={{margin: 12}}>
          <Text>{`${currentUserData.FirstName} ${currentUserData.lastName}`}</Text>
          <Text style={{color: '#8c8c8c'}}>
            Given
            <Text
              style={{
                fontWeight: '600',
                color: 'black',
              }}>{` ${currentUserData.moneyInfo.amountGiven}${currentUserData.moneyInfo.currencyType}`}</Text>
            <Text style={{color: '#8c8c8c'}}> / Received</Text>
            <Text
              style={{
                fontWeight: '600',
                color: 'black',
              }}>{` ${currentUserData.moneyInfo.amountReceived}${currentUserData.moneyInfo.currencyType}`}</Text>
          </Text>
        </View>
      </View>
    );
  };

  const onTabChangeListener = (tabIndex: number) => {
    setCurrentChildIndex(tabIndex);
  };

  const modalActionListener = (selection: number, data: object) => {
    switch (selection) {
      case -1:
        setGiveRewardModalVisibility(false);
        break;
      case 2:
        setGiveRewardModalVisibility(false);
        break;

      default:
        break;
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#F4F1EE',
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'white'}
      />

      <View
        style={{
          flex: 1,
        }}>
        <CurrentUserView />
        <TopTabView tabChangeListener={onTabChangeListener} />
        <ChildViewBasedOnTab currentTab={currentChildIndex} />
        <GiveRewardModal
          visibility={giveRewardModalVisibility}
          actionListener={modalActionListener}
        />

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 25,
            right: 0,
            margin: 32,
          }}>
          <TouchableOpacity onPress={() => setGiveRewardModalVisibility(true)}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../../assets/plus.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ViewWithTabBar2;
