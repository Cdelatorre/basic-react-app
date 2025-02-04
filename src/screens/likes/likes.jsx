import { useEffect, useState } from 'react';
import { likeList } from '../../services/like.service';

const Likes = () => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    likeList()
      .then((res) => {
        setLikes(res);
      })
  }, []);

  return (
    <div>
      <div>
        {likes.map(({ _id, user, post }) => {
          return (
            <div key={_id}>
              <h3>{user.name}</h3>
              <img width="100" src={post.imageUrl} alt="Post" />
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Likes;
