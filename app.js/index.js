let diferencia = size =>{
     return Math.floor(Math.random()* size)
}

let diferencia2 = (e, target) => {
    diffX = e.offsetX - target.x;
    diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY + diffY))
}

let diferencia3 = diferenciatotal => {
    if (diferenciatotal < 30) {
        return 'estas muy cerca del tesoro'
    }else if (diferenciatotal < 70) {
        return ' cerca del tesoro'
    }else if (diferenciatotal < 130) {
        return 'cerca'
    }else if (diferenciatotal < 200) {
        return 'lejos'
    }else if (diferenciatotal < 290) {
        return 'muy lejos'
    }else if (diferenciatotal < 370) {
        return 'sigue buscando'
    }else if (diferenciatotal < 450) {
        return 'estas muy lejos del tesoro'
    }else if (diferenciatotal < 600) {
        return 'muy muy lejos del tesoro'
    }
}