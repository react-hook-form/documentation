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

<input name="firstName" ref={register} /> // ✅ working version
<input name="lastName" ref={() => register({ name: 'lastName' })} />
// ❌ above example does not work with "defaultValues" due to its "ref" not being provided
`
