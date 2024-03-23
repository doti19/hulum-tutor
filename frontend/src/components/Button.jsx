import React from "react";

const Button = (props) => {
  return (
    <a
      href=""
      className="p-3 px-6 pt-2 text-white bg-brightGreen rounded-full baseline hover:bg-brightRedLight"
    >
      {props.text}
    </a>
  );
};

export default Button;
