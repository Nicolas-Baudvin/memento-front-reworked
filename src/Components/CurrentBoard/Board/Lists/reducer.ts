export const NEW_INPUT_VALUE = "NEW_INPUT_VALUE";
export const NEW_PICKER_VISIBILITY_STATE = "NEW_PICKER_VISIBILITY_STATE";
export const NEW_COLOR_PICKED = "NEW_COLOR_PICKED";

export interface ListMenuLocalState {
  value: string;
  isShowPicker: boolean;
  colorPicked: string;
}

export interface NewInputValueAction {
  type: typeof NEW_INPUT_VALUE;
  payload: string;
}

export interface NewPickerVisibilityStateAction {
  type: typeof NEW_PICKER_VISIBILITY_STATE;
  payload: boolean;
}

export interface NewColorPickedAction {
  type: typeof NEW_COLOR_PICKED;
  payload: string;
}

export type ListMenuActions =
  | NewInputValueAction
  | NewPickerVisibilityStateAction
  | NewColorPickedAction;

export const newInputValue = (payload: string): ListMenuActions => ({
  type: NEW_INPUT_VALUE,
  payload,
});

export const newColorPickedListMenu = (payload: string): ListMenuActions => ({
  type: NEW_COLOR_PICKED,
  payload,
});

export const newPickerVisibilityState = (payload: boolean): ListMenuActions => ({
  type: NEW_PICKER_VISIBILITY_STATE,
  payload,
});

export const initialState: ListMenuLocalState = {
  value: "",
  isShowPicker: false,
  colorPicked: "",
};

const reducer = (state = initialState, action: ListMenuActions) => {
  switch (action.type) {
    case NEW_INPUT_VALUE: {
      return {
        ...state,
        value: action.payload,
      };
    }
    case NEW_PICKER_VISIBILITY_STATE: {
      return {
        ...state,
        isShowPicker: action.payload,
      };
    }
    case NEW_COLOR_PICKED: {
      return {
        ...state,
        colorPicked: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
