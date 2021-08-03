function validateURL(url) {
    let re = /^((https|http)?:\/\/)?(www?)[^"]+$/;

    if (re.test(url)) {
        console.log('valid');
        return true
    } else {
        console.log('error');
        return false
    }
}

export { validateURL }
