class resourcePage {
    constructor(title, text = "default", links = []) {
        this.title = title
        if(text == "default") this.text = "Welcome to our resources page! We hope you find the information you are looking for. These presentations and projects are for the access and use of robotics students from all about the country and world. Our mission is to maximize the number of learners in our society -- and this is a way we can make that happen!"
        else this.text = text
        this.links = links
    }
    getHtml() {
        let newHTML = `<h2 class = "hclass"> ${this.title} </h2>
                    <p> ${this.text} </p>
                    <h3 class = "notice"> TEXT & ICONS BELOW ARE HYPERLINKED</h3>`
        this.links.forEach((link) => {
            newHTML += link.getHtml()
        })
        return newHTML
    }
}
class ResourceLink {
    constructor(text, defaultLink, iconLinks = []) {
        this.text = text
        this.defaultLink = defaultLink
        this.iconLinks = iconLinks
    }
    getHtml() {
        let newHTML = `<div class = "linkContainer"><li ><a  class = "resourceLink" href="${this.defaultLink}" target="_blank">${this.text}</a></li>`
        this.iconLinks.forEach((icoLink) => { newHTML += icoLink.getHtml() })
        newHTML += "</div>"
        return newHTML
    }

}
class IconLink {
    constructor(iconType, link) {
        this.iconType = iconType
        this.link = link
    }
    getHtml() { return `<a href="${this.link}" target="_blank"> <img src = "${this.iconType}" class = "resourceIcon"></a>`}
}

const IconType = Object.freeze({
    PRESENTATION: "../assets/pages/resources/Presentation.webp",
    DOCX: "../assets/pages/resources/Docx.webp",
    DOCS: "../assets/pages/resources/Docs.png",
    SLIDES: "../assets/pages/resources/Slides.png",
    VIDEO: "../assets/pages/resources/Video3.png",
    WEB: "../assets/pages/resources/Web.webp",
});

const generalText = new resourcePage(
    "GENERAL RESOURCES", "default", 
    [
        new ResourceLink("INTRODUCTION TO FRC WORKSHOP", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_49484de147ae436aa9cdfe616bcf5be4.pdf", [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_49484de147ae436aa9cdfe616bcf5be4.pdf")
            ]),
        new ResourceLink("EQUITABILITY & INCLUSION (2020)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_c1eeea25fe514373b150ab94bc7e138a.pdf", [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_c1eeea25fe514373b150ab94bc7e138a.pdf")
            ]),
        new ResourceLink("KICKOFF STRATEGY WORKSHOP (Fall 2019)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_0576c0902cf5493a9859c5fba6170e9f.pdf", [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_0576c0902cf5493a9859c5fba6170e9f.pdf")
            ])
    ]).getHtml()
const mechanicalText = new resourcePage(
    "MECHANICAL RESOURCES", "default", 
    [
        new ResourceLink("BASIC MECHANISMS (2020)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_254bd1aaac254254a1a6373880fdfbbc.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_254bd1aaac254254a1a6373880fdfbbc.pdf"),
                new IconLink(IconType.VIDEO, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/archives/cbe77e_5b6c5844107c4dc9baa5f4e6affbc8f8.zip?dn=Basic_mechanisms_for_website.zip")
            ]),
        new ResourceLink("BASIC MECHANISMS (2019)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_ffc917de533d400f9fdf363fa7ddc1b7.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_ffc917de533d400f9fdf363fa7ddc1b7.pdf"),
            ]),
        new ResourceLink("BUMPER MANUFACTURING GUIDE", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_8e70f29a3ca4473b9cff34da597d8cd7.pdf", 
            [
                new IconLink(IconType.DOCX, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_8e70f29a3ca4473b9cff34da597d8cd7.pdf")
            ]),
        new ResourceLink("DRIVETRAINS WORKSHOP (2019)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_04d1022ed6684dc1b67205ee1b65ae51.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_04d1022ed6684dc1b67205ee1b65ae51.pdf")
            ]),
    ]).getHtml()
const electricalText = new resourcePage(
    "ELECTRICAL RESOURCES", "default", 
    [
        new ResourceLink("INTRO TO FRC ELECTRICAL (2020)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_ce030e7eb2f147bca5534d9dde961cd4.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_ce030e7eb2f147bca5534d9dde961cd4.pdf"),
            ]),
        new ResourceLink("FRC ELECTRICAL OVERVIEW (2019)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_ba72894565574d6e93f7e2b948692b7e.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_ba72894565574d6e93f7e2b948692b7e.pdf"),
                new IconLink(IconType.DOCX, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_cdb399ad73a949e4a4cd7468cda3b9f6.pdf")

            ]),
        new ResourceLink("ELECTRICAL ENCHIRIDION", "https://docs.google.com/document/d/1ORmaSSSb9W4efG1v5-LzABsETYP1B2MBS1o4Lb52fDI/edit?usp=sharing", 
            [
                new IconLink(IconType.DOCS, "https://docs.google.com/document/d/1ORmaSSSb9W4efG1v5-LzABsETYP1B2MBS1o4Lb52fDI/edit?usp=sharing")
            ]),
        new ResourceLink("ELECTRICAL SENSORS WORKSHOP (2020)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_bc347c4384ff4cafb1fb1ede818d53da.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_bc347c4384ff4cafb1fb1ede818d53da.pdf"),
                new IconLink(IconType.DOCX, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_23ed7d90a26e4dcc9a1574691560b3b8.pdf"),
                new IconLink(IconType.VIDEO, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/archives/cbe77e_479483d00ade41799a61716806c17eed.zip?dn=Electrical_sensors_for_website.zip")
            ]),
        new ResourceLink("PNEUMATICS WORKSHOP (2019)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_d66102612cb242a698818b93af8012fb.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_d66102612cb242a698818b93af8012fb.pdf"),
            ]),
    ]).getHtml()
const softwareText = new resourcePage(
    "SOFTWARE RESOURCES", "default", 
    [
        new ResourceLink("TEAM GITHUB ORGANIZATION", "https://github.com/beavertronics", 
            [
                new IconLink(IconType.WEB, "https://github.com/beavertronics"),
            ]),
        new ResourceLink("KOTLIN PROGRAMMING WORKSHOP [In collaboration with 2898] (2023)", "https://docs.google.com/presentation/d/1G3PjiWRVuB41dTJ3TL_JMxP1T-v30HkCgSeKqwghtiU/edit?usp=sharing", 
            [
                new IconLink(IconType.SLIDES, "https://docs.google.com/presentation/d/1G3PjiWRVuB41dTJ3TL_JMxP1T-v30HkCgSeKqwghtiU/edit?usp=sharing"),
            ]),
        new ResourceLink("INTRO TO PYTHON WORKSHOP (2020)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_11971668f7194abcaee430753f519882.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_11971668f7194abcaee430753f519882.pdf"),
            ]),
        new ResourceLink("GITHUB & VIM WORKSHOP (2020)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_2dee9ab2961045a79563776a164dd509.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_2dee9ab2961045a79563776a164dd509.pdf"),
                new IconLink(IconType.VIDEO, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/archives/cbe77e_efb690edd77b4dfabf5759cf131797d2.zip?dn=Github_and_vim_for_website.zip")

            ]),
        new ResourceLink("GENERAL PROGRAMMING (2019)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_d0d51c171ca647228212daaf8e0eec55.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_d0d51c171ca647228212daaf8e0eec55.pdf")
            ]),
        new ResourceLink("CONTROL ALGORITHMS (2019)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_0d3c1f4b76a348bbaa419f402fe712ff.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_0d3c1f4b76a348bbaa419f402fe712ff.pdf"),
            ]),
        new ResourceLink("PYTHON PATH FOLLOWING GUIDE", "https://docs.google.com/document/d/13BW3BDbp1rS7OfafigRmIYfqzOUYEZlLi1fTulLuaEI/edit?usp=sharing", 
            [
                new IconLink(IconType.DOCS, "https://docs.google.com/document/d/13BW3BDbp1rS7OfafigRmIYfqzOUYEZlLi1fTulLuaEI/edit?usp=sharing"),
            ]),
    ]).getHtml()
const designText = new resourcePage(
    "DESIGN RESOURCES", "default", 
    [
        new ResourceLink("INTRO TO ONSHAPE CAD (2020)", "https://github.com/beavertronics", 
            [
                new IconLink(IconType.VIDEO, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/archives/cbe77e_fe585f4410e241a6af047b04e7e89f48.zip?dn=intro_to_onshape.zip"),
            ]),
        new ResourceLink("INTRO TO SOLIDWORKS (2019)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_578758da4fee4c148e415d10efec6e73.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_578758da4fee4c148e415d10efec6e73.pdf"),
            ]),
        new ResourceLink("SOLIDWORKS CAD MANUAL", "https://docs.google.com/document/d/1K4rkZ8HcClMd6FwG6EwL66E8LAmAzXtZNBNt7Nv_Gyc/edit?usp=sharing", 
            [
                new IconLink(IconType.DOCS, "https://docs.google.com/document/d/1K4rkZ8HcClMd6FwG6EwL66E8LAmAzXtZNBNt7Nv_Gyc/edit?usp=sharing"),
            ]),
        new ResourceLink("3D PRINTING WORKSHOP (2020)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_9eb057223f8e48eba7ce1ba0c26b578b.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_9eb057223f8e48eba7ce1ba0c26b578b.pdf"),
                new IconLink(IconType.VIDEO, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/archives/cbe77e_d65718ceec6441898afae2ae9e939901.zip?dn=Zoom_recording_3dprinting.zip")

            ]),
    ]).getHtml()
const leadershipText = new resourcePage(
    "LEADERSHIP RESOURCES", "default", 
    [
        new ResourceLink("LEADERSHIP WORKSHOP (2020)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_a0a704f68c584c0dace1f3f325fa72d4.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_a0a704f68c584c0dace1f3f325fa72d4.pdf"),
            ]),
        new ResourceLink("PROJECT MANAGEMENT (Fall 2019)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_1300e149165046e9a65508c0e1545f00.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_1300e149165046e9a65508c0e1545f00.pdf"),
            ]),
        new ResourceLink("PROJECT MANAGEMENT (Summer 2019)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_da244a085a8b4c5eb10c3f4df9d6bce9.pptx?dn=Project%20Management%205970%20(2).pptx", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_da244a085a8b4c5eb10c3f4df9d6bce9.pptx?dn=Project%20Management%205970%20(2).pptx"),
            ]),
        new ResourceLink("LEADERSHIP STRUCTURE", "https://docs.google.com/document/d/1X8B1YzXrVYXarXdBYqAWIgd6FgifAtuy89EVmbDiMM0/edit?usp=sharing", 
            [
                new IconLink(IconType.DOCS, "https://docs.google.com/document/d/1X8B1YzXrVYXarXdBYqAWIgd6FgifAtuy89EVmbDiMM0/edit?usp=sharing"),
            ]),
        new ResourceLink("ACTION TRACKER (2020)", "https://docs.google.com/spreadsheets/d/1pbGZB5KA8vFBlXvevDZSdNnBbtGmi-Zifb2saISVVME/edit?usp=sharing", 
            [
                new IconLink(IconType.WEB, "https://docs.google.com/spreadsheets/d/1pbGZB5KA8vFBlXvevDZSdNnBbtGmi-Zifb2saISVVME/edit?usp=sharing"),
            ]),
    ]).getHtml()
const businessText = new resourcePage(
    "BUSINESS RESOURCES", "default", 
    [
        new ResourceLink("WHY MARKETING MATTERS (2020)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_74be67770306484ca774b31fea05db29.pdf", 
            [
                new IconLink(IconType.PRESENTATION, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_74be67770306484ca774b31fea05db29.pdf"),
            ]),
        new ResourceLink("SPONSOR NEWSLETTER (2020)", "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_8e70f29a3ca4473b9cff34da597d8cd7.pdf", 
            [
                new IconLink(IconType.DOCX, "https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_8e70f29a3ca4473b9cff34da597d8cd7.pdf"),
            ]),
        new ResourceLink("5970 BRAND BOOK", "https://docs.google.com/presentation/d/15ZHMIcr5wwoEvilI2Sq-wtz_nylEJ5GTKsKZF4lC6U4/edit?usp=sharing", 
            [
                new IconLink(IconType.SLIDES, "https://docs.google.com/presentation/d/15ZHMIcr5wwoEvilI2Sq-wtz_nylEJ5GTKsKZF4lC6U4/edit?usp=sharing"),
            ]),
    ]).getHtml()
textLookupDictionary = {
    "general" : generalText,
    "mechanical" : mechanicalText,
    "electrical" : electricalText,
    "software" : softwareText,
    "design" : designText,
    "leadership" : leadershipText,
    "business" : businessText,
}

window.addEventListener('load', function () {
    let resourceTextContainer = document.getElementById("resourceTextContainer")
    pageType = PAGE_URL.split("#")
    if(pageType[1] in textLookupDictionary){
        resourceTextContainer.innerHTML = textLookupDictionary[pageType[1]]
        if (pageType[0].slice(-1) == "/") {
            window.history.replaceState('page2', 'Title', pageType[0].substring(0, pageType[0].length - 1) + "#" + pageType[1])
        } 
    } else {
        showTextCreate("general", generalText)()
    }
    

    //let lastShown = generalResourcesText

    document.getElementById("button2").addEventListener("click", showTextCreate("general", generalText));
    document.getElementById("button3").addEventListener("click", showTextCreate("mechanical", mechanicalText));
    document.getElementById("button4").addEventListener("click", showTextCreate("electrical", electricalText));
    document.getElementById("button5").addEventListener("click", showTextCreate("software", softwareText));
    document.getElementById("button6").addEventListener("click", showTextCreate("design", designText));
    document.getElementById("button7").addEventListener("click", showTextCreate("leadership", leadershipText));
    document.getElementById("button8").addEventListener("click", showTextCreate("business", businessText));

    function showTextCreate(name, textToShow){
        return function() {
            if (PAGE_URL.slice(-1) == "/") {
                window.history.replaceState('page2', 'Title', window.location.href.substring(0, window.location.href.length - 1).split("#")[0] + `#${name}`)
            } else{
                window.history.replaceState('page2', 'Title', window.location.href.split("#")[0] + `#${name}`)
            }
            
            //window.location.href = window.location.href.split("#")[0] + `#${name}`;
            resourceTextContainer.innerHTML = textToShow
        }
    }
})




/**
 * `<h2 class = "hclass"> General Resources</h2>
            <p> Welcome to our resources page! We hope you find the information you are looking for. These presentations and projects are for the access and use of robotics students from all about the country and world. Our mission is to maximize the number of learners in our society -- and this is a way we can make that happen!</p>
            <h3 class = "notice"> TEXT & ICONS BELOW ARE HYPERLINKED</h3>
            <div class = "linkContainer">
                <li><a  class = "resourceLink" href="https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_49484de147ae436aa9cdfe616bcf5be4.pdf" target="_blank">
                    INTRODUCTION TO FRC WORKSHOP</a></li>
                <a href="https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_49484de147ae436aa9cdfe616bcf5be4.pdf" target="_blank">
                    <img src = "assets/pages/resource/Presentation.webp" class = "resourceIcon"></a></div>
            <div class = "linkContainer"><li ><a  class = "resourceLink" href="https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_c1eeea25fe514373b150ab94bc7e138a.pdf" target="_blank">
                EQUITABILITY & INCLUSION (2020)</a></li>
                <a href="https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_49484de147ae436aa9cdfe616bcf5be4.pdf" target="_blank">
                    <img src = "assets/pages/resource/Presentation.webp" class = "resourceIcon"></a></div>
            <div class = "linkContainer"><li ><a  class = "resourceLink" href="https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_0576c0902cf5493a9859c5fba6170e9f.pdf" target="_blank">
                KICKOFF STRATEGY WORKSHOP (Fall 2019)</a></li>
                <a href="https://ccb9a2f9-def6-419e-967f-aadead127dbb.filesusr.com/ugd/cbe77e_0576c0902cf5493a9859c5fba6170e9f.pdf" target="_blank">
                    <img src = "assets/pages/resource/Presentation.webp" class = "resourceIcon"></a></div>`


 */