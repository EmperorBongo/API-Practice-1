const button = document.querySelector("button")

const buttonClick = () => {
    console.log('button clcked')


    axios.get("https://swapi.dev/api/planets/?search=alderaan")
    .then(res => {
        let {residents} = res.data.results[0]
        for(let i = 0; i < residents.length; i++){
            axios.get(residents[i]).then(res => {
               let h2 = document.createElement("h2")
               h2.textContent = res.data.name
               document.body.appendChild(h2)
                console.log(res.data)})
                
        }
        
        console.log(res.data.results[0].residents)})
}

button.addEventListener('click', buttonClick)