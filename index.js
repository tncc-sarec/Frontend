//  const form = document.querySelector('.join-form');

// form.addEventListener('submit', async (e) => {
//     e.preventDefault(); // Page reload hone se rokta hai
    
//     const data = new FormData(form);
//     const response = await fetch(form.action, {
//         method: 'POST',
//         body: data,
//         headers: { 'Accept': 'application/json' }
//     });

//     if (response.ok) {
//         form.innerHTML = "<h3> You have successfully registered for TnCC community!</h3>";
//     } else {
// })

// index.js mein fetch wala part aise likhein
fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    mode: 'no-cors' // Yeh line zaroori hai Google Script ke liye
}).then(() => {
    status.innerText = "Success Mail bhej diya gaya hai.";
    form.reset();
}).catch(err => console.error(err));