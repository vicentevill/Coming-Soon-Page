import React from "react";

function Validate(event) {
  const input = document.querySelector("input");
  const error = document.querySelector(".emailInput #error");
  const submit = document.querySelector("form.emailInput");
  const errorMsg = document.querySelector(".comingSoon aside");
  if (input.value.trim().length === 0) {
    event.preventDefault();
    error.style.visibility = "unset";
    errorMsg.style.visibility = "unset";
    submit.style.border = "2px solid #e06e6d";
    alert("Error: No email input");
  }
}

export default function EmailInput() {
  return (
    <form className="emailInput">
      <input type="email" name="email" placeholder="Email Address" />
      <img src="/icon-error.svg" alt="error" id="error" />
      <button onClick={Validate} type="submit">
        <img src="/icon-arrow.svg" alt="submit" />
      </button>
    </form>
  );
}
