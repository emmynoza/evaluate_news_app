function validateURL(url) {
    let re = /^(http|https)?:\/\/(www)?[^ "]+$/;

    if (re.test(url)) {
        console.log('valid url');
        return true
    } else {
        console.error('error', error);
        return false
    }
}

export { validateURL }
