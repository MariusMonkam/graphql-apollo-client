import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { useCreatePost } from "../../../hooks/posts/useCreatePost";
import { TextField, Card, CardContent, Grid } from "@mui/material";

import "./posts-form.component.css";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

interface FormData {
  title: string;
  body: string;
}

const schema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().min(10).max(250).required(),
});

const PostsForm: React.FC = () => {
  const theme = useTheme();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const createPost = useCreatePost();

  const onSubmit = handleSubmit(({ title, body }) => {
    createPost({ variables: { input: { title, body } } });
  });

  return (
    <form onSubmit={onSubmit}>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid xs={12} item>
              <Controller
                name="title"
                control={control}
                defaultValue="Title of my post"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Post title"
                    variant="outlined"
                    fullWidth
                    error={!!errors.title}
                    helperText={errors.title ? errors.title?.message : ""}
                  />
                )}
              />
            </Grid>
            <Grid xs={12} item>
              <Controller
                name="body"
                control={control}
                defaultValue="Body of my post"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Post body"
                    multiline
                    rows={7}
                    variant="outlined"
                    fullWidth
                    error={!!errors.body}
                    helperText={errors.body ? errors.body?.message : ""}
                  />
                )}
              />
            </Grid>

            <Grid xs={12} item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              >
                <Button
                  variant="contained"
                  sx={{ backgroundColor: theme.palette.primary.main }}
                >
                  Submit
                  <input hidden type="submit" />
                </Button>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </form>
  );
};

export default PostsForm;
