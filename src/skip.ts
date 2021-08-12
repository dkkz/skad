export const observerConfig: MutationObserverInit = {
  // attributes: true,
  childList: true,
  // characterData: true,
  subtree: true,
};

type ConfigType = {
  config: typeof observerConfig;
  videoContainer: string;
  adText: string;
  skipButton: string;
  banner: string;
  closeButton: string;
};

export const skipConfig: ConfigType = {
  config: observerConfig,
  videoContainer: '.ytd-player',
  adText: '.ytp-ad-skip-button-text',
  skipButton: '.ytp-ad-skip-button',
  banner: '.ytp-ad-overlay-image',
  closeButton: '.ytp-ad-overlay-close-button',
};

export const observeComponent = (data: ConfigType): void => {
  const target = <HTMLElement>document.querySelector(data.videoContainer);

  const observer: MutationObserver = new MutationObserver(() => {
    const adText = <HTMLAnchorElement>document.querySelector(data.adText);
    const skipButton = <HTMLElement>document.querySelector(data.skipButton);
    const banner = <HTMLElement>document.querySelector(data.banner);
    const closeButton = <HTMLElement>document.querySelector(data.closeButton);

    adText && skipButton.click();
    banner && closeButton.click();
  });

  target && observer.observe(target, data.config);
};

export const hideElement = (element: string): string => {
  const target = <HTMLAnchorElement>document.querySelector(element);
  return (target.style.display = 'none');
};

document.body.addEventListener(
  'yt-navigate-start',
  () => {
    observeComponent(skipConfig);
    hideElement('ytd-popup-container');
  },
  { once: true }
);
