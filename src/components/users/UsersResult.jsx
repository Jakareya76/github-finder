import { useContext } from "react";
import UserItem from "./UserItem";
import Loading from "../Layout/Loading";
import GithubContext from "../../context/GithubContext";

function UsersResult() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((curElem) => {
            return <UserItem key={curElem.id} user={curElem} />;
          })}
        </div>
      </>
    );
  } else {
    return <Loading />;
  }
}

export default UsersResult;
