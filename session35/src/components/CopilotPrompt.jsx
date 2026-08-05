import useFetch from "../hooks/useFetch";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const TextItem = ({ text }) => (
  <Typography variant="body1" component="p">
    {text}
  </Typography>
);

const CopilotPrompt = () => {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts";

  const handleClick = () => {
    console.log("Userul a dat click");
  };

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Stack spacing={3}>
        <Stack spacing={1}>
          <Typography variant="h5" component="h1">
            Copilot prompt
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Apasă butonul pentru a înregistra acțiunea în consolă.
          </Typography>
        </Stack>

        <Button
          variant="contained"
          type="button"
          onClick={handleClick}
          aria-label="Log this action"
          sx={{ alignSelf: "center" }}
        >
          Log this
        </Button>

        <Stack spacing={1}>
          {posts?.map((post) => (
            <TextItem key={post.id} text={post.title} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default CopilotPrompt;
