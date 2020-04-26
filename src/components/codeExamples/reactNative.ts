export default `import React from "react"
import { Text, View, TextInput, Button, Alert } from "react-native"
import { useForm } from 'react-hook-form'

export default function App() {
  const { register, setValue, handleSubmit, errors } = useForm()
  const onSubmit = data => Alert.alert('Form Data', JSON.stringify(data));
  
  useEffect(() => {
    register({ name: 'firstName'}, { required: true });
    register({ name: 'lastName'});
  }, [register]);

  return (
    <View>
      <Text>First name</Text>
      <TextInput
        onChangeText={text => setValue('firstName', text, true)}
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Text>Last name</Text>
      <TextInput
        onChangeText={text => setValue('lastName', text)}
      />

      <Button onPress={handleSubmit(onSubmit)} />
    </View>
  )
}
`
