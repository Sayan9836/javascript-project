
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay')
let Myprogress = document.getElementById('Myprogress');
let gif = document.getElementById('gif');
let songList = Array.from(document.getElementsByClassName('songList'));


// Array of songs
let songs = [
    { songName: "Tu hi meri shab Hai-@pagalWorld", filepath: "songs/1.mp3", coverpath: "cover/1.jpg" },
    { songName: "Tujhe Sochta Hoon-@pagalWorld", filePath: "songs/2.mp3", coverpath: "cover/2.jpg" },
    { songName: "beetein lambhe-@pagalWorld", filepath: "songs/3.mp3", coverpath: "cover/3.jpg" },
    { songName: "Dus Bahane-@pagalWorld", filepath: "songs/4.mp3", coverpath: "cover/4.jpg" },
    { songName: "Kya Mujhe Pyaar Hai-@pagalWorl", filepath: "songs/5.mp3", coverpath: "cover/5.jpg" },
    { songName: "Zaara Se-@pagalWorld", filepath: "songs/6.mp3", coverpath: "cover/6.jpg" },
    { songName: "Zindagi Do Pal Ki-@pagalWorld", filepath: "songs/7.mp3", coverpath: "cover/7.jpg" }
];

// iterating each element
songList.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
})

//play the song using middle play button
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//updating seekbar with respect to song
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    Myprogress.value = progress;
})

//custom update the seekbar
Myprogress.addEventListener('change', () => {
    audioElement.currentTime = Myprogress.value * audioElement.duration / 100;
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
// const makeAllplays2 = () => {
//     Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
//         element.classList.remove('fa-circle-play');
//         element.classList.add('fa-circle-pause');
//     })
// }


// working with side play button
Array.from(document.getElementsByClassName('songItemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {

        if (audioElement.paused || audioElement.currentTime == 0) {
            makeAllplays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `songs/${songIndex + 1}.mp3`;
            currentsongplaying.innerText = songs[songIndex].songName;
            audioElement.play();
            //audioElement.currentTime = 0;
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        }

        else {
            makeAllplays();
            audioElement.pause();
            gif.style.opacity = 0;
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');

        }


    })
})




// working with previous button
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;

    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    currentsongplaying.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')

})

// working with next button
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }

    audioElement.src = `songs/${songIndex + 1}.mp3`;
    currentsongplaying.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause')
})