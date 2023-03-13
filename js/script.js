console.log('mostrar o document' , document);

const botaoVideo = document.querySelector(".botao-video");
const video = document.getElementById("video")
const modal = document.querySelector(".modal"); 
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto")
}

botaoVideo.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

 botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
 });

 
