function actualizarContador(id) {
    let mostrarLike = localStorage.getItem(`like-${id}`);
    let mostrarDislike = localStorage.getItem(`dislike-${id}`);

    document.getElementById(`gusta-${id}`).innerHTML = `(${mostrarLike || 0})`;
    document.getElementById(`no-gusta-${id}`).innerHTML = `(${mostrarDislike || 0})`;
}

function meGusta(id) {
    let recuperar = localStorage.getItem(`like-${id}`);
    let guardar = recuperar ? parseInt(recuperar) + 1 : 1;

    localStorage.setItem(`like-${id}`, guardar);
    actualizarContador(id);
}

function nomeGusta(id) {
    let recuperar = localStorage.getItem(`dislike-${id}`);
    let guardar = recuperar ? parseInt(recuperar) + 1 : 1;

    localStorage.setItem(`dislike-${id}`, guardar);
    actualizarContador(id);
}


window.onload = function() {
    actualizarContador('video1');
    actualizarContador('video2');
    actualizarContador('video3');
    actualizarContador('video4');
    
}
