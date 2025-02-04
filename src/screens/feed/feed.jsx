import { useEffect, useState } from "react";
import { getFeed } from "../../services/post.service";
import Post from "../../components/Post/Post";
import { useNotification } from "../../contexts/NotificationContext";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [userLikes, setUserLikes] = useState([]);
  const [filters, setFiltes] = useState({
    page: 1,
    limit: 10,
  });


  useEffect(() => {
    getFeed(filters)
      .then((res) => {
        setPosts(res.posts);
        setUserLikes(res.likes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filters]);

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={() => setFiltes({ ...filters, page: filters.page + 1 })}>Load more</button>
      <h1 className="text-app-primary text-center">Feed</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post._id} className="col-4">
            <Post
              isLiked={userLikes.find((like) => like.post === post._id)}
              imageUrl={post.imageUrl}
              caption={post.caption}
              user={post.user}
              postId={post._id}
              likesCount={post.likes}
            />
          </div>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{
        __html: `

        <div>
    <span style="font-size: 18px;">Quill Rich Text Editor</span>
</div>
<div>
    <br>
</div>
<div>Quill is a free,
    <a href="https://github.com/quilljs/quill/">open source</a>WYSIWYG editor built for the modern web. With its
    <a href="http://quilljs.com/docs/modules/">extensible architecture</a>and a
    <a href="http://quilljs.com/docs/api/">expressive API</a>you can completely customize it to fulfill your needs. Some built in features include:</div>
<div>
    <br>
</div>
<ul>
    <li>Fast and lightweight</li>
    <li>Semantic markup</li>
    <li>Standardized HTML between browsers</li>
    <li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
</ul>
<div>
    <br>
</div>
<div>
    <span style="font-size: 18px;">Downloads</span>
</div>
<div>
    <br>
</div>
<ul>
    <li>
        <a href="https://quilljs.com">Quill.js</a>, the free, open source WYSIWYG editor</li>
    <li>
        <a href="https://zenoamaro.github.io/react-quill">React-quill</a>, a React component that wraps Quill.js</li>
</ul>
        ` }}>

      </div>
    </div>
  );
};

export default Feed;
