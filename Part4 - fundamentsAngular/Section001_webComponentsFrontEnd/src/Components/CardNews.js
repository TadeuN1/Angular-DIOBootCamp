class Cardnews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());

    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");


        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "./assets/default-profile.png";
        newsImage.alt = "Foto da Notícia"
        cardRight.appendChild(newsImage);


        componentRoot.appendChild(cardLeft)
        componentRoot.appendChild(cardRight)



        return componentRoot;
    }

    styles(){
        const style = document.createElement("style")
        style.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }
        
        .card{
            width: 80%;
            display: flex;
            flex-direction: row;
            -moz-box-shadow: 4px 5px 4px 5px rgba(94,13,163,0.62);
            -webkit-box-shadow: 4px 5px 4px 5px rgba(94,13,163,0.62);
            box-shadow: 4px 5px 4px 5px rgba(94,13,163,0.62);
            justify-content: space-between;
        }
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        
        }
        
        .card_left > span {
            font-weight: bold;
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            text-decoration: none;
            font-weight: bold;
            color: black;
        }
        
        .card_left > p {
            color: gray;
        }
        
     `;

        return style
    }
}

customElements.define('card-news', Cardnews)