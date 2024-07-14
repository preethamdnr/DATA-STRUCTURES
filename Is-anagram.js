class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false;
        let map={};
        for(let i=0;i<s.length;i++){
            let letter=s[i];
            if(!map[letter]){
                map[letter]=1;
            }
            else{
                map[letter]++
            }
        }
        for(let i=0;i<t.length;i++){
            let letter = t[i];
            if(map[letter]===undefined){
                return false;
            }
            if(map[letter]<1){
                return false;
            }
            map[letter]--;
        }
        return true;
    }
}
