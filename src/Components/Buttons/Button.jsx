const Button = ({ backgroundColor, text, handleClickButton, className }) => {
  const buttonStyles = {
    margin: "0, auto",
    cursor: "pointer",
    backgroundColor: `${backgroundColor}`,
  };

  return (
    <button
      className={className}
      onClick={handleClickButton}
      style={buttonStyles}
    >
      {text}
    </button>
  );
};

export default Button;
