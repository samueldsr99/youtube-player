import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

import playlistService from "@/lib/api/services/playlist.service";
import { PostPlaylistRequest, PostPlaylistResponse } from "@/lib/api/services/playlist.types";
import { usePlaylists } from "@/lib/store/playlists.store";
import { Button, Input } from "@/ui";
import PlayIcon from "@/ui/icons/play-icon";

import {
  ErrorDescription,
  FormActions,
  FormFields,
  MotionCard,
  PageTitle,
  PlaylistMockAnimatedCard,
  Root,
  StackedCardsContainer,
} from "./page.styles";

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
      navigate("/playlists");
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Root>
      <MotionCard initial="hidden" animate="visible" transition={{ duration: 0.9 }} variants={variants}>
        <PageTitle>New playlist</PageTitle>

        <form onSubmit={onSubmit}>
          <FormFields>
            <Input
              autoComplete="off"
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
      </MotionCard>

      <StackedCardsContainer>
        <PlaylistMockAnimatedCard
          $color="primary"
          $zIndex={40}
          animate="visible"
          transition={{ duration: 0.3, ease: "backOut" }}
          variants={{
            hidden: { rotate: 0, x: -100 },
            visible: { rotate: 40, x: 0 },
          }}
        >
          <PlayIcon />
        </PlaylistMockAnimatedCard>
        <PlaylistMockAnimatedCard
          $color="blue"
          $zIndex={30}
          animate="visible"
          transition={{ duration: 0.3, ease: "linear" }}
          variants={{
            hidden: { rotate: 0, x: -100 },
            visible: { rotate: 30, x: 0 },
          }}
        >
          <PlayIcon />
        </PlaylistMockAnimatedCard>
        <PlaylistMockAnimatedCard
          $color="purple"
          $zIndex={20}
          animate="visible"
          transition={{ duration: 0.3, ease: "linear" }}
          variants={{
            hidden: { rotate: 0, x: -100 },
            visible: { rotate: 20, x: 0 },
          }}
        >
          <PlayIcon />
        </PlaylistMockAnimatedCard>
      </StackedCardsContainer>
    </Root>
  );
}
