import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

const Tab2View = () => {
  const child1ListData = [
    {
      message: 'This is great to give award',
      description: 'You rewarded by Jhon snow',
      duration: '2 hours ago',
    },
    {
      message: 'Winter is here',
      description: 'You rewarded by unknown user',
      duration: '3 hours ago',
    },
  ];

  const ChildItem = (props: any) => {
    let data = props.data.item;

    return (
      <View
        style={{
          flex: 1,
          margin: 12,
          flexDirection: 'row',
        }}>
        <Image
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
          }}
          source={require('../assets/user1.jpg')}
        />

        <View style={{marginHorizontal: 12}}>
          <Text
            style={{
              fontSize: 16,
            }}>
            {data.message}
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: '#D2D0CF',
            }}>
            {data.description}
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: '#D2D0CF',
            }}>
            {data.duration}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <FlatList
        data={child1ListData}
        renderItem={item => <ChildItem data={item} />}
      />
    </View>
  );
};

export default Tab2View;
