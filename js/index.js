

const campoNumerico = document.getElementById('cantidad');

campoNumerico.addEventListener('keydown', function(evento) {
  const teclaPresionada = evento.key;
  const teclaPresionadaEsUnNumero =
    Number.isInteger(parseInt(teclaPresionada));

  const sePresionoUnaTeclaNoAdmitida = 
    teclaPresionada != 'ArrowDown' &&
    teclaPresionada != 'ArrowUp' &&
    teclaPresionada != 'ArrowLeft' &&
    teclaPresionada != 'ArrowRight' &&
    teclaPresionada != 'Backspace' &&
    teclaPresionada != 'Delete' &&
    teclaPresionada != 'Enter' &&
    !teclaPresionadaEsUnNumero;
  const comienzaPorCero = 
    campoNumerico.value.length === 0 &&
    teclaPresionada == 0;

  if (sePresionoUnaTeclaNoAdmitida || comienzaPorCero) {
    evento.preventDefault(); 
  }
});

function mostrarTotal(){  
    let cat = document.getElementById("categoria").value;
    //console.log(cat);
    let precio = 200;
    let cantidad = parseInt(document.getElementById('cantidad').value);    
    let total1 = precio * cantidad;
    //console.log(total1);
    let total = total1 - (total1 * cat)
    //console.log(total);
    document.getElementById('total').value = `Total a pagar: \$${total}`;
}

function limpiarTodo(){    
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cantidad').value = '1';
}




document.getElementById('btn_calcular').addEventListener('click', mostrarTotal);
document.getElementById('borrar').addEventListener('click', limpiarTodo);