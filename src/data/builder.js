import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Building registration" {...register("Building registration", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Building name" {...register("building name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="building number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <input type="tel" placeholder="building length" {...register("Building length", {required: true, minLength: 6, maxLength: 12})} />
      <input type="tel" placeholder="building width" {...register("Building width", {required: true, minLength: 6, maxLength: 12})} />
      <input type="tel" placeholder="building height" {...register("Building height", {required: true, minLength: 6, maxLength: 12})} />
      <input type="tel" placeholder="building ID" {...register("Building ID", {required: true, minLength: 6, maxLength: 12})} />
      <input type="text" placeholder="Building occupancy" {...register("building occupancy", {required: true, maxLength: 100})} />
      <select {...register("Room creation", { required: true })}>
        <option value="reg">reg</option>
        <option value="name">Name</option>
        <option value="Em">Em</option>
        <option value="No">No</option>
        <option value="reg">reg</option>
        <option value="name">Name</option>
        <option value="Em">Em</option>
        <option value="No">No</option>
        <option value="No">No</option>
      </select>

      <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" />

      <input type="submit" />
    </form>
  );
}
