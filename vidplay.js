function embed_video(link, id, marker = {}){
    play_div = document.getElementById(id);
    console.log(play_div)
    play_div.classList.add("plyr__video-embed");
    plyrstyle = document.createElement("link");
    plyrstyle.setAttribute("rel", "stylesheet");
    plyrstyle.setAttribute("href", "https://cdn.jsdelivr.net/gh/CDNSFree2/Plyr/plyr.css");
    document.head.appendChild(plyrstyle);
    plyrscript = document.createElement("script");
    plyrscript.setAttribute("defer", "true");
    plyrscript.setAttribute("src", "https://cdn.jsdelivr.net/gh/CDNSFree2/Plyr/plyr.min.js");
    document.head.appendChild(plyrscript);
    frame_embed = document.createElement("iframe");
    frame_embed.setAttribute("src", link);
    frame_embed.setAttribute("allow", "autoplay");
    frame_embed.setAttribute("allowfullscreen", "true");
    frame_embed.setAttribute("allowtransperancy", "true");
    play_div.appendChild(frame_embed);
    controls = [
        'play-large', // The large play button in the center   
        'restart', // Restart playback    
        'rewind', // Rewind by the seek time (default 10 seconds)    
        'play', // Play/pause playback   
        'fast-forward', // Fast forward by the seek time (default 10 seconds)    
        'progress', // The progress bar and scrubber for playback and buffering    
        'current-time', // The current time of playback    
        'duration', // The full duration of the media    
        'mute', // Toggle mute    
        'volume', // Volume control    
        'captions', // Toggle captions    
        'settings', // Settings menu    
        'pip', // Picture-in-picture (currently Safari only)    
        'airplay', // Airplay (currently Safari only)    
        'download', // Show a download button with a link to either the current source or a custom URL you specify in your options    
        'fullscreen',
    ];
    const player = new Plyr('#'+id, {controls, markers: {
        enabled: true,
        points: [
          {
            time: 10,
            label: 'first marker',
          },
          {
            time: 40,
            label: 'second marker',
          },
          {
            time: 120,
            label: '<strong>third</strong> marker',
          },
        ],
      },});
    return player;
}

// embed_video("https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1", "player")