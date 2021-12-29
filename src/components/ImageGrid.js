import React from "react";
import useFirestore from "../hooks/useFirestore";
import { ImageList, ImageListItem } from "@mui/material";

const ImageGrid = ({ onSetImg, onSetBackdrop }) => {
  const { docs } = useFirestore("images");

  const modulHandler = (doc) => {
    onSetImg(doc);
    onSetBackdrop(true);
  };

  return (
    <React.Fragment>
      <ImageList variant="masonry" cols={3} gap={8}>
        {docs.map((doc) => (
          <ImageListItem key={doc.id} sx={{ borderRadius: 16 }}>
            <img
              src={doc.url}
              srcSet={doc.url}
              loading="lazy"
              onClick={() => modulHandler(doc)}
              alt="randomimg"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </React.Fragment>
  );
};
export default ImageGrid;
