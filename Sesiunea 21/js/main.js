/**
 * RESTful services
 * Representational state transfer
 * CRUD
 * Create
 * Read
 * Update
 * Delete
 */

/**
 * HTTP implementation of rest services
 * Create => POST
 * Read => GET
 * Update => PUT/PATCH (update partial)
 * Delete => DELETE
 */

const myFirstPromise = new Promise(function (resolve, reject) {
    setTimeout(resolve, 3000, 'Value sent');
    setTimeout(reject, 3000, 'Error sent');
});

console.log(myFirstPromise);

myFirstPromise.then(
    (value) => {
        console.log('fulfilled ' + value)
    },
    (error) => {
        console.log('rejected ' + error)
    }
);

const apiConfig = {
    headers: {
        'x-api-key': 'free_user_3Ex1BbI6TJDcQVEWFYfRluiv8O5'
    }
}

/**
 * GET request
 */

const singleUserUrl = "https://reques.in/api/users/2";

// fetch(singleUserUrl, apiConfig).then((response) => {
//     console.log(response);
//
//     response.json().then((data) => {
//         console.log(data);
//     })
// });


// constsingleUserUrl = fetch(singleUserUrl, apiConfig)
// .then((response) => {
//     return response.json();
// })
//
// singleUserUrl.then((data) => console.log(data));

/**
 * async/await request
*/

async function getSingleUser() {
  const response = await fetch(singleUserUrl, apiConfig);
  return response.json();
}

getSingleUser().then( data => {
  console.log('Data with async/await');
  console.log(data);
});

/**
 * Get request with error handling
*/

const singleUserNotFoundUrl = "https://reques.in/api/users/2";
const userListUrl = "https://reqres.in/api/users?page=2";

// ? in url se numeste query param
// query param este o pereche cheie=valoare
// cu mai multi parametrii primul va avea ? in fata si vor fi separati de &
// ?cheie1=valoare1&cheie2=valoare2&cheie3=valoare3

const allUsersList = new Promise( (resolve, reject) => {
    fetch(singleUserNotFoundUrl, apiConfig).then(
        response => {
            console.log(response)
            if (response.status !== 200) {
                throw('Ai o eroare');
            }
            return response.json();
        }
    ).then(
        data => {
            resolve(data);
        }
    ).catch( error => {
        reject(error);
    });
});

allUsersList.then(
    value => {
        console.log(value);
    },
    error => {
        console.error(error)
    }
);

/**
 * POST request
*/

const registerUrl = 'https://reqres.in/api/register';

const userSuccessful = {
    email: 'eve.holt@reqres.in',
    password: 'pistol'
};

const userUnsuccessful = {
    email: 'sydney@fife'
};

const registerUrlConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-api-key': '123456'
    },
    body: JSON.stringify(userSuccessful)
};

const registerUser = new Promise( (resolve, reject) => {
    fetch(registerUrl, registerUrlConfig)
        // pana in punctul acesta se face requestul
        .then(
            response => {
                console.log(response);
                if (response.status !== 200) {
                    throw('Ai o eroare la register');
                }
                return response.json();
            }
        ).then(
            data => {
                resolve(data);
            }
        ).catch(
            error => {
                reject(error);
            }
        );
});

registerUser.then(
    value => console.log(value),
    error => console.error(error)
);

