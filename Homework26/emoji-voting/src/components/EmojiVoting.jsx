import { useState, useEffect } from "react";

const EMOJIS = [
  { id: "smile", src: "/images/smile.jpg" },
  { id: "star", src: "/images/star.jpg" },
  { id: "cool", src: "/images/cool.jpg" },
  { id: "love", src: "/images/love.jpg" },
  { id: "nice", src: "/images/nice.jpg" }
];

function EmojiVoting() {
  const [votes, setVotes] = useState({});
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("emojiVotes")) || {};
    setVotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("emojiVotes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (id) => {
    setVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const showResults = () => {
    const maxVotes = Math.max(...Object.values(votes));
    const winnerId = Object.keys(votes).find(
      (id) => votes[id] === maxVotes
    );
    setWinner(winnerId);
  };

  const clearResults = () => {
    setVotes({});
    setWinner(null);
    localStorage.removeItem("emojiVotes");
  };

  const winnerEmoji = EMOJIS.find((e) => e.id === winner);

  return (
    <div className="app">
      <h1>Голосування за найкращий смайлик</h1>

      <div className="smiles-list">
        {EMOJIS.map((emoji) => (
          <div key={emoji.id} className="smile-item">
            <div className="smile-icon">
              <img
                src={emoji.src}
                alt={emoji.id}
                onClick={() => handleVote(emoji.id)}
              />
            </div>
            <p>{votes[emoji.id] || 0}</p>
          </div>
        ))}
      </div>

      <div className="buttons">
        <button onClick={showResults}>Show Results</button>
        <button onClick={clearResults}>Очистити результати</button>
      </div>

      {winner && winnerEmoji && (
        <div className="result">
          <h3>Переможець:</h3>
          <img src={winnerEmoji.src} alt="winner" />
          <p>Кількість голосів: {votes[winner]}</p>
        </div>
      )}
    </div>
  );
}

export default EmojiVoting;
