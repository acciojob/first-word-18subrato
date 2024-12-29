function firstWord(s) {
	s.trim();
	s += ' ';
	let word = '';
	for(let t of s){
		if(t !== ' '){
			word += t;
		} else {
			return word;
		}
	}
}

// Do not change the code below

const s = prompt("Enter String:")
alert(firstWord(s));
