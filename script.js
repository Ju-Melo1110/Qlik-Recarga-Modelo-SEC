document.getElementById('qlikButton').addEventListener('click', function() {
    const url = 'https://bivigia.us.qlikcloud.com/api/v1/automations/9ad2734e-7f4b-4526-a4c9-a1b69008ca38/actions/execute';
    const token = 'OkQUjhCXLyshXz0vxPpQoB4sGMjtV2FHlH9lT3IQvsY5URL0MBJ2lHNzwhSuWCEB';
  
    // Configurar la solicitud POST con el token
    fetch(url, {
      method: 'POST',
      headers: {
        'X-Execution-Token': token,
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      alert('Automatización ejecutada correctamente');
    })
    .catch(error => {
      alert('Error al ejecutar la automatización');
      console.error(error);
    });
  });
  