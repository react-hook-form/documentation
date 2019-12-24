export default `import React from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function App() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => Alert.alert("Form Data", data);

  return (
    <View>
      <Text>First name</Text>
      <Controller
        as={<TextInput />}
        control={control}
        name="firstName"
        rules={{ required: true }}
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Text>Last name</Text>
      <Controller as={<TextInput />} control={control} name="lastName" />

      <Button onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
`
