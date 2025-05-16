import logo from './logo.svg';
import './App.css';
import GreetingCard from './GreetingCard';

function App() {
  const cards = [
    {
      id: 'card1',
      title: 'Happy Birthday!',
      message: 'Wishing you joy and success!',
      name: 'Neha'
    },
    {
      id: 'card2',
      title: 'Happy Anniversary!',
      message: 'Wishing you love and happiness',
      name: 'Mom & Dad'
    },
    {
      id: 'card3',
      title: 'Congratulations!',
      message: 'Best wishes on your graduation!',
      name: 'Rahul'
    }
  ];
  return (
    <div className="App">
      <h1>Greeting Card Generator</h1>
      {cards.map(card =>(
        <GreetingCard
          key={card.id}
          title={card.title}
          message={card.message}
          name={card.name}
        />  
      ))}
    </div>
  );
}

export default App;