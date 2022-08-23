import { createContext, Dispatch, ReactNode, useContext, useMemo, useReducer, memo, useEffect } from 'react';
import { ActionTypes } from '../constants';

export type TState = {
  theme: 'dark' | 'light';
};
export type ChangeThemeAction = {
  type: typeof ActionTypes.CHANGE_THEME;
  theme: TState['theme'];
};
type AppActions = ChangeThemeAction;
interface ContextState {
  state: TState;
  dispatch: Dispatch<AppActions>;
}

export interface TAppWrapper {
  children?: ReactNode;
}

const initialState: TState = {
  theme: 'dark'
};

const AppContext = createContext({} as ContextState);

const AppReducer = (state: TState, action: AppActions): TState => {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME: {
      const { theme } = action;
      return {
        ...state,
        theme: theme
      };
    }
    default: {
      return state;
    }
  }
};

export const AppWrapper = memo(function AppWrapper({ children }: TAppWrapper): JSX.Element {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('state') as string)) {
      //checking if there already is a state in localstorage
      //if yes, update the current state with the stored one
      dispatch({
        type: ActionTypes.CHANGE_THEME,
        ...JSON.parse(localStorage.getItem('state') as string)
      });
    }
  }, []);
  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem('state', JSON.stringify(state));

      //create and/or set a new localstorage variable called "state"
    }
  }, [state]);
  const contextProps = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <>
      <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
    </>
  );
});

export function useAppContext() {
  return useContext(AppContext);
}
