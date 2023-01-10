import { Button } from 'react-bootstrap';
import { useState } from 'react';
import getJoke from '../api/jokeData';
import Joker from '../components/Joker';

function Home() {
  const [joke, setJoke] = useState({});
  const [btnText, setBtnText] = useState('Get A Joke');
  const setButton = (text) => {
    setBtnText(text);
  };

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });
    });
    setButton('Get Punchline');
  };

  return (
    <div>
      <h1>Welcome Home!</h1>
      <Joker joke={joke} btnText={btnText} />
      {btnText === 'Get A Joke' || btnText === 'Get Another Joke'
        ? <Button type="button" onClick={getAJoke}>Get Joke</Button>
        : <Button type="button" onClick={() => setButton('Get Another Joke')}>{btnText}</Button>}
    </div>
  );
}

export default Home;
