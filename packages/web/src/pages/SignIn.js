import React from "react";

export default function SignIn() {
  return (
    <form action="/authenticate" method="post">
      <fieldset>
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          inputmode="email"
          autocomplete="username"
        />
      </fieldset>
      <fieldset>
        <label for="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          autocomplete="current-password"
        />
      </fieldset>
      <button type="submit">Entrar</button>
    </form>
  );
}
