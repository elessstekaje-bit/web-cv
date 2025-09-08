// === Form Komentar ===
const commentForm = document.getElementById("commentForm");
const commentsContainer = document.getElementById("commentsContainer");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = commentForm.name.value.trim();
  const comment = commentForm.comment.value.trim();

  if (name && comment) {
    const commentEl = document.createElement("div");
    commentEl.classList.add("comment");

    commentEl.innerHTML = `
      <div class="comment-name">${escapeHtml(name)}</div>
      <div class="comment-text">${escapeHtml(comment)}</div>
    `;

    commentsContainer.prepend(commentEl);
    commentForm.reset();
  }
});

// Escape karakter HTML untuk keamanan input user
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// === Pemutar Lagu dengan autoplay random ===
const selector = document.getElementById("songSelector");
const player = document.getElementById("audioPlayer");

const songs = [
  "https://files.catbox.moe/g74iko.mp3", // Ganti dengan link lagu asli
  "https://files.catbox.moe/def456.mp3",
  "https://files.catbox.moe/ghi789.mp3",
];

// Fungsi untuk set lagu ke player dan update select
function playSong(url) {
  player.src = url;
  player.play();

  // Update pilihan select sesuai lagu yg diputar
  selector.value = url;
}

// Auto random play saat load
window.addEventListener("load", () => {
  const randomIndex = Math.floor(Math.random() * songs.length);
  playSong(songs[randomIndex]);
});

selector.addEventListener("change", function () {
  const selected = this.value;
  if (selected) {
    playSong(selected);
  } else {
    player.pause();
    player.src = "";
  }
});
