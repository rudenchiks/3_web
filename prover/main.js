document.addEventListener('DOMContentLoaded', function() {
    const changeButton = d3.select('input[value="Изменить страницу"]');
    
    changeButton.on('click', function() {
        if (d3.select('#extracted-languages-list').empty()) {
            const languageItems = d3.selectAll("ol li").nodes();
            const languages = Array.from(languageItems).map(li => li.textContent);  // Извлекаем текстовое содержимое каждого элемента
            
            const newList = d3.select('body')
                .insert('ol', 'h2:first-of-type')
                .attr('id', 'extracted-languages-list');
            
            languages.forEach((lang, index) => {
                newList.append('li')
                    .text(lang)
                    .style('margin', '5px 0');
            });
            changeButton.attr('value', 'Список добавлен!');
        }
    });
});