import {Given , When , Then , And } from 'cypress-cucumber-preprocessor/steps';
import LoginActions from '../../pageObjects/loginForm/actions';
import LoginAssertion from '../../pageObjects/loginForm/assertions';

const loginActions=new LoginActions(); 
const loginAssertion=new LoginAssertion(); 
const userEmailAddress = "razanTest96@gmail.com";

  Given ('A user navigated to Sign in page',()=>{
    loginActions.openSignInPage();
  });

  And ('Typed in Email field a valid email',()=>{
    loginActions.typeInEmailInputField(userEmailAddress)
  });

  And('Typed in password field a valid password',()=>{
    loginActions.typeInPasswordInputField('qa!@#$%^&*')
  });

  When('Clicks on sign in button',()=>{
    loginActions.clicksOnSignInButoon() 
  });

  Then('The user should logged in successfuly',()=> {
    loginActions.waitLoginFormLoading();
    loginAssertion.checkTitleContainValue('Home __ Conduit')
  }); 