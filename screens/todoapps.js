import React, {useState} from 'react';
import { Alert , StyleSheet , View , FlatList , TouchableWithoutFeedback , Keyboard ,} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

const Todoapp = () => {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1'},
    { text: 'create an app', key: '2'},
    { text: 'play on the switch', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todos must be over 3 chars long',[
        {text: 'OK', onPress:() => console.log('alert closed')}
      ])
    }
  }

  return (
  // <Sandbox />
  <TouchableWithoutFeedback onPress={() => {
    Keyboard.dismiss();
    console.log('dismissed keyboard');
  }}>
    <View style={styles.container}>
      <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    backgroundColor: 'white',
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
  }
});