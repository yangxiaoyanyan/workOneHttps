let {selectSql,insertSql,deleteSql,updateSql}=require('../mysql')
async function getListMysql(res){
   let userList= await selectSql('select * from userlist',[])
   let record= await selectSql('select * from record',[])
   res.send({userList,moreList:record})
}
async function detailListMysql(res,uid){
    if(uid==='undefined'){
        res.send({detailList:[],detailName:'请选择一个用户'})
    }else{
        let detailList= await selectSql('select * from record where uid=?',[uid])
        let detailName= await selectSql('select user from userlist where uid=?',[uid])
        detailName=detailName[0].user
        res.send({detailList,detailName})
    }
    
}
async function addUserMysql(res,uid,user,money){
    let userid= await selectSql('select * from userlist where uid=?',[uid])
    let username= await selectSql('select * from userlist where user=?',[user])
    if(userid.length!==0||username.length!==0||uid===''||username===''||money===''){
        res.send({addSuccess:false})
    }
    await insertSql('insert into  userlist (uid,user,money) values (?,?,?)',[uid,user,money])
    res.send({addSuccess:true})
}
async function delUserMysql(res,uid){
    await deleteSql('delete from userlist where uid=?',[uid])
    await deleteSql('delete from record where uid=?',[uid])
    res.send({msg:'ok',code:true})
}

async function changeUserMysql(res,uid,user){
    let username= await selectSql('select * from userlist where user=?',[user])
    if(username.length!==0){
        res.send({msg:'用户名重复err',code:false})
    }else{
        await updateSql('update userlist set user=? where uid=?',[user,uid])
        res.send({msg:'ok',code:true})
    }   
}
async function addRecordMysql(res,obj){
    let {time,moneyItem,what,user}=obj
    let uid=await selectSql('select uid from userlist where user=?',[user])
    uid=uid[0].uid
    await insertSql('insert into record (uid,time,moneyItem,what) values (?,?,?,?)',[uid,time,moneyItem,what])
    res.send({msg:'ok',code:true})
}

module.exports={
    getListMysql,
    detailListMysql,
    addUserMysql,
    delUserMysql,
    changeUserMysql,
    addRecordMysql
}