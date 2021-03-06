
import { validateURL } from "./urlChecker";
import { updateUI } from "./updateUI";

function handleSubmit(event) {
    event.preventDefault();
    const inputURL = document.getElementById('url').value;

    validateURL(inputURL) ? callApi(inputURL) : console.log('error');

    function callApi(url) {
        fetch('/postdata', {
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
