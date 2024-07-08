var arr = [22, 32, 42, 52, 62]
let odd = 0
let even = 0
for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0){ //arr[i] & 1 == 0
        //console.log(i,arr[i])
        even = even + 1
    } else{
        //console.log(i)
        odd = odd + 1
    }
}

//console.log(odd, even)
var arr = [2,3,4,5,6]
function countOddEven(values, index){
    let oddNumber = 0
    let evenNumber = 0
    for(let i=0; i<index; i++){
        console.log(values,i)
        if((values[i] & 1) != 1){ 
            //console.log(i,values[i])
            evenNumber++            
        } else{
            
            oddNumber++
        }
    }
    console.log(oddNumber,evenNumber)
    
}

countOddEven(arr, arr.length)

// Time Complexity: O(n)

// Auxiliary Space: O(1) because it is using constant space for variables

