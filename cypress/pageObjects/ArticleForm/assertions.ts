
class ArticleAssertion{
   
   checkArticleContainValue(title:string , body:string){
      cy.get('[ng-bind="::$ctrl.article.title"]').should('contain',title)
      cy.get('[ng-bind-html="::$ctrl.article.body"]').should('contain',body)
      return this ; 
   }

}
export default ArticleAssertion;