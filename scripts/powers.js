function flightHandlerFunction(newClass) {
    flight.classList.toggle(newClass)
}

document.querySelector("#activate-flight").addEventListener("click", function() {
    flightHandlerFunction("enabled")
})

function mindreadingHandlerFunction(newClass) {
    mindreading.classList.toggle(newClass)
}

document.querySelector("#activate-mindreading").addEventListener("click", function() {
    mindreadingHandlerFunction("enabled")
})

function xrayHandlerFunction(newClass) {
    xray.classList.toggle(newClass)
}

document.querySelector("#activate-xray").addEventListener("click", function() {
    xrayHandlerFunction("enabled")
})


    

document.querySelector("#activate-all").addEventListener("click", function() {
    const activate = document.querySelectorAll(".power")
    activate.forEach(power => {
        power.classList.toggle("enabled")   
    });  
})

document.querySelector("#deactivate-all").addEventListener("click", function() {
    const deactivate = document.querySelectorAll(".power")
    deactivate.forEach(power => {
        power.classList.toggle("disabled")
    });
})