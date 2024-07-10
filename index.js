require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


const githubData = {
    "login": "haquedot",
    "id": 113513789,
    "node_id": "U_kgDOBsQVPQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/113513789?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/haquedot",
    "html_url": "https://github.com/haquedot",
    "followers_url": "https://api.github.com/users/haquedot/followers",
    "following_url": "https://api.github.com/users/haquedot/following{/other_user}",
    "gists_url": "https://api.github.com/users/haquedot/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/haquedot/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/haquedot/subscriptions",
    "organizations_url": "https://api.github.com/users/haquedot/orgs",
    "repos_url": "https://api.github.com/users/haquedot/repos",
    "events_url": "https://api.github.com/users/haquedot/events{/privacy}",
    "received_events_url": "https://api.github.com/users/haquedot/received_events",
    "type": "User",
    "site_admin": false,
    "name": "MD MERAJUL HAQUE",
    "company": "MAULANA AZAD NATIONAL URDU UNIVERSITY",
    "blog": "haquedot.me",
    "location": "India",
    "email": null,
    "hireable": true,
    "bio": "Hi, I'm Meraj, a passionate web developer focused on crafting engaging online experiences through clean and efficient code.",
    "twitter_username": "haquedot",
    "public_repos": 74,
    "public_gists": 0,
    "followers": 7,
    "following": 1,
    "created_at": "2022-09-14T09:45:06Z",
    "updated_at": "2024-07-06T11:40:54Z"
}
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/twitter', (req, res) => {
    res.send("haquedot");
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai aur Code</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

