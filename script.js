function changeText() {
    const message = document.getElementById('message');
    message.textContent = 'The text has been changed! 🎉';
  }
  
  function toggleHighlight() {
    const message = document.getElementById('message');
    message.classList.toggle('highlight');
  }
  
  function addElement() {
    if (!document.getElementById('new-paragraph')) {
      const newPara = document.createElement('p');
      newPara.id = 'new-paragraph';
      newPara.textContent = 'I was added dynamically! 😎';
      document.body.appendChild(newPara);
    }
  }
  
  function removeElement() {
    const elem = document.getElementById('new-paragraph');
    if (elem) {
      elem.remove();
    }
  }
  