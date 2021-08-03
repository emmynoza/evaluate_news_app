function validateURL(url) {
    let re = /^(http|https)?:\/\/(www)?[^ "]+$/;

    return re.test(url);
}

export { validateURL }
