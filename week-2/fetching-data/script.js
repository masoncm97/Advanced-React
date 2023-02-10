console.log('Another customer approaching')

// Utilizing async call to browser api
fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(data => console.log(data));

console.log('hol on one sec')