const $startPageSubmit = document.getElementById("startPage")
const $taskText = document.getElementById('userTask')
let $message = document.getElementById("list")
let $btnSend = document.getElementById("btnSend")
let $btnChenge = document.getElementById("CHENGEName")

let $submitName = document.getElementById("submitName")
let name = document.getElementById('name')
setTimeout(()=>{
 location.reload()
},15000)
//ZHE
$btnChenge.addEventListener("click",getOut)



if (localStorage.getItem("nameFirst")){
    // startPage

    name.value =localStorage.getItem("nameFirst")
    // $inputName = localStorage.getItem("nameFirst")
    authorization($submitName)
}else {

    $submitName.addEventListener("click",authorization)
}

function getOut(){
    $submitName.setAttribute("disabled", true);
    $startPageSubmit.classList.remove("xxx")

    localStorage.removeItem('nameFirst')
    location.reload()
}


$btnSend.addEventListener('click', sendMessage)

let namesGRUP = ["Сач", "GurZHEN", "Nut","Latvia","Piton","Slava","Litvinchuci","Egor","Android","Kirill","Vlad","Ily"]

// requestURL = `https://jsfeajax.herokuapp.com/${name.value}/todo`
// let body = {
//     mytext: "приевт",
//     friendtest: "ghbdtn"
// }

// sendRequest('GET', requestURL)
//     .then((data) => drow(JSON.parse(data)))
//     .catch((er) => console.log(er))


// $startPageSubmit.addEventListener("click", authorization)
// document.addEventListener('click', itemTask);

function drow(data) {
    console.log(data)
    data.map(elem => {

        if (elem.text) {
            $message.innerHTML += `<li><h4>${elem.whuSadTHat}</h4>${elem.text}</li> `
        }
    })
}


function sendMessage(e) {
    e.preventDefault()
    console.log($taskText.value)
    let bodysend = {
        whuSadTHat: `${name.value}`,
        text: `${$taskText.value}`
    }

    requestURL_andr = `https://jsfeajax.herokuapp.com/ZHE/todo`
    namesGRUP.map(elemName => {
        if (elemName == name.value) {
            return
        } else {
            sendRequest('POST',`https://jsfeajax.herokuapp.com/${elemName}/todo`, bodysend)
                .then((data) => (JSON.parse(data)))
                .catch((er) => console.log(er))
        }
    })


    sendRequest('POST', requestURL, bodysend)
        .then((data) => {
            (JSON.parse(data))
            location.reload()
        })
        .catch((er) => console.log(er))

}