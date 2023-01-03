const advice = document.querySelector(".card-text")

const url ="https://api.adviceslip.com/advice"
const fetchAdvice = async ()=>{
    try {
        const response = await fetch(url)
        const data = await response.json()
        const dailyAdvice = data.slip.advice
    } catch (error) {
        console.log(error)
    }
}
fetchAdvice()

const url2 ="https://picsum.photos/200"
const fetchPhotos = async ()=>{
    try {
        const response = await fetch(url)
        const data2 = await response.json()
        //checking data
        const result = data2.slip.advice
        advice.innerHTML += result
    } catch (error) {
        console.log(error)
    }
}
fetchPhotos()
