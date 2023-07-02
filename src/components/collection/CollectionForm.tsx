"use client";

import ConfirmPopover from "@/components/popover/ConfirmPopover";
import { ICollection } from "@/lib/types/collection";
import { Box, Button, Container, FormControl, Stack, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

interface INewCollectionForm {
  title: string,
  description: string,
}

export default function CollectionForm({ collection }: { collection?: ICollection }) {
  const { title = '', description = '' } = collection ?? {};

  const { control, handleSubmit, setError, formState: { errors, dirtyFields } } = useForm<INewCollectionForm>({
    defaultValues: {
      title,
      description
    }
  });

  const onSubmit = ({ title, description }: INewCollectionForm) => {
    if (title === 'heh') setError('title', { message: 'Collection with this title exists' });
  }

  const titleError = errors.title?.message;
  const hasNoChanges = !Object.keys(dirtyFields).length;

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4} alignItems="center">
          <FormControl fullWidth>
            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="title"
                  label="Collection title"
                  helperText={titleError ? titleError : "This is a public info. Max length 100 symbols."}
                  required
                  error={!!titleError}
                  inputProps={{ maxLength: 100 }}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth>
            <Controller
              control={control}
              name="description"
              render={({ field }) => (
                <TextField
                  {...field}
                  multiline
                  id="description"
                  label="Collection description"
                  helperText="This is a public info. Max length 1000 symbols."
                  inputProps={{ maxLength: 1000 }}
                />
              )}
            />
          </FormControl>
          <Box display="flex">
            <Button type="submit" disabled={hasNoChanges}>Save</Button>
            <ConfirmPopover
              title="Confirmation"
              description="Are you sure, that you want to delete this collection?"
              buttonText="Delete"
              buttonProps={{ color: 'error' }}
            >
              <Button color="error">
                Delete
              </Button>
            </ConfirmPopover>
          </Box>
        </Stack>
      </form>
    </Container>
  );
}