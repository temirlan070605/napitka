document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const resetBtn = document.getElementById('resetBtn');
    const cocktails = document.querySelectorAll('.cocktail');

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        cocktails.forEach(cocktail => {
            const name = cocktail.dataset.name.toLowerCase();
            if (name === query) {
                cocktail.style.display = 'block';
            } else {
                cocktail.style.display = 'none';
            }
        });
    });

    resetBtn.addEventListener('click', () => {
        searchInput.value = '';
        cocktails.forEach(cocktail => {
            cocktail.style.display = 'none';
        });
    });
});