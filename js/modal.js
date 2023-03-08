import myData from './cards.js';

const { Cards } = myData;
const porfolio = document.body.querySelector('#portfolio');

function createCard(card) {
  const tech = card.description.technologies.split('.');
  const extraInfo = card.description.extraInfo.split('.');
  return `
                <section class="work-card">

                    <div class="image">
                        <img src="${card.img.src}" alt="${card.img.alt}" />
                    </div>

                    <div class="description-card">
                        <h1>${card.description.title}</h1>

                        <div class="extra-info">
                            <span>${extraInfo[0]}</span>
                            <span>${extraInfo[1]}</span>
                            <span>${extraInfo[2]}</span>
                        </div>

                        <p>${card.description.paragraph}</p>

                        <ul class="tags-group">
                            <li>${tech[0]}</li>
                            <li>${tech[1]}</li>
                            <li>${tech[2]}</li>
                        </ul>

                        <div class="mt-2 cardbutton">
                            <a class="btn" disabled href="#">See Project</a>
                            <a class="btn hidden" disabled href="#">
                               <span>See live</span>
                               <img class="btnIcon" src="build/img/live.svg" alt="live icon" />
                            </a>
                            <a class="btn hidden" disabled href="#">
                               <span>See Source</span>
                               <img class="btnIcon" src="build/img/source.svg" alt="live icon" />
                            </a>
                        </div>
                    </div>
                </section>
  `;
}

// Creating Cards Dynamically
Cards.forEach((card) => {
    porfolio.innerHTML += createCard(card);
  });
  
