import useFetch from "../hooks/useFetch";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ClickLoggerButton from "./ClickLoggerButton";

const TextItem = ({ text }) => (
  <Typography variant="body1" component="p">
    {text}
  </Typography>
);

const CopilotPrompt = () => {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

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

        <ClickLoggerButton />

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
