
fetch('題目.json')
    .then(response => response.json())
    .then(data => {
        // 題目一：雲嘉南
        const yunJiaNanCities = ['雲林縣', '嘉義縣', '臺南市'];
        const southCityAll = [];

        yunJiaNanCities.forEach(city => {
            if (data[city]) {
                southCityAll.push(city);
            }
        });

        document.querySelector('.south-city-num').textContent = southCityAll.length;
        document.querySelector('.south-city-all').textContent = southCityAll.join('、');

        // 題目二：新北市鄉鎮
        const newTaipeiDistricts = data['新北市'] || [];
        document.querySelector('.north-city-num').textContent = newTaipeiDistricts.length;
        document.querySelector('.north-city-all').textContent = newTaipeiDistricts.join('、');

        // 題目三：南投市
        const nantouCode = data['南投縣']?.['南投市'];
        document.querySelector('.nantou-townshipID').textContent += nantouCode;
        document.querySelector('.nantou-townshipName').textContent += '南投市';

        // 題目四：太麻里鄉
        const taimaliCode = data['臺東縣']?.['太麻里鄉'];
        document.querySelector('.taimali-townshipID').textContent += taimaliCode;
        document.querySelector('.taimali-townshipName').textContent += '太麻里鄉';
    })
    .catch(error => {
        console.error('載入 JSON 錯誤:', error);
    });

