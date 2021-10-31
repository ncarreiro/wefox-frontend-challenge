// INTERFACES
import IPost from "../types/Post";

// IMAGES
import noImage from "../images/no-image.jpg";

const Post = ({
  title,
  image_url,
  content,
  lat,
  long,
  created_at,
  updated_at,
}: IPost) => (
  <tr>
    <td>{title}</td>
    <td>
      <img
        src={image_url}
        style={{ maxWidth: 400 }}
        onError={(event: any) => (event.target.src = noImage)}
      />
    </td>
    <td>{content}</td>
    <td>{lat}</td>
    <td>{long}</td>
    <td>{created_at}</td>
    <td>{updated_at}</td>
  </tr>
);

export default Post;
