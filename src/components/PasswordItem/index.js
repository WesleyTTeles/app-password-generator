import { StyleSheet, Text } from "react-native";

const PasswordItem = ({ item }) => {
  return <Text style={styles.itemText}>{item}</Text>;
};

const styles = StyleSheet.create({
  itemText: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    marginTop: 10,
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
  },
});

export default PasswordItem;
