function filter(event) {
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const category = event.target.textContent.trim();
    console.log(category)
    filterNews(category);
}

// Fetch the news data from news.json
fetch('news.json')
    .then(response => response.json())
    .then(data => {
        // Get the LatestNews div
        const latestNewsDiv = document.querySelector('.LatestNews');

        data.forEach(newsItem => {
            const newsContainer = document.createElement('div');
            newsContainer.classList.add('newsItem'); // Add news item class
            newsContainer.dataset.category = newsItem.category; // Add category data attribute

            const newsDesc = document.createElement('div');
            newsDesc.classList.add('newsDesc'); // Add newsDesc class
            
            const newsImage = document.createElement('img');

            const newsTitle = document.createElement('h3');
            const newsLink = document.createElement('a');

            newsImage.src = newsItem.image;
            newsImage.alt = "News Image";
            newsTitle.textContent = newsItem.news;
            newsLink.href = newsItem.link;
            newsLink.target = '_blank'; // Set target attribute

            newsLink.textContent = "Read more >";

            newsContainer.appendChild(newsImage);
            newsContainer.appendChild(newsDesc);
            newsDesc.appendChild(newsTitle);
            newsDesc.appendChild(newsLink);

            latestNewsDiv.appendChild(newsContainer);
        });
    })
    .catch(error => console.error('Error fetching news:', error));

function filterNews(category) {
    const newsItems = document.querySelectorAll('.newsItem');
    newsItems.forEach(item => {
        if (category === 'All' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}