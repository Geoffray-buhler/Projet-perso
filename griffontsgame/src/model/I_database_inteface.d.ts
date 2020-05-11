export interface IDataBaseGames {
    length: number;
    title:string,
    description:string,
    screenshot:string,
    link:string,
    principal:number,
    theme:string,
    infoGame:Array<AppState>
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
    currentUser: [] | null | Array<IDataBaseUsers>,
    currentId: number | null,
    gamename:Array,
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
    currentUser: Array<IDataBaseUsers>;
}

interface ISingleGameLoadedAction extends IAction {
    gameData:IDataBaseGames;
}

interface IGamesLoadedAction extends IAction {
    games:Array<IDatabaseGames>;
}

export type Action = IChangeGameAction | ISingleGameLoadedAction | IGamesLoadedAction | IChangeUser;