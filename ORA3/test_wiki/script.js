function searchWiki() {
    const query = document.getElementById('searchInput').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (query) {
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srlimit=4&format=json&origin=*`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const results = data.query.search;

                if (results.length > 0) {
                    results.forEach(result => {
                        const title = result.title;
                        const snippet = result.snippet;

                        // Highlight the search term in the snippet and title
                        const highlightedSnippet = snippet.replace(
                            new RegExp(query, 'gi'), // Match the query case-insensitively
                            match => `<b>${match}</b>`
                        );

                        const highlightedTitle = title.replace(
                            new RegExp(query, 'gi'),
                            match => `<b>${match}</b>`
                        );

                        const link = `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;

                        resultsDiv.innerHTML += `
                            <div class="result">
                                <a href="${link}" target="_blank">${highlightedTitle}</a>
                                <p>${highlightedSnippet}...</p>
                            </div>
                        `;
                    });
                } else {
                    resultsDiv.innerHTML = '<p>No results found.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                resultsDiv.innerHTML = '<p>Failed to fetch results. Please try again later.</p>';
            });
    } else {
        resultsDiv.innerHTML = '<p>Please enter a search term.</p>';
    }
}
