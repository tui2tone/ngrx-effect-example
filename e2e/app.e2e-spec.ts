import { NgrxExamplePage } from './app.po';

describe('ngrx-example App', () => {
  let page: NgrxExamplePage;

  beforeEach(() => {
    page = new NgrxExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
