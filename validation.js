$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            firstName:
                {
                    required: true
                },
            grade:
                {
                    required: true,

                    min:5,
                    max:8,
                    digits:true
                }

        };

    // Object containing the error messages
    var myMessages =
        {
            firstName:
                {
                    required: "Your First Name is Required"
                },
            grade:
                {
                    required: "A Grade is Required",

                    min: "Too Young",
                    maX: "Too Old",
                    digits:"Invalid Number"
                }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("Form").validate(
        {
            submitHandler:runMyProgram,
            rules: myRules,
            messages: myMessages,
        }
    );

    function runMyProgram() {

        $("form").submit(runMyProgram)
        var firstName = $("input[name=firstName]").val()
        var grade = $("input[name=grade]").val()

        $("#message").text( firstName + ", You're Registered, for grade " + grade + " camp!")
        // Change the text of the <p> with ID of "message" to
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.


    }
});