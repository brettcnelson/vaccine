const links = {
  alerts: [
    ['@macovidcaccines.com','https://twitter.com/macovidvaccines','follow and turn on notifications for all tweets'],
    ['@vaccinetime','https://twitter.com/vaccinetime','follow and turn on notifications for all tweets'],
    ['covidvaccinetexts.com', 'http://www.covidvaccinetexts.com/', 'subscribe to text notifications for new appointments at CVS, Walgreens and Rite-Aid'],
    ['mass.gov', 'https://member.everbridge.net/index/406686158291020/#/signup', 'sign up for updates from the government']
  ],
  search: [
    ['vaxfinder.mass.gov', 'https://vaxfinder.mass.gov/?zip_or_city=&vaccines_available=on&q='],
    ['macovidvaccines.com', 'https://www.macovidvaccines.com/'],
    ['vaccinatema.com', 'http://vaccinatema.com/search']
  ],
  locations: [
    ['Danvers Doubletree', 'https://curative.com/sites/24181#9'],
    ['Fenway', 'https://www.maimmunizations.org/clinic/search?  commit=Search&location=&q%5Bclinic_date_eq%5D=&q%5Bvaccinations_name_i_cont%5D=&q%5Bvenue_search_name_or_venue_name_i_cont%5D=fenway&search_radius=All#search_results#search_results'],
    ['Gillette', 'https://www.maimmunizations.org/clinic/search?commit=Search&location=&q%5Bclinic_date_eq%5D=&q%5Bvaccinations_name_i_cont%5D=&q%5Bvenue_search_name_or_venue_name_i_cont%5D=gillette&search_radius=All#search_results#search_results'],
    ['Natick Mall','https://home.color.com/vaccine/register/natickmall'],
    ['Eastfield Mall - Springfield', 'https://curative.com/sites/24182#9'],
    ['CVS', 'https://www.cvs.com/immunizations/covid-19-vaccine?icid=cvs-home-hero1-banner-1-link2-coronavirus-vaccine'],
    ['Walgreens', 'https://www.walgreens.com/findcare/vaccination/covid-19/location-screening']
  ],
  general: [
    ['All Vaccination Sites', 'http://vaccinatema.com/sites'],
    ['mass.gov Covid Info Page', 'https://www.mass.gov/info-details/covid-19-updates-and-information'],
    ['r/CoronavirusMA', 'https://www.reddit.com/r/CoronavirusMa/'],
    ['@MassDPH', 'https://twitter.com/MassDPH']
  ]
};

document.body.innerHTML = `<h2>MA Vaccine Links</h2><div id="con">${makeList(links.alerts, 'ALERTS')}${makeList(links.search,'SEARCH')}${makeList(links.locations,'SCHEDULING LINKS')}${makeList(links.general,'GENERAL')}</div>`;
  
function makeList(links,name) {
  return `<div><h4>${name}</h4><ul>${links.map(l => {
    return `<li class="link"><a href="${l[1]}" target="_blank">${l[0]}</a>${`<p class="desc">${l[2] || ''}</p>`}</li>`
  }).join('')}</ul></div>`;
}
