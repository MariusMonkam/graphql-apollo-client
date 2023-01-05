import React from "react";
import { useForm } from "react-hook-form";
import { useCreatePost } from "../../../hooks/posts/useCreatePost";

import "./posts-form.component.css";

interface FormData {
  title: string;
  body: string;
}

const PostsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const createPost = useCreatePost();

  const onSubmit = handleSubmit(({ title, body }) => {
    createPost({ variables: { input: { title, body } } });
  });

  return (
    <div className="posts-form">
      <form onSubmit={onSubmit}>
        <div className="form-item">
          <label htmlFor="title">Post title: </label>
          <div>
            <input type="text" {...register("title", { required: true })} />
            {errors.title && (
              <div className="errors-validation">Enter Title</div>
            )}
          </div>
        </div>
        <br />
        <div className="form-item">
          <div>
            <label htmlFor="body"> Write your post: </label>
          </div>

          <div>
            <div>
              <textarea
                rows={4}
                cols={40}
                {...register("body", { required: true, maxLength: 100 })}
              />{" "}
            </div>
            <div>
              {errors.body && (
                <span className="errors-validation">Enter the post</span>
              )}
            </div>
          </div>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default PostsForm;
