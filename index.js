function saveToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.fullname.value;
    const email = event.target.email.value;
    const table = event.target.table.value;
    const dish = event.target.dish.value;
    const gender = event.target.gender.value;
  
    const obj = {
      name,
      email,
      table,
      dish,
      gender,
    };
    axios
      .post(
        "https://crudcrud.com/api/096c3e37708645fc8c797d9a8afc8bfd/resturant",
        obj
      )
      .then((response) => {
        showUserOnScreen(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    axios
      .get(
        "https://crudcrud.com/api/096c3e37708645fc8c797d9a8afc8bfd/resturant"
      )
  
      .then((response) => {
        console.log(response);
  
        for (var i = 0; i < response.data.length; i++) {
          showUserOnScreen(response.data[i]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  function showUserOnScreen(user) {
    const parentElem = document.getElementById("listOfItems");
  
    const childElem = document.createElement("li");
    childElem.textContent =
      user.name +
      "-" +
      user.email +
      "-" +
      user.table +
      "-" +
      user.dish +
      "-" +
      user.gender;
    //    console.log(user._id);
    const deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Delete";
    deleteButton.onclick = () => {
      //  localStorage.removeItem(user.email)
      axios
        .delete(
          `https://crudcrud.com/api/096c3e37708645fc8c797d9a8afc8bfd/resturant/655c6663f3272103e862d69a`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      parentElem.removeChild(childElem);
    };
    console.log(user)
    const editButton = document.createElement("input");
    editButton.type = "button";
    editButton.value = "Edit";
    editButton.onclick = () => {
      //localStorage.removeItem(user.email);
        axios
        .put(
          `https://crudcrud.com/api/096c3e37708645fc8c797d9a8afc8bfd/resturant/655c6663f3272103e862d69a`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
  
      parentElem.removeChild(childElem);
      
      document.getElementById("fullname").value = user.name;
      document.getElementById("mail").value = user.email;
      document.getElementById("table").value = user.table;
  
      document.getElementById("dish").value = user.dish;
      document.getElementById("gnder").value = user.gender;
   //   console.log(user);
    };
  
    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);
  }
  