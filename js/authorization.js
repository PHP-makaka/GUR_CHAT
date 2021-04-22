// ZHEN
const $inputName =document.getElementById("name")

let requestURL;

function authorization(e){

    // let $target =e.target
    let name =$inputName.value.trim()


        requestURL= `https://jsfeajax.herokuapp.com/${name}/todo`

        sendRequest('GET', requestURL)
            .then((data)=> drow(JSON.parse(data)))
            .catch((er)=>console.log(er))
    localStorage.setItem('nameFirst', name)
    $submitName.setAttribute("disabled", false);
    $startPageSubmit.classList.add("xxx")

    // e.preventDefault();

}