import { StarWarsCharsPage } from './app.po';

describe('star-wars-chars App', () => {
  let page: StarWarsCharsPage;

  beforeEach(() => {
    page = new StarWarsCharsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
