import { PikPage } from './app.po';

describe('pik App', () => {
  let page: PikPage;

  beforeEach(() => {
    page = new PikPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
