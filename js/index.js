const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let anchors = document.querySelectorAll('a');
anchors[0].textContent = siteContent["nav"]["nav-item-1"];
anchors[1].textContent = siteContent["nav"]["nav-item-2"];
anchors[2].textContent = siteContent["nav"]["nav-item-3"];
anchors[3].textContent = siteContent["nav"]["nav-item-4"];
anchors[4].textContent = siteContent["nav"]["nav-item-5"];
anchors[5].textContent = siteContent["nav"]["nav-item-6"];

document.querySelector('a').style.color = "green";
anchors[1].style.color = "green";
anchors[2].style.color = "green";
anchors[3].style.color = "green";
anchors[4].style.color = "green";
anchors[5].style.color = "green";


let headerOne = document.querySelector("h1");
headerOne.textContent = siteContent["cta"]["h1"];
let buttonOne = document.querySelector("button");
buttonOne.textContent = siteContent["cta"]["button"];
let headerImage = document.querySelector("#cta-img");
headerImage.src = siteContent["cta"]["img-src"];

let topText = document.querySelector('.cta-text');
topText.style.alignContent = "stretch";

let headers = document.querySelectorAll('h4');
headers[0].textContent = siteContent["main-content"]["features-h4"];
headers[1].textContent = siteContent["main-content"]["about-h4"];
headers[2].textContent = siteContent["main-content"]["services-h4"];
headers[3].textContent = siteContent["main-content"]["product-h4"];
headers[4].textContent = siteContent["main-content"]["vision-h4"];
headers[5].textContent = siteContent["contact"]["contact-h4"];

let midImage = document.querySelector("#middle-img");
midImage.src = siteContent["main-content"]["middle-img-src"];

let paraGraphs = document.querySelectorAll('p');
paraGraphs[0].textContent = siteContent["main-content"]["features-content"];
paraGraphs[1].textContent = siteContent["main-content"]["about-content"];
paraGraphs[2].textContent = siteContent["main-content"]["services-content"];
paraGraphs[3].textContent = siteContent["main-content"]["product-content"];
paraGraphs[4].textContent = siteContent["main-content"]["vision-content"];

paraGraphs[5].textContent = siteContent["contact"]["address"];
paraGraphs[6].textContent = siteContent["contact"]["phone"];
paraGraphs[7].textContent = siteContent["contact"]["email"];

paraGraphs[8].textContent = siteContent["footer"]["copyright"];

let parentEl = document.getElementByTagName('nav');
let childOne = document.createElement('a');
let childTwo = document.createElement('a');

parentEl.appendChild(childOne);
parentEl.prepend(childTwo);