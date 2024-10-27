const Stack=require('../Implement a Stack')



// Reverse a String Using Stack
// Given a string, use a stack to reverse it. For example, input "hello" should output "olleh".

/**
 * This function takes a string as an argument and reverses it using a stack
 * data structure.
 * @param {string} str - The string to be reversed
 * @returns {string} - The reversed string
 */
const reverseTheStringUsingStack=(str='')=>{
    if(!str || str==''){
        return str||''
    }
    else{
        let result=''
        const charList=str.split('')
        const stackList=new Stack(charList);
        while(!stackList.isEmpty()){
            result=result+stackList.pop()
        }
        return result
    }
}

console.log(reverseTheStringUsingStack("Dinesh"))