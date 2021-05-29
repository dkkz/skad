(() => {
const observeAd = () => {
  const config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true,
  };
  const target = document.querySelector(".ytd-player");
  const observer = new MutationObserver(() => {
    const adText = document.querySelector(".ytp-ad-skip-button-text");
    const skipButton = document.querySelector(".ytp-ad-skip-button");
    const banner = document.querySelector(".ytp-ad-overlay-image");
    const closeButton = document.querySelector(".ytp-ad-overlay-close-button");
    adText && skipButton.click();
    banner && closeButton.click();
  });
  target && observer.observe(target, config);
};

observeAd();
})();
