import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input, MagnifyingGlassIcon, Root, SearchButton } from "./search-input.styles";

export type SearchInputProps = {
  onSearch?: (q: string) => void;
};

const searchFormSchema = z.object({
  search: z.string(),
});
type SearchForm = z.infer<typeof searchFormSchema>;

export default function SearchInput({ onSearch }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchForm>({
    resolver: zodResolver(searchFormSchema),
  });

  return (
    <Root onSubmit={handleSubmit((data) => onSearch?.(data.search))}>
      <Input placeholder="Search" {...register("search")} />
      <SearchButton type="submit">
        <MagnifyingGlassIcon />
      </SearchButton>
    </Root>
  );
}
