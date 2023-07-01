"use client";

import { ICollectionItem } from "@/lib/types/collection";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tooltip
} from "@chakra-ui/react";

export default function CollectionItem({ item, isEdit }: { item: ICollectionItem, isEdit?: boolean }) {
  const { title, imageUrl, authors } = item;

  return (
    <>
      {/* <div className="-z-50 basis-60 rounded-lg bg-white p-4" style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: `url(${imageUrl})`,
        backgroundSize: '320px',
        backgroundPosition: 'center center',
      }} />
      <div className="-z-50 basis-60 rounded-lg bg-white p-4" style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(100px)',
        WebkitBackdropFilter: 'blur(100px)',
      }} /> */}
      {imageUrl && <Image
        className="mx-auto mb-4 rounded-lg h-40"
        src={imageUrl}
        alt={title}
      />}
      <p className="font-bold">{title}</p>
      <p className="text-sm font-light italic">{authors.map((author) => author)}</p>
      <div>{isEdit && (
        <Popover>
          <PopoverTrigger>
            <button className="cursor-pointer absolute top-4 right-4">
              <Tooltip label="Delete" aria-label='Delete'>
                <DeleteIcon />
              </Tooltip>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation</PopoverHeader>
            <PopoverBody>
              <p>Are you shure, that you want to delete this item?</p>
              <Button colorScheme='red' variant='outline' className="mt-4">Delete</Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      )}</div>
    </>);
}