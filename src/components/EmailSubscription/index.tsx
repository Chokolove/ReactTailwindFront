"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Button"
import Container from "../Container"

type Inputs = {
  email: string
}

function EmailSubscription() {
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
    <div className="w-full bg-lightGray">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container className="flex gap-9 justify-center items-center">
          <h2 className="text-2xl text-gray-700">Stay Updated with Our Latest Offers</h2>
          <input
            className="border border-gray-200 py-2 px-4 rounded-sm w-full max-w-80"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          <Button text="Subscribe Now" className="w-80" type="submit" />
        </Container>
        {errors.email && <p>{errors.email.message}</p>}
      </form>
    </div>
  )
}

export default EmailSubscription