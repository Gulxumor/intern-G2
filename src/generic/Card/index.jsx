import { Image, Title, Wrapper } from "./style";

const Card = ({ title, image }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Image src={image} alt={title || "not found"} />
    </Wrapper>
  );
};

export default Card;
