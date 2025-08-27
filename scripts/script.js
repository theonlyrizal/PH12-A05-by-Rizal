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
      let coinCountElement = document.getElementById('coin-count');
      let numberOfCoin = Number(coinCountElement.innerText);
      if (numberOfCoin < 20) {
        alert(`⚠️ At lease 20 coins required to place a Call. Try again Later.`);
        break;
      }
      const callHistoryContainerElement = document.getElementById('call-history-container');
      const buttonGrandParent = clickedElement.parentNode.parentNode;
      const cardServiceName = document.getElementById(
        buttonGrandParent.id + '-service-name'
      ).innerText;
      const cardServiceNumber = document.getElementById(
        buttonGrandParent.id + '-service-number'
      ).innerText;
      alert(
        `📞 Calling ${cardServiceName}, Number: ${cardServiceNumber} ... \n🪙 20 Coins will be deducted`
      );
      numberOfCoin -= 20;
      coinCountElement.innerText = numberOfCoin;
      break;
  }
});
