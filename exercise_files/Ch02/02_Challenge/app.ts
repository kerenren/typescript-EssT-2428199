interface todoItem {
    id:number,
    title:string,
    status: statusString, // any one of the enum in statusString
    completedOn?: Date
}
enum statusString {Todo="todo", done="done", inPro="in-progress"}

const todoItems:todoItem[] = [
    { id: 1, title: "Learn HTML", status: statusString.done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: statusString.inPro },
    { id: 3, title: "Write the best app in the world", status: statusString.Todo },
]

function addTodoItem(todo:string):todoItem {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: statusString.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends {id:number}>(items: T[]):number { //generic constraint with extends, to tell this type must be an object with a property called id
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))
