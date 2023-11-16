fetch("https://picsum.photos/v2/list")
  .then((response) => {
    if (response.ok === false) {
      throw new Error("Hier ist etwas schief gelaufen");
    }
    return response.json();
  })
  .then((dataArr) => {
    console.log(dataArr);

    for (let data of dataArr) {
      let fig = document.createElement("figure");
      let img = document.createElement("img");
      let figCap = document.createElement("figcaption");
      let btn = document.createElement("button");
      let a = document.createElement("a");

      img.src = data.download_url;
      figCap.textContent = data.author;

      a.href = data.download_url;
      a.target = "_blank";
      a.textContent = "-> See more <-";

      btn.append(a);
      fig.append(img, figCap, btn);
      document.body.append(fig);
    }
  });
