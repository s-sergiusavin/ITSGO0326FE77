/**
 * HTTP Requests
 */

/**
 * RESTfuf services
 * Representational state transfer
 * CRUD
 * create
 * read
 * update
 * delete
 */

/**
 * HTTP implementation of rest services
 * Create => POST
 * Read => GET
 * Update => PUT/PATCH (update partial)
 * Delete => DELETE
 */

const myFirstPromise = new Promise(function (resolve, reject) {
  // setTimeout(resolve, 3000, "Value sent");
  setTimeout(reject, 3000, "Error sent");
});

console.log(myFirstPromise);

myFirstPromise.then(
  (value) => {
    console.log("fulfilled" + value);
  },
  (error) => {
    console.log("rejected" + error);
  },
);

const apiConfig = {
  headers: {
    "x-api-key": "free_user_3Ex0S1TeDcRxCDRjSk3i9ZXZMjT",
  },
};

/**
 * GET request
 */

const singleUserUrl = "https://reqres.in/api/users/2";

// fetch(singleUserUrl, apiConfig).then((response) => {
//  console.log(response);

//  response.json().then((data) => {
//    console.log(data);
//  });
// });

// const singleUserData = fetch(singleUserUrl, apiConfig).then((response) => {
//   return response.json();
// });

// singleUserData.then((data) => console.log(data));

/**
 * async/await request
 */

async function getSingleUser() {
  const response = await fetch(singleUserUrl, apiConfig);
  return response.json();
}

getSingleUser().then((data) => {
  console.log("Data with async/await");
  console.log(data);
});

/**
 * GET request with error handling
 */

const singleUserNotFoundUrl = "https://reqres.in/api/users/23";
const userListUrl = "https://reqres.in/api/users?page=2";

// ? in url se numeste query param
// query param este o pereche cheie=valoare
// cu mai multi parametri, primul va avea ? in fata si vor fi separati de &
//?cheie1=valoare&cheie2=valoare&cheie3=valoare

const allUsersList = new Promise((resolve, reject) => {
  fetch(userListUrl, apiConfig)
    .then((response) => {
      console.log(response);
      if (response.status !== 200) {
        throw "Ai o eroare.";
      }
      return response.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

allUsersList.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.error(error);
  },
);

/**
 * POST request with error
 */

const registerUrl = "https://reqres.in/api/register";

const userSuccessful = {
  email: "eve.holt@reqres.in",
  password: "pistol",
};

const userUnsuccessful = {
  email: "eve.holt@reqres.in",
};

const registerUrlConfig = {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    "x-api-key": "free_user_3Ex0S1TeDcRxCDRjSk3i9ZXZMjT",
  },
  //   body: JSON.stringify(userSuccessful)
  body: JSON.stringify(userUnsuccessful),
};

const registerUser = new Promise((resolve, reject) => {
  fetch(registerUrl, registerUrlConfig) // pana in punctul acesta se face requestul
    .then((response) => {
      if (response.status !== 200) {
        throw "Ai o eroare la register.";
      }
      return response.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

registerUser.then(
  (value) => console.log(value),
  (error) => console.error(error),
);

/**
 * PUT request
 */

const updateUserUrl = "https://reqres.in/api/users/2";
const updatedUser = {
  name: "morpheus",
  job: "zion resident",
};

const updateUserUrlConfig = {
  method: "PUT",
  headers: {
    "Content-type": "application/json",
    "x-api-key": "free_user_3Ex0S1TeDcRxCDRjSk3i9ZXZMjT",
  },
  body: JSON.stringify(updatedUser),
};

const updatedUser = new Promise((resolve, reject) => {
  fetch(updateUserUrl, updateUserUrlConfig) // pana in punctul acesta se face requestul
    .then((response) => {
      if (response.status !== 200) {
        throw "Ai o eroare la update.";
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

updatedUser.then(
  (value) => console.log(value),
  (error) => console.error(error),
);

/**
 * DELETE request
 */

const deleteUserUrlHardcoded = "https://reqres.in/api/users/2";

const baseUrl = "https://reqres.in";
const deletedUserId = "2";
const deleteUserUrl = `${baseUrl}/api/users/${deletedUserId}`;

const deleteUserUrlConfig = {
  method: "DELETE",
  header: {
    "x-api-key": "free_user_3Ex0S1TeDcRxCDRjSk3i9ZXZMjT",
  },
};

const deleteUser = new Promise((resolve, reject) => {
  fetch(deleteUserUrl, deleteUserUrlConfig).then((response) => {
    if (response.status !== 204) {
      throw "Ai o eroare la stergerea utilizatorului";
    }
  });
});
