var scoreList = document.getElementById("score-list");

const renderScores = () => {
    var storedScores = JSON.parse(localStorage.getItem("highscores"));
    // sort user scores by highest score
    storedScores.sort(function (a, b) {
        return b.score-a.score;
    });

    for (var i = 0; i < storedScores.length; i++) {
        var item = storedScores[i];

        var li = document.createElement("li");
        li.textContent = `${item.initials} | ${item.score}`;

        scoreList.appendChild(li);
    }

};

renderScores();