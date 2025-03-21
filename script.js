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
