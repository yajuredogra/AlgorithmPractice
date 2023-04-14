import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';

const ChildViewBasedOnTab = (props: any) => {
  useEffect(() => {}, [props?.currentTab]);
  const child1ListData = [
    {
      message: 'this is great',
      description: 'David is rewarded by Jhon snow',
      duration: '2 hours ago',
    },
    {
      message: 'Winter is coming',
      description: 'Bill is rewarded by Bruce',
      duration: '3 hours ago',
    },
  ];

  const child2ListData = [
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
          source={require('../../assets/user1.jpg')}
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

  const ChildView1 = () => {
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

  const ChildView2 = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <FlatList
          data={child2ListData}
          renderItem={item => <ChildItem data={item} />}
        />
      </View>
    );
  };

  return props?.currentTab === 0 ? <ChildView1 /> : <ChildView2 />;
};

export default ChildViewBasedOnTab;
