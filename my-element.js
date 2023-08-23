import { LitElement, html } from "lit-element";

export class MyElement extends LitElement {
  constructor() {
    super();
    this.saludo = "";
    this.mostrarFormulario = false; 
    this.formType = "registro";
  }

  static get properties() {
    return {
      saludo: {
        type: String,
      },
      mostrarFormulario: {
        type: Boolean,
      },
      formType: {
        type: String,
      },
    };
  }

  setValue() {
    this.saludo = "Franklin León";
  }

  toggleForm(type) {
    this.formType = type;
    this.mostrarFormulario = true;
  }

  render() {
    return html`
      <h1>Hola ${this.saludo}</h1>
      <button @click=${() => this.setValue()}>Cambiar saludo</button>

      <!-- Botones para mostrar diferentes formularios -->
      <button @click=${() => this.toggleForm("registro")}>Mostrar Formulario de Registro</button>
      <button @click=${() => this.toggleForm("login")}>Mostrar Formulario de Login</button>

  
      ${this.mostrarFormulario
        ? html`
            ${this.formType === "registro"
              ? html`<form> 
              <div class="container mt-5">
  <h2>Formulario de Registro</h2>
  <form>
    <div class="form-group" style="margin:5px;">
      <label for="nombre">Nombres:</label>
      <input type="text" class="form-control" id="nombre" placeholder="Ingresa tus nombres">
    </div>
    <div class="form-group"style="margin:5px;">
      <label for="apellido">Apellidos:</label>
      <input type="email" class="form-control" id="apellido" placeholder="Ingresa tus apellidos">
    </div>
    <div class="form-group"style="margin:5px;">
      <label for="tentacles">Celular:</label>
      <input type="number" class="form-control" id="celular" placeholder="Celular" min="10" max="100">
    </div>
    <div class="form-group"style="margin:5px;">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Ingresa tu email">
    </div>
    
    <div class="form-group"style="margin:5px;">
      <label for="contrasena">Contraseña:</label>
      <input type="password" class="form-control" id="contrasena" placeholder="Ingresa tu contraseña">
    </div>
    <button type="submit" class="btn btn-primary">Registrarse</button>
  
</div>
</form>`
              : html`<form> <!--  formulario de inicio de sesión -->
              <h2>Inicio de Sesion</h2>
              <form>
              <div class="form-group">
                <label for="correo">Correo electrónico:</label> <br>
                <input type="email" class="form-control" id="correo" placeholder="Ingresa tu correo electrónico">
              </div>
              <div class="form-group"style="margin-top:5px;">
                <label for="contrasena">Contraseña:</label> <br>
                <input type="password" class="form-control" id="contrasena" placeholder="Ingresa tu contraseña">
              </div>
              <button type="submit" class="btn btn-primary"style="margin:5px;">Iniciar Sesión</button>
            </form> </form>`}
          `
        : ""}
    `;
  }
}

customElements.define("my-element", MyElement);
