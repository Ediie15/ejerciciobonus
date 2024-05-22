function maxDistance(movements) {
    let distance = 0;
    
    for (let move of movements) {
        if (move === '>') {
            distance++;
        } else if (move === '<') {
            distance--;
        } else if (move === '*') {
            distance++;
        }
    }
    
    return Math.abs(distance);
}

// Ejemplo de uso:
console.log(maxDistance(">***>"));  // Output: 5
console.log(maxDistance("<<<>"));  // Output: 2
console.log(maxDistance(">>*<"));  // Output: 2
