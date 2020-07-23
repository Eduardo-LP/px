//research states of brazil
function researchStates(){
    const UFs = document.querySelector("select[name=uf]")
    // that is Promise. it's needs of then for try the response
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    .then(states => {
        for(let state of states){
            // get the element HTML and add the new element in the select(UFs)
            UFs.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}
//shows change
document.querySelector("select[name=uf]").addEventListener("change", enableCity)

//enable the cities for states
function enableCity(event){
    const citySelector = document.querySelector("select[name=city]")

    const statesInput = document.querySelector("input[name=states]")
    const indexOfSelectedState = event.target.selectedIndex
    statesInput.value = event.target.options[indexOfSelectedState].text

    const ufValue = event.target.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelector.innerHTML = "<option value>Selecione sua cidade</option>"
    citySelector.disabled = true

    fetch(url).then(res => res.json())
    .then(cities => {
        for(let city of cities){
            citySelector.innerHTML += `<option value="${city.id}">${city.nome}</option>`
        }
        citySelector.disabled = false
    })
}
//run research
researchStates()

const itenstoCollect = document.querySelectorAll(".itens-grid li")

for(let item of itenstoCollect){
    item.addEventListener("click", handleSelectedItem)
}

function handleSelectedItem(event){
    const itemId = event.target.dataset.id
    //add or remove a class with Js
    event.target.classList.toggle("selected")
    
}