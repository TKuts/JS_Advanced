const requestURL = "https://ajax.test-danit.com/api/swapi/films";

const posts = document.querySelector("#posts");

const render = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((aboutFilms) => {
      aboutFilms.forEach(({ episodeId, name, openingCrawl, characters }) => {
        const infoFilm = document.createElement("div");

        infoFilm.insertAdjacentHTML(
          "afterbegin",
          `
			 				<div class="film-content">
							  <h1 class="film-title"> ${name}</h1>
							  <h3 class="film-number-episode">Episode: ${episodeId}</h3>
							  <p class="film-desc">${openingCrawl}</p>
							  <h3>Actors: </h3>
						  </div>
				`
        );

        posts.append(infoFilm);

        characters.forEach((actor) => {
          fetch(actor)
            .then((response) => response.json())
            .then((actor) => {
              infoFilm.insertAdjacentHTML(
                "beforeend",
                `
				  		<p class="film-actors">${actor.name} </p>
				  		`
              );
            });
        });
      });
    });
};

render(requestURL);
