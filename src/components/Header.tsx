import { View, StyleSheet, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Todo List</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 16,
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },

  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5F33E1'
  }
});

export default Header;
