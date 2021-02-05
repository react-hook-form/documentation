export default `const { register } = useForm({
  defaultValues: {
    firstName: "bill",
    lastName: "luo",
  }
})

<input {...register("firstName")} /> // ✅ working version
<Controller name="lastName" render={({ field }) => <input {...field} />} />  // ✅ working version
`
