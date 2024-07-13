class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const countS = {};
        const countT = {};

        for (let i = 0; i < s.length; i++) {
            countS[s[i]] = 1 + (countS[s[i]] || 0);
            countT[t[i]] = 1 + (countT[t[i]] || 0);
        }

        for (const key in countS) {
            if (countS[key] !== countT[key]) {
                return false;
            }
        }

        return true;
    }
}
