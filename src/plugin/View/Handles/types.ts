type HandlesElementsInfo = {
  cssClasses: Array<string>,
};

type HandleHideData = {
  isDouble: boolean,
  sliderWidth: number
};

type DataToHandlesMove = {
  targetPosition: number,
  isDouble: boolean,
};

type StaticElementsDescription = Array<HandlesElementsInfo>;

export {
  HandlesElementsInfo,
  StaticElementsDescription,
  HandleHideData,
  DataToHandlesMove,
};
