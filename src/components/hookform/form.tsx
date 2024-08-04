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
    alert(JSON.stringify(data))
    console.log("form submitteed", data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username"></label>
        <input type="text" placeholder="username" id="username" {...register("username", { required: true, maxLength: 20 })} />
        <label htmlFor="email"></label>
        <input placeholder="email" type="email" id="email" {...register("email", { pattern: /^[A-Za-z]+$/i })}></input>
        <label htmlFor="channel"></label>
        <input type="text" placeholder="channel" id="channel" {...register("channel")}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
