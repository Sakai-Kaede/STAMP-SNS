import {createContext, useEffect, useReducer} from 'react'
import AuthReducer from './AuthReducer';

// 最初のユーザ状態を定義
const initState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
};

// 状態をグローバルに管理する
export const AuthContext = createContext(initState);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initState);
  
  useEffect(() =>{
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);
  
  
  return <AuthContext.Provider value={{
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    dispatch,
  }}>
    {children}
  </AuthContext.Provider>
}