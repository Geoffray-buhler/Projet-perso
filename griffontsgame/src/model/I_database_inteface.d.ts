export interface IDataBaseGames {
    title:string;
    description:string;
    screenshot:string;
    link:string;
    principal:number;
    theme:string;
}

export interface IDataBaseUsers {
    id:number;
    pseudo:string;
    login:string;
    email:string;
    password:string;
    roles:string;
}

export interface IStateNavbar {
    username:string,
    btnTitleSec:Array | null,
    btnTitlePrim:Array | null,
}

export interface AppState {
    currentUser: any ,
    currentId: number | null,
    gamename:string,
    role?: string,
    addUser?: () => void,
    changeNameGame?: () => any,
    btnTitleSec:Array<IDataBaseGames> | null,
    btnTitlePrim:Array<IDataBaseGames> | null,
    loginUser?: (username: string, password: string) => void
}

interface IAction {
    type: string;
}

interface IChangeGameAction extends IAction {
    newGame:string;
}

interface IChangeUser extends IAction {
    currentUser: Array<AppState>;
}

interface ISingleGameLoadedAction extends IAction {
    gameData:IDataBaseGames;
}

interface IGamesLoadedAction extends IAction {
    games:Array<IDatabaseGames>;
}

export type Action = IChangeGameAction | ISingleGameLoadedAction | IGamesLoadedAction; 