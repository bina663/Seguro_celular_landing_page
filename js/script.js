let time = 4000;indexImagem = 0; imagem = document.querySelectorAll('#slider img'); max = imagem.length;

function next(){
    imagem[indexImagem].classList.remove('selected')
    indexImagem ++
    if (indexImagem >= max) {
        indexImagem = 0;
    }
    imagem[indexImagem].classList.add('selected')
}


function start(){
    setInterval(() => {
        next()
    }, time);

}
window.addEventListener('load',start);