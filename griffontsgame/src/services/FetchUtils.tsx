const fetchutil = (URL:string,Options?:any) => {
    Options={
        ...Options,headers:{
            ...Options.headers,
            Authorization : `Bearer ${localStorage.getItem('tokenVal')}`
        }
    }
    return fetch(URL,Options)
}

export default fetchutil