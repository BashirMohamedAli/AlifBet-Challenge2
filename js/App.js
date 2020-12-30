const alif = document.querySelectorAll(".alif1");
alif.forEach((item) => {
  item.addEventListener("click", function () {
    const audio = new Audio(`/audio/${item.id}.mp3`);
    audio.play();
  });
});
