"use client";

function SuperHero(props) {
  const onClickHandler = () => {
    const slogan = `I am ${props.name}`;
    console.log(slogan);
  };

  return (
    <div>
        {/* <button onclick="onClickHandler()"> Iron Man </button> */}
        <button 
            className="button"
            onClick={onClickHandler} 
            onSubmit={onClickHandler}
        >
            {" "}
            {props.name}{" "}
        </button>

        {/* <label htmlFor="username">Username</label>
        <input id="username"/> */}
    </div>
  );
}

export default SuperHero;
