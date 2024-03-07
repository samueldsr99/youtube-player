import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import playlistService from "@/lib/api/services/playlist.service";
import { PostPlaylistRequest } from "@/lib/api/services/playlist.types";
import { Button, Input } from "@/ui";

import { ErrorDescription, FormActions, FormFields, PageTitle, Root } from "./page.styles";

type CreatePlaylistForm = {
  name: string;
};

export default function NewPlaylistPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreatePlaylistForm>();
  const { isPending } = useMutation<unknown, unknown, PostPlaylistRequest>({
    mutationFn: (data) => playlistService.post(data),
  });

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data, null, 2));
    // mutate(data);
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
