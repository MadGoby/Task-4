type SideMenuElements = { [key: string]: HTMLElement };

type SideMenuBaseData = {
  key: string;
  name: string;
  cssClasses: Array<string>;
  text?: string;
  attr?: {
    name: string;
    value: string;
  };
};

type SideMenuData = {
  elements: Array<SideMenuBaseData>;
  appendList: { [key: string]: Array<string> };
  cloneList: { [key: string]: Array<string> };
};

export {
  SideMenuElements,
  SideMenuData,
  SideMenuBaseData,
};
