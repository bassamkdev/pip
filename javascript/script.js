const button = document.getElementById("button");
const video = document.getElementById("video");

(async function captureScreen() {
  try {
    let captureStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = captureStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (err) {
    console.log(err);
  }
})();

button.addEventListener("click", async () => {
  button.disabled = true;
  await video.requestPictureInPicture();
  button.disabled = false;
});
