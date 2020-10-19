const listRepos = async username => {
  const repos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owners&sort=updated`
  ).then(res => res.json()).catch(console.error)
  
  const markup = repos
    .map(
      (repo) => `
    <li>
      <a href="${repo.html_url}"> ${repo.name} </a>
      (${repo.stargazers_count})
    </li>
  `
    )
    .join("");
  
  document.getElementById('repos-wrapper').innerHTML = `<ul>${markup}</ul>`
}

listRepos('sdras')