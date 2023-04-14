import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';

const SelectableList = () => {
  const [listData, setListData] = useState([
    {
      title: 'title',
      description: 'description 1',
      imageUrl: 'https://picsum.photos/id/237/200/300',
      isSelected: false,
    },
    {
      title: 'title 2',
      description: 'description here 2',
      imageUrl: 'https://picsum.photos/seed/picsum/200/300',
      isSelected: false,
    },
    {
      title: 'title 3',
      description: 'description here 3',
      imageUrl: 'https://picsum.photos/200/300?grayscale',
      isSelected: false,
    },
  ]);

  function handleItemClick(selectedIndex: any) {
    const items = [...listData];
    items[selectedIndex].isSelected = !items[selectedIndex].isSelected;
    setListData(items);
  }

  const renderFlatListItem = (item: any) => {
    let dataItem = item.item;
    console.log(dataItem);
    return (
      <TouchableOpacity onPress={() => handleItemClick(item.index)}>
        <View
          style={{
            backgroundColor: 'orange',
            flex: 1,
            flexDirection: 'row',
            margin: 12,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            borderColor: dataItem?.isSelected ? 'red' : 'orange',
            borderWidth: 2,
          }}>
          <Image
            style={{height: 30, width: 30, margin: 12}}
            source={{uri: dataItem.imageUrl}}
          />
          <View style={{justifyContent: 'center', flex: 1}}>
            <Text style={styles.headerTextStyle}>{dataItem.title}</Text>
            <Text style={styles.descriptionTextStyle}>
              {dataItem.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        style={{flex: 1}}
        data={listData}
        renderItem={item => renderFlatListItem(item)}
        keyExtractor={(item: any, index: any) => index}
      />
    </SafeAreaView>
  );
};

export default SelectableList;

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  descriptionTextStyle: {
    fontSize: 12,
    color: 'black',
  },
});
