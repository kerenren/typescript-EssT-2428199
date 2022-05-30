interface Contact {
    name:string;
    age: number;
}


interface Query<TProp> {
    (val: TProp): boolean;
}

type ContactQuery ={
    [TProp in keyof Contact]?: Query<Contact[TProp]>
}

function query<T>(
    items: T[],
    query: ContactQuery // <--- replace any with ContactQuery type
) {
    return items.filter(item => {
        // iterate through each of the item's properties
        for (const property of Object.keys(item) as (keyof Contact)[]) {

            // get the query for this property name
            const propertyQuery = query[property] as Query<Contact[keyof Contact]>

            // see if this property value matches the query
            if (propertyQuery && propertyQuery(item[property])) {
                return true
            }
        }

        // nothing matched so return false
        return false
    })
}


const matches = query(
    [
        { name: "Ted", age: 12 },
        { name: "Angie", age: 31 }
    ],
    {
        name: name => name === "Angie",
        age: age => age > 30
    })
