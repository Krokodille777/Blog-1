 const words = [
            {russian: 'Аптека', pronunciation: '[uhp-tjé-kuh]', english: 'Pharmacy', icon: '🏥'},
            {russian: 'Автобус', pronunciation: '[uhv-tóh-boos]', english: 'Bus', icon: '🚌'},
            {russian: 'Апельсин', pronunciation: '[uhp-pel\'-s\'í:n]', english: 'Orange', icon: '🍊'},
            {russian: 'Амстердам', pronunciation: '[uhm-ster-dúhm]', english: 'Amsterdam', icon: '🏛️'},
            {russian: 'Аист', pronunciation: '[úh-jist]', english: 'Stork', icon: '🦢'},
            {russian: 'Ананас', pronunciation: '[uh-nuh-núhs]', english: 'Pineapple', icon: '🍍'},
            {russian: 'Брат', pronunciation: '[bruht]', english: 'Brother', icon: '👨‍👦'},
            {russian: 'Банан', pronunciation: '[buh-núhn]', english: 'Banana', icon: '🍌'},
            {russian: 'Бабушка', pronunciation: '[búh-boo-shkuh]', english: 'Grandma', icon: '👵'},
            {russian: 'Билет', pronunciation: '[bí-ljet]', english: 'Ticket', icon: '🎫'},
            {russian: 'Бобёр', pronunciation: '[boh-bjór]', english: 'Beaver', icon: '🦫'},
            {russian: 'Банк', pronunciation: '[buhnk]', english: 'Bank', icon: '🏦'},
            {russian: 'Волк', pronunciation: '[vohlk]', english: 'Wolf', icon: '🐺'},
            {russian: 'Вальс', pronunciation: '[vuhl\'s]', english: 'Waltz', icon: '💃'},
            {russian: 'Виноград', pronunciation: '[vi-noh-grúhd]', english: 'Grape', icon: '🍇'},
            {russian: 'Венгрия', pronunciation: '[Vún-gri-juh]', english: 'Hungary', icon: '🇭🇺'},
            {russian: 'Вилка', pronunciation: '[Vú-lkuh]', english: 'Fork', icon: '🍴'},
            {russian: 'Вода', pronunciation: '[voh-dúh]', english: 'Water', icon: '💧'},
            {russian: 'Глаз', pronunciation: '[gluhz]', english: 'Eye', icon: '👁️'},
            {russian: 'Гром', pronunciation: '[grohm]', english: 'Thunder', icon: '⛈️'},
            {russian: 'Город', pronunciation: '[gúh-roht]', english: 'City/Town', icon: '🏙️'}
        ];

        function generateRandomWords() {
            const grid = document.getElementById('randomWordsGrid');
            const shuffled = words.sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 8);
            
            grid.innerHTML = '';
            
            selected.forEach(word => {
                const wordCard = document.createElement('div');
                wordCard.className = 'random-word-card';
                wordCard.innerHTML = `
                    <div class="random-word-icon">${word.icon}</div>
                    <div class="random-word-russian">${word.russian}</div>
                    <div class="random-word-english">${word.english}</div>
                `;
                grid.appendChild(wordCard);
            });
        }

        // Generate initial random words
        generateRandomWords();