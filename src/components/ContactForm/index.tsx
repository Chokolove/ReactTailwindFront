"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Button";

type Inputs = {
  name: string
  phone: string
  email: string
  message: string
}

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data, e) => {
    e?.preventDefault()
    console.log(data)
    console.log(errors);
  }
  return (
    <div className="w-full max-w-96">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        <h2 className="text-2xl text-gray-700 uppercase">Get In Touch</h2>
        <input type="text" placeholder="Name" {...register("name", { required: "Name is required" })} className="border border-gray-200 py-2 px-4 rounded-sm w-full" />
        <input type="text" placeholder="Phone" {...register("phone")} className="border border-gray-200 py-2 px-4 rounded-sm w-full" />
        <input type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email address",
            },
          })} placeholder="Email" className="border border-gray-200 py-2 px-4 rounded-sm w-full" />
        <textarea placeholder="Message" {...register("message")} className="border border-gray-200 py-2 px-4 rounded-sm w-full" />
        <Button text="Send Message" type="submit" className="max-w-fit self-center" />
      </form>
    </div>
  )
}
export default ContactForm;