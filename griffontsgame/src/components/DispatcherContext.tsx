import * as React  from 'react';
import {AppState} from '../model/I_database_inteface';

// Contexte responsable de dispatcher les actions
const AppDispatchContext = React.createContext<AppState | undefined>(undefined)

// Permet de récupérer rapidement le dispatcher de l'app
// Utilisé par les composants ayant besoin d'emettre des actions menant à modifier le state
function useAppDispatch() {
    const context = React.useContext(AppDispatchContext)
    if (context === undefined) {
      throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
  }

// Notre reducer. Ici il est responsable de toute l'app
// (c'est p-e beaucoup, mais l'app reste assez reduite donc pkoi pas)
// Il est appelé lorsqu'une action est émise par un dispatcher
// Il utilise les informations de cette action pour mettre à jour le state
function appReducer(state, action) {
    switch (action.type) {
        case 'change-game': {
            return {activeGame: action.newGame}
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export {useAppDispatch,appReducer,AppDispatchContext}