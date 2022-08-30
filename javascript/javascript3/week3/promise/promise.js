function printReposOnPage(reposArr) {
  reposArr.forEach((element) => {
    if (element.items.length) {
      const repoLi = document.createElement("li");
      const repoTitle = document.createElement("h1");
      repoTitle.innerText = element.items[0].owner.login;
      repoLi.appendChild(repoTitle);
      element.items.forEach((repo) => {
        const repoSubItem = document.createElement("p");
        repoSubItem.innerHTML = `
        <span>${repo.full_name}: </span><span> ${repo.url} </span>
        `;
        repoLi.appendChild(repoSubItem);
      });
      document.querySelector(".container").appendChild(repoLi);
    }
  });
}

Promise.all([
  fetch("https://api.github.com/search/repositories?q=user:Falafelqueen"),
  fetch("https://api.github.com/search/repositories?q=user:27ManishaPatel"),
  fetch("https://api.github.com/search/repositories?q=user:Yuliia-Balandiuk"),
])
  .then((responses) => {
    return Promise.all(
      responses.map((response) => {
        return response.json();
      })
    );
  })
  .then((data) => printReposOnPage(data))
  .catch((error) => console.log(error));
