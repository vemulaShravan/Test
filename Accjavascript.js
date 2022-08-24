// A namespace defined for the sample code
// As a best practice, you should always define 
// a unique namespace for your libraries

function formOnLoad(executionContext) {
    // Define some global variables
    var myUniqueId = "_myUniqueId"; // Define an ID for the notification
    var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName; // get current user name
    var message = currentUserName + ": Your JavaScript code in action!";

    // Code to run in the form OnLoad event
     {
         //shravan github code merge
        var formContext = executionContext.getFormContext();
         //shravan github code merge
        // display the form level notification as an INFO
        formContext.ui.setFormNotification(message, "INFO", myUniqueId);

        // Wait for 5 seconds before clearing the notification
        window.setTimeout(function () { formContext.ui.clearFormNotification(myUniqueId); }, 5000);

        //setting Email field requirement as required/mandatory.
        formContext.getAttribute("telephone1").setRequiredLevel("required");
        // setting Mobile phone field requirement as required/mandatory.
        formContext.getAttribute("websiteurl").setRequiredLevel("recommended");
        
        // setting Mobile phone field requirement as none.
        formContext.getAttribute("ikl_accountemail").setRequiredLevel("none");

        
        //Show Hide
        //hide service tab
        formContext.ui.tabs.get("Pricing").setVisible(false);
       
       //hide shipping section in details tab
       formContext.ui.tabs.get("DETAILS_TAB").sections.get("SHIPPING").setVisible(false);

       
    }


}
function attributeOnChange(executionContext){

    var formContext = executionContext.getFormContext();

     //Automatically set some column values if the account name contains "Contoso"
     var accountName = formContext.getAttribute("name").getValue();
     if (accountName.toLowerCase().search("contoso") != -1) {
         formContext.getAttribute("websiteurl").setValue("https://www.contoso.com");
        formContext.getAttribute("telephone1").setValue("425-555-0100");
        formContext.getAttribute("description").setValue("Website URL, Phone and Description set using custom script.");
     }


}



function formOnSave(executionContext){
    
    // Display an alert dialog
    Xrm.Navigation.openAlertDialog({ text: "Record saved." });
}

 
 
