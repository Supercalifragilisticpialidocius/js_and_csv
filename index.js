const button = document.getElementById("button");

const submitData = async () => {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=20" // just for example, replace it with original url
  );
  const data = await response.json();
  // implement a search function
  const data_div = document.createElement("span");
  data_div.innerText = data;
  document.getElementById("data").appendChild(data_div);
};

button.addEventListener("click", submitData);
