let {select,insert}=require('../mysql')
let {getListMysql,detailListMysql,addUserMysql,delUserMysql,changeUserMysql,addRecordMysql} =require('./ChangeMysql')

let getList=(req,res,next)=>{
    getListMysql(res);
}
let detailList=(req,res,next)=>{
    let uid=req.query.id;
    detailListMysql(res,uid)
}
let addUser=(req,res,next)=>{
    let{uid,user,money}=req.query
    addUserMysql(res,uid,user,money);
}
let delUser=(req,res,next)=>{
    let {uid}=req.query;
    delUserMysql(res,uid)
}
let changeUser=(req,res,next)=>{
    let {uid,user}=req.query
    
    changeUserMysql(res,uid,user)
}
let addRecord=(req,res,next)=>{
    let {time,moneyItem,what,user} = req.query
    addRecordMysql(res,{time,moneyItem,what,user})
}



module.exports={
    getList,
    detailList,
    delUser,
    addUser,
    changeUser,
    addRecord
}