const BLACKLIST = 'blacklist'
const HIDE_BLACKLIST = true

async function loadContributors() {    
    // load the JSON with info of contributors
    const jsonContributors = (await (await fetch('https://static.team5970.org/root/data/contributors.json')).json())
    const jsonContributorKeys = Object.keys(jsonContributors)

    // load from Github to compare and add any undocumented ones
    let githubContributors;
    const githubResponse = await fetch('https://api.github.com/repos/beavertronics/beavertronics.github.io/contributors')
    if (githubResponse.status == 200) { githubContributors = await githubResponse.json() }
    else { 
        console.log('failed to access github api, defaulting')
        githubContributors = undefined
     }

    // create grid for all contributors
    const grid = $("#contributor-grid")
    // known and unknown contributors (whether they are in the json or not)
    let unknown = [];
    let known = [];

    // put all known users in the known list
    for (const jsonContribKey of jsonContributorKeys) {
        if (jsonContribKey == BLACKLIST) { continue }
        known.push({
            ...jsonContributors[jsonContribKey],
            'url': `https://api.github.com/users/${jsonContribKey}`,
            'login': jsonContribKey
        })
    }

    // if we succeeded in fetching contributors info
    if (githubContributors) {

        // get all unknown users
        for (const githubContributor of githubContributors) {

            // check the blacklist (to remove mentors, duplicate accounts, etc)
            if (HIDE_BLACKLIST && jsonContributors[BLACKLIST].includes(githubContributor['login'])) { 
                console.log('ignored', githubContributor['login'], 'due to blacklist')
                continue 
            }

            // push to unknown if they are not in the JSON
            if (!jsonContributorKeys.includes(githubContributor['login'])) { unknown.push(githubContributor) }
        }
    }

    // go through each contributor and display
    let sum = [...known, ...unknown]
    for (const contributor of sum) {
        const response = await fetch(contributor['url'])
        const data = await response.json()
        let contributorInfo = jsonContributors[contributor['login']]
        if (!contributorInfo) { 
            contributorInfo = {
                'initials': 'N/A',
                'gradYear': 'N/A'
            } 
        }

        // create their html cell and display
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

// run on load
window.addEventListener('load', loadContributors)