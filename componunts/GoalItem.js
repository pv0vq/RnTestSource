import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={props.onDeleteItem.bind(this, props.id)} // this 자기자신, props.id
      style={({ pressed }) => pressed && styles.pressedItem} // 프레스 스타일 적용
    >
      <View style={styles.listStyle}>
        <Text style={styles.listTextStyle}>{props.text}</Text>
      </View>
    </Pressable>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  listStyle: {
    margin: 8,
    padding: 8,
    borderRadius: 6, // 아이폰에서는 적용이 안됨(text 컴포넌트에 선언시) 따라서 스타일은 view 선언해줘야함 (변환시켜주는곳에서 오류인듯?)
    backgroundColor: "#5e0acc",
  },
  listTextStyle: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
