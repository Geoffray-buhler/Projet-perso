export interface IDataBaseGames {
    title:string;
    description:string;
    screenshot:string;
    link:string;
    principal:number;
}

export interface IDataBaseUsers {
    id:number;
    pseudo:string;
    login:string;
    email:string;
    password:string;
    roles:string;
}