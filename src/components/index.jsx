
import { useForm } from "react-hook-form";

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  function onSubmitForm(formData){
        console.log(formData)
        reset()
  }

  return (
    <div>
      <h2>React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <label>Email</label>
        <input {...register('email',{required:true})} type="email" name="email" />
        {errors.email && errors.email.type==='require' ? <p>Email is require</p> : null}
        <br />
        <label>Password</label>
        <input {...register('password',{required:true,minLength:8})} type="password" name="password" />
        {errors.password && errors.password.type==='require' ? <p>password is require</p> : null}
        {errors.password && errors.password.type==='minLength' ? <p>password should be greater than 8 charcater</p> : null}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ReactHookForm;
