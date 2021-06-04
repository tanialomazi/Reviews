// o 3º de muitos

//getting elements
let img = document.getElementById("img");
let t = document.querySelectorAll('.t');
let larrow = document.getElementById('larrow');
let rarrow = document.getElementById('rarrow');
let arrow = document.querySelectorAll('.arrow');
let button = document.getElementById("bt");

//contador das "páginas"
let x = 0;

//listas de novos elementos
let imgList = Array("imagens/coracao.png","imagens/elefante.png", "imagens/kvothe.png", "imagens/luvas.png");
let ttitleList = Array("Coração","Elefante", "Kvothe", "Luvas");
let ttypeList = Array("Linha Amigurumi","Linha Baloon", "Linha Amigurumi", "Linha Fofura");
let tList = Array("ccccccc ccccccccc ccccccccc ccccc   cccccccccccccccccccccccc ccccccccccccccccccccccccccccc   ccccc ccc ccccc cccccccccccc ccccccccccc ccc cccccccc ccccc cccccc ccccccc cccc cccc ccccc","aaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaa aaaaaaa aaaaaaaaa aaaaaaaa aaaaaaaaaaaaa aaaaa aaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaa", "bbbbbbbbb bbbbbbb bbbbbbbbbbbbbbbbbbb bbbbbbbbbbb bbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbb bbbb bbbbb bbbbbbbbbbbbbbbbbbbb bbbbb", "ccc cccccccccccccccc ccccccccc ccccccccccc ccccccccccccccdddddddddd ddddddddddd dddddddddd dddddddddddddd ddddddddd cc ccccccccc cccccc cccccccccc ccccccccc ccccccccc ccccc");

// ao clicar nas setas
arrow.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        //troca itens das arrays
        if (e.currentTarget.id == "rarrow") {
            x++;
        } else {
            x--;
        }

        //verifica se x existe na array
        if (x > imgList.length - 1) {
            x = 0;
        } else if (x < 0) {
            x = imgList.length - 1;
        }

    img.src = imgList[x];
    t[0].textContent = ttitleList[x];
    t[1].textContent = ttypeList[x];
    t[2].textContent = tList[x];
})
})

// ao clicar no botão "surpreenda-me"
if (button.addEventListener("click", function () {

    let rd = Math.floor(Math.random() * 4);

    //verifica se x existe na array
    if (rd > imgList.length - 1) {
        rd = 0;
    } else if (rd < 0) {
        rd = imgList.length - 1;
    }

    img.src = imgList[rd];
    t[0].textContent = ttitleList[rd];
    t[1].textContent = ttypeList[rd];
    t[2].textContent = tList[rd];

})) { }
