

class ProjetosDev extends HTMLElement {
    constructor() {
        super ();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }


    build(){

        const componetRoot = document.createElement("div");
        componetRoot.setAttribute("class", "projeto");

        const imagemProject = document.createElement("img");
        imagemProject.src = this.getAttribute("photo");


        const tituloProject = document.createElement("h2");
        tituloProject.textContent = this.getAttribute("titulo");


        const descriptionProject = document.createElement("p");
        descriptionProject.textContent = this.getAttribute("about");

        const saibaMais = document.createElement("a");
        saibaMais.href = (this.getAttribute("linkProject") || "#");
        saibaMais.textContent = "Saiba Mais";

        //definindo os filhos

        componetRoot.appendChild(imagemProject);
        componetRoot.appendChild(tituloProject);
        componetRoot.appendChild(descriptionProject);
        componetRoot.appendChild(saibaMais);

        return componetRoot;

    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
            div.projeto {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                background-color: #fff;
                border-radius: 2rem;
                padding-bottom: 2rem;
                box-shadow: 0px 5px 20px -4px #000;
                -webkit-box-shadow: 0px 5px 20px -4px #000;
                -moz-box-shadow: 0px 5px 20px -4px #000;
            }

            .projeto > img {
                padding: 2rem 0 1rem 0;
                width: 90%;
            }

            .projeto > h2 {
                margin: 0;
            }

            .projeto > p {
                padding: 1rem 2rem;
            }

            .projeto > a {
                text-decoration: none;
                color: #fff;
                font-size: larger;
                font-weight: 500;
                background: #186dbc;
                padding: 1rem 4rem;
                border-radius: 4rem;
            }

        `;

        return style;
    }


}



customElements.define("new-project", ProjetosDev);