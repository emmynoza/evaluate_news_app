
import { validateURL } from "./urlChecker";
import { updateUI } from "./updateUI";

function handleSubmit(event) {
    event.preventDefault()
    const inputURL = document.getElementById('url').value;

    if (validateURL(inputURL)) {
        callApi(inputURL)
    } else {
        console.log('error1');
    }

    async function callApi(url) {
        await fetch('/postdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({ url })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(JSON.stringify(data))
                updateUI(data)
            })
    }
}
export { handleSubmit }
