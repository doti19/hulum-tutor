import React from "react";

const Button = (props) => {
  return (
    <a
      href=""
      className="p-3 px-6 pt-2 text-black text-bold bg-white rounded-full baseline hover:bg-brightRedLight hover:text-white"
    >
      {props.text}
    </a>
  );
};

export default Button;
