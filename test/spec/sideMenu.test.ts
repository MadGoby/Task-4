import { SideMenu } from "../../src/components/view/components/sideMenu/sideMenu";

describe("SideMenu", () => {
  let sideMenu: SideMenu;

  beforeEach(() => {
    sideMenu = new SideMenu();
  });

  it("SideMenu can be create", () => {
    expect(sideMenu).toBeTruthy();
  });

  it("SideMenu can be collect", () => {
    sideMenu.collectSideMenu();
    expect(sideMenu.sideMenuContainer).toBeTruthy();
  });

  it("refreshValues() refresh from values correctly", () => {
    sideMenu.refreshValues({target: "from", value: "50"});
    expect(sideMenu.fromOutput.value).toEqual("50");
    expect(sideMenu.fromInput.value).toEqual("50");
  });

  it("refreshValues() refresh to values correctly", () => {
    sideMenu.refreshValues({target: "to", value: "50"});
    expect(sideMenu.toOutput.value).toEqual(" - 50");
    expect(sideMenu.toInput.value).toEqual("50");
  });

  it("hideToValues() operates the display function correctly", () => {
    sideMenu.hideToValues(false);
    expect(sideMenu.toInputWrapper.style.display).toEqual("none");
    expect(sideMenu.toOutput.style.display).toEqual("none")

    sideMenu.hideToValues(true);
    expect(sideMenu.toInputWrapper.style.display).toEqual("block");
    expect(sideMenu.toOutput.style.display).toEqual("inline")
  });
});