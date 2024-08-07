import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Slider from "@react-native-community/slider";

interface WeightSelectorProps {
  value: number;
  onChange: (value: number) => void;
}

const WeightSelector: React.FC<WeightSelectorProps> = ({ value, onChange }) => {
  const onTextInputChange = (text: string) => {
    const numericValue = parseFloat(text);
    if (!isNaN(numericValue)) {
      onChange(numericValue);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Weight (kg)</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={onTextInputChange}
            value={value.toString()}
          />
        </View>
        <Slider
          style={styles.slider}
          minimumValue={10}
          maximumValue={200}
          step={1}
          value={value}
          onValueChange={onChange}
        />
      </View>
    </View>
  );
};

export default WeightSelector;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    paddingVertical: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
  },
  inputWrapper: {
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
  },
  slider: {
    width: "100%",
  },
});
