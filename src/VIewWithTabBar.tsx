import React, {useCallback, useMemo, useRef} from 'react';
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
import {SceneMap, TabBar, TabBarItem, TabView} from 'react-native-tab-view';
import BottomSheet from '@gorhom/bottom-sheet';
import Tab1View from './Tab1View';
import Tab2View from './Tab2View';
import TabBarView from './TabBarView';
import BottomSheetWithButton from './BottomSheetWithButton';

function ViewWithTabBar(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Feed'},
    {key: 'second', title: 'My Rewards'},
  ]);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['1%', '80%'], []);
  const handleSheetChanges = useCallback((index: number) => {}, []);

  const [currentUserData, setCurrentUserData] = React.useState({
    imageUrl: 'http://placehold.it/120x120&text=image1',
    FirstName: 'Jane',
    lastName: 'Deo',
    moneyInfo: {amountGiven: 100, amountReceived: 250, currencyType: '$'},
  });

  const renderScene = SceneMap({
    first: Tab1View,
    second: Tab2View,
  });

  const CurrentUserView = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../assets/user1.jpg')}
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

        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={index => setIndex(index)}
          initialLayout={{width: layout.width}}
          renderTabBar={TabBarView}
        />
      </View>

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
        <TouchableOpacity
          onPress={() => bottomSheetRef.current?.snapToIndex(1)}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../assets/plus.png')}
          />
        </TouchableOpacity>
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <BottomSheetWithButton
          onActionListener={() => bottomSheetRef.current?.collapse()}
        />
      </BottomSheet>
    </SafeAreaView>
  );
}

export default ViewWithTabBar;
