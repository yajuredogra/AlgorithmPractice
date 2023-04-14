import {View, Text} from 'react-native';
import React from 'react';
import {SceneMap, TabBar, TabBarItem, TabView} from 'react-native-tab-view';
const TabBarView = (props: any) => {
  const renderLabel = (props: any) => {
    return (
      <View style={{flex: 1}}>
        <Text
          style={{
            color: props?.focused ? 'black' : '#BBAE9E',
          }}>
          {props?.route.title}
        </Text>
      </View>
    );
  };

  const renderTabBarItem = (props: any) => {
    return (
      <View style={{}}>
        <TabBarItem {...props} renderLabel={renderLabel} />
      </View>
    );
  };

  return (
    <TabBar
      {...props}
      style={{
        elevation: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        marginTop: 24,
      }}
      indicatorStyle={{height: '100%', width: 0, opacity: 0}}
      renderTabBarItem={renderTabBarItem}
    />
  );
};

export default TabBarView;
