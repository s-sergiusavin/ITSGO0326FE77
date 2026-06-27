/**
 * http requests
 */

/**
 * RESTful services
 * representation state  transfer
 * CRUD
 * create
 * read
 * update
 * delete
 */


/**
 * http implementation of rest services
 * create => POST
 * read => GET
 * UPDATE => PUT/PATCH
 * delete => DELETE
 */

const myFirstPromise = new Promise(function(resolve, reject) {
    setTimeout(resolve, 3000, 'value sent');
});

console.log(myFirstPromise);

myFirstPromise.then(
    (value) => {
        console.log('fullfield' + value)
    },
    (error) => {
        console.log('rejected' + error)
    }
)

/**
 * GET request
 */

const singleUserUrl = '';

fetch(singleUserUrl).then( (response) => {
    console.log(response);

    response.json().then( data => {
        console.log(data);
    })
});

const singleUserData = fetch(singleUserUrl, apiConfig)
.then( respose => {
    return respnse.json()
});

/**
 * async/await request
 */

async function getSingleUser() {
    const response = await fetch(singleUserUrl, apiConfig);
    return response.json();
}


/**
 * get  request with error handling
 */

const singleUserNotFoundUrl = '';
const userListUrl = '';

/**
 * ? in url se numeste query param
 * query param e o pereche cheie=valoare
 * query = interogare
 */

const allUsersList = new Promise((resolve, reject) => {
    fetch(userListUrl, apiConfig).then(
        response => {
            console.log(response)
            if (response.status !== 200) {
                throw('ai o eroare');
            }
            return response.json()
        }
    ).then(data => {
            resolve(data);
        }
    ).catch( error => {

    })
    
});





