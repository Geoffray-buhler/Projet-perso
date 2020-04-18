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
    changeNameGame?: () => anyS,
    btnTitleSec:Array | null,
    btnTitlePrim:Array | null,
    loginUser?: (username: string, password: string) => void
  }