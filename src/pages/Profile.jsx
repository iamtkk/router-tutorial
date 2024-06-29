import { useParams } from "react-router-dom";

const data = {
  iamtk: {
    name: "김태관",
    description: "풀스택 개발자 입니다.",
  },
  jane: {
    name: "김제인",
    description: "귀엽고 깜찍한 아이입니다.",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
