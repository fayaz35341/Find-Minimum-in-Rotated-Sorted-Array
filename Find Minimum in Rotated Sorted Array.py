class Solution:
    def findMin(self, nums: List[int]) -> int:
        n=len(nums)
        l=0
        h=n-1
        prem=nums[0]
        while(h>=l):
            mid=(l+h)//2
            
            if nums[mid]<prem:
                prem=nums[mid]
                h=mid-1
            else:
                l=mid+1
        return prem

        
