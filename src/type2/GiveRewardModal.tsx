import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const GiveRewardModal = (props: any) => {
  const [toText, setToText] = useState('');
  const [amountText, setAmountText] = useState('');
  const [MessageText, setMessageText] = useState('');
  return (
    <Modal
      visible={props?.visibility}
      transparent
      onRequestClose={() => props?.actionListener(-1)}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          backgroundColor: 'transparent',
        }}
        enabled={Platform.OS === 'ios'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={() => props?.actionListener(-1)}>
              <View
                style={{
                  flex: 1,
                }}
              />
            </TouchableWithoutFeedback>
            <View
              style={[
                {
                  backgroundColor: 'black',
                  paddingVertical: 20,
                  paddingHorizontal: 16,
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                },
              ]}>
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
                defaultValue={toText}
                onChangeText={text => setToText(text)}
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
                defaultValue={amountText}
                onChangeText={text => setAmountText(text)}
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
                defaultValue={MessageText}
                onChangeText={text => setMessageText(text)}
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
                <TouchableOpacity
                  onPress={() =>
                    props.actionListener(2, {toText, amountText, MessageText})
                  }>
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
                <TouchableOpacity onPress={() => props.actionListener(-1)}>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      alignSelf: 'flex-end',
                      margin: 24,
                    }}
                    source={require('../../assets/cross_white.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default GiveRewardModal;
