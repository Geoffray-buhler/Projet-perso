import React from 'react';
import {AppState,IDataBaseGames} from '../model/I_database_inteface';

const AppContext = React.createContext<AppState>({
    currentUser: null,
    currentId: null,
    currentToken:null,
    gamename: "",
    btnTitleSec:[] as Array<IDataBaseGames>,
    btnTitlePrim:[] as Array<IDataBaseGames>
});

// Permet de récupérer rapidement le state de l'app
// Utilisé par les composants ayant besoin de récupérer une information depuis ce state
function useAppState() {
  const context = React.useContext(AppContext)
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider')
  }
  return context
}

export {AppContext,useAppState};