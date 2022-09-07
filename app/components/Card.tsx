import { FC } from "react";

interface IProps {
  name: any;
  email: any;
  picture: any;
}

export const Card: FC<IProps> = ({ name, email, picture }) => {
  return (
    <div>
      <div className="card-container">
        <div className="card-left-Side">
          <img src={picture.large} />
        </div>
        <div className="card-right-side">
          <h3>
            {name.first} {name.last}
          </h3>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
