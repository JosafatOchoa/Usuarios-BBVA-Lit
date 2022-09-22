import { html, css, LitElement } from "lit";

export class MainHeader extends LitElement {
  static get styles() {
    return css`

     *{
      box-sizing:border-box
     }

      header {
        background: var(--background-navy-color);
      }

      nav {
        width: 100%;
        padding: 0 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      img {
        background: var(--background-white-color);
        border-radius: 0.5rem;
        height: 4.5rem;
        width: 100%;
        padding: 0.5rem;
      }

      .container-logo-bbva {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15rem;
        height: 8.8rem;
      }

      ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 50%;
        color: var(--background-white-color);
        font-weight: 600;
        font-size: 1.4rem;
      }

      li {
        list-style: none;
      }

      .menu-link-client {
        color: #f8cd51;
      }

      .container-second-bbva {
        
        display: flex;
        justify-content: space-around;
        width: 20%;
      }

      .container-menu-bbva {
     
        display:flex;
        align-items:center;
        justify-content:center;
        gap:.8rem;
        width:30%;
      }

      .container-menu-bbva span{

        color: var(--background-white-color);
        font-weight: 600;
      }

      .icon-menu-bbva {
      
        width: 2rem;
        height: 1.5rem;
        background: linear-gradient(
          to bottom,
          #ffffff 20%,
          transparent 21%,
          transparent 40%,
          #fffefe 41%,
          #ffffff 60%,
          transparent 61%,
          transparent 80%,
          #ffffff 81%
        );
      }
    `;
  }

  handleButton() {
    console.log("Evento personalizado");
  }

  render() {
    return html`
      <header>
        <nav>
          <div class="container-logo-bbva">
            <img src="./img/BBVA Logo.png" />
          </div>

          <ul>
            <li>PERSONAS</li>
            <li>EMPRESAS Y GOBIERNO</li>
            <li class="menu-link-client">Hazte cliente</li>
          </ul>

          <div class="container-second-bbva">
            <button-bbva
              textButton="Acceso"
              typeStyles="button-one"
              @my-event=${this.handleButton}
            ></button-bbva>

            <div class="container-menu-bbva">
              <span>Menu</span>
              <div class="icon-menu-bbva"></div>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}
