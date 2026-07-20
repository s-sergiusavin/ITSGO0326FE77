import API from './api.js'

const form = document.getElementById('form')

form.addEventListener('submit', onSubmit)

async function onSubmit(event) {
    event.preventDefault();
}