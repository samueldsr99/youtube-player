import { Link } from "react-router-dom";

import { Button, DropdownMenu } from "@/ui";
import ArrowDownIcon from "@/ui/icons/arrow-down-icon";

export default function NavbarDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button $variant="secondary">
          Playlists
          <ArrowDownIcon />
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content sideOffset={5} side="bottom" align="end">
          <DropdownMenu.Item asChild>
            <Link to="/playlists/new">New playlist</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item asChild>
            <Link to="/playlists">All playlists</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
