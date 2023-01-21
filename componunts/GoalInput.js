import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
const GoalInput = (props) => {
  const [text, setTest] = useState("");

  const textHandler = (event) => {
    setTest(event);
  };

  const buttonHandler = () => {
    props.onButton(text);
    setTest("");
  };

  useEffect(() => {
    console.log(text, "text");
  }, [text]);

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="기본텍스트"
          onChangeText={textHandler}
        />
        <View style={styles.buttonStyle}>
          <View style={styles.button}>
            <Button title="추가 버튼" onPress={buttonHandler} color="#946fc5" />
          </View>
          <View style={styles.button}>
            <Button title="취소 버튼" onPress={props.cancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#946fc5",
    backgroundColor: "#946fc5",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    marginRight: 8,
    padding: 16,
  },
  buttonStyle: {
    marginTop: 8,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  imageStyle: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
