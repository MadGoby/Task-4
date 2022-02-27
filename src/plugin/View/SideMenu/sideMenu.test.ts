import { SideMenu } from './SideMenu';

describe('SideMenu', () => {
  let sideMenu: SideMenu;

  beforeEach(() => {
    sideMenu = new SideMenu();
  });

  it('SideMenu can be create', () => {
    expect(sideMenu).toBeTruthy();
  });

  it('SideMenu can be collect', () => {
    sideMenu.collectSideMenu();
    expect(sideMenu.sideMenuElements.sideMenuContainer).toBeTruthy();
  });

  it('refreshValues() refresh from values correctly', () => {
    sideMenu.refreshValues({ target: 'from', value: '50', isToFixed: true });
    expect((sideMenu.sideMenuElements.fromOutput as HTMLOutputElement).value).toEqual('50');
    expect((sideMenu.sideMenuElements.fromInput as HTMLInputElement).value).toEqual('50');
  });

  it('refreshValues() refresh to values correctly', () => {
    sideMenu.refreshValues({ target: 'to', value: '50', isToFixed: true });
    expect((sideMenu.sideMenuElements.toOutput as HTMLOutputElement).value).toEqual(' - 50');
    expect((sideMenu.sideMenuElements.toInput as HTMLInputElement).value).toEqual('50');
  });

  it('hideToValues() operates the display function correctly', () => {
    sideMenu.hideToValues(false);
    expect(sideMenu.sideMenuElements.toInputWrapper.style.display).toEqual('none');
    expect(sideMenu.sideMenuElements.toOutput.style.display).toEqual('none');

    sideMenu.hideToValues(true);
    expect(sideMenu.sideMenuElements.toInputWrapper.style.display).toEqual('block');
    expect(sideMenu.sideMenuElements.toOutput.style.display).toEqual('inline');
  });
});
