"use client";

import ConfirmPopover from "@/components/popover/ConfirmPopover";
import { ICollectionItem } from "@/lib/types/collection";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

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
      {imageUrl && <img
        className="mx-auto mb-4 rounded-lg h-40"
        src={imageUrl}
        alt={title}
      />}
      <p className="font-bold">{title}</p>
      <p className="text-sm font-light italic">{authors.map((author) => author)}</p>
      {isEdit && (
        <div className="absolute top-4 right-4">
          <ConfirmPopover
            title="Confirmation"
            description="Are you shure, that you want to delete this item?"
            buttonText="Delete"
            buttonProps={{ color: 'error' }}
          >
            <Tooltip title="Delete">
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>

          </ConfirmPopover>
        </div>
      )}
    </>);
}