(async () => {
  const where = encodeURIComponent(JSON.stringify({
    "countryName": "Bolivia"
  }));
  const response = await fetch(
    `https://parseapi.back4app.com/classes/Coronaviruscases_Covid19Case?count=1&limit=200&order=-date&where=${where}`,
    {
      headers: {
        'X-Parse-Application-Id': '4cPSAWIO6zEAjzllPUSfAUvMvdrECgHh2aag3k21', // This is your app's application id
        'X-Parse-REST-API-Key': 'E0mKGWvhFvKtMXM9RrLr7xc9diu2Febjg4IFg5LR', // This is your app's REST API key
      }
    }
  );
  const data = await response.json(); // Here you have the data that you need
  const result = JSON.stringify(data, null, 2);
  console.log(result);
  document.getElementById('main').innerHTML = result;
})();