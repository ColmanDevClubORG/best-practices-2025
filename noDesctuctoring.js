export const Country = (props) => {
  return (
    <div className='country scale-effect'>
      <img src={props.flag} className='country-flag'></img>
      <div className='country-info'>
        <div className='country-brief'>
          <p>{props.name}</p>
          <p>{props.population}</p>
          <p>{props.region}</p>
          <p>{props.capital}</p>
        </div>
      </div>
    </div>
  );
};
