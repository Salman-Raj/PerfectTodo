import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

interface IState {
  isVisible: boolean;
}

export class Address extends Component<{}, IState> {
  state = {
    isVisible: false,
  };

  openModal = () => {
    this.setState({
      isVisible: true,
    });
  };

  openAddressModal = () => {
    this.openModal();
  };
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.topContainer}>
          <Ionicon name="arrow-back" size={24} color="#fff" />
          <Text style={styles.addressText}>ADDRESS</Text>
        </View>
        <TouchableOpacity onPress={this.openAddressModal}>
          <View style={styles.secondContainer}>
            <Ionicon name="add" size={24} color="#33b2f2" />
            <Text style={styles.addNewAddressText}> ADD NEW ADDRESS</Text>
          </View>
        </TouchableOpacity>
        <Modal
          animationType={'fade'}
          transparent={false}
          visible={this.state.isVisible}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          <View style={styles.modal}>
            <View style={styles.modalTopContainer}>
              <View>
                <TouchableOpacity>
                  <View style={styles.topContainer}>
                    <Ionicon name="arrow-back" size={24} color="#fff" />
                    <Text style={styles.addressText}>ADDRESS</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({isVisible: !this.state.isVisible});
                }}>
                <Ionicon
                  name="close"
                  size={24}
                  color="red"
                  style={styles.closeIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <View>
                <Text>Name*</Text>
                <Text>Name*</Text>
                <TextInput style={styles.input} placeholderTextColor="#fff" />
                <TextInput
                  style={styles.input}
                  placeholder="Mobile*"
                  placeholderTextColor="#fff"
                />
              </View>
              <View>
                <View style={styles.pinAndState}>
                  <TextInput
                    style={styles.input1}
                    placeholder="Pincode*"
                    placeholderTextColor="#fff"
                  />
                  <TextInput
                    style={styles.input1}
                    placeholder="State*"
                    placeholderTextColor="#fff"
                  />
                </View>
                <TextInput
                  style={styles.input}
                  placeholder="Adress(House No, Building,street)*"
                  placeholderTextColor="#fff"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Mobile*"
                  placeholderTextColor="#fff"
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#121010',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'flex-start',
    margin: 15,
  },
  addressText: {
    color: '#fff',
    fontSize: 18,
  },
  secondContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
    margin: 15,
  },
  addNewAddressText: {
    color: '#33b2f2',
    fontSize: 18,
  },
  modal: {
    height: '100%',
    backgroundColor: '#121010',
  },
  text: {
    color: '#fff',
  },
  modalTopContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeIcon: {
    marginTop: 15,
    marginRight: 15,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    // width: '90%',
    width: 320,
    marginBottom: 15,
    marginTop: 5,
  },
  input1: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    // width: '90%',
    width: 160,
    marginBottom: 15,
    marginTop: 5,
  },
  pinAndState: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
});

export default Address;
