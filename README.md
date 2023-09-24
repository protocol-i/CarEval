# CarEval
You will create a web application with only 2 pages for an audit company to evaluate the usage and preference of  Automobile manufacturer customers with the following specifications

FIRST PAGE SHOULD CONTAIN THE FOLLOWING FEATURES
1. An input field to accept customers full name

2. An input field to accept customers reference code
    Note: reference code should be a character sequence of the following
    * Minimum of 8 characters
    * At least one uppercase character
    * At least one lowercase character
    * Numbers
    * Special character
   
3. An input field to accept customers' email address.  

4. A Dropdown  to select from a list of Automobile makers.

5. A Dropdown to select a model related to the above selected maker.

You should create an array of objects containing 10 automobile makers of your choice with each of them containing at least 5 models, which will populate the dropdowns above. The model dropdown is dependent on the maker dropdown i.e. it would display only the models available for the selected automobile maker.

6. Create a group of checkboxes to be able to select multiple car conditions customers are experiencing, conditions include:-
 * Engine issue
 * Gearbox issue
 * Need body repair
 * Need repainting
 * Wiring problems
 * Oil leakage
 * Brake issue

7. A Next button to do the following 
    * Ensure that all fields including the checkboxes are not empty when clicked, if any is empty an error message should be displayed and navigation to the next page should not occur.
    * Validate reference code based on the criteria listed above
    * Validate that the customer's email is a valid email
    * Navigate customer to the next page with all the data collated from the first page if all data validations are met.

  SECOND PAGE SHOULD CONTAIN THE FOLLOWING FEATURES  
1. Display all information acquired from the previous page on this page in a presentable format.
      * Customer's full name should be trimmed to not exceed 30 characters and concatenated with ellipsis(...) if the full name is more than 30 characters.
      *  Selected car conditions should be a single string, whereby each condition is separated by a comma and there shouldn't be a trailing comma.

2. Add a submit button when clicked will convert the final data into a JSON object with keys: name, email, refcode, make, model, conditions.
then log the JSON data to the console of the browser or if you prefer to log it to a file or any other logging system.


