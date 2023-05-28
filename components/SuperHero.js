"use client";


function SuperHero(props) {

  const onClickHandler = () => {
    const slogan = `I am ${props.name}`;
    console.log(slogan);
  };

  const darkTheme = true

  const styles = {
    color: darkTheme ? 'black' : 'white',
    backgroundColor: 'red',
    fontSize: 20,
  }

  return (
    <div>
      {/* <div style="color: red; background-color: white;"></div> */}
        <button
            style={styles}
            className="button"
            onClick={onClickHandler} 
            onSubmit={onClickHandler}
        >
            Superhero: {props.name}
        </button>
    </div>
  );
}

export default SuperHero;
