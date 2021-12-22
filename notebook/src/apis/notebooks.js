import request from '@/helpers/request'
import {friendlyDate} from '@/helpers/util'

const URL = {
    GET:'/notebooks',
    ADD:'/notebooks',
    UPDATE:'/notebooks/:id',
    DELETE:'/notebooks/:id'
}

export default{
    getAll(){
        return new Promise((resolve,reject)=>{//最后修改时间时间获取
            request(URL.GET)
            .then(res =>{
                res.data = res.data.sort((notebook1, notebook2) => notebook1.createdAt < notebook2.createdAt ? 1 : -1)
                res.data.forEach(notebook=>{
                    notebook.friendlyCreatedAt = friendlyDate(notebook.createdAt)
                  })
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
        
        //浏览器输入Notebooks.getAll().then(res=>{console.log(res)})进行测试
    },
    updateNotebook(notebookId,{title = ''}={title:''}){
        return request(URL.UPDATE.replace(':id',notebookId),'PATCH',{title:title})
        //浏览器输入Notebooks.updateNotebook(169,{title:'hw'}).then(data=>{console.log(data)})进行测试
    },
    deleteNotebook(notebookId){
        return request(URL.DELETE.replace(':id', notebookId), 'DELETE')
        //浏览器输入Notebooks.deleteNotebook(4059).then(res=>{console.log(res)})进行测试
    },
    addNotebook({title = ''}={title:''}){
        return request(URL.ADD,'POST',{title})
    }//浏览器输入Notebooks.addNotebook({title:'xiedaimala.com'}).then(res=>{console.log(res)})进行测试
}