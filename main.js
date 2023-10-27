const video = document.getElementById("myVideo") //primero recuperamos el video

const playPictureInPicture = () => { //generamos un método que se llama playPictureInPicture

    //verificamos que el video que se esta reproduciendo (pictureInPictureElement) es igual a el video, entonces
    //que me oculte el video y si no es igual directamente me mostrará el video como una ventana emergente

    if (document.pictureInPictureElement === video) {

        document.exitPictureInPicture()

    } else {

        video.requestPictureInPicture()

    }

}

document.getElementById('toggle').addEventListener('click', () => { //cuando se haga clic en el botón me muestra el video

    playPictureInPicture()

})