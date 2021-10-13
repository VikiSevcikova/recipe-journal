import { useEffect, useState } from "react";
import ImageUploading, { ImageListType }  from 'react-images-uploading';
import { UploadImageProps } from "../models/appTypes";
import { Button, ImageItem, RecipeImage, RemoveBtn } from "./StyledComponents";


const UploadImage: React.FC<UploadImageProps> = ({img}) => {
  const [images, setImages] = useState<ImageListType>([]);

    useEffect(()=>{
        if(img){
            let imgObject = {dataURL: img}
            setImages([imgObject]);
        }
    },[])

    const handleImageChange = (images: ImageListType) => {
        // data for submit
        console.log(images);
        setImages(images);
      };

    return (
        <ImageUploading
        value={images}
        onChange={handleImageChange}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
              {console.log(imageList)}
            <Button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </Button>
            &nbsp;
            {imageList.map((image, index) => (
              <ImageItem key={index} className="image-item">
                <RemoveBtn onClick={() => onImageRemove(index)}/>
                <RecipeImage src={image.dataURL} alt="" width="100" />
              </ImageItem>
            ))}
          </div>
        )}
      </ImageUploading>
    )
}

export default UploadImage;