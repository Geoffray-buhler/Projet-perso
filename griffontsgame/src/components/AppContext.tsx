import React from 'react';
import {AppState} from '../model/I_database_inteface';

const AppContext = React.createContext<AppState>({
    currentUser: null,
    currentId: null,
    gamename: "All Right Bro",
    btnTitleSec:[] as Array<AppState>,
    btnTitlePrim:[] as Array<AppState>
});

export default AppContext;