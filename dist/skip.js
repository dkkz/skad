export var observeAd = function () {
    var config = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true,
    };
    var target = document.querySelector('.ytd-player');
    var adText = document.querySelector('.ytp-ad-skip-button-text');
    var skipButton = document.querySelector('.ytp-ad-skip-button');
    var banner = document.querySelector('.ytp-ad-overlay-image');
    var closeButton = document.querySelector('.ytp-ad-overlay-close-button');
    var observer = new MutationObserver(function () {
        if (adText && skipButton)
            skipButton.click();
        if (banner && closeButton)
            closeButton.click();
    });
    target && observer.observe(target, config);
};
['click', 'load'].map(function (event) {
    return document.addEventListener(event, observeAd, { once: true });
});
