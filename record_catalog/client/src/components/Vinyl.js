

const Vinyl = () => {
    // click on headshell to play the audio. 
    // use the volume slider to control the volume...
    // tested in the Firefox browser.
    // audio source: (free music) youtube audio library – Sunshine (by Telecasted).

    // let input = document.getElementById("headshell");
    // let audio = document.getElementById("player");

    // input.addEventListener("click", function(){
    // if(audio.paused){
    //     audio.play();
    //     audio.currentTime = 0;
    //     input.innerHTML = "Pause";
    // } else {
    //     audio.pause();
    //     input.innerHTML = "Play";
    // }
    // });

    function audioVolume(amount) {
    let changevolume = document.getElementsByTagName("audio")[0];
    changevolume.volume = amount;
    }
    return (
        <div>
            <div class="record-player">
                <input type="checkbox" id="headshell" />
                <label class="headshell" for="headshell"></label>
                <audio id="player">
                <source src="https://lenadesign.org/wp-content/uploads/2022/03/Sunshine-Telecasted.mp3" type="audio/mpeg"/>
                </audio>
                <input type="range" max="1" min="0" step="0.1" id="volume-control" onchange="audioVolume(this.value)" />
                <div class="plinth"></div>
                <div class="platter"></div>
                <div class="vinyl"></div>
                <div class="top-circle"></div>
            </div>
        </div>
    )
}
export default Vinyl;