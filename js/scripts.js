var valueStatement = 'Check out these low, low prices!';
var valueStatementEl = document.getElementById('valueStatement');

valueStatementEl.textContent = valueStatement;

var rate = 4.99,
    midrate = 6.99,
    highrate = 8.99,
    rateEl = document.getElementById('rate'),
    midrateEl = document.getElementById('midrate')
    highrateEl = document.getElementById('highrate');

rateEl.textContent = rate.toFixed(2);
midrateEl.textContent = midrate.toFixed(2);
highrateEl.textContent = highrate.toFixed(2);