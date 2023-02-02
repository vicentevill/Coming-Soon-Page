import React from "react";
import EmailInput from "./emailInput";

export default function ComingSoon() {
  return (
    <div className="comingSoon">
      <header>
        <img src="images/logo.svg" alt="logo" id="logo" />
      </header>
      <img src="images/hero-mobile.jpg" alt="hero-image" id="heroIMG" />
      <h1>
        {" "}
        <strong>We're</strong> coming soon
      </h1>
      <p>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <EmailInput />
      <aside>Please provide a valid email</aside>
    </div>
  );
}
