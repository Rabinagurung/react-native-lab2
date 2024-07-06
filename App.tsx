import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { Todo } from './src/types/Todo';
import Header from './src/components/Header';
import TodoInput from './src/components/TodoInput';
import TodoItem from './src/components/TodoItem';
import {
  addTodo,
  getTodos,
  removeTodo,
  toggleTodo
} from './src/services/firestore';

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      const todos = await getTodos();
      setLoading(false);
      setTodos(todos);
    };

    fetchTodos();
  }, []);

  const handleAddTodo = useCallback(
    async (text: string) => {
      setLoading(true);
      if (text !== '') {
        const newTodo: Todo = {
          id: String(Date.now()),
          text,
          isCompleted: false
        };
        setTodos([...todos, newTodo]);
        await addTodo(newTodo);
      }
      setLoading(false);
    },
    [todos]
  );

  const handleRemoveTodo = useCallback(
    async (id: string) => {
      setLoading(true);
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      await removeTodo(id);
      setLoading(false);
    },
    [todos]
  );

  const handleToggleTodo = useCallback(
    async (id: string) => {
      setLoading(true);
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
          toggleTodo(todo.id, todo.isCompleted);
        }
        return todo;
      });
      setTodos(updatedTodos);
      setLoading(false);
    },
    [todos]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <TodoInput onAddTodo={handleAddTodo} loading={loading} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onToggleTodo={handleToggleTodo}
            onRemoveTodo={handleRemoveTodo}
          />
        )}
        contentContainerStyle={{ padding: 16 }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f0f0f0'
  }
});

export default App;
