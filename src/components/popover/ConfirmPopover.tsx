import { Box, Button, Popover, Stack, Typography } from "@mui/material";
import { useId, useState } from "react";

interface IConfirmPopoverProps {
  title: string,
  description: string,
  buttonText: string,
  buttonProps: any,
  children: React.ReactNode
}

export default function ConfirmPopover({
  title,
  description,
  buttonText,
  buttonProps,
  children
}: IConfirmPopoverProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const popoverId = useId();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? popoverId : undefined;


  return (
    <>
      <div onClick={(event) => setAnchorEl(event.currentTarget)}>{children}</div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box p={2}>
          <Stack spacing={2}>
            <Typography fontWeight="bold">{title}</Typography>
            <Typography>{description}</Typography>
            <Button {...buttonProps}>{buttonText}</Button>
          </Stack>
        </Box>
      </Popover>
    </>)
}