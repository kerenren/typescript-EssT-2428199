interface Contact {
    id: number;
    name: string;
    clone?(name: string): Contact  //define a method on an interface
}

function clone(source: Contact, func: (source:Contact)=>Contact): Contact {  //provide type information for a function
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson"} ;
const b = clone(a,a=>a)
