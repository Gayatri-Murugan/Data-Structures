arrNum = [5, 3, 6, 7, 5, 3]
num = 0
function AverageNumber(n){
    for(let i = 0; i<n.length; i++){
        this.num += n[i]
    }
    this.num = this.num / arrNum.length
    console.log(this.num)
    }
AverageNumber(arrNum)

// Time Complexity: O(n)

// Auxiliary Space: O(1)




//method - 2



// Java script program to calculate average
// of array elements

// Recursively computes average of a[]
function avgRec(a, i, n)
{
	
	// Last element
	if (i == n - 1)
		return a[i];

	// When index is 0, divide sum computed so
	// far by n.
	if (i == 0)
		return ((a[i] + avgRec(a, i + 1, n)) / n);

	// Compute sum
	return (a[i] + avgRec(a, i + 1, n));
}

// Function that return average of an array.
function average(a, n)
{
	return avgRec(a, 0, n);
}

// Driver code
let arr = [ 10, 2, 3, 4, 5, 6, 7, 8, 9 ];
let n = arr.length;

document.write(average(arr, n));

// Time Complexity: O(n)

// Auxiliary Space: O(n)





