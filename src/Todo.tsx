import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';

interface IState {
  todoText: any;
  todoArray: Array<any>;
  isEdit: boolean;
  activeID: string;
}

export class Todo extends Component<{}, IState> {
  state = {
    todoText: '',
    todoArray: [],
    activeID: '',
    isEdit: false,
  };

  handleAdd = () => {
    const {todoArray, todoText, isEdit, activeID} = this.state;
    if (!isEdit && todoText !== '') {
      const newTodo = {
        id: Math.ceil(Math.random() * 1000),
        text: todoText,
      };
      this.setState(
        {
          todoArray: [...todoArray, newTodo],
        },
        () => this.setState({todoText: '', activeID: ''}),
      );
    } else if (isEdit && activeID !== '') {
      const isEditArray = this.state.todoArray.map((item: any) =>
        item.id === activeID ? {...item, text: todoText} : item,
      );
      this.setState({
        todoArray: isEditArray,
        isEdit: false,
        todoText: '',
        activeID: '',
      });
    } else {
    }
  };

  deleteTodo = (id: any) => {
    const deletedArray = this.state.todoArray.filter((e: any) => e.id !== id);
    this.setState({todoArray: deletedArray});
  };

  editTodo = (item: any) => {
    this.setState({isEdit: true, activeID: item.id, todoText: item.text});
  };

  render() {
    const {todoText} = this.state;
    console.log(this.state.todoArray);
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Todo</Text>
        <View style={styles.main1}>
          <TextInput
            placeholder="add"
            placeholderTextColor="#000"
            style={styles.input}
            value={todoText}
            onChangeText={text => this.setState({todoText: text})}
          />
          <TouchableOpacity style={styles.button} onPress={this.handleAdd}>
            <Text style={styles.addText}>
              {this.state.isEdit ? 'Edit' : 'Add'}
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.todoArray}
          renderItem={({item}: any) => (
            <View style={styles.todoCard}>
              <Text>{item.text}</Text>
              <TouchableOpacity onPress={() => this.editTodo(item)}>
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.deleteTodo(item.id)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 25,
  },
  title: {
    fontSize: 25,
    color: 'grey',
    fontWeight: '900',
    textAlign: 'center',
  },
  input: {
    height: 35,
    width: 180,
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 15,
  },
  main1: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#000',
    marginLeft: 10,
    width: 85,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  addText: {
    fontSize: 15,
    color: '#fff',
  },
  todoCard: {
    height: 50,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
  },
});

export default Todo;
