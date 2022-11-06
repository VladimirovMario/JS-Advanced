function encodeAndDecodeMessages() {
  const areaToWrite = document.querySelector(
    `#main > div:nth-child(1) > textarea:nth-child(2)`
  );
  const areaToDecode = document.querySelector(
    `#main > div:nth-child(2) > textarea:nth-child(2)`
  );

  const buttonToEncode = document.querySelectorAll(`button`)[0];
  buttonToEncode.addEventListener(`click`, encode);
  const buttonToDecode = document.querySelectorAll(`button`)[1];
  buttonToDecode.addEventListener(`click`, decode);

  let originalMassage = ``;
  let encodedMessage = ``;

  function encode() {
    for (const currChar of areaToWrite.value) {
      originalMassage += currChar;
      let currDigit = currChar.charCodeAt();
      currDigit++;

      let encodeChar = String.fromCharCode(currDigit);
      encodedMessage += encodeChar;
    }

    areaToDecode.value = encodedMessage;
    encodedMessage = ``;
    areaToWrite.value = ``;
  }

  function decode() {
    areaToDecode.value = originalMassage;
    originalMassage = ``;
  }
}
