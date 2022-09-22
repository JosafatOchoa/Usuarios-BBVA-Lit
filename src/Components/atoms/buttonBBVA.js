import { LitElement,html, css } from "lit";

export class ButtonBBVA extends LitElement{

    static get styles(){

        return css`

        .button-base{
            border-radius:1rem;
            padding: 1.4rem 2.4rem;
            border:none;
            font-size:1.5rem;
            color:white;
            font-weight:600;
        }

        .button-two{
            background:red;
        }

        .button-one{
            background:#02a5a5;
        }
        
        
        `
    }

    static get properties(){

        return{

            textButton:{type:String},
            typeStyles:{type:String},
        }
    }
    
  

    render(){

        return html `
        
          <button class="button-base  ${this.typeStyles}"  @click=${this.clickMethod}>${this.textButton}</button>
        
        `
       
    }

    clickMethod() {
       
        this.dispatchEvent(new CustomEvent('my-event', {}));
      }

}