const lampada = document.getElementById('lampada');
const container = document.getElementById('container');

lampada.addEventListener('click', () => {
  if (container.classList.contains('apagado')) {
    container.classList.remove('apagado');
    container.classList.add('ligado');
    lampada.src = 'Imagens/ligada.png';
  } else {
    container.classList.remove('ligado');
    container.classList.add('apagado');
    lampada.src = 'Imagens/apagada.png';
  }
});
