const facts = [
  "CSK has the highest win percentage in IPL history.",
  "MS Dhoni has never been auctioned since 2008!",
  "CSK was banned for 2 years but came back & won in 2018.",
  "Whistle Podu was a fan-created anthem!",
];
let i = 0;
setInterval(() => {
  document.getElementById('random-fact').innerText = facts[i];
  i = (i + 1) % facts.length;
}, 4000);
