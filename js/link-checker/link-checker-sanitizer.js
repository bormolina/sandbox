const patrones = [
    '.*/docencia/grados/.*/guia-docente.*',
    '.*/docencia/posgrados/.*/guia-docente.*',
]

Array.from(document.getElementsByTagName('br')).forEach(elem => {
    elem.style.display = "none"
})

Array.from(document.getElementsByTagName('table')).forEach(elem => {
    const url = elem.childNodes[1].childNodes[4].childNodes[1].textContent.split(',')[0]
    let valido = patrones.every(x=>!url.match(x))
    if(!valido){
        elem.style.display = "none"
    }
    else{
        elem.style.marginBottom = "3rem"
    }
})
