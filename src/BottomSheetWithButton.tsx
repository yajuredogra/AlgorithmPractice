import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

const BottomSheetWithButton = (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 24,
      }}>
      <Text
        style={{
          color: 'white',
          alignSelf: 'stretch',
          textAlign: 'center',
          padding: 12,
          fontSize: 24,
        }}>
        Give Reward
      </Text>

      <Text
        style={{
          color: '#BBAE9E',
          marginTop: 12,
        }}>
        To
      </Text>

      <TextInput
        defaultValue=""
        onChangeText={text => {}}
        inputMode="text"
        multiline={false}
        style={{
          borderColor: '#BBAE9E',
          borderWidth: 1,
          padding: 6,
          color: 'white',
        }}
      />

      <Text
        style={{
          color: '#BBAE9E',
          marginTop: 12,
        }}>
        Amount
      </Text>

      <TextInput
        defaultValue=""
        onChangeText={text => {}}
        inputMode="decimal"
        multiline={false}
        style={{
          borderColor: '#BBAE9E',
          borderWidth: 1,
          padding: 6,
          color: 'white',
        }}
      />

      <Text
        style={{
          color: '#BBAE9E',
          marginTop: 12,
        }}>
        Message
      </Text>

      <TextInput
        defaultValue=""
        onChangeText={text => {}}
        inputMode="text"
        multiline={true}
        numberOfLines={30}
        style={{
          height: 200,
          textAlignVertical: 'top',
          borderColor: '#BBAE9E',
          borderWidth: 1,
          padding: 6,
          color: 'white',
        }}
      />

      <View
        style={{
          alignContent: 'center',
          borderRadius: 20,
          backgroundColor: 'white',
          margin: 12,
        }}>
        <TouchableOpacity onPress={() => props.onActionListener()}>
          <Text
            style={{
              padding: 12,
              fontSize: 15,
              alignSelf: 'stretch',
              textAlign: 'center',
            }}>
            Give
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: 'flex-end',
          marginTop: 52,
          marginBottom: 52,
        }}>
        <TouchableOpacity onPress={() => props.onActionListener()}>
          <Image
            style={{
              height: 25,
              width: 25,
              alignSelf: 'flex-end',
              margin: 24,
            }}
            source={require('../assets/cross_white.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomSheetWithButton;
