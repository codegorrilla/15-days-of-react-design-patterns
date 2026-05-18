import { memo } from "react";

const ProfileCard = ({ name }) => {
  console.log("Rendered <ProfileCard /> component");
  return <div>{name}</div>;
};

const MemoizedCard = memo(ProfileCard);

export default MemoizedCard;
