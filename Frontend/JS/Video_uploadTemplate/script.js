console.log(`createCard(title,channel,views,monthsOld,duration,thumbnail);`)
//Examples
// createCard("How To Make Weather App Using JavaScript Step By Step Explained","GreatStack","673000","4 months ago","41:59","https://i.ytimg.com/vi/MIYQR-Ybrn4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB_hgAtRNAH7UUpnYkOfDcHZXkOGA");
// createCard("Alec Benjamin - Pick Me [Official Music Video]","Alec Benjamin","549000","3 weeks ago","2:55","https://i.ytimg.com/vi/KRxHaT0bTH8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBYP4m0iG2qnLo8blUZ4qaBqR4kbw");
// createCard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73","CodeWithHarry","500000","11 months ago","29:30","https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A");

const btn = document.querySelector("#newTemp");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
    createCard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73","CodeWithHarry","500000","11 months ago","29:30","https://i.ytimg.com/vi/mCx5aSEK8YE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0nnsOR8c-HQ0AYnnFDHnrACrK0A");
    
})

const createCard = (title,channel,views,monthsOld,duration,thumbnail) => {
    const newTemplate = document.createElement("div");
    newTemplate.classList.add("template");

    const newThumbnail = document.createElement("div");
    newThumbnail.classList.add("thumbnail");
    
    const newImage = document.createElement("div");
    newImage.classList.add("image");
    newImage.style.backgroundImage = `URL(${thumbnail})`;
    newThumbnail.append(newImage);

    const newLength = document.createElement("div");
    newLength.classList.add("length");
    newLength.innerHTML = duration;
    newThumbnail.append(newLength);

    newTemplate.append(newThumbnail);

    const newContent = document.createElement("div");
    newContent.classList.add("content");

    const newTitle = document.createElement("div");
    newTitle.classList.add("title");
    newTitle.innerText = title;
    newContent.append(newTitle);

    const newInfo = document.createElement("div");
    newInfo.classList.add("info");

    let corrViews = (Number(views) > 999) ? (`${Number(views)/1000}k views`) : (`${views} views`)
    newInfo.innerText = `${channel} • ${corrViews} • ${monthsOld}`;
    newContent.append(newInfo);

    newTemplate.append(newContent);
    
    container.append(newTemplate);
}