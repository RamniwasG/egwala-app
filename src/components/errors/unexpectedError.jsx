import { Button } from "@mui/material";
import { useNavigate, useRouteError } from "react-router-dom";

export default function UnexpectedError() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  return (
    <>
      <Button variant="text" onClick={() => navigate(-1)}>Go Back</Button>
      <div id="error-page" className="d-f fd-c">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
}