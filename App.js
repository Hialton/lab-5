import React from 'react';
import './App.css';

// Card data (easily extensible)
const cards = [
  {
    id: 1,
    country: 'JAPAN',
    googleMapsUrl: 'https://maps.google.com/?q=35.3606,139.4831', // Mount Fuji approx coords
    imageUrl: 'https://scrimba.com/links/travel-journal-japan-image-url',
    title: 'Mount Fuji',
    startDate: '12 Jan 2021',
    endDate: '24 Jan 2021',
    description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the most popular tourist site in Japan, for both Japanese and foreign tourists.",
    emoji: '🇯🇵'
  },
  {
    id: 2,
    country: 'AUSTRALIA',
    googleMapsUrl: 'https://maps.google.com/?q=-33.8568,151.2153', // Sydney Opera House approx
    imageUrl: 'https://scrimba.com/links/travel-journal-australia-image-url',
    title: 'Sydney Opera House',
    startDate: '27 May 2021',
    endDate: '08 Jun 2021',
    description: 'The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century\'s most famous and distinctive buildings.',
    emoji: '🇦🇺'
  },
  {
    id: 3,
    country: 'NORWAY',
    googleMapsUrl: 'https://maps.google.com/?q=62.1013,7.0123', // Geirangerfjord approx
    imageUrl: 'https://scrimba.com/links/travel-journal-norway-image-url',
    title: 'Geirangerfjord',
    startDate: '01 Oct 2021',
    endDate: '18 Nov 2021',
    description: 'The Geirangerfjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.',
    emoji: '🇳🇴'
  }
];

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>my travel journal</h1>
      </div>
      <div className="cards-list">
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

function Card({ card }) {
  return (
    <div className="card">
      <div
        className="card--image"
        style={{ backgroundImage: `url(${card.imageUrl})` }}
      ></div>
      <div className="card--stats">
        <span className="card--location-emoji">{card.emoji}</span>
        <span className="card--location">{card.country} <a href={card.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a></span>
      </div>
      <h2 className="card--title">{card.title}</h2>
      <p className="card--date">{card.startDate} - {card.endDate}</p>
      <p className="card--description">{card.description}</p>
    </div>
  );
}

export default App;