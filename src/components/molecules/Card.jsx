import Text from "../atoms/Text";
import './Card.css'
function Card({name, maxKi,race,image,gender}) {
    return ( <>
    <div className="card">
    <img src={image} alt="" />
  <div className="content_text">
  <Text text={name}>
    </Text>
    <Text text={maxKi}>
    </Text>
    <Text text={race}>
    </Text>
    <Text text={gender}>
    </Text>
  </div>
    </div>
    </> );
}

export default Card;