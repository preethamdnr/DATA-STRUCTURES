function countAll(str) {
	let result={LETTERS:0,DIGITS:0};
	for(let char of str){
		if(char>='a'&& char<='z' || char>='A' && char<='Z'){
			result.LETTERS++;
		}else if(char>='0' && char<='9'){
			result.DIGITS++;
		}
	}
	return result;
}