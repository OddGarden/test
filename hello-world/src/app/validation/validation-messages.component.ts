
export class ValidationMessagesComponent {


  

  getMessages(key: string) {
    if(key === "required") { return 'Please enter your email address'}
    return 'Please enter a valid email address'
  }

}
