import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [text, setTest] = useState("");
  const [stateArray, setStateArray] = useState<Array<string>>([]);
  const textHandler = (event: any) => {
    setTest(event);
  };

  const buttonHandler = () => {
    console.log(text, "text");
    setStateArray([...stateArray, text]);
  };

  const deleteButtonHandler = () => {
    setStateArray([]);
  };

  useEffect(() => {
    console.log(stateArray, "stateArray");
  }, [stateArray]);

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="기본텍스트"
          onChangeText={textHandler}
        />
        <Button title="추가 버튼" onPress={buttonHandler} />
        {/* <Button title="초기회 버튼" onPress={deleteButtonHandler} /> */}
      </View>
      <View style={styles.goalsContainer}>
        {/* <ScrollView alwaysBounceVertical={false}>
          {stateArray.map((item, i) => (
            <View style={styles.listStyle} key={i}>
              <Text style={styles.listTextStyle}>{item}</Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={stateArray}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <View style={styles.listStyle} key={itemData.index}>
                <Text style={styles.listTextStyle}>{itemData.item}</Text>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // appContainer: {
  //   flex: 1, // 모든 화면에 대한 선언
  //   //flexDirection: "column", // 세로축 선언
  //   flexDirection: "row", // 가로축 선언
  //   justifyContent: "space-between",
  //   alignItems: "flex-start",
  // },
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 3,
  },
  listStyle: {
    margin: 8,
    padding: 8,
    borderRadius: 6, // 아이폰에서는 적용이 안됨(text 컴포넌트에 선언시) 따라서 스타일은 view 선언해줘야함 (변환시켜주는곳에서 오류인듯?)
    backgroundColor: "#5e0acc",
  },
  listTextStyle: {
    color: "white",
  },
});
