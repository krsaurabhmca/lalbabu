import axios from "axios";
import React ,{useEffect} from "react";
import { Button,Stack } from "react-bootstrap";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const  Post=()=> {
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
        <Stack direction="horizontal" >
            <Button as="a" variant="primary">
            {post.title}
            </Button>
            <Button as="a" variant="info">
            {post.body}
            {2+8*5}
            </Button>
       </Stack>
   
    </div>
  );
}
export default Post