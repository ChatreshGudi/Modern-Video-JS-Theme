function embed_video(link, id){
    play_div = document.getElementById(id);
    console.log(play_div)
    play_div.classList.add("plyr__video-embed");
    plyrstyle = document.createElement("link");
    plyrstyle.setAttribute("rel", "stylesheet");
    plyrstyle.setAttribute("href", "https://cdn.jsdelivr.net/gh/CDNSFree2/Plyr/plyr.css");
    document.head.appendChild(plyrstyle);
    plyrscript = document.createElement("script");
    plyrscript.setAttribute("defer", "true");
    plyrscript.setAttribute("src", "https://cdn.jsdelivr.net/gh/CDNSFree2/Plyr/plyr.js");
    document.head.appendChild(plyrscript);
    frame_embed = document.createElement("iframe");
    frame_embed.setAttribute("src", link);
    frame_embed.setAttribute("allow", "autoplay");
    frame_embed.setAttribute("allowfullscreen", "true");
    frame_embed.setAttribute("allowtransperancy", "true");
    play_div.appendChild(frame_embed);
}

// embed_video("https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1", "player")