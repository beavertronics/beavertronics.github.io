const contributors = [
    { username: "willgames-afk", initials: "wk", gradYear: 2026 },
    { username: "i1aw", initials: "cw", gradYear: 2027},
    { username: "SketchedDoughnut", initials: "ap", gradYear: 2027},
    { username: "BubbleShade", initials: "ok", gradYear: 2026},
    { username: "NoahTheNerd", initials: "ng", gradYear: 2027},
]

async function loadContributors() {
    const grid = $("#contributor-grid")

    for (const contributor of contributors) {
        const response = await fetch(`https://api.github.com/users/${contributor.username}`)
        const data = await response.json()

        const cell = $(`
            <a href="https://github.com/${contributor.username}" target="_blank" class="contributor-cell">
                <img src="${data.avatar_url}" alt="${contributor.initials}">
                <p class="contributor-initials">${contributor.initials}</p>
                <p class="contributor-grad-year">Class of ${contributor.gradYear}</p>
            </a>
        `)

        grid.append(cell)
        cell.find('img').on('error', function() {
            $(this).replaceWith(`<div class="contributor-pfp-fallback"></div>`)
        })
    }
}

window.addEventListener('load', loadContributors)