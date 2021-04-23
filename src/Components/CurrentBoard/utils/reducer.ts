export const initialState: CurrentboardLocalState = {
  isShowingPicker: false,
  listName: "",
  colorPicked: "",
  createListError: "",
};

const NEW_PICKER_VISIBILITY_STATE = "NEW_PICKER_VISIBILITY_STATE";
const NEW_LIST_NAME = "NEW_LIST_NAME";
const NEW_PICKER_COLOR = "NEW_PICKER_COLOR";
const NEW_CREATELIST_ERROR = "NEW_CREATELIST_ERROR";

export interface CurrentboardLocalState {
  isShowingPicker: boolean;
  listName: string;
  colorPicked: string;
  createListError: string;
}

export interface NewCreateListError {
  type: typeof NEW_CREATELIST_ERROR;
  payload: string;
}

export interface NewPickerVisibilityStateAction {
  type: typeof NEW_PICKER_VISIBILITY_STATE;
  payload: boolean;
}

export interface NewListNameAction {
  type: typeof NEW_LIST_NAME;
  payload: string;
}

export interface NewPickerColorAction {
  type: typeof NEW_PICKER_COLOR;
  payload: string;
}

export type CurrentboardActions =
  | NewPickerVisibilityStateAction
  | NewListNameAction
  | NewPickerColorAction
  | NewCreateListError;

export const newCreateListError = (payload: string): CurrentboardActions => ({
  type: NEW_CREATELIST_ERROR,
  payload
});

export const newPickerVisibility = (payload: boolean): CurrentboardActions => ({
  type: NEW_PICKER_VISIBILITY_STATE,
  payload,
});

export const newListName = (payload: string): CurrentboardActions => ({
  type: NEW_LIST_NAME,
  payload,
});

export const newPickerColor = (payload: string): CurrentboardActions => ({
  type: NEW_PICKER_COLOR,
  payload,
});

const reducer = (
  state = initialState,
  action: CurrentboardActions
): CurrentboardLocalState => {
  switch (action.type) {
    case NEW_CREATELIST_ERROR: {
      return {
        ...state,
        createListError: action.payload
      }
    }
    case NEW_PICKER_VISIBILITY_STATE: {
      return {
        ...state,
        isShowingPicker: action.payload,
      };
    }
    case NEW_LIST_NAME: {
      return {
        ...state,
        listName: action.payload,
      };
    }
    case NEW_PICKER_COLOR: {
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
