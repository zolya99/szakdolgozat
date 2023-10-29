let colors = [ "test",
"file",
"think",
"paper",
"dog"];


let animals = ["zsiraf", "segg", "luk"]

let countries = ["pakistan", "zindabad", "insallah"]

function randomWord(type=colors){
    switch(type){
        case 'animals':
            return animals[Math.floor(Math.random()* animals.length)]
        case 'countries':
            return countries[Math.floor(Math.random()* countries.length)]
        case 'colors':
            return colors[Math.floor(Math.random()* colors.length)]
        default:
            return colors[Math.floor(Math.random()* colors.length)]
    }
    
}
    
export default randomWord;