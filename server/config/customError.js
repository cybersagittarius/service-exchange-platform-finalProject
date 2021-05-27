const customError = (message, statusCode = 400) => {
    let error = new Error(message)
    error.status = statusCode
    return error
}

module.exports = customError;