import { Gsp7Page } from './app.po';

describe('gsp7 App', () => {
  let page: Gsp7Page;

  beforeEach(() => {
    page = new Gsp7Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
