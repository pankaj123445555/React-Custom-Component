export const PasswordCombination = 
{
    upperCase : Array.from({length: 26},(_,i)=>String.fromCharCode(i+65)),
    lowerCase : Array.from({length: 26},(_,i)=> String.fromCharCode(i+96)),
    numbers : Array.from({length: 10},(_,i)=>i),
    symbols : ['@',"#",'%','^','&','*']
}