/**
 * Created by hama on 2017/5/12.
 */
//引入静态
const mapping = require('../static');
exports.index = (req,res,next)=>{
    res.render('question',{
        title:'问题--社区问答系统',
        layout:'indexTemplate'
    })
}
exports.create = (req,res,next)=>{
    res.render('create-question',{
        title:'新建--社区问答系统',
        layout:'indexTemplate'
    })
}
exports.edit = (req,res,next)=>{
    res.render('edit-question',{
        title:'编辑--社区问答系统',
        layout:'indexTemplate'
    })
}
