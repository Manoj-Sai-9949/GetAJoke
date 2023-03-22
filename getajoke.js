
const joke = document.querySelector('#joke')
const button = document.querySelector('button')


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    joke.innerText = `${jokeText}`
}

const getDadJoke = async () => {
    try {
    const config = {headers:{ Accept: 'application/json' }}
    const res = await axios.get('https://icanhazdadjoke.com/',config)
    return res.data.joke;
    } catch(e) {
        return "Sorry, no jokes available :("
    }

}

button.addEventListener('click',addNewJoke)