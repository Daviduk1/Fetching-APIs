// promise
// fetch = using in mkaing request
// Apis =>  Application progrograming interface = interface=> any object that allows you to interact with itself....allows us to access data
//  fuction receive a request and try to
// posting a user means a creating an accoount



// function makerequest (url) {
//     let values;
//     fetch (url)
//     .then(res => res.json())
//     .then(data => {
//         values = data

//     })
//     if (values) {
//         return values
//     }
// }

// let values = makerequest('https://randomuser.me/api/?results=50')
// console.log(values)


// fetch('https://randomuser.me/api/?results=50')
// .then((res) =>{
//     console.log(res)
//     return res.json()

// })

// .then((data) =>{
//     console.log(data.results)
//     let male = data.result.filter(user => user.gender === 'male')
//     let female = data.result.filter(user => user.gender === 'female')
//     console.log('males', male)
//     console.log('female', female)
// })

// fetch ('https://randomuser.me/api/?results=50')      //takes in a url value
// .then(res => res.json())      //return the values or response in json/ more of converting it back to javascript format and use use the data
// .then(data => {
//     let usersBox = document.querySelector('#users')
//     data.results.forEach(user => {
//         console.log(user)
//         usersBox.innerHTML += 

//         `<div>
//             <img src = " ${user.picture.medium}">
//             <p>${user.name.first} ${user.name.last} ${user.name.title}</p>
//             <h1>${user.email}</h1>
//             <h1>${user.dob}</h1>
//         </div>
//         `
//     })

//     let allUsers = data.results.map(user => user.name.first.toUpperCase)
//     console.log(allUsers)

// })


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => {
//     let usersBox = document.querySelector('#users')
//     data.forEach(user => {
//         console.log(data)
//         usersBox.innerHTML += 

//         `<div>
            
//             <h4>${user.name}</p>
//             <h4>${user.username}
//             <p>${user.email}</p>
//         </div>
//         `
        
//     })
   
// })

// async function getData (path) {
//     let data = await fetch (`https://jsonplaceholder.typicode.com/path`)
//     return response.json()
// }

// getData('users')
// .then(data => {
//     console.log(data)
// }) 

async function getData (path) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/${path}`)
    return response.json()
}
let postBtn = document.querySelector('#posts')
let commentsBtn = document.querySelector('#comments')
let usersBtn = document.querySelector('#users')
let albumBtn = document.querySelector('#albums')
let photosBtn = document.querySelector('#photos')
let todosBtn = document.querySelector('#todos')
let data = document.querySelector('.data')
let searchInput = document.querySelector('#search')
let searchBtn = document.querySelector('.search-btn')


let selectedItem = '';
let postsArr = []

postBtn.onclick = function () {
getData('posts')
.then(posts => {
    data.innerHTML = ''
    postsArr = posts
    posts.forEach(post => {
        console.log(posts)
        data.innerHTML +=
        `
            <div>
                <h1>${post.title}</h1>
                <p>${post.body}</p>
            </div>
        
        `
    })

    
})
}

usersBtn.onclick = function () {
    getData('users')
    .then(users => {
        data.innerHTML = ''
        
        users.forEach(user => {
            console.log(users)
            data.innerHTML +=
            `
                <div>
                    <h1>${user.name}</h1>
                    <h2>${user.username}</h2>
                    <h3>${user.email}</h3>
                </div>
            `
        })
    })
}

async function getData (path) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/${path}`)
    return response.json()
}

commentsBtn.onclick = function () {
    getData('comments')
    .then(comments => {
        data.innerHTML = ''
        comments.forEach(comment => {
            console.log(comments)
            data.innerHTML +=
            `
                <div>
                    <h1>${comment.name}</h1>
                   
                    <h3>${comment.email}</h3>
                </div>
            `
        })
    })
}

todosBtn.onclick = function () {
    getData('todos')
    .then(todos => {
        data.innerHTML = ''
        todos.forEach(todo => {
            console.log(todos)
            data.innerHTML +=
            `
                <div>
                    <p>${todo.title}</p>
                   
                    <h1>${todo.completed}</h1>
                </div>
            `
        })
    })
}


albumBtn.onclick = function () {
    getData('albums')
    .then(albums => {
        data.innerHTML = ''
        albums.forEach(album => {
            console.log(albums)
            data.innerHTML +=
            `
                <div>
                    
                    <p>${album.title}</p>
                   
                    
                </div>
            `
        })
    })
}


photosBtn.onclick = function () {
    getData('photos')
    .then(photos => {
        data.innerHTML = ''
        photos.forEach(photo => {
            console.log(photos)
            data.innerHTML +=
            `
                <div>
                <h1>${photo.title}</h1>
                <img src = " ${photo.thumbnailUrl}">
                
                   
                   
                </div>
            `
        })
    })
}


// // searchBtn.onclick = function () {
//     getData('posts')
//     .then(posts => {
//         let searchValue = searchInput.value
//         if (searchValue === 'post')
//         posts.filter(post => {
//             console.log(posts)
//             data.innerHTML +=
//             `<div>
//                 <h1>${post.title}</h1>
//                 <p>${post.body}</p>
//             </div>
//             `
//         })
//     })
  
// }

// searchInput.oninput = (evt) => {
//     let value = evt.target.value
//     if(selectedItem === 'posts') {
//         let fitleredPost = postsArr.filter(posts => {
//             for (let val in posts) {
//                 if (posts[val].toString().toLowerCase().includes(value)) {
//                 }
//             }
//             return true
//         })
//     }
    
// }

searchInput.oninput = (evt) => {
    let value = evt.target.value
        let filtered = postsArr.filter(item => {
            for (let key in item) {
                if (item[key].toString().toLowerCase().includes(value.toLowerCase())) {
                    return true
                }
            }
            return false
        })

        postsArr(filtered)
}