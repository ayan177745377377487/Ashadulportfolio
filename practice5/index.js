console.log("Starting")
// const hamburger = document.querySelector('.hamburger');
// const hammenu = document.querySelector('.hammenu');

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.hammenu').classList.toggle('hammenu-one')
});