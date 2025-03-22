console.log("script.js が読み込まれました！");

const video = document.getElementById("loopVideo");
video.playbackRate = 0.8; // 最初の再生速度を遅く設定

if (video) {
  console.log("動画が見つかりました！");

  video.addEventListener("timeupdate", function () {
    console.log("現在の再生時間: " + video.currentTime);

    if (video.currentTime >= 4.4) {
      // ループ条件
      video.currentTime = 0; // 0秒に戻す
      video.play();
      video.playbackRate = 0.8; // 再生速度を再設定（遅くする）
      console.log("0秒に戻し、再生速度を 0.8 に戻しました！");
    }
  });
} else {
  console.error("動画が見つかりません！ID を確認してください！");
}
// script.js に追記
ScrollReveal().reveal(".service-card", {
  delay: 200,
  distance: "40px",
  origin: "bottom",
  duration: 800,
  easing: "ease-in-out",
  reset: false,
});
document.querySelectorAll(".service-card, .workflow-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = (y / rect.height - 0.5) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  });
});
card.addEventListener("mouseenter", () => {
  card.classList.add("active");
});
card.addEventListener("mouseleave", () => {
  card.classList.remove("active");
});
