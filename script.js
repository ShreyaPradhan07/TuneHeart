const music=new Audio('audio/1.mp3');
// music.play();
const songs=[
    {
        id:"1",
        songName: 'on my way <br><div class="subtitle">Alan Walker</div>',
        poster:"img/1.jpeg",
    },
    {
        id:"2",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/2.jpg",
    },
    {
        id:"3",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/3.jpeg",
    },
    {
        id:"4",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/4.jpeg",
    },
    {
        id:"5",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/5.jpeg",
    },
    {
        id:"6",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/6.jpeg",
    },
    {
        id:"7",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/7.jpeg",
    },
    {
        id:"8",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/8.jpeg",
    },
    {
        id:"9",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/9.jpeg",
    },
    {
        id:"10",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/10.jpeg",
    },
    {
        id:"11",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/11.jpeg",
    },
    {
        id:"12",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/12.jpeg",
    },
    {
        id:"13",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/13.jpeg",
    },
    {
        id:"14",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/14.jpeg",
    },
    {
        id:"15",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/15.jpeg",
    },
    {
        id:"16",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/16.jpeg",
    },
    {
        id:"17",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/17.jpeg",
    },
    {
        id:"18",
        songName: 'on my way <br> <div class="subtitle">Alan Walker</div>',
        poster:"img/18.jpeg",
    }
]
Array.from(document.getElementsByClassName('songitem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
let masterplay=document.getElementById('masterplay');
let wave=document.getElementById('wave');
masterplay.addEventListener('click',()=>{
    if(music.paused||music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterplay.classList.add('bi-play-fill');
        masterplay.classList.remove('bi-pause-fill');
    }
})
const makeallplay=()=>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.remove('bi-play-circle-fill');
        el.classList.add('bi-pause-circle-fill');
    })
}
const makeallbackground=()=>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
        el.style.background='rgb(105,105,105,.0)';
    })
}

let index=0; 
let poster_master_play=document.getElementById('poster_master_play');
let title=document.getElementById('title');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
     e.addEventListener('click',(el)=>{
        index=el.target.id;
        // console.log(abc);
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`audio/${index}.mp3`;
        music.play();
        masterplay.classList.remove('bi-play-fill');
        masterplay.classList.add('bi-pause-fill');

        let songtitle=songs.filter((els)=>{
            return els.id==index;
        });
        songtitle.forEach(elss=>{
            let {songname}=elss;
            title.innerHTML=songname;
        })
     })
})


let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
})
let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let pop_art=document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click',()=>{
    pop_art.scrollLeft += 330;
})
pop_art_left.addEventListener('click',()=>{
    pop_art.scrollLeft -= 330;
})











