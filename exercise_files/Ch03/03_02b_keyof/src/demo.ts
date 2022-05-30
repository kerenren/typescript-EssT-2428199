type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"  //the string union type alias | is only available at the compile time, and not actually compiled into your running code
type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

type ContactFields = keyof Contact //keyof is similar to the native instanceof keyword
// the ContactFields and its value is only available at the compile time, and not actually compiled into your running code

const field : ContactFields = "status"
const wrongFields: ContactFields ="nonExistingKey"  // Type '"nonExistingKey"' is not assignable to type 'keyof Contact'.

function getValue <T>(source:T, propertyName: keyof T){
    return source[propertyName]
}

// using the second generic type to achieve the same type as getValueAlternative
function getValueAlternative <T, U extends keyof T>(source:T, propertyName: U){
    return source[propertyName]
}

const value = getValue({min:1,max:34},"max")
