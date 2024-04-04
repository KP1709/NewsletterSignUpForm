# NewsletterSignUpForm
https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv

## 🍼 Introduction
This is a project I discovered on Frontend Mentor. The user is asked to submit their email address. However if the email address is not vaild, the webpage highlights this until the user submits the correct email address.   
If the email address is correct, the user is shown a confirmation message.

## ✏️ Update (March 2024)
After taking Fredrick Ridderfalk's Web Accessibility course on Scrimba, I attempted to improve the accessibility of page. This included changing the legend to a label so when the label is selected, the connected input box is highlighted with the cursor ready for user input.  
Another accessibility feature added was attaching the 'role' attribute to #form__input-error element so the user is alerted instantly if the email address is not valid.   
Additionally, the submit button has been converted from a button to an input with role of button.

## 📚 Resources used
Fredrick Ridderfalk's Web Accessibility Course - https://scrimba.com/learn/accessibility  
MDN web docs - ARIA Guide - https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
