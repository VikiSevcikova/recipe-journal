export interface RouteParams {
    id: string
}

export interface InputProps{
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=> void;
    placeholder: string;
    type: string;
}

export interface UploadImageProps {
    img: string;
}
