var arr = [-3,8,7,6,5,-4,3,2,1];

var temp=0;


for (var i=0;i<arr.length;i++){
    for(var j=i;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[i];
            arr[i] = arr[j];
            arr[j]=temp;
        }
    }
}

alert("The array is: " + arr);




// def merge_sort(arr):
//     if len(arr) <= 1:
//         return arr

//     mid = len(arr) // 2
//     left = arr[:mid]
//     right = arr[mid:]

//     left = merge_sort(left)
//     right = merge_sort(right)

//     return merge(left, right)

// def merge(left, right):
//     result = []
//     i = j = 0

//     while i < len(left) and j < len(right):
//         if left[i] < right[j]:
//             result.append(left[i])
//             i += 1
//         else:
//             result.append(right[j])
//             j += 1

//     result += left[i:]
//     result += right[j:]
//     return result