import * as React from "react";
import { Link } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";

export default function SignUp() {
  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: "auto", // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Sign Up</b>
            </Typography>
            <Typography level="body2">Create an account to get started.</Typography>
          </div>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input
              // html input attribute
              name="full_name"
              type="text"
              placeholder="John Doe"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              // html input attribute
              name="confirm_password"
              type="password"
              placeholder="confirm password"
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }}>Sign Up</Button>
          <Typography endDecorator={<Link to="/log-in">Log in</Link>} fontSize="sm" sx={{ alignSelf: "center" }}>
            Already have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
