export default `const { register } = useForm({
  defaultValues: {
    firstName: "bill",
    lastName: "luo",
    email: "bluebill1049@hotmail.com",
    isDeveloper: true
  }
})

<input {...register("firstName")} /> // ✅ working version
<Controller name="lastName" render={({ field }) => <input {...field} />} />  // ✅ working version
`
