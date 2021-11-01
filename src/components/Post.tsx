// INTERFACES
import IPost from "../types/Post";

// IMAGES
import noImage from "../images/no-image.jpg";

const Post = ({
  id,
  title,
  image_url,
  content,
  lat,
  long,
  created_at,
  updated_at,
}: IPost) => (
  <tr data-testid={`post-${id}`}>
    <td>{id}</td>
    <td>{title}</td>
    <td>
      <img
        data-testid={`post-${id}-image`}
        src={image_url}
        style={{ maxWidth: 400 }}
        onError={(event: any) => (event.target.src = noImage)}
        alt={title}
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
