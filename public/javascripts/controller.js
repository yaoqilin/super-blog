/**
 * Created by hama on 2017/5/11.
 */
//注册模块
const registerApp = angular.module('registerApp',[]);
registerApp.controller('registerController',($scope,$http)=>{
    //数据
    $scope.formData = {};
    //提交表单的行为
    $scope.postForm = ()=>{
    //     $.ajax({
    //         type:'POST',//请求的方式get, post
    //         url:'/register',//请求的地址
    //         data:$.param($scope.formData)//数据$.param把对象变成字符串 serialize自动收集表单数据全部变成字符串
    //     }).done( (data)=> {
    //         //成功了
    //         console.log(data);
    //     }).fail( ()=> {
    //         //失败了
    //     });

    $http({
        method:'POST',
        url:'/register',//请求的地址
        data:$.param($scope.formData),//数据$.param把对象变成字符串 serialize自动收集表单数据全部变成字符串
        headers:{'Content-Type':'application/x-www-form-urlencoded '}
    }).success( (data)=> {
        console.log(data)
    }).error( (err)=> {
        console.log(err)
    })
    }

    });