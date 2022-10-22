

// const Vinyl = () => {
    
//     const input = document.getElementById("headshell");
//     const audio = document.getElementById("player");
    
//     input.addEventListener("click", function(){
//     if(audio.paused){
//         audio.play();
//         audio.currentTime = 0;
//         input.innerHTML = "Pause";
//     } else {
//         audio.pause();
//         input.innerHTML = "Play";
//     }
//     });
    
//     function audioVolume(amount) {
//         let changevolume = document.getElementsByTagName("audio")[0];
//         changevolume.volume = amount;
//     }
//     return (
//         <div>
//             {audioVolume ? <div className="record-player">
//                 <input type="checkbox" id="headshell"></input>
//                 <label className="headshell" for="headshell"></label>
//                 <audio id="player">
//                 <source src="https://lenadesign.org/wp-content/uploads/2022/03/Sunshine-Telecasted.mp3" type="audio/mpeg"/>
//                 </audio>
//                 <input type="range" max="1" min="0" step="0.1" id="volume-control" onchange="audioVolume(this.value)"></input>
//                 <div className="plinth"></div>
//                 <div className="platter"></div>
//                 <div className="vinyl"></div>
//                 <div className="top-circle"></div>
//             </div> :null}
//         </div>
//     )
// }
// export default Vinyl;