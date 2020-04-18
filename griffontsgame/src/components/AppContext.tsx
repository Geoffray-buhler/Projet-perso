import React from 'react';
import {AppState} from '../model/I_database_inteface';

const AppContext = React.createContext<AppState>({
    currentUser: null,
    currentId: null,
    gamename: "",
    btnTitleSec:[] as Array<AppState>,
    btnTitlePrim:[] as Array<AppState>
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

export default {AppContext,useAppState};