let width = 500;
let height = 400;

let objetivo = {
    x: diferencia(width),
    y: diferencia(height)
}
let click = 0
let mapa = document.getElementById('mapa').addEventListener('click', (e) => {
    let objetivo2 = diferencia2(e, objetivo)
    let objetivo3 = diferencia3(objetivo2)
    document.getElementById('div').innerHTML = objetivo3
    if (objetivo2 < 15) {
        alert('encontraste el tesoro en ' + click + ' click')
        location.reload();
    }
    click++;

})