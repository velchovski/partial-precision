const pEqInteger = (int1, int2, options = {}) => {
    let max = Math.max(int1, int2);
    let min = Math.min(int1, int2);
    let diff = max - min;

    // If resolution is passed as options,
    // check if difference is less than resolution and return this as a result.

    if (options.resolution && typeof options.resolution === 'number') {
        return diff < options.resolution;
    }

    // Otherwise proceed with calculating precision.
    
    let absInt1 = Math.abs(int1);
    let absInt2 = Math.abs(int2);

    let zeroOffset = Math.min(absInt1, absInt2) + (Math.abs(absInt1 - absInt2) / 2);
    let magnitude = Math.log10(zeroOffset);

    if (magnitude < 2) {
        return int1 === int2;
    }
    let resolution = Math.pow(Math.E, magnitude);
    if (magnitude > Math.E) {
        resolution = resolution * Math.log(magnitude);
    }
   
    return diff < resolution;
};

module.exports = pEqInteger;
