  /// <reference types="Cypress" />  # Auto completion from cypress library . 
import { Article } from './../../pageObjects/ArticleForm/createDataTypes';
import ArticleUtil from './../../pageObjects/ArticleForm/dataUtil';
import {Given , When , Then , Before , After , And} from 'cypress-cucumber-preprocessor/steps';
import ArticleActions from "../../pageObjects/ArticleForm/actions";
import ArticleAssertion from "../../pageObjects/ArticleForm/assertions";
 
const articleActions = new ArticleActions();
const articleAssertion = new ArticleAssertion(); 
const articleUtil = new ArticleUtil();
let articleID = ""; 
let token=""; 

let article: Article = {
    title:"This is Title",
    description:"This is the description",
    body:"This is the body of article :)",
}

const titleOfArticle = "This is Title";
const titleOfArticle_2 = "This is updated Title";
const descriptionOfArticle = "This is the description";
const bodyOfArticle = "This is the body of article :)";
const tagOfArticle = "This is tag";

beforeEach(()=>{
  // @ts-ignore
  cy.login() 
})

Before(()=>{
  // @ts-ignore
  cy.login().then((resp:any)=>{
      token = resp.body.user.token; 
      articleUtil.createArticle(article,token).then((response:any)=>{
      articleID = response.body.article.slug;})
  })
}); 

Given("A user navigated to article form",()=>{
  articleActions.openNewArticleTab()
});

And("Typed in Article Title field a title for the article",()=>{
  articleActions.typeInTitleField(titleOfArticle);
});

And("Typed in description field a description for the article",()=>{
  articleActions.typeInDescriptionField(descriptionOfArticle);
});

And("Typed in body field a body for the article",()=>{
  articleActions.typeInBodyField(bodyOfArticle)
});

And("Typed in tags field a tag for the article",()=>{
  articleActions.typeInTagsField(tagOfArticle + "{enter}");
});

When("Clicks on publish Article button",()=>{
  articleActions.publishArticleBtn();
});

Then("The article should be published successfully",()=>{
  articleAssertion.checkArticleContainValue(titleOfArticle,bodyOfArticle)
}); 

Given("A user navigated to an existing article",()=>{
  articleActions.openExsistArticle(articleID);
});

When("Clicks on Edit Article Button",()=>{
  articleActions.clicksOnEditButton();
});

When("Edit the title of article",()=>{
  articleActions.typeInTitleField(titleOfArticle_2);
});

Then("The article should be updated successfully",()=>{
  articleAssertion.checkArticleContainValue(titleOfArticle_2,bodyOfArticle)
}); 

When("Clicks on delete Article Button",()=>{
  articleActions.clicksOnDeleteButton();
});

Then("The article should be deleted successfully",()=>{
  
});

afterEach(()=>{
  // @ts-ignore
    cy.logout()
})

After(()=>{
  articleUtil.deleteArticle(articleID,token) 
})