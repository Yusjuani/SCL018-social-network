<<<<<<< HEAD
export const register = () =>
const viewRegister =
=======
export const register = () => {
    const formRegister = document.createElement("section");
    const viewRegister = `
    <img src="/img/logo.png" class="logo" alt="Logo Sport Fem">
    <div class="container">
    <form class="login">
    <section>
        <input type="text"class="form"
          placeholder="Ingresa tu nombre"/>
        </section>
        <section>
          <input type="text"class="form"
          placeholder="Ingresa tu email"/>
          </section>
          <section>
        <input type="text" class="form"
          placeholder="Ingresa tu contraseña"/>
          </section>
          <button class="formBtn">Registrar</button>`

formRegister.innerHTML = viewRegister;
return viewRegister;
};
>>>>>>> 9776b9ef839ac66b43eb2c20317c096610efddbb
