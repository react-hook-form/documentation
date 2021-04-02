export default `type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  isDeveloper: boolean;
}
  
const { register } = useForm<Inputs>({
  defaultValues: {
    firstName: "bill",
    lastName: "luo",
    email: "bluebill1049@hotmail.com",
    isDeveloper: true
  }
})

<input {...register("firstName")} /> // ✅ working version
`
