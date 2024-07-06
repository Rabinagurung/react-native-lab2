import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
}

const TodoItem = ({ todo, onToggleTodo, onRemoveTodo }: TodoItemProps) => {
  return (
    <View style={styles.todoItemContainer}>
      <View style={styles.todoItem}>
        <TouchableOpacity onPress={() => onToggleTodo(todo.id)}>
          <Ionicons
            name={todo.isCompleted ? 'checkmark-circle' : 'ellipse-outline'}
            size={24}
            color={todo.isCompleted ? 'green' : 'gray'}
          />
        </TouchableOpacity>
        <Text
          style={[styles.todoText, todo.isCompleted && styles.completedText]}>
          {todo.text}
        </Text>
        <TouchableOpacity onPress={() => onRemoveTodo(todo.id)}>
          <Ionicons name='trash' size={24} color='red' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItemContainer: {
    marginBottom: 10
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1
  },
  todoText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '700'
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray'
  }
});

export default TodoItem;
