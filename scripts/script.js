document.getElementById('cards-parent').addEventListener('click', function (event) {
  const clickedElement = event.target;

  switch (clickedElement.id) {
    case 'card-1-heart':
    case 'card-2-heart':
    case 'card-3-heart':
    case 'card-4-heart':
    case 'card-5-heart':
    case 'card-6-heart':
    case 'card-7-heart':
    case 'card-8-heart':
    case 'card-9-heart':
      let heartCountElement = document.getElementById('heart-count');
      let numberOfHeart = Number(heartCountElement.innerText);
      numberOfHeart++;
      heartCountElement.innerText = numberOfHeart;
      break;
    case 'card-1-call-button':
    case 'card-2-call-button':
    case 'card-3-call-button':
    case 'card-4-call-button':
    case 'card-5-call-button':
    case 'card-6-call-button':
    case 'card-7-call-button':
    case 'card-8-call-button':
    case 'card-9-call-button':
      const buttonGrandParent = clickedElement.parentNode.parentNode;
      const cardServiceName = document.getElementById(
        buttonGrandParent.id + '-service-name'
      ).innerText;
      const cardServiceNumber = document.getElementById(
        buttonGrandParent.id + '-service-number'
      ).innerText;
      alert(`Calling ${cardServiceName}, Number: ${cardServiceNumber}...`);
      break;
  }
});
