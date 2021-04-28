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

// stdInput
const args = process.argv.slice(2)
const result = []
args.forEach(no => {
    if(no){
        let intArray = String(no).split('').map((num) => {
            return numberMap[Number(num)];
        });
        intString = intArray.toString().replace(/,/g, '');
        result.push(intString);
    }
});

// stdOutput
console.log(result)