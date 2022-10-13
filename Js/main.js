let audioPlayer = document.querySelector('#audioPlayer');
let playBtn = document.querySelector('#playBtn');
let pauseBtn = document.querySelector('#pauseBtn');
let loaded = false;
const grow = [{'width':'100%'}];    


let animate = document.querySelector(".playerControlProgress2").animate( grow ,80000000000 );
animate.pause();	




pauseBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    playBtn.style.display ="inline";
    pauseBtn.style.display ="none"
    
    audioPlayer.pause();
    animate.pause();	
    
})
playBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    playBtn.style.display ="none";
    pauseBtn.style.display ="inline"
   	
    audioPlayer.play();
    animate.play();	

        return false;
})

const playSong = (file)=>{
   
    if(loaded == false){
        audioPlayer.innerHTML = `<source  src="${file}"  type="audio/mp3" />`;
      
        loaded="true";

    }
    
    
    audioPlayer.play();
    animate.play();	
  
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

