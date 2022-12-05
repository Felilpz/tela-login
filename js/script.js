function mostrarSenha() {
    let pass = window.document.getElementById('pass')
    if(pass.type == 'password') {
        pass.type = 'text'
    } else {
        pass.type = 'password'
    }
}