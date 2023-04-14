import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const TopTabView = (props: any) => {
  const [currentTabIndex, setCUrrentTabIndex] = useState(0);
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: 12,
      }}>
      <View
        style={{
          flex: 1,
          borderTopLeftRadius: 24,
          padding: 12,
          backgroundColor: currentTabIndex == 0 ? 'white' : '#E4E2DF',
        }}>
        <TouchableOpacity
          onPress={() => {
            setCUrrentTabIndex(0);
            props.tabChangeListener(0);
          }}>
          <Text
            style={{
              alignSelf: 'stretch',
              textAlign: 'center',
              color: currentTabIndex == 0 ? '#8F6E57' : 'black',
            }}>
            Feed
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          borderTopRightRadius: 24,
          padding: 12,
          backgroundColor: currentTabIndex == 1 ? 'white' : '#E4E2DF',
        }}>
        <TouchableOpacity
          onPress={() => {
            setCUrrentTabIndex(1);
            props.tabChangeListener(1);
          }}>
          <Text
            style={{
              alignSelf: 'stretch',
              textAlign: 'center',
              color: currentTabIndex == 1 ? '#8F6E57' : 'black',
            }}>
            My Rewards
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopTabView;
