let audioPlayer = document.querySelector('#audioPlayer');
let playBtn = document.querySelector('#playBtn');
let pauseBtn = document.querySelector('#pauseBtn');
let loaded = false;

pauseBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    playBtn.style.display ="inline";
    pauseBtn.style.display ="none"
    audioPlayer.pause();
    return false;
})
playBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    playBtn.style.display ="none";
    pauseBtn.style.display ="inline"
    audioPlayer.play();
    return false;
})

const playSong = (file)=>{
    if(loaded == false){
        audioPlayer.innerHTML = `<source  src="${file}" type="../Assets/audios/Lil Nas X - STAR WALKIN.mp3"/>`;
        loaded="true";

    }
    audioPlayer.play();

    playBtn.style.display ="none";
    pauseBtn.style.display ="inline";

}

document.querySelectorAll('.mainCol').forEach(item=>{
    item.addEventListener('click', event =>{
        let imagem = item.getAttribute('data-image');
        let artist= item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let file = item.getAttribute('data-file');

        let playerArtistComponent = document.getElementsByClassName('playerArtist')
            playerArtistComponent[0].innerHTML=`
            <img src="${imagem}"/> 
            <h3>${artist}<span> ${song}</span></h3>`;

            playSong(file);

    })
})
