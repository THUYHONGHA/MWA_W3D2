import { MyComponentsPage } from './app.po';

describe('my-components App', () => {
  let page: MyComponentsPage;

  beforeEach(() => {
    page = new MyComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
