document.getElementById('body-main').addEventListener('click', function (event) {
  const clickedElement = event.target;
  handler(clickedElement);
  function handler(clickedElement) {
    console.log(`handler called`);
    // Heart Click Mechanism
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
      // Call Button Mechanism
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
        numberOfCoin -= 20;
        coinCountElement.innerText = numberOfCoin;
        const childToAppend = createCallHistoryChild(cardServiceName, cardServiceNumber);
        callHistoryContainerElement.appendChild(childToAppend);
        alert(
          `📞 Calling ${cardServiceName}, Number: ${cardServiceNumber} ... \n🪙 20 Coins will be deducted`
        );
        break;
      case 'history-clear-button':
        const elementToClear = document.getElementById('call-history-container');
        elementToClear.innerHTML = '';
        break;
      case 'card-1-copy-button':
      case 'card-2-copy-button':
      case 'card-3-copy-button':
      case 'card-4-copy-button':
      case 'card-5-copy-button':
      case 'card-6-copy-button':
      case 'card-7-copy-button':
      case 'card-8-copy-button':
      case 'card-9-copy-button':
        const copyCountElement = document.getElementById('copy-count');
        let copyCountNumber = Number(copyCountElement.innerText);
        copyCountNumber++;
        copyCountElement.innerText = copyCountNumber;
        const copyGrandParent = clickedElement.parentNode.parentNode;
        const copyServiceNumber = document.getElementById(
          copyGrandParent.id + '-service-number'
        ).innerText;
        alert(`Copied number: ${copyServiceNumber}`);
        navigator.clipboard.writeText(copyServiceNumber);
        break;
      default:
        console.log(`default`);
        const closestButton = clickedElement.closest('button');
        if (closestButton) {
          handler(closestButton);
        }
        break;
    }
  }
});

// Function to create call history child
function createCallHistoryChild(serviceName, serviceNumber) {
  const layer1Element1 = document.createElement('p');
  layer1Element1.innerText = serviceName;
  const layer1Element2 = document.createElement('p');
  layer1Element2.innerText = serviceNumber;
  layer1Element2.className = 'text-[var(--text-light)]';

  const layer2Element1 = document.createElement('div');
  layer2Element1.append(layer1Element1, layer1Element2);
  const layer2Element2 = document.createElement('p');
  layer2Element2.innerText = new Date().toLocaleTimeString();

  const layer3Element1 = document.createElement('div');
  layer3Element1.className =
    'bg-gray-50 p-4 flex justify-between items-center w-full mb-2 rounded-lg sm:bg-gray-50 sm:p-4 sm:flex sm:justify-between sm:items-center sm:w-full sm:mb-2 sm:rounded-lg';
  layer3Element1.append(layer2Element1, layer2Element2);

  return layer3Element1;
}
