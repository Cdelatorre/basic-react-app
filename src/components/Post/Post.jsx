import { useState } from 'react';
import { likePost } from '../../services/like.service';
import { Link } from 'react-router-dom';
import { useNotification } from '../../contexts/NotificationContext';

const Post = ({ imageUrl, caption, user, postId, isLiked, likesCount }) => {
  const [liked, setLiked] = useState(isLiked);
  const [likesAmount, setLikesAmount] = useState(likesCount);
  const { notify } = useNotification();

  const submitLike = () => {
    likePost(postId)
      .then((res) => {
        if (res.message === 'Like added') {
          setLiked(true);
          setLikesAmount(likesAmount + 1);
          notify('Like added');
        } else {
          setLiked(false);
          setLikesAmount(likesAmount - 1);
          notify('Like removed', 'error');
        }
      })
      .catch((error) => {
        console.log(error);
        // handle errors
      });
  };

  return (
    <div className="card mb-3">
      <img src={imageUrl} className="card-img-top" alt="Post" />
      <div className="card-body">
        <Link to={`/users/${user._id}`}>@{user.name}</Link>
        <h5 className="card-title">{caption}</h5>
        <button className="btn btn-light" onClick={submitLike}>
          <i className={`bi ${liked ? 'bi-heart-fill' : 'bi-heart'}`}></i><small className="ms-1">{likesAmount}</small>
        </button>
      </div>
    </div>
  );
};

export default Post;
