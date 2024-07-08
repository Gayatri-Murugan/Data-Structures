//######################################### METHOD 1 #####################//
//---------------------reverse the number(iteration)-------------------------//
 var num = 123121
// function reverse(){
//     let rev_num = 0
//     while(num > 0){
//         rev_num = rev_num * 10 + num % 10
//         num = Math.floor(num / 10)
//         }
//         return rev_num
// }


// Time Complexity: O(log10 n), where n is the input number. 
// Auxiliary Space: O(1)



//-------------------------RECURSIVE WAY-----------------------// 
// function numreverse(num){
//     var r = 0
//     function reverse(num){
//         if(num == 0){
//             return 
//         }
    
//         r = r * 10 + num % 10
//         reverse(Math.floor(num / 10))
    
//         }
//         reverse(num)
//         return r
//     }
//     console.log(numreverse(num))
// Time Complexity: O(log(n)) 
// Auxiliary Space: O(log(n)),  where n is the input number.

//----------------number to string----------------------//

// function reverse(){
//     // let r = num.toString().split("").reverse().join("")
//     let r = num.toString().split("").reverse()

//     let number = parseInt(r.join(""))
//     if(num == number){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(reverse())
// Time Complexity: O(log10n) where n is the input number-------(reverse)
// Auxiliary Space: O(1)-------(reverse)
// Time Complexity : O(log10(n)) or O(Number of digits in a given number)
// Auxiliary space : O(1) or constant

//######################################### METHOD 2 #####################//

function reverse(){
    let str = num.toString()  
    let len = str.length
    console.log(len / 2)
    for(let i = 0; i < len / 2; i++){
        console.log(str[i],str[len - i - 1],len, i )
        if(str[i] != str[len - i - 1]){
            return false
        } 
    }
    return true
}
 console.log(reverse())
 // Time Complexity: O(|str|)
//Auxiliary Space: O(1)



    


 