import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import "./index.css";

type FormValues = {
  username: string
  email: string
  channel: string
}

function YoutubeForm(props) {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data: FormValues) => {
    console.log("form submitteed", data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username"></label>
        <input type="text" id="username" {...register("username")} />
        <label htmlFor="email"></label>
        <input type="email" id="email" {...register("email")}></input>
        <label htmlFor="channel"></label>
        <input type="text" id="channel" {...register("channel")}></input>
        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;
