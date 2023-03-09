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

// Add funtionality to the card button
const CardButtons = document.body.querySelectorAll('.work-card .btn');

CardButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.stopPropagation();
    event.preventDefault();
    // Use the button to get the card elements relative to it
    const targetButton = event.target;

    const modal = document.createElement('section');
    const card = targetButton.parentNode.parentNode.parentNode;
    const cardImage = card.firstElementChild;
    // change the position of the title
    const title = targetButton.parentNode.parentNode.firstElementChild;
    title.parentNode.removeChild(title);
    card.insertBefore(title, cardImage);

    // change the position of the extra-information
    const extraInfo = targetButton.parentNode.parentNode.firstElementChild;
    extraInfo.parentNode.removeChild(extraInfo);
    card.insertBefore(extraInfo, cardImage);

    // Increase the paragraph size to looks a bit more lenghty like in the template
    const paragraph = targetButton.parentNode.parentNode.firstElementChild;
    paragraph.textContent = paragraph.textContent.repeat(3);

    // Create close Icon
    const close = document.createElement('div');
    close.classList.add('crossIcon');
    close.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      document.body.removeChild(document.body.querySelector('.modal'));
    });
    title.append(close);

    modal.append(card);
    modal.classList.add('modal');
    modal.classList.add('works');
    document.body.append(modal);
  });
});
