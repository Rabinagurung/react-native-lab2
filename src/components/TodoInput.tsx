import {
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

interface TodoInputProps {
  loading: boolean;
  onAddTodo: (text: string) => void;
}

const TodoInput = ({ onAddTodo, loading }: TodoInputProps) => {
  const [inputText, setInputText] = useState<string>('');

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      onAddTodo(inputText.trim());
      setInputText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder='Add a new todo...'
        placeholderTextColor='#888'
      />
      <TouchableOpacity onPress={handleAddTodo} disabled={loading}>
        {loading ? (
          <ActivityIndicator size='large' color='#5F33E1' />
        ) : (
          <Ionicons name='add-circle' size={36} color='#5F33E1' />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 16
  },
  input: {
    flex: 1,
    height: 40,
    color: '#333',
    fontWeight: '500',
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1
  }
});
export default TodoInput;
