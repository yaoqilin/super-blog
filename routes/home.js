/**
 * Created by hama on 2017/5/9.
 */
//首页的所有请求都写在这儿.
//引入静态
const mapping = require('../static');
//引入表单验证
const validator = require('validator');
exports.index = (req,res,next)=>{
    res.render('index',{
        title:'首页--社区问答系统',
        layout:'indexTemplate'
    })
}
exports.login = (req,res,next)=>{
    res.render('login',{
        title:"登录页面--社区问答系统",
        layout:'indexTemplate',
        resource:mapping.login
    })
}
exports.register = (req,res,next)=>{
    res.render('register',{
        title:'注册页面--社区问答系统',
        layout:'indexTemplate',
        resource:mapping.register
    })
}
exports.postRegister=(req,res,next)=>{
    //1.后端验证数据
    let name = req.body.name;
    let password = req.body.password;
    let email = req.body.email;
    if(validator.matches(name,/asdf/,'g')){

    }
    //2.判断用户名和邮箱是否存在
    //3.密码加密
    //4.存入数据
    //5.发邮件
}