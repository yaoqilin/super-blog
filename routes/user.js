/**
 * Created by hama on 2017/5/12.
 */
//引入静态
const mapping = require('../static');
exports.index = (req,res,next)=>{
    res.render('user-center',{
        title:'个人中心--社区问答系统',
        layout:'indexTemplate',
        resource:mapping.center
    })
}
exports.all = (req,res,next)=>{
    res.render('users',{
        title:'所有的用户--社区问答系统',
        layout:'indexTemplate'
    })
}
exports.setting = (req,res,next)=>{
    //个人设置
    res.render('setting',{
        title:'个人设置--社区问答系统',
        layout:'indexTemplate',
        resource:mapping.setting
    })
}
exports.questions = (req,res,next)=>{
    //用户发布的所有的问题列表
    res.render('question-list',{
        title:'用户发布列表--社区问答系统',
        layout:'indexTemplate',
        resource:mapping.center
    })
}
exports.messages = (req,res,next)=>{
    //用户发布的所有的回复列表
    res.render('message-list',{
        title:'用户回复列表--社区问答系统',
        layout:'indexTemplate',
        resource:mapping.center
    })
}