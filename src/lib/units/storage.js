var storage=function (){
    let fsJson=localStorage.getItem('fs')
    let ufsJson=localStorage.getItem('ufs')
    let fs=null
    let ufs=null
    if(fsJson){
        fs=JSON.parse(fsJson)
    }else{
        fs=[]
    }
    if(ufsJson){
        ufs=JSON.parse(ufsJson)
    }else{
        ufs=[]
    }
}

module.exports=storage