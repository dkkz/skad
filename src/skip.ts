const config: MutationObserverInit = {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true,
};

export const observeComponent = (container: string, button: string): void => {
  const target = document.querySelector(container);

  const observer: MutationObserver = new MutationObserver(() => {
    const removeButton: HTMLAnchorElement | null = document.querySelector(
      button
    );
    removeButton && removeButton.click();
  });

  target && observer.observe(target, config);
};

(() => {
  observeComponent(
    '.button-container.style-scope.ytd-mealbar-promo-renderer',
    '#dismiss-button #text.style-scope.ytd-button-renderer.style-text.size-default'
  );
  observeComponent('.video-ads', '.ytp-ad-skip-button');
  observeComponent('.video-ads', '.ytp-ad-overlay-close-button');
})();
