// ===== VÍDEO DO YOUTUBE COMO FUNDO =====
let player

function onYouTubeIframeAPIReady() {
  player = new YT.Player("ytPlayer", {
    videoId: "0qT2krzVxA8",
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      playlist: "0qT2krzVxA8",
      controls: 0,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
      iv_load_policy: 3,
      start: 10
    },
    events: {
      onReady: function(e) {
        e.target.playVideo()
      }
    }
  })
}

// ===== BOTÃO ENTRAR =====
document.getElementById("btnEntrar").addEventListener("click", function() {
  document.body.classList.add("saindo")
  setTimeout(function() {
    window.location.href = "campo.html"
  }, 800)
})

// ===== BOTÃO TUTORIAL =====
document.getElementById("btnTutorial").addEventListener("click", function() {
  document.body.classList.add("saindo")
  setTimeout(function() {
    window.location.href = "campo.html?tutorial=true"
  }, 800)
})