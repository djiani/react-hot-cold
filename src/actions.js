export const RESTARTGAME = 'RESTARTGAME';
export const restartGame = (correctAnswer) => ({
  type: RESTARTGAME,
  correctAnswer
});

export const MAKEGUESS = 'MAKEGUESS';
export const makeguess = (guess) => ({
  type: MAKEGUESS,
  guess
});

export const GENERATEAURALUPDATE = 'GENERATEAURALUPDATE';
export const generate_aural_update = () => ({
  type: GENERATEAURALUPDATE
})

//valided, setGuessValue
