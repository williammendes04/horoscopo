async function getHoroscope() {
    const sign = document.getElementById('sign').value;

    const url = "https://json.freeastrologyapi.com/";  // URL da API
    const apiKey = "ZIgy7vmbha1WecNWU5Ptp9CMAVHx4q1A6i3HKAp0";  // Sua chave da API

    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    };

    
    const params = {
        sign: sign,
        day: 'today'  // Você pode mudar para 'yesterday' ou 'tomorrow' se necessário
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params)
        });

        if (response.ok) {
            const data = await response.json();
            displayHoroscope(data);
        } else {
            throw new Error('Erro ao obter o horóscopo');
        }
    } catch (error) {
        console.error('Erro ao buscar horóscopo:', error);
        alert('Erro ao obter horóscopo. Tente novamente.');
    }
}

function displayHoroscope(data) {
    document.getElementById('horoscopeResult').style.display = 'block';

    document.getElementById('description').textContent = "Descrição: " + data.description;
    document.getElementById('compatibility').textContent = "Compatibilidade: " + data.compatibility;
    document.getElementById('mood').textContent = "Humor: " + data.mood;
    document.getElementById('color').textContent = "Cor: " + data.color;
    document.getElementById('lucky_number').textContent = "Número da sorte: " + data.lucky_number;
}
