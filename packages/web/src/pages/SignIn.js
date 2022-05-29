import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);

    fetch("http://localhost:8000/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Sucesso", data);
      });
  };
  return (
    <form action="/authenticate" method="post" onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          inputMode="email"
          autoComplete="username"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          inputMode="password"
          autoComplete="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </fieldset>
      <button type="submit">Entrar</button>
    </form>
  );
}
