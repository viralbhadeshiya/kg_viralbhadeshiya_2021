// const for identify no string
const numberMap = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine'
}

// std input
const args = process.argv.slice(2)
const result = []
args.forEach(no => {
    if(no){
        let intArray = String(no).split('').map((num) => {
            return numberMap[Number(num)];
        });
        intString = intArray.toString().replace(/,/g, '');
        result.push(intString);
        // let string = null;
        // if(no > 9){
        //     while (no > 9){
        //         singleDigit = (no % 10)
        //         if(singleDigit === 0){
        //             no = no/10
        //         } else {
        //             no = no - singleDigit
        //             string = (numberMap[singleDigit]) + string
        //         }
        //     }
        // }
        // string = numberMap[no] + string
        // newString = string.replace('null', '')
        // result.push(newString)
    }
});
console.log(result)