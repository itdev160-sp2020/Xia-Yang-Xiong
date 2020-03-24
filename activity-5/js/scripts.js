(function() {

    //Constructor Objects

    var data = [
    {
        name: '1.  Shopify Liquid Snippets',
        description: 'The Shopify Liquid Snippets includes various Liquid snippets to make developing themes faster. This includes snippets for control flow tags, iteration tags, variable tags, array filters, and more. This extension has one dependency, the Liquid Languages Support extension.',
        author: 'Author: Franky Lau',
        url: 'https://marketplace.visualstudio.com/items?itemName=killalau.vscode-liquid-snippets&_ga=2.225099160.309103579.1584999469-243682315.1584999469',
        downloads: 29714,
        stars: 5,
        price: 0,
        selector: 'p1'
    },
    {
        name: '2.  Git Lens',
        description: 'GitLens supercharges the Git capabilities built into Visual Studio Code. It helps you to visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more.',
        author: 'Author: Eric Amodio',
        url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens&_ga=2.191462056.309103579.1584999469-243682315.1584999469',
        downloads: 4666842, 
        stars: 5,
        price: 0,
        selector: 'p2'
    },
    {
    name: '3.  Open in Browser',
    description: 'This extension does exactly what it says, it enables you to view an HTML file in browser. It opens HTML pages in your default browser, but you can also select “open in other browsers” to open in a different one on right click.',
    author: 'Author: TechER',
    url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens&_ga=2.191462056.309103579.1584999469-243682315.1584999469',
    downloads: 1639141, 
    stars: 3.5,
    price: 0,
    selector: 'p3'
    }
];

// Constructor Function

function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function() {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function() {
        return this.stars.toLocaleString();
    };
}

//Return Today's Date

var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

//shorthand for wrapping document.getElementById

var getEl = function(id){
    return document.getElementById(id);
}

var writePackageInfo = function(package){
    var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        //write package data to DOM Elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
}

//Write Date
dateEl = getEl('date');
dateEl.textContent = getTodaysDate();

//Write Package data one-by-one
var shoppifyLiquidSnippets = new Package(data[0]);
writePackageInfo(shoppifyLiquidSnippets);

var gitLens = new Package(data[1]);
writePackageInfo(gitLens);

var openInBrowser = new Package(data[2]);
writePackageInfo(openInBrowser);

}());