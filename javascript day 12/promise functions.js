function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ name: "murali", age: 21 });
    }, 2000);
  });
}

function fetchRole() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ role: "Intern" });
    }, 1000);
  });
}

function fetchMoney() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ totalMoney: 10000 });
    }, 1000);
  });
}

async function getDetailsAll() {
  try {
    const [user, role, money] = await Promise.all([
      fetchUser(),
      fetchRole(),
      fetchMoney(),
    ]);
    console.log("Promise all ", user, role, money);
    console.log();
  } catch (e) {
    console.log("Error while fetching", e);
    console.log();
  }
}

getDetailsAll();

async function getDetails() {
  try {
    const [user, role, money] = await Promise.allSettled([
      fetchUser(),
      fetchRole(),
      fetchMoney(),
    ]);
    console.log("Promise all settled ", user, role, money);
    console.log();
  } catch (e) {
    console.log(e);
  }
}

getDetails();

async function getDetailsrace() {
  try {
    const one = await Promise.race([fetchUser(), fetchRole()]);
    console.log("Promise race", one);
    console.log();
  } catch (e) {
    console.log(e);
  }
}
getDetailsrace();

async function getDetailsAny() {
  try {
    const one = await Promise.any([fetchUser(), fetchRole(), fetchMoney()]);
    console.log("Promise any", one);
    console.log();
  } catch (e) {
    console.log(e);
  }
}
getDetailsAny();
