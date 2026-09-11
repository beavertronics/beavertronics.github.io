async function loadContributors() {
    const contributors = (await (await fetch('/assets/data/contributors.json')).json())
    console.log(contributors)
    const grid = $("#contributor-grid")

    for (const contributorUsername of Object.keys(contributors)) {
        const contributor = contributors[contributorUsername]
        const response = await fetch(`https://api.github.com/users/${contributorUsername}`)
        const data = await response.json()

        const cell = $(`
            <a href="https://github.com/${contributorUsername}" target="_blank" class="contributor-cell">
                <img src="${data.avatar_url}" alt="${contributor['initials']}">
                <p class="contributor-initials">${contributor['initials']}</p>
                <p class="contributor-grad-year">Class of ${contributor['gradYear']}</p>
            </a>
        `)

        grid.append(cell)
        cell.find('img').on('error', function() {
            $(this).replaceWith(`<div class="contributor-pfp-fallback"></div>`)
        })
    }
}

window.addEventListener('load', loadContributors)