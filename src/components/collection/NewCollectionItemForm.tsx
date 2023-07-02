// TODO: extract Controller wrappers to separate components

import { ECollectionItemType, ICollectionItemDraft } from "@/lib/types/collection";
import {
  Autocomplete,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  debounce
} from "@mui/material";
import { useId, useMemo, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface INewItemCollectionForm {
  type: ECollectionItemType,
  items: ICollectionItemDraft[],
  query: string,
}

const defaultValues = {
  type: ECollectionItemType.Books,
  items: [],
  query: '',
};

const services: Record<ECollectionItemType, string> = {
  [ECollectionItemType.Books]: 'google',
  [ECollectionItemType.Movie]: 'null',
  [ECollectionItemType.Series]: 'null',
  [ECollectionItemType.Manga]: 'null',
  [ECollectionItemType.Anime]: 'jikan',
}

const buildQuery = ({ type, query }: { type: ECollectionItemType, query: string }) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${services[type]}?q=${query}`;

export default function NewCollectionItemForm({ collectionId }: { collectionId: string }) {
  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors, dirtyFields, isDirty, touchedFields },
    control,
    setError,
    clearErrors,
    getValues,
    setValue } = useForm<INewItemCollectionForm>({ defaultValues });

  const [suggestions, setSuggestions] = useState<ICollectionItemDraft[]>([]);
  const [isListLoading, setIsListLoading] = useState(false);

  const typeSelectId = useId();
  const cache = useRef(new Map<any, any>());

  const fetchList = useMemo(
    () =>
      debounce(
        async (query: string) => {
          if (query === '') {
            setSuggestions([]);
            setIsListLoading(false);
            return;
          }

          if (!cache.current.has(query)) {
            const type = getValues('type');
            const data = await fetch(buildQuery({ type, query }));
            const items = await data.json();

            cache.current.set(query, items);
          }

          setSuggestions(cache.current.get(query));
          setIsListLoading(false);
        },
        300,
      ),
    [],
  );

  const onSubmit = ({ items }: INewItemCollectionForm) => {
    if (!items.length) setError('items', { message: 'Choose at least one item' });
    console.log(items)
  };

  const handleTypeChange = (e: SelectChangeEvent<ECollectionItemType>) => {
    setValue('type', e.target.value as ECollectionItemType, { shouldDirty: false });
    setValue('items', []);
    setValue('query', '');

    resetField('items');
    resetField('query');

    setSuggestions([]);
    cache.current = new Map();
  }

  const hasErrors = !!Object.keys(errors).length;
  const hasItemsChanges = !!Object.keys(dirtyFields).length;

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <FormControl fullWidth>
            <InputLabel id={`label-${typeSelectId}`}>Type</InputLabel>
            <Controller
              control={control}
              name="type"
              defaultValue={ECollectionItemType.Books}
              render={({ field }) => (
                <Select
                  labelId={`label-${typeSelectId}`}
                  id={typeSelectId}
                  label="Item type"
                  {...field}
                  value={field.value}
                  onChange={handleTypeChange}
                >
                  {Object.entries(ECollectionItemType).map(([key, value]) => (
                    <MenuItem key={key} value={key}>{value}</MenuItem>
                  ))}
                </Select>)
              }
            />
            <FormHelperText>Changing this field will reset all selected items</FormHelperText>
          </FormControl>
          <FormControl fullWidth>
            <Controller
              control={control}
              name="items"
              render={({ field: { ref, ...field } }) => (
                <Autocomplete
                  loading={isListLoading}
                  disablePortal
                  multiple
                  fullWidth
                  autoComplete
                  aria-required
                  includeInputInList
                  filterSelectedOptions
                  filterOptions={(options) => options}
                  key={getValues('type')}
                  id="new-item-query"
                  onInputChange={(e, newInputValue) => {
                    if (newInputValue === '') {
                      fetchList.clear();
                      setSuggestions([]);
                      setIsListLoading(false);
                      if (!field.value.length) setError('items', { message: 'Choose at least one item' });
                      return;
                    }
                    setIsListLoading(true);
                    fetchList(newInputValue);
                  }}
                  getOptionLabel={({ title }) => title}
                  options={suggestions}
                  onChange={(_, data) => {
                    clearErrors('items');
                    setValue('items', data, { shouldDirty: true });
                    if (!data.length) setError('items', { message: 'Choose at least one item' });
                  }}
                  renderInput={(params) => <TextField {...params} {...register('query')} helperText={errors.items?.message} error={!!errors.items?.message}
                    inputRef={ref} label="Name" />}
                />
              )
              }
            />
          </FormControl>
          <FormControl>
            <Button
              disabled={!hasItemsChanges || hasErrors}
              type="submit"
              className="mx-auto w-5"
            >
              Add
            </Button>
          </FormControl>
        </Stack>
      </form>
    </Container>
  );
}