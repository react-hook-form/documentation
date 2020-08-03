export default `import * as React from "react";
import { useForm } from "react-hook-form";
import { ModalForm } from "./ModalForm";

type FormValues = {
  toggle: boolean;
  mail: string;
  ghost: string;
  keepValue: string;
};

export default function App() {
  const [modalFormData, setModalFormData] = React.useState("");
  const { watch, register, setValue, getValues, handleSubmit } = useForm<FormValues>();
  const [showModal, setShowModal] = React.useState(false);
  const { toggle, mail } = watch();
  
  React.useEffect(() => {
    setValue("mail", modalFormData);
  }, [setValue, modalFormData]);

  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="checkbox" name="toggle" ref={register} />
        {toggle && (
          <button type="button" onClick={() => setShowModal(!showModal)}>
            Show Modal
          </button>
        )}

        <input name="mail" placeholder="mail" ref={register} />

        <input
          name="keepValue"
          placeholder="keepValue"
          ref={register}
          style={{
            display: toggle ? "block" : "none" // toggle the visbility of an input
          }}
        />

        <input type="submit" />
      </form>

      {/* working with a modal pop up, make sure to create separate form */}
      {showModal && (
        <ModalForm mail={mail} setModalFormData={setModalFormData} />
      )}
    </>
  );
}
`
