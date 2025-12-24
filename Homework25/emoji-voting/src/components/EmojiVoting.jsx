import React, { useState, useEffect } from "react";

const EMOJIS = [
  { name: "smile", src: "/images/smile.jpg" },
  { name: "sad", src: "/images/star.jpg" },
  { name: "cool", src: "/images/cool.jpg" },
  { name: "love", src: "/images/love.jpg" },
  { name: "thinking", src: "/images/nice.jpg" }
];

const EmojiVoting = () => {
  const [votes, setVotes] = useState({});
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("emojiVotes")) || {};
    setVotes(savedVotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("emojiVotes", JSON.stringify(votes));
  }, [votes]);

  const handleVote = (name) => {
    setVotes((prev) => ({
      ...prev,
      [name]: (prev[name] || 0) + 1
    }));
  };

  const showResults = () => {
    if (!Object.keys(votes).length) return;

    const maxVotes = Math.max(...Object.values(votes));
    const winnerName = Object.keys(votes).find(
      (name) => votes[name] === maxVotes
    );

    setWinner(winnerName || null);
  };

  const clearResults = () => {
    setVotes({});
    setWinner(null);
    localStorage.removeItem("emojiVotes");
  };

  const winnerEmoji = EMOJIS.find((e) => e.name === winner);

  return (
    <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Голосование за смайликами</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          margin: "30px 0"
        }}
      >
        {EMOJIS.map((emoji) => (
          <div
            key={emoji.name}
            style={{
              width: "80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src={emoji.src}
                alt={emoji.name}
                onClick={() => handleVote(emoji.name)}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  cursor: "pointer"
                }}
              />
            </div>

            <div style={{ marginTop: "8px" }}>
              {votes[emoji.name] || 0}
            </div>
          </div>
        ))}
      </div>

      <div style={{ margin: "20px 0" }}>
        <button onClick={showResults} style={{ marginRight: "10px" }}>
          Show Results
        </button>
        <button onClick={clearResults}>Очистити результати</button>
      </div>

      {winner && winnerEmoji && (
        <div style={{ marginTop: "30px" }}>
          <h2>Переміг:</h2>
          <img
            src={winnerEmoji.src}
            alt="winner"
            style={{ width: "80px", margin: "10px 0" }}
          />
          <p>Кількість голосів: {votes[winner]}</p>
        </div>
      )}
    </div>
  );
};

export default EmojiVoting;
