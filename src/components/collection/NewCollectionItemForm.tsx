import { ECollectionItemType } from "@/lib/types/collection";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  List,
  ListItem,
  Select,
  Stack,
  StackDivider,
  useBoolean
} from "@chakra-ui/react";
import _ from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const items = ['a', 'ab', 'abc', 'b', 'bc', 'de'];

export default function NewCollectionItemForm({ collectionId }: { collectionId: string }) {
  const { register, watch, formState } = useForm();
  const [itemsListVisible, { on, off }] = useBoolean(false);
  const [suggestions, setSuggestions] = useState(items);

  watch('type');

  useEffect(() => {
    console.log(formState)
  }, [watch]);

  const handleSubmit = () => {

  }

  const handleTitleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSuggestions(items.filter(item => item.includes(e.target.value)));
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack spacing={8}>
          <FormControl isInvalid>
            <FormLabel>Item type</FormLabel>
            <Select {...register('type')} placeholder='type'>
              <option value={ECollectionItemType.Books}>{ECollectionItemType.Books}</option>
              <option value={ECollectionItemType.Manga}>{ECollectionItemType.Manga}</option>
              <option value={ECollectionItemType.Books}>{ECollectionItemType.Movie}</option>
              <option value={ECollectionItemType.Books}>{ECollectionItemType.Series}</option>
            </Select>
            {false ?
              <FormErrorMessage>{"titleError"}</FormErrorMessage> :
              <FormHelperText>This is a public info. Max length 100 symbols.</FormHelperText>
            }
            <Button type="submit" variant="outline">Add</Button>
          </FormControl>
          <FormControl>
            <FormLabel>Collection title</FormLabel>
            <Input {...register('title')} onChange={_.debounce(handleTitleInputChange, 1000)} onFocus={on} required placeholder="Title" />
            {itemsListVisible && <Card position="absolute" width="full">
              {/* <CardHeader>
                <Heading size="sm">Client Report</Heading>
              </CardHeader> */}

              <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                  <List spacing={3}>
                    {suggestions.map(suggestion => (
                      <ListItem className="cursor-pointer hover:bg-slate-300">
                        {suggestion}
                      </ListItem>
                    ))}
                  </List>
                </Stack>
              </CardBody>
            </Card>}
            {/* {titleError ?
              <FormErrorMessage>{titleError}</FormErrorMessage> :
              <FormHelperText>This is a public info. Max length 100 symbols.</FormHelperText>
            } */}
          </FormControl>
        </Stack>
      </form>
    </Container>
  );
}