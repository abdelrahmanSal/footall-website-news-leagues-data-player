const api =
  "https://mobilews.365scores.com/Data/News/?apptype=1&competitions=7170&filtersourcesout=true&lang=27&limitnews=true&maxcategoriestofill=30&maxnewsitems=30&minnewsitems=0&minnewsitemspercategory=0&newstype=9&onlyinlang=false&startdate=23/02/2020&storeversion=5.2.7&theme=dark&tz=15&uc=122";

fetch(api)
  .then((response) => response.json())
  .then((data) => {
    const Items = data.Items || [];

    Items.forEach((item) => {
      const title = item.Title || "No Title";
      const description = item.Description || "No Description";
      const imageSource = item.ImageSource || "";
      const videoUrl = item.Url || "";

      const newsContainer = document.getElementById("news-container");

      const news = document.createElement("div");
      news.classList.add("news");

      const titleElement = document.createElement("h2");
      titleElement.textContent = title;

   
     
    


      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = description;

      let videoElement;
      let imageElement;

      if (videoUrl) {
        videoElement = document.createElement("video");
        videoElement.controls = true;
        videoElement.width = 320;
        videoElement.height = 240;
        videoElement.style.display = 'none';

        const sourceElement = document.createElement("source");
        sourceElement.src = videoUrl;
        sourceElement.type = "video/mp4";

        videoElement.appendChild(sourceElement);
        news.appendChild(videoElement);
      }

      if (imageSource) {
        imageElement = document.createElement("img");
        imageElement.src = imageSource;
        imageElement.alt = title;

        imageElement.onload = () => {
          news.appendChild(imageElement);
          news.appendChild(titleElement);
          news.appendChild(descriptionElement);
          newsContainer.appendChild(news);
          
        };

        imageElement.onerror = () => {
          console.warn(`Image failed to load: ${imageSource}`);
        };

        imageElement.addEventListener('click', () => {
          if (videoElement) {
            imageElement.style.display = 'none';
            videoElement.style.display = 'block';
            videoElement.play();
          }
        });
      }

      if (videoElement) {
        videoElement.addEventListener('ended', () => {
          if (imageElement) {
            imageElement.style.display = 'block';
          }
          videoElement.style.display = 'none';
        });
      }
    });
  })
  .catch((error) => console.error("Error:", error));