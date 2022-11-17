const patrones = [
    '.*/directorio-personal/.*',
    '.*/docencia/grados/.*',
    '.*/docencia/posgrados/.*',
]
document.getElementsByTagName('table').array.forEach(elem => {
    const url = elem[0].childNodes[1].childNodes[4].childNodes[1].textContent.split(',')[0]
    let valido = patrones.every(x=>!url.match(x))
    if(!valido){
        elem.style.display = "none"
    }
})
