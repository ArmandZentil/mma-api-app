document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const tableBody = document.getElementById('table-body');

  searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    filterTable(searchTerm);
  });

  function filterTable(searchTerm) {
    const rows = tableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const firstName = row.querySelector('.first-name').textContent.toLowerCase();
      const lastName = row.querySelector('.last-name').textContent.toLowerCase();
      const fullName = `${firstName} ${lastName}`;

      if (fullName.includes(searchTerm)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    }
  }

  function createTable(fighters) {
    for (let i = 0; i < fighters.length; i++) {
      const fighter = fighters[i];
      const row = document.createElement('tr');

      const firstName = document.createElement('td');
      firstName.classList.add('first-name');
      firstName.textContent = fighter.FirstName;
      row.appendChild(firstName);

      const lastName = document.createElement('td');
      lastName.classList.add('last-name');
      lastName.textContent = fighter.LastName;
      row.appendChild(lastName);

      const weightClass = document.createElement('td');
      weightClass.textContent = fighter.WeightClass;
      row.appendChild(weightClass);

      const birthDate = document.createElement('td');
      birthDate.textContent = fighter.BirthDate;
      row.appendChild(birthDate);

      const height = document.createElement('td');
      height.textContent = fighter.Height;
      row.appendChild(height);

      const weight = document.createElement('td');
      weight.textContent = fighter.Weight;
      row.appendChild(weight);

      const reach = document.createElement('td');
      reach.textContent = fighter.Reach;
      row.appendChild(reach);

      const wins = document.createElement('td');
      wins.textContent = fighter.Wins;
      row.appendChild(wins);

      const losses = document.createElement('td');
      losses.textContent = fighter.Losses;
      row.appendChild(losses);

      const draws = document.createElement('td');
      draws.textContent = fighter.Draws;
      row.appendChild(draws);

      const noContests = document.createElement('td');
      noContests.textContent = fighter.NoContests;
      row.appendChild(noContests);

      const tko = document.createElement('td');
      tko.textContent = fighter.TechnicalKnockouts;
      row.appendChild(tko);

      const tkoLosses = document.createElement('td');
      tkoLosses.textContent = fighter.TechnicalKnockoutLosses;
      row.appendChild(tkoLosses);

      const submissions = document.createElement('td');
      submissions.textContent = fighter.Submissions;
      row.appendChild(submissions);

      const submissionLosses = document.createElement('td');
      submissionLosses.textContent = fighter.SubmissionLosses;
      row.appendChild(submissionLosses);

      const titleWins = document.createElement('td');
      titleWins.textContent = fighter.TitleWins;
      row.appendChild(titleWins);

      const titleLosses = document.createElement('td');
      titleLosses.textContent = fighter.TitleLosses;
      row.appendChild(titleLosses);

      const titleDraws = document.createElement('td');
      titleDraws.textContent = fighter.TitleDraws;
      row.appendChild(titleDraws);

      const sigStrikesLanded = document.createElement('td');
      sigStrikesLanded.textContent = fighter.CareerStats.SigStrikesLandedPerMinute;
      row.appendChild(sigStrikesLanded);

      tableBody.appendChild(row);
    }
  }

  function fetchData() {
    return fetch(`https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=${API_KEY}`s)
      .then(response => response.json())
      .then(data => {
        const fighters = data;
        createTable(fighters);
      })
      .catch(error => console.error(error));
  }

  fetchData();
});
