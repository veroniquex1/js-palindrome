function palindrome(string){
    let revString = string.split('').reverse().join('');
    console.log(revString);
    if(revString === string){
        return true;
    }
    else{
        return false;
    }
}

console.log(palindrome('madam')  ? "Palindrome" : "Not a palindrome")