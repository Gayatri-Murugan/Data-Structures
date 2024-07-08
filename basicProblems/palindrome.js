//reverse the number
var num = 12345678
function reverse(){
    let rev_num = 0
    while(num > 0){
        rev_num = rev_num * 10 + num % 10
        num = Math.floor(num / 10)
        }
        return rev_num
}

console.log(reverse(num))

// Time Complexity: O(log10 n), where n is the input number. 
// Auxiliary Space: O(1)



//RECURSIVE WAY 



 