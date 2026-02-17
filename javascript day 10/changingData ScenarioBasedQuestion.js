const user={
    name:"Murali",
    age:21,
    role:"Intern"
}
function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 2000);
  });
}

function changeRole(newRole) {
  return new Promise((resolve) => { //creting new promise that resolves after 1 sec 
    setTimeout(() => {
        user.role=newRole;
      resolve("Changed");
    }, 1000);
  });
}

async function getDetailsAll() {
  try {
    const [user, role] = await Promise.all([fetchUser(),changeRole("Developer"), ]);//paralleley calling all functions 
    console.log("Promise all ", user, role);
    console.log();
  } catch (e) {
    console.log("Error while fetching", e);
    console.log();
  }
}

getDetailsAll();
