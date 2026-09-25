async function loadContributors() {
    // load the known information (initials, year of graduation, etc) from the JSON file and github
    const jsonContributors = (await (await fetch('https://static.team5970.org/root/data/contributors.json')).json())
    try {
        const githubContributors = (await (await fetch('https://api.github.com/repos/beavertronics/web-assets/contributors')).json())
    } catch (error) {
        alert(error)
    }

    // create grid for all contributors
    const grid = $("#contributor-grid")

    // go through each github contributor
    for (const githubContributor of githubContributors) {
        // use the info in the JSON if it exists, otherwise make a template
        if (githubContributor['login'] in Object.keys(jsonContributors)) {
            const contributorInfo = jsonContributors[githubContributor]
        }
        else {
            const contributorInfo = {
                'initials': 'N/A',
                'gradYear': 'N/A'
            }
        }

        const response = await fetch(githubContributor['url'])
        const data = await response.json()

        const cell = $(`
            <a href="${githubContributor['html_url']}" target="_blank" class="contributor-cell">
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