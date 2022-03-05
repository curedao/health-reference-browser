import React, {
  createContext,
  useEffect,
  useReducer,
  Dispatch
} from 'react';
import type { FC, ReactNode } from 'react';
import SplashScreen from 'src/components/SplashScreen';
//
import { useDispatch } from 'src/store';
import * as biomarkerService from 'src/services/biomarker.service';

interface AuthState {
  isInitialised: boolean;
  isAuthenticated: boolean;
  user: null;
}

interface AuthContextValue extends AuthState {
  logout: () => Promise<void>;
  dispatch: Dispatch<Action>;
}

interface AuthProviderProps {
  children: ReactNode;
}

type AuthStateChangedAction = {
  type: 'AUTH_STATE_CHANGED';
  payload: {
    isAuthenticated: boolean;
    user: null;
  };
};

type Action = AuthStateChangedAction;

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialised: false,
  user: null
};

const reducer = (state: AuthState, action: Action): AuthState => {
  switch (action.type) {
    case 'AUTH_STATE_CHANGED': {
      const { isAuthenticated, user } = action.payload;

      console.log('AUTH_STATE_CHANGED: ', user);

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user: null
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext<AuthContextValue>({
  ...initialAuthState,
  logout: () => Promise.resolve(),
  dispatch: () => null
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState);
  const reduxDispatch = useDispatch();


  const logout = (): Promise<void> => {
    reduxDispatch({
      type: 'USER_LOGOUT'
    });
    return //firebase.auth().signOut();
  };

  const unsubscribe = async () => {
    //firebase.auth().onAuthStateChanged(async (user) => {
    let user = true;

    if (user) {
      dispatch({
        type: 'AUTH_STATE_CHANGED',
        payload: {
          isAuthenticated: true,
          user: null
        }
      });

      //// Initial services and constructors //////


      // Load Biomarkers
      const biomarkersData = await biomarkerService.getAllBiomarkersService()
        .then(res => res)
        .catch(error => { console.log(error); });

      /////////////////////////////////////////////////

    } else {
      dispatch({
        type: 'AUTH_STATE_CHANGED',
        payload: {
          isAuthenticated: false,
          user: null
        }
      });
    };
    //});
  };

  useEffect(() => {
    unsubscribe();
  }, [dispatch]);

  if (!state.isInitialised) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        logout,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
