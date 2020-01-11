export default `import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default () => {
  const { register, setValue, handleSubmit, control } = useForm();
  const onSubmit = data => console.log(data);

  const onChange = args => ({
    value: args[0].nativeEvent.text,
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        as={<TextInput />}
        onChange={onChange}
        name="firstName"
        defaultValue=""
      />

      <Button title="Button" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
`
