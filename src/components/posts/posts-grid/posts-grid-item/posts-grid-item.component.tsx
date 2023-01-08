import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useTheme,
} from "@mui/material";
import React from "react";
import { IPost } from "../../../../common/interfaces/post.interface";
import "./posts-grid-item.component.css";

const PostGridItem: React.FC<{ post: IPost }> = ({ post }: { post: IPost }) => {
  const theme = useTheme();
  return (
    <ListItem
      sx={{
        padding: 1,
        margin: 1,
        maxWidth: "100%",
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: theme.palette.primary.main }}>{post.id}</Avatar>
      </ListItemAvatar>

      <ListItemText
        primaryTypographyProps={{
          fontSize: 20,
          fontWeight: "bold",
          letterSpacing: 0,
        }}
        primary={post.title}
        secondary={post.body}
      />
    </ListItem>
  );
};

export default PostGridItem;
