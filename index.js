function main() {
  handleSubmit();
};

function handleSubmit() {
  $('.submit').on('click', event => {
    event.preventDefault();
    let user = $('#goal').val();
    getList(user);
  });
};

function getList(who) {
  let URL = 'https://api.github.com/users/' + who + '/repos';
  fetch(URL)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      renderList(responseJson);
    });
};

function renderList(input) {
  let readable = JSON.stringify(input);
  $('#root').html(readable);
};

$(main);