import { useEffect, useState } from "react";
import { getUser } from "../../services/user.service";
import { useNavigate, useParams } from "react-router-dom";
import { createChatService } from "../../services/chat.service";

const UsersDetail = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const createChat = () => {
    console.log("Creating chat...");
    createChatService(id)
      .then((response) => {
        console.log(response)
        navigate(`/chats/${response.id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUser(id)
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mt-5">
      {user && (
        <div className="container mt-5">
          <div className="card bg-app-primary text-white">
            <div className="card-body text-center p-5">
              <img src={'https://via.placeholder.com/150'} alt="User Avatar" className="rounded-circle mb-3" width="150" height="150" />
              <h3 className="card-title">{user.name}</h3>
              <h5 className="card-title">{user.email}</h5>
              <p className="card-text">aksbdkajndad</p>
              <p className="card-text"><small className="text-muted">,ajshkdjasjds</small></p>
            </div>
          </div>
          <div className="row mt-4">
            {user.posts && user.posts.map((post, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <img src={post.imageUrl} alt={`Post ${index}`} className="card-img-top" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center mt-4">
        <button onClick={createChat} className="btn btn-primary">Init Chat</button>
      </div>

    </div >
  );
};

export default UsersDetail;
