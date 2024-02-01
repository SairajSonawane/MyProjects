const video = document.getElementById('myVideo');

    
    const videoMap = {
      'A': 'videos/aforapple.mp4',
      'B': 'videos/bforball.mp4',
      'C': 'videos/cforcat.mp4',
      'D': 'videos/dfordog.mp4',
      'E': 'videos/eforegg.mp4',
      'F': 'videos/fforfan.mp4',
      'G': 'videos/gforgun.mp4',
      'H': 'videos/hforhen.mp4',
      'I': 'videos/iforinkpot.mp4',
      'J': 'videos/jforjug.mp4',
      'K': 'videos/kforking.mp4',
      'L': 'videos/lforlion.mp4',
      'M': 'videos/mformonkey.mp4',
      'N': 'videos/nfornest.mp4',
      'O': 'videos/oforox.mp4',
      'P': 'videos/pforparrot.mp4',
      'Q': 'videos/qforqueen.mp4',
      'R': 'videos/rforrabbit.mp4',
      'S': 'videos/sforsong.mp4',
      'T': 'videos/tfortrain.mp4',
      'U': 'videos/uforumbrella.mp4',
      'V': 'videos/vforvase.mp4',
      'W': 'videos/wforwatch.mp4',
      'X': 'videos/xforxmas.mp4',
      'Y': 'videos/yforyatch.mp4',
      'Z': 'videos/zforzebra.mp4',
      
    };

   
    function playVideo() {
      const key = event.key.toUpperCase(); // Convert the key to uppercase for case-insensitivity

      
      if (videoMap.hasOwnProperty(key)) {
        
        video.src = videoMap[key];

      
        video.play();

        
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      }
    }

   
    document.addEventListener('keydown', playVideo);