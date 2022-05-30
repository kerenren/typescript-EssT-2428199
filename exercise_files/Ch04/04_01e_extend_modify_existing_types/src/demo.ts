let x: Record<string, string | number | boolean | Function> = { name: "Wruce Bayne" }
x.number = 1234
x.active = true
x.log = () => console.log("awesome!")


////////////////////

type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
    email: string;
}

interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

type ContactQuery = 
    Omit<
        Partial<
            Pick<
                Record<keyof Contact, Query>,
                "id" | "name"
                >
            >,
        "address"
        >
// Record<Keys, Type> constructs an object type whose property keys are Keys and whose property values are Type.

// Omit<Type, Keys> constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals)
// Pick<Type, Keys> constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

// Partial<Type> constructs a type with all properties of Type set to optional.The opposite of Required.
// Required<Type> constructs a type consisting of all properties of Type set to required. The opposite of Partial.
type RequiredContactQuery = Required<ContactQuery>

function searchContacts(contacts: Contact[], query: ContactQuery) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
            // get the query object for this property
            const propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: { matches: (id) => id === 123 },
        name: { matches: (name) => name === "Carol Weaver" },
    }
);
