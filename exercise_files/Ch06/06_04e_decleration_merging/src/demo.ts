interface Customer {
    /** saves the customer somewhere */
    save(): void // deceleration merging
}

class Customer {}

const customer = new Customer()
customer.save = function() {}

const myVar = window.MY_VAR  // the global variable use case