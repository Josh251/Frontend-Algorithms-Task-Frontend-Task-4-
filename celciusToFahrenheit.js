convertFahrToCelsius = (parameter) => {
    let temp = Number(parameter);

    if(isNaN(temp)) {
        let parameterType = parameter instanceof Array ? 'array': typeof parameter;

        return `${JSON.stringify(parameter)} is not a valid number but a/an ${parameterType}.`
    }

    let celsius = (temp - 32) * 5/9
    return celsius.toFixed(4);
}

