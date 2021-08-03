function updateUI(data) {

    const results = document.getElementById('results');
    // create list for results
    const resultsList = document.createElement('ul');
    resultsList.setAttribute('id', 'result-list');
    // resets the result box
    results.innerHTML = ''

    // creates results on DOM 

    const scoreTag = `Score Tag: ${data.score_tag}`;
    const agreement = `Agreement: ${data.agreement}`;
    const subjectivity = `Subjectivity: ${data.subjectivity}`;
    const confidence = `Confidence: ${data.confidence}`;
    if (data.status.code === "0") {
        resultsList.innerHTML = `
        <li>${scoreTag}</li>
        <li>${agreement}</li>
        <li>${subjectivity}</li>
        <li>${confidence}</li>
        `
    } else {
        results.innerHTML = `
        <h2> Page has no content </h2>
        `
    }

    results.appendChild(resultsList)
}

export { updateUI }