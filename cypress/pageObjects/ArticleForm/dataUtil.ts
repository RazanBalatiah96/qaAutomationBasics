import { Article } from './createDataTypes';
 class ArticleUtil {

    deleteArticle(articleID:any,token:any){
         cy.request({
              method:"DELETE",
              url:"https://conduit.productionready.io/api/articles/"+articleID,
              headers:{
                "authorization": "Token "+token
               },
         }) 
     }
 
     updateArticle(article:Article,articleID:any,token:any){
          cy.request({
            method:"PUT",
            url:"https://conduit.productionready.io/api/articles/"+articleID,
            headers:{
                "authorization":  "Token "+token
                  },
            body:{
                article:{
                    title:article.title,
                    description:article.description,
                    body:article.body,
                }
             }
          }) 
     }
    
     createArticle(article:Article,token:any){
         return  cy.request({
            method:'POST',
            url:'https://conduit.productionready.io/api/articles',
            headers:{
                "authorization":  "Token "+token
                  },
            body:{
                article:{
                    body:article.body,
                    description:article.description,
                    title:article.title,
                 }
             }
          }) 
        }
}
export default ArticleUtil;