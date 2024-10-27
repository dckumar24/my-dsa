/**
 * Stack is class that represents the ADT Stack data type.
 * it consists of similar data type elements.
 * it is consits below functions
 * 1. push - done
 * 2. pop - done
 * 3. isEmpty - done
 * 4. peek - done
 * 5. size - done
 */

// Implement a Stack

// Create a simple stack class with push, pop, peek, and isEmpty methods.

class Stack{
    #stack
    constructor(list=[]){
        this.#stack=list
    }
    push(element){
        this.#stack.push(element)
    }
    size(){
        return this.#stack.length
    }
    isEmpty(){
        return this.size()===0
    }
    pop(){
       return this.isEmpty()?'Stack is Empty':this.#stack.pop(this.#stack[this.size()-1])
    }
    peek(){
        return this.isEmpty()?'Stack is empty':this.#stack[this.size()-1]
    }
}

module.exports=Stack

// console.log(stackArray.stack)