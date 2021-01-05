import { observeComponent } from './skip';
import { videoDom } from './videoDom';
const main = {
  observeComponent,
};

describe('Remove youtube AD', function () {
  document.body.innerHTML = videoDom;
  it('should be clicked button', function () {
    const spy = jest.spyOn(main, 'observeComponent');
    main.observeComponent(
      '.style-scope.ytd-popup-container',
      '.yt-simple-endpoint.style-scope.ytd-button-renderer'
    );
    expect(spy).toBeCalled();
  });
});
