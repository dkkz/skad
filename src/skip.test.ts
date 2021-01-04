import { observeAd } from './skip';
import { videoDom } from './videoDom';

describe('Click youtube AD', function () {
  document.body.innerHTML = videoDom;
  it('should remove AD', function () {
    ['click', 'load'].map((event) =>
      document.addEventListener(event, observeAd, { once: true })
    );
  });
});
