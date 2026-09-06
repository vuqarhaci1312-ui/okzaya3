const PROJECT_NAMES_AZ = {
  'Cato Covent Garden Bar': 'Cato Bar',
  'Suelo Bar': 'Suelo Bar',
  'The Catch': 'The Catch Restoran',
  'Piazza Italiana': 'İtalyan Piazza',
  'Negroni': 'Negroni Restoran',
  'Two More Beers': 'Daha İki Pivə',
  'mc2 Center': 'MC2 Mərkəzi',
  'Royal Petrol': 'Royal Petrol',
  'Elvi': 'Elvi',
  'November': 'Noyabr Restoran',
  'Riga Central Market': 'Riqa Mərkəzi Bazarı',
  'Kice Restaurant': 'Kice Restoran',
  'Maximum København': 'Maksimum Kopenhagen',
  'Taxman Bar': 'Taxman Bar',
  'Madame Mei': 'Madam Mey',
  'Golden Birds': 'Qızıl Quşlar',
  'Jānis Sauka': 'Yanis Sauka',
  'Janis Sauka': 'Yanis Sauka',
  'Mego': 'Mego Market',
  'VIADA Baltija': 'Viada Baltiya',
  'Spar': 'Spar Market',
  'Sky Supermarket': 'Sky Supermarket',
  'RD Electronics': 'RD Elektronika',
  'Сrocs': 'Crocs',
  'Crocs': 'Crocs',
  'Lauma': 'Lauma',
};

function toAzProjectTitle(title) {
  if (!title) {
    return title;
  }
  return PROJECT_NAMES_AZ[title] || title;
}

function applyAzProjectNames(html) {
  const entries = Object.entries(PROJECT_NAMES_AZ).sort((a, b) => b[0].length - a[0].length);
  let result = html;
  for (const [from, to] of entries) {
    if (!from || from === to) {
      continue;
    }
    result = result.split(from).join(to);
  }
  return result;
}

module.exports = {
  PROJECT_NAMES_AZ,
  toAzProjectTitle,
  applyAzProjectNames,
};
