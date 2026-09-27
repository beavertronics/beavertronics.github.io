async function loadContributors() {
    // load the known information (initials, year of graduation, etc) from the JSON file and github
    const jsonContributors = (await (await fetch('https://static.team5970.org/root/data/contributors.json')).json())
    const githubContributors = (await (await fetch('https://api.github.com/repos/beavertronics/beavertronics.github.io/contributors')).json())

    // create grid for all contributors
    const grid = $("#contributor-grid")
    let unknown = [];
    let known = [];

    // go through each github contributor and sort between known and unknown
    for (const githubContributor of githubContributors) {
        if (!Object.keys(jsonContributors).includes(githubContributor['login'])) {
            unknown.push(githubContributor)
        }
        else { 
            known.push(githubContributor) 
        }
    }

    // go through each contributor and display
    for (const contributor of [...known, ...unknown]) {
        const response = await fetch(contributor['url'])
        const data = await response.json()
        let contributorInfo = jsonContributors[contributor['login']]
        if (!contributorInfo) { 
            contributorInfo = {
                'initials': contributor['login'],
                'gradYear': 'N/A'
            } 
        }

        const cell = $(`
            <a href="${contributor['html_url']}" target="_blank" class="contributor-cell">
                <img src="${data.avatar_url}" alt="${contributorInfo['initials']}">
                <p class="contributor-initials">${contributorInfo['initials']}</p>
                <p class="contributor-grad-year">Class of ${contributorInfo['gradYear']}</p>
            </a>
        `)

        grid.append(cell)
        cell.find('img').on('error', function() {
            $(this).replaceWith(`<div class="contributor-pfp-fallback"></div>`)
        })
    }
}

window.addEventListener('load', loadContributors)