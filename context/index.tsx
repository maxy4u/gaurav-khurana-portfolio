import { createContext, Dispatch, ReactNode, useContext, useMemo, useReducer, memo } from 'react';
import { ActionTypes } from '../constants';

export type TState = {
  theme: 'dark' | 'light';
};
export type ChangeThemeAction = {
  type: typeof ActionTypes.CHANGE_THEME;
  theme: TState['theme'];
};
type AppActions = ChangeThemeAction;

export interface TAppWrapper {
  children?: ReactNode;
}

const initialState: TState = {
  theme: 'dark'
};

const AppContext = createContext<[TState, Dispatch<AppActions>]>([initialState, () => {}]);

const AppReducer = (state: TState, action: AppActions): TState => {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME: {
      const { theme } = action;
      return {
        ...state,
        theme: theme
      };
    }
  }
  return state;
};

export const AppWrapper = memo(function AppWrapper({ children }: TAppWrapper): JSX.Element {
  const [state, dispatch]: [TState, Dispatch<AppActions>] = useReducer(AppReducer, initialState);
  const contextProps: [TState, Dispatch<AppActions>] = useMemo(() => [state, dispatch], [state, dispatch]);
  return (
    <>
      <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
    </>
  );
});

export function useAppContext() {
  return useContext(AppContext);
}
