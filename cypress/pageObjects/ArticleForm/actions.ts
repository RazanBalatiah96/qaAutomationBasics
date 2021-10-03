
class ArticleActions{

    openNewArticleTab(){
       return cy.get('a[class="nav-link"]').should("be.visible").contains('New Article').trigger("click");
    }

    typeInTitleField(title:string){
        return cy.get('input[placeholder=Article Title]').clear().type(title)
    }

    typeInDescriptionField(desc:string){
        return cy.get('input[placeholder=What\'s this article about?]').clear().type(desc)
    }

    typeInBodyField(body:string){
        return cy.get('input[placeholder=Write your article (in markdown)]').clear().type(body)
    }

    typeInTagsField(tags:string){
        return cy.get('[ng-model="$ctrl.tagField"]').clear().type(tags)

    }

    publishArticleBtn(){
        return cy.get('.btn').contains('Publish Article').should('be.visible').click()
    } 

    openExsistArticle(articleId:string){
        return cy.visit(`https://demo.productionready.io/#/article/${articleId}`);
    }

    clicksOnEditButton(){
        return cy.get('[ng-show="$ctrl.canModify"]').find('a').first().click()
    }

    clicksOnDeleteButton(){
        return cy.get('[ng-show="$ctrl.canModify"]').find('button').first().click()
    }

}
export default ArticleActions;