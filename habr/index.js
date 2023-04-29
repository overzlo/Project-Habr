// let blocksize = [20, 60, 10, 40, 30, 40]

console.log(document.getElementById("mb20").innerText)

const blocksel = document.querySelectorAll('.blockmem');

blocksel.forEach(container => {
  container.addEventListener('click', () => {
    container.classList.toggle('selected1');
  });
});



function start(){

  const values = [40, 20, 10, 60, 100];
  const containers = document.querySelectorAll('.blockmem');


  if(document.getElementById('firstType').selected){


  let currentContainerIndex = 0;

  values.forEach(value => {
    let containerF = false;
    
    for (let i = currentContainerIndex; i < containers.length; i++) {
      const container = containers[i];
      if (!container.classList.contains('selected') && parseInt(container.textContent) >= value) {
        if (parseInt(container.textContent) > value) {
          const remainingValue = parseInt(container.textContent) - value;
          const remainingContainer = document.createElement('div');
          remainingContainer.classList.add('container');
          remainingContainer.textContent = remainingValue;
          container.parentNode.insertBefore(remainingContainer, container.nextSibling);
          container.textContent = value;

          container.classList.add('selected');          

          currentContainerIndex = 0;
        } else {
          container.textContent = value;
          container.classList.add('selected');
          currentContainerIndex = 0;
        }
        containerF = true;
        break;
      }
      

      
    }
    
  });
}
if(document.getElementById('bestType').selected){
  values.forEach(value => {
      let containerF = false;
      let bestContainer;
      let remainingSpace = Infinity;
    
      containers.forEach(container => {
        if (!container.classList.contains('selected1') && parseInt(container.textContent) >= value) {
          const spaceLeft = parseInt(container.textContent) - value;
          if (spaceLeft < remainingSpace) {
            bestContainer = container;
            remainingSpace = spaceLeft;
            containerF = true;
          }
        }
      });
    
      if (containerF) {
        if (remainingSpace > 0) {
          const remainingContainer = document.createElement('div');
          remainingContainer.classList.add('container');
          remainingContainer.textContent = remainingSpace;
          bestContainer.parentNode.insertBefore(remainingContainer, bestContainer.nextSibling);
        }
        bestContainer.textContent = value;
        bestContainer.classList.add('selected');
      } 
    
   })
  };

  if(document.getElementById('worstType').selected){

      values.forEach(value => {
        let containerF = false;
        let worstContainer;
        let remainingSpace = -Infinity;
    
        containers.forEach(container => {
          if (!container.classList.contains('selected1') && parseInt(container.textContent) >= value) {
            const spaceLeft = parseInt(container.textContent) - value;
            if (spaceLeft > remainingSpace) {
              worstContainer = container;
              remainingSpace = spaceLeft;
              containerF = true;
            }
          }
        });
    
        if (containerF) {
          if (remainingSpace > 0) {
            const remainingContainer = document.createElement('div');
            remainingContainer.classList.add('container');
            remainingContainer.textContent = remainingSpace;
            worstContainer.parentNode.insertBefore(remainingContainer, worstContainer.nextSibling);
          }
          worstContainer.textContent = value;
          worstContainer.classList.add('selected');
        } 
      });
    }
    



    
  if(document.getElementById('nextType').selected){

    let currentContainerIndex = 0;

    values.forEach(value => {
      let containerF = false;
    
      for (let i = currentContainerIndex; i < containers.length; i++) {
        const container = containers[i];
        if (!container.classList.contains('selected') && parseInt(container.textContent) >= value) {
          if (parseInt(container.textContent) > value) {
            const remainingValue = parseInt(container.textContent) - value;
            const remainingContainer = document.createElement('div');
            remainingContainer.classList.add('container');
            remainingContainer.textContent = remainingValue;
            container.parentNode.insertBefore(remainingContainer, container.nextSibling);
            container.textContent = value;
    
            container.classList.add('selected');
    
            currentContainerIndex = i + 1;

            if (currentContainerIndex === containers.length) {
              currentContainerIndex = 0;
            }
          } 
          else {
            container.textContent = value;
            container.classList.add('selected');
                currentContainerIndex = i + 1;
            if (currentContainerIndex === containers.length) {
              currentContainerIndex = 0;
            }
          }
          containerF = true;
          break;
        }
      }

    })
  }
}
  

