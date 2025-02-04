import { useEffect, useState } from "react";
import { getUser } from "../../services/user.service";
import { useParams } from "react-router-dom";

const UsersDetail = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getUser(id)
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

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
      )
      }

    </div >
  );
};

export default UsersDetail;
