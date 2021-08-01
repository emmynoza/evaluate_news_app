function updateUI(data) {
    const results = document.getElementById('results');

    results.innerHTML = ` <h3> Score Tag: ${data.score_tag} </h3>`


    console.log(data.confidence, data.score_tag);
}

export { updateUI }