// Дублируем параметры для ссылок  
document.querySelectorAll(".site-nav").forEach(navElement => {
    const currentParams = new URLSearchParams(window.location.search);
    const originalUrl = new URL(navElement.href); // Получаем полный URL ссылки
    
    // Переносим все текущие параметры в целевую ссылку
    currentParams.forEach((value, key) => {
        if (!originalUrl.searchParams.has(key)) { // Если параметра ещё нет
            originalUrl.searchParams.set(key, value);
        }
    });
    
    navElement.href = originalUrl.toString();
});