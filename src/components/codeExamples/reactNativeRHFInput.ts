export default `import React from "react"
import { Text, View, TextInput, Button, Alert } from "react-native"
import { RHFInput } from 'react-hook-form-input';
import useForm from 'react-hook-form'

export default function App() {
  const { register, setValue, handleSubmit, errors } = useForm()
  const onSubmit = data => Alert.alert('Form Data', data)

  return (
    <View>
      <Text>First name</Text>
      <RHFInput
        as={<TextInput />}
        name="firstName"
        setValue={setValue} 
        register={register}
        rules={{ required: true }}
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Text>Last name</Text>
      <RHFInput
        as={<TextInput />}
        name="lastName"
        setValue={setValue} 
        register={register}
      />

      <View>
        <Button onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  )
}
`
