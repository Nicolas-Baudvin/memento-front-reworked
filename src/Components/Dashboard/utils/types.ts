import { Board, ImageData } from "../../../Store/Tabs/types";
import { NEW_BOARD_SELECTED, NEW_IMAGE_SELECTED, NEW_ISSHOW_STATE, NEW_TITLE, NEW_VISIBLE_STATE } from "./actions";

export interface NewBoardSelectedAction {
  type: typeof NEW_BOARD_SELECTED;
  payload: Board;
}

export interface NewVisibleStateAction {
  type: typeof NEW_VISIBLE_STATE;
  payload: boolean;
}

export interface NewTitleAction {
  type: typeof NEW_TITLE;
  payload: string;
}

export interface NewImageSelected {
  type: typeof NEW_IMAGE_SELECTED;
  payload: ImageData;
}

export interface NewIsShowState {
  type: typeof NEW_ISSHOW_STATE;
  payload: boolean;
}

export interface LocalState {
  isVisible: boolean;
  selectedBoard: Board;
  title: string;
  image: ImageData;
  isShow: boolean;
}

export type DashBoardUseReducerActions =
  | NewBoardSelectedAction
  | NewVisibleStateAction
  | NewTitleAction
  | NewImageSelected
  | NewIsShowState;
