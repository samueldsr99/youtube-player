import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

import playlistService from "@/lib/api/services/playlist.service";
import { PostPlaylistRequest, PostPlaylistResponse } from "@/lib/api/services/playlist.types";
import { usePlaylists } from "@/lib/store/playlists.store";
import { Button, Input } from "@/ui";

import { ErrorDescription, FormActions, FormFields, PageTitle, Root } from "./page.styles";

type CreatePlaylistForm = {
  name: string;
};

export default function NewPlaylistPage() {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<CreatePlaylistForm>();
  const name = watch("name");

  const { addPlaylist } = usePlaylists();

  const { mutate, isPending } = useMutation<PostPlaylistResponse, unknown, PostPlaylistRequest>({
    mutationFn: (data) => playlistService.post(data),
    onSuccess: (data) => {
      addPlaylist({ id: data.id, name });
      toast.success("Playlist created");
      navigate("/");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  return (
    <Root>
      <PageTitle>New playlist</PageTitle>

      <form onSubmit={onSubmit}>
        <FormFields>
          <Input
            placeholder="Name"
            $fullWidth
            disabled={isPending}
            $variant={errors.name ? "error" : "secondary"}
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && <ErrorDescription>{errors.name.message}</ErrorDescription>}
        </FormFields>
        <FormActions>
          <Button type="submit">Create</Button>
        </FormActions>
      </form>
    </Root>
  );
}
