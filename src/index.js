const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (event)=>{
      event.preventDefault();
      console.log(event);
     // event.target.children[1].value  (didn't work)
      const input = document.querySelector('#searchByID');
      console.log(input.value);

      fetch ('http://localhost:3000/movies')
      .then(resp => resp.json())
      .then(data => {
          const title = document.getElementsByName('h4');
          const summary = document.getElementsByTagName('p');
          title.innerText = data.title;
          summary.innerText = data.summary;
      });
  });

}

document.addEventListener('DOMContentLoaded', init);




