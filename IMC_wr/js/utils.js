export function notNumber(value){
    return isNaN(value) || value == ""
}

export function IMC(weight, height) {
    const toConvertHeight = height / 100;
    return (weight / Math.pow(toConvertHeight, 2)).toFixed(2);
}