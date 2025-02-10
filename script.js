function firstWord(str) {
	str = str.trim();
    

    let spaceIndex = str.indexOf(' ');

    if (spaceIndex === -1) {
        return str;
    }

    return str.slice(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:")
alert(firstWord(s));
