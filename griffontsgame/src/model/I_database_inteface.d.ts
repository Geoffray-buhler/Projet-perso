export interface IDataBaseGames {
    Title:string;
    description:string;
    screenshot:string;
    link:string;
    principal:number;
    Theme:string;
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
    btnTitleSec:Array | null,
    btnTitlePrim:Array | null,
    loginUser?: (username: string, password: string) => void
  }