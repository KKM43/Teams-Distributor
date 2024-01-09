import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css";


export const Team = () => {
  const navigate = useNavigate();

  const [numPlayers, setNumPlayers] = useState();
  const [playersInput, setPlayersInput] = useState('');
  const [teams, setTeams] = useState({ team1: [], team2: [] });
  

  const handleNumPlayersChange = (e) => {
    setNumPlayers(parseInt(e.target.value, 10));
  };

  const handlePlayersInputChange = (e) => {
    const inputValue = e.target.value;

    // Check if the number of players entered matches the specified total
    const enteredPlayers = inputValue.split('\n').map(player => player.trim()).filter(player => player !== '');

    if (enteredPlayers.length > numPlayers) {
      alert(`Fakt ${numPlayers} chi nav tak.`);
      return;
    }

    // Check if any player name starts with a number
    if (inputValue.split('\n').some(player => /^\d/.test(player.trim()))) {
      alert('Player names should not start with a number.');
      return;
    }

     // Check for duplicate player names
     const uniquePlayers = Array.from(new Set(enteredPlayers));
     if (uniquePlayers.length !== enteredPlayers.length) {
       alert('Same Name nako.');
       return;
     }

    setPlayersInput(inputValue);
  };

  const generateTeams = () => {
    const playerList = playersInput.split('\n').map(player => player.trim()).filter(player => player !== '');

    if (playerList.length !== numPlayers) {
      alert(`Please enter exactly ${numPlayers} player names`);
      return;
    }

    const shuffledPlayers = [...playerList].sort(() => Math.random() - 0.5);

    const midPoint = Math.ceil(numPlayers / 2);
    const team1 = shuffledPlayers.slice(0, midPoint);
    const team2 = shuffledPlayers.slice(midPoint);

    setTeams({ team1, team2 });
  };

  const goBack = () => {
navigate("/")
  }


 return (
  <div className="container">
  <h1>Team Generator</h1>
  <h3 id='no-players'>
    Total Players:
    <br />
    <input type="number" value={numPlayers} onChange={handleNumPlayersChange} className='input' />
  </h3>
  <br />
  <h3 id='player-name'>
    Players Names:
  <br />
    <textarea value={playersInput} onChange={handlePlayersInputChange} className='textarea' placeholder='eg.Bot...' />
  </h3>
  <button onClick={generateTeams}>Generate Teams</button>
  <button onClick={goBack}>Back</button>
  
  <br />
  <h2>Teams:</h2>
  <div>
    <h3 id='dis-team1'>Team 1:</h3>
    <ul id='di-team1'>
      {teams.team1.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  </div>
  <div>
    <h3 id='dis-team2'>Team 2:</h3>
    <ul id='di-team2'>
      {teams.team2.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  </div>
</div>
);
};