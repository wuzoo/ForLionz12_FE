import { ReactNode, createContext, useContext, useReducer } from "react";
import { IUserAction, IUserReducerParam } from "../../types/API";

type Dispatch = (action: IUserAction) => void;

const LoginInfoStateContext = createContext<IUserReducerParam | undefined>(
  undefined
);

const LoginInfoDispatchContext = createContext<Dispatch | undefined>(undefined);

function LoginInfoReducer(state: IUserReducerParam, action: IUserAction) {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        ...action.data,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isLoggedIn: false,
        userId: "",
        email: "",
        profile: "",
        name: "",
        part: "",
      };
    }
    default: {
      throw new Error("User Action Error");
    }
  }
}

function LoginInfoProvider({ children }: { children: ReactNode }) {
  const [state, dispath] = useReducer(LoginInfoReducer, {
    isLoggedIn: false,
    userId: "",
    email: "",
    name: "",
    profile: "",
    part: "",
  });

  return (
    <LoginInfoStateContext.Provider value={state}>
      <LoginInfoDispatchContext.Provider value={dispath}>
        {children}
      </LoginInfoDispatchContext.Provider>
    </LoginInfoStateContext.Provider>
  );
}

function useLoginInfoState() {
  const context = useContext(LoginInfoStateContext);
  if (context === undefined) {
    throw new Error("Login user info state context error");
  }
  return context;
}

function useLoginInfoDispatch() {
  const context = useContext(LoginInfoDispatchContext);
  if (context === undefined) {
    throw new Error("Login user info dispatch context error");
  }
  return context;
}

export { LoginInfoProvider, useLoginInfoState, useLoginInfoDispatch };
