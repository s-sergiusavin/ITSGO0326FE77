// HTTP request
// free_user_3Ex0MOL80rYwgjm0xcTjDNMDfhn
// RESTful services -> representation state of transfer -> statusul unui transfer
// CRUD - create / read / update / delete

// HTTP implementation of rest services
// Create => POST
// Read => GET
// Update => PUT/PATCH(partial update)
// Delete => DELETE

const myFirstPromise = new Promise(function (resolve, reject) {
  //setTimeout(resolve, 3000, "Value sent");
  setTimeout(reject, 3000, "Error sent");
});

console.log(myFirstPromise);

myFirstPromise.then(
  (value) => {
    console.log("fullfield " + value);
  },
  (error) => {
    console.log("rejected " + error);
  },
);

const apiConfig = {
  headers: {
    "x-api-key": "free_user_3Ex0MOL80rYwgjm0xcTjDNMDfhn",
  },
};
// ----------------------> GET request <-----------------------

const singleUserUrl = "https://reqres.in/api/users/2";
//cu functia fetch facem requesturi

//------------> prima varianta de a accesa json ul din api <---------------------

// fetch(singleUserUrl, apiConfig).then((response) => {
//   console.log(response);

//   response.json().then((data) => {
//     console.log(data);
//   });
// });

//------------> a doua varianta de a accesa json ul din api <---------------------
// const singleUserData = fetch(singleUserUrl, apiConfig).then((response) => {
//   return response.json();
// });

// singleUserData.then((data) => console.log(data));

//------------> a treia varianta de a accesa json ul din api || async/await request <---------------------

async function getSingleUser() {
  const response = await fetch(singleUserUrl, apiConfig);
  return response.json();
}

getSingleUser().then((data) => {
  console.log("Data with Async/await");
  console.log(data);
});

// get request wint error handling

const singleUserNotFoundURL = "https://reqres.in/api/users/23";
const userListUrl = "https://reqres.in/api/users?page=2";

// ? in url se numeste query param => esteo pereche key=value, cu mai multi parametri primul va avea ? in fata si pot fi separrati de & (?key1=value2&key2=value2&...etc)

const allUsersList = new Promise((resolve, reject) => {
  fetch(userListUrl, apiConfig)
    .then((response) => {
      console.log(response);
      if (response.status !== 200) {
        throw "ai o eroare";
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
    console.log(error);
  },
);

// ----------------------> POST request with error <-----------------------

const registerUrl = "https://reqres.in/api/register";

const userSuccessful = {
  email: "eve.holt@reqres.in",
  password: "pistol",
};
const userUnuccessful = {
  email: "eve.holt@reqres.in",
};

const registerURLConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "free_user_3Ex0MOL80rYwgjm0xcTjDNMDfhn",
  },
  //body: JSON.stringify(userSuccessful),
  body: JSON.stringify(userUnuccessful),
};

const registerUser = new Promise((resolve, reject) => {
  fetch(registerUrl, registerURLConfig) // pana aici ce face request
    .then((response) => {
      if (response.status !== 200) {
        throw "ai o eroare la register";
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
  (error) => console.log(error),
);

//---------------------> PUT request <-------------------

const updateUserUrl = "https://reqres.in/api/users/2";

const updatedUser = {
  name: "morpheus",
  job: "zion resident",
};

const updateUserUrlConfig = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "free_user_3Ex0MOL80rYwgjm0xcTjDNMDfhn",
  },
  body: JSON.stringify(updatedUser),
};

const updateUser = new Promise((resolve, reject) => {
  fetch(updateUserUrl, updateUserUrlConfig) // pana aici ce face request
    .then((response) => {
      if (response.status !== 200) {
        throw "ai o eroare la update";
      }
      return response.json();
    })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

updateUser.then(
  (value) => console.log(value),
  (error) => console.log(error),
);

//------------> DELETE request <------------------

const deleteUserUrlHardcoded = "https://reqres.in/api/users/2";

const baseUrl = "https://reqres.in";
const deleteUserId = "2";
const deleteUserUrl = `${baseUrl}/api/users/${deleteUserId}`;

const deleteUserUrlConfig = {
  method: "DELETE",
  headers: {
    "x-api-key": "free_user_3Ex0MOL80rYwgjm0xcTjDNMDfhn",
  },
};

const deleteUser = new Promise((resolve, reject) => {
  fetch(deleteUserUrl, deleteUserUrlConfig).then((response) => {
    if (response.status !== 204) {
      throw "ai o eroare la delete ";
    }
  });
});
