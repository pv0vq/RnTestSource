import { StyleSheet, View, FlatList, Button } from "react-native";
import { useState, useEffect } from "react";
import GoalItem from "./componunts/GoalItem";
import GoalInput from "./componunts/GoalInput";

export default function App() {
  const [stateArray, setStateArray] = useState<Array<any>>([]);
  const [modalState, setModalState] = useState(false);

  const setModalStateHandler = () => {
    setModalState(true);
  };
  const buttonHandler = (text: any) => {
    setStateArray([
      ...stateArray,
      { text: text, key: Math.random().toString() },
    ]);
  };

  const deleteButtonHandler = (id: any) => {
    console.log(id, "id");
    setStateArray(stateArray.filter((item) => item.key !== id));
  };

  const modalCancelHandler = () => {
    setModalState(false);
  };

  useEffect(() => {
    console.log(stateArray, "stateArray");
  }, [stateArray]);

  return (
    <View style={styles.appContainer}>
      <Button title="모달열기" color="#311b6b" onPress={setModalStateHandler} />
      <GoalInput
        onButton={(text: any) => buttonHandler(text)}
        visible={modalState}
        cancel={modalCancelHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={stateArray}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData.item.key}
                text={itemData.item.text}
                onDeleteItem={deleteButtonHandler}
              />
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
    backgroundColor: "#b259ee",
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
});
