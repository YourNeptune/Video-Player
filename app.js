const video = document.getElementById('video')
const play = document.getElementById('play')
const end = document.getElementById('stop')
const progress = document.getElementById('progress')
const timeStamp = document.getElementById('timeStamp')

video.addEventListener('click', toggleVideo)
video.addEventListener('pause', switchIcon)
video.addEventListener('play', switchIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideo)
end.addEventListener('click', stopVideo)
progress.addEventListener('change', setProgress)


//update video status: play & pause video
function toggleVideo(){
    if(video.paused){
        video.play()
    }else{
        video.pause()
    }
}

//update play & pause icon
function switchIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    }else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

//update progress bar
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100
    setTimeStamp()
}

//set progress bar
function setProgress(){
    video.currentTime = (+progress.value * video.duration) / 100
    setTimeStamp()
}

//pause video
function stopVideo(){
    video.currentTime = 0
    video.pause()
}

// time stamp
function setTimeStamp(){
    console.log(video.currentTime)
    let mins = Math.floor(video.currentTime / 60)
    if(mins < 10){
        mins = '0' + String(mins);
    }

    let secs = Math.floor(video.currentTime % 60)
    if(secs < 10){
        secs = '0' + String(secs);
    }
    timeStamp.innerHTML = mins + ':' + secs
}

