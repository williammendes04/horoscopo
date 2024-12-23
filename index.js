// Define o proxy e a URL da API
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiUrl = "https://json.freeastrologyapi.com/";  // URL da API de astrologia

// Dados a serem enviados na requisição (signo e dia)
const requestData = {
    sign: 'aries',  // Substitua por qualquer signo que desejar (ex: 'taurus', 'leo', etc.)
    day: 'today'    // Pode ser 'today', 'yesterday', ou 'tomorrow'
};

// Realizando a requisição para o proxy que vai acessar a API
fetch(proxyUrl + apiUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "x-api-key": "ZIgy7vmbha1WecNWU5Ptp9CMAVHx4q1A6i3HKAp0",  // Substitua pela sua chave de API
    },
    body: JSON.stringify(requestData)
})
.then(response => response.json())  // Converte a resposta para JSON
.then(data => {
    // Exibe os dados no console
    console.log(data);

    // Exibe o resultado na página HTML
    document.getElementById("horoscope").innerHTML = `
        <h2>Horóscopo de ${data.sign}</h2>
        <p><strong>Data:</strong> ${data.current_date}</p>
        <p><strong>Compatibilidade:</strong> ${data.compatibility}</p>
        <p><strong>Humor:</strong> ${data.mood}</p>
        <p><strong>Cor do dia:</strong> ${data.color}</p>
        <p><strong>Número da sorte:</strong> ${data.lucky_number}</p>
        <p><strong>Descrição:</strong> ${data.description}</p>
    `;
})
.catch(error => {
    // Exibe qualquer erro no console
    console.error('Erro ao obter dados:', error);

    // Exibe uma mensagem de erro para o usuário
    document.getElementById("horoscope").innerHTML = `<p>Erro ao obter horóscopo. Tente novamente.</p>`;
});
