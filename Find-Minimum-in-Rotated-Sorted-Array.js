/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let n=nums.length
    let l=0
    let h=n-1
    let prem=nums[0]
    while (h>=l){
        let mid=Math.floor((l+h)/2)
        if (nums[mid]<prem){
            prem=nums[mid]
            h=mid-1
        }
        else{
            l=mid+1
        }
    }
    return prem
};
