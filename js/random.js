const randomUserLoad = ()=>{
    const url = `https://randomuser.me/api/?results=500`;
    fetch(url)
    .then(res => res.json())
    .then(data => randomDataLoad(data.results))
}

const randomDataLoad = users =>{
    //console.log(users);
    const mainContainer = document.getElementById('random-data');
    mainContainer.classList.add('randomStyle');
    users.forEach(user =>{
        console.log(user);
        const newDiv = document.createElement('div');
        newDiv.classList.add('card');
        newDiv.innerHTML = `
                    <div class="card-body">
                        <img src="${user.picture.large}" class="card-img-top" alt="...">
                        <h5 class="card-title">Name : ${user.name.title} ${user.name.first} ${user.name.last}</h5>
                        <h5 class="card-title">Email : ${user.email}</h5>
                        <h5 class="card-title">City : ${user.location.city}</h5>
                        <h5 class="card-title">Country: ${user.location.country}</h5>
                        <h5 class="card-title">Post code: ${user.location.postcode}</h5>
                        <h5 class="card-title">State: ${user.location.state}</h5>
                        <h5 class="card-title">Latitude: ${user.location.coordinates.latitude}</h5>
                        <h5 class="card-title">Longitude: ${user.location.coordinates.longitude}</h5>
                    </div>
        `;
        mainContainer.appendChild(newDiv);
    })
}

randomUserLoad();