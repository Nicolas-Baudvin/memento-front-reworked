import { Board, ImageData } from "../../../Store/Tabs/types";
import { DashBoardUseReducerActions } from "./types";

export const NEW_VISIBLE_STATE = "NEW_VISIBLE_STATE";
export const NEW_BOARD_SELECTED = "NEW_BOARD_SELECTED";
export const NEW_TITLE = "NEW_TITLE";
export const NEW_IMAGE_SELECTED = "NEW_IMAGE_SELECTED";
export const NEW_ISSHOW_STATE = "NEW_ISSHOW_STATE";

export const newVisibleState = (
  payload: boolean
): DashBoardUseReducerActions => ({
  type: NEW_VISIBLE_STATE,
  payload,
});

export const newBoardSelected = (
  payload: Board
): DashBoardUseReducerActions => ({
  type: NEW_BOARD_SELECTED,
  payload,
});

export const newTitle = (payload: string): DashBoardUseReducerActions => ({
  type: NEW_TITLE,
  payload,
});

export const newImageSelected = (
  payload: ImageData
): DashBoardUseReducerActions => ({
  type: NEW_IMAGE_SELECTED,
  payload,
});

export const newIsShowState = (
  payload: boolean
): DashBoardUseReducerActions => ({
  type: NEW_ISSHOW_STATE,
  payload,
});
