import * as React from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";

export default function SimpleAlert({ text, success }) {
  return (
    <Alert
      icon={
        success ? (
          <CheckIcon fontSize="inherit" />
        ) : (
          <ErrorIcon fontSize="inherit" />
        )
      }
      severity={success ? "success" : "error"}
      className="w-80 mx-auto md:mx-96 bg-brightRedLight"
    >
      <span
        className={
          success ? "font-bold text-green-700" : "font-bold text-red-700"
        }
      >
        {text}
      </span>
    </Alert>
  );
}
