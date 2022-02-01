interface GuessProps {
  onKey: (key: string) => void;
  wordLength: number;
}

export function RandomGuess(props: GuessProps) {
  return (
    <div className="Game-random" aria-hidden="true">
      <div className="Game-random-guess"
        tabIndex={-1}
        role="button"
        onClick={() => {
          for (let i = 0; i < props.wordLength; i++) {
            props.onKey("Backspace");
          }
          const guess = props.randomTarget(pros.wordLength);
          for (const letter of guess) {
            props.onKey(letter);
          }
        }}
      >
        Random Guess
      </div>
    </div>
  );
}
