"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { ImagePlusIcon, Trash } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";

import { Button } from "@/components/ui/button";




interface ImageUploadProps{
    disabled?: boolean;
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
    value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    disabled,
    onChange,
    onRemove,
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

        // Cloudnary
    const onUpload = (result: any) => {
        onChange(result.info.secure_url);
    }

    if(!isMounted) {
        return null;
    }

    return ( 
        <div>
            <div className="mb-4 flex items-center gap-4">
                {value.map((url) => (
                    <div key={url} className="relative w-[200px] h-[200px] rounded-me overflow-hidden">
                        <div className="z-10 absolute top-2 right-2">
                            <Button type="button" onClick={() => onRemove(url)} variant="destructive" size="icon">
                                <Trash className="h-4 w-4"/>
                            </Button>
                        </div>
                        <Image 
                            fill
                            className="object-cover"
                            alt="Imagem"
                            src={url}
                        />
                    </div>
                ))}
            </div>
            <CldUploadWidget onUpload={onUpload} uploadPreset="lzyc96el" >
                {({ open}) => {
                    const onClick = () => {
                        open();
                    }

                    return (
                        <Button
                        type="button"
                        disabled={disabled}
                        variant="secondary"
                        onClick={onClick}
                        >
                            <ImagePlusIcon className="h-4 w-4 mr-2" />
                            Adicione uma nova imagem
                        </Button>
                    )
                }}
                
            </CldUploadWidget>
        </div>
     );
}

export default ImageUpload;
