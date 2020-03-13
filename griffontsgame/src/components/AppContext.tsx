import React from 'react';

export interface AppState {
    currentUser: any ,
    currentId: number | null,
    addUser?: () => void,
    loginUser?: (username: string, password: string) => void
  }

const AppContext = React.createContext<AppState>({
    currentUser: null,
    currentId:null
});

export default AppContext;