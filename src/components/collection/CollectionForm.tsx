"use client";

import { ICollection } from "@/lib/types/collection";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Stack,
  Container,
  Button,
  Center,
  FormErrorMessage,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface INewCollectionForm {
  title: string,
  description: string,
}

export default function CollectionForm({ collection }: { collection?: ICollection }) {
  const { title = '', description = '' } = collection ?? {};

  const { register, handleSubmit, setError, formState: { errors, dirtyFields } } = useForm<INewCollectionForm>({
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
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={8}>
          <FormControl isInvalid={!!titleError} >
            <FormLabel>Collection title</FormLabel>
            <Input {...register('title')} required maxLength={100} placeholder="Title" />
            {titleError ?
              <FormErrorMessage>{titleError}</FormErrorMessage> :
              <FormHelperText>This is a public info. Max length 100 symbols.</FormHelperText>
            }
          </FormControl>
          <FormControl>
            <FormLabel>Collection description</FormLabel>
            <Textarea {...register('description')} maxLength={1000} placeholder="Description" />
            <FormHelperText>This is a public info. Max length 1000 symbols.</FormHelperText>
          </FormControl>
          <Center>
            <Button type="submit" variant="outline" isDisabled={hasNoChanges}>Save</Button>
            {collection && (
              <Popover>
                <PopoverTrigger>
                  <Button colorScheme="red" variant="outline" className="ml-4">Delete</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmation</PopoverHeader>
                  <PopoverBody>
                    <p>Are you shure, that you want to delete this collection?</p>
                    <Button colorScheme='red' variant='outline' className="mt-4">Delete</Button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>)
            }
          </Center>
        </Stack>
      </form>
    </Container>
  );
}