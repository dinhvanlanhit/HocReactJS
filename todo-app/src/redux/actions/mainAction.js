export const CloseOpenSidebar = (body)=>{
    return{
        type:"OPEN_CLOSE_SIDBAR",
        body:{
            statusSidebarOpenClose:body.statusSidebarOpenClose,
            statusSibladeMoblie:body.statusSibladeMoblie,
            status:body.status
        }
    };
}