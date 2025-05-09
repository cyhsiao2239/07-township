fetch('題目.json')
    .then(response => response.json())
    .then(data => {
        // 題目一：雲嘉南區域有幾個縣市？
        const yunJiaNanCityNames = ['雲林縣', '嘉義縣', '嘉義市', '臺南市'];
        const southCityAll = [];

        data.forEach(area => {
            area.cities.forEach(city => {
                if (yunJiaNanCityNames.includes(city.cityName)) {
                    southCityAll.push(city.cityName);
                }
            });
        });

        document.querySelector('.south-city-num').textContent = southCityAll.length;//數有幾個
        document.querySelector('.south-city-all').textContent = southCityAll.join('、');

        // 題目二：新北市有幾個鄉鎮？
        let newTaipeiTownships = [];

        data.forEach(area => {
            area.cities.forEach(city => {
                if (city.cityName === '新北市') {
                    newTaipeiTownships = city.townships;
                }
            });
        });

        document.querySelector('.north-city-num').textContent = newTaipeiTownships.length;
        document.querySelector('.north-city-all').textContent = newTaipeiTownships.map(t => t.townshipName).join('、');

        // 題目三：南投市的郵遞區號
        let nantouTownship = null;

        data.forEach(area => {
            area.cities.forEach(city => {
                if (city.cityName === '南投縣') {
                    nantouTownship = city.townships.find(t => t.townshipName === '南投市');
                }
            });
        });

        if (nantouTownship) {
            document.querySelector('.nantou-townshipID').textContent += nantouTownship.townshipId;
            document.querySelector('.nantou-townshipName').textContent += nantouTownship.townshipName;
        }

        // 題目四：太麻里鄉的郵遞區號
        let taimaliTownship = null;

        data.forEach(area => {
            area.cities.forEach(city => {
                if (city.cityName === '臺東縣') {
                    taimaliTownship = city.townships.find(t => t.townshipName === '太麻里鄉');
                }
            });
        });

        if (taimaliTownship) {
            document.querySelector('.taimali-townshipID').textContent += taimaliTownship.townshipId;
            document.querySelector('.taimali-townshipName').textContent += taimaliTownship.townshipName;
        }
    })
    .catch(error => {
        console.error('載入 JSON 錯誤:', error);
    });
