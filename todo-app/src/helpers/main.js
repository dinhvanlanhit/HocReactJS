const AppMain={
    getQueryParams:(location)=>{
        let t =location.search; 
        if(!t||"string"!=typeof t||t.length<2){
            return new Map;
        }else{
            const r=t.substr(1).split("&").map(t=>{
                const r=t.split("=");return[r[0],r[1]]});
                return new Map(r);
            }
        }
}
export default AppMain;
