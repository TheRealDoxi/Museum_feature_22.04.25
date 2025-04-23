document.querySelectorAll('.circle') // Vælger alle elementer med klassen "circle"
  .forEach((circle) => {             // For hvert af disse elementer...
    circle.addEventListener('click', () => {        // Tilføj en klik-hændelse
      const img = circle.querySelector('img');      // Find billedet inde i cirklen
      const heading = circle.querySelector('h2');   // Find overskriften inde i cirklen

      img?.classList.toggle('revealed');            // Toggle klassen "revealed" på billedet (fjerner/lægger til)
      heading?.classList.toggle('revealed');        // Toggle klassen "revealed" på overskriften
    });
  });

  const sound = new Audio('/mp3/host.mp3');

  document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', () => {
      circle.classList.toggle('revealed');
      sound.currentTime = 0;
      sound.play();
    });
  });


  function choose(valg) {
    const resultat = document.getElementById("resultat");
    if (valg === "Gud") {
      resultat.innerText = "Du beder til Gud og håber på tilgivelse...";
    } else if (valg === "Læge") {
      resultat.innerText = "Lægen er på vej – mon han kan redde dig?";
    }
  }
  
