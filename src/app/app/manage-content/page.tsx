'use client';
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import * as React from "react";
import {styled} from "@mui/material/styles";
import Image from "next/image";
import {TextField} from "@mui/material";

const Page = ()=>{
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState<any>(null);
    const [filename, setFilename] = useState<string>('');

    useEffect(() => {
        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        }

        reader.readAsDataURL(file);
    }, [file]);

    const handleFileChange = (event:any) => {
        setFilename(event.target.files[0].name)
        setFile(event.target.files[0])
    };

    return (
        <div className={'text-black flex flex-col gap-[20px]'}>
            <div>
                <Typography variant="h5" gutterBottom>
                    This section lets you to edit the home page of the MLT website
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Add both landscape and portrait versions of the leaflets. This will be helpful for the main website
                    to
                    support multiple platforms like desktop browser and mobile browsers
                </Typography>
            </div>

            <div className={'flex flex-col gap-[10px] border border-gray-500 p-[20px] rounded-3xl'}>
                <Typography variant="body1" gutterBottom>
                    Section: FURTHER EDUCATION OPPORTUNITIES
                </Typography>
                <TextField
                    className={'rounded-3xl max-w-[500px]'}
                    id="title"
                    label="Title"
                    multiline
                    maxRows={4}
                />
                <TextField
                    className={'rounded-3xl max-w-[500px]'}
                    id="description"
                    label="Description"
                    multiline
                    maxRows={4}
                />

            </div>

            <div className={'flex flex-col gap-[10px] border border-gray-500 p-[20px] rounded-3xl'}>
                <Typography variant="body1" gutterBottom>
                    Section: DIPLOMA IN MEDICAL LABORATORY TECHNOLOGY (MLT)
                </Typography>
                <TextField
                    className={'rounded-3xl max-w-[500px]'}
                    id="title"
                    label="Title"
                    multiline
                    maxRows={4}
                />
                <TextField
                    className={'rounded-3xl max-w-[500px]'}
                    id="description"
                    label="Description"
                    multiline
                    maxRows={4}
                />

            </div>

            <div className={'flex flex-col gap-[10px] border border-gray-500 p-[20px] rounded-3xl'}>
                <Typography variant="body1" gutterBottom>
                    Section: We Are A University Of Excellence!
                </Typography>
                <TextField
                    className={'rounded-3xl max-w-[500px]'}
                    id="title"
                    label="Title"
                    multiline
                    maxRows={4}
                />
                <TextField
                    className={'rounded-3xl max-w-[500px]'}
                    id="description"
                    label="Description"
                    multiline
                    maxRows={4}
                />

            </div>
        </div>
    )
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const NoImage = () => {
    return (
        <div
            className={' w-full lg:w-[80%] h-[400px] flex justify-center items-center border border-gray-500 rounded-3xl gap-[10px]'}>
            <Image className={'hover:scale-105 transition-all duration-150 w-[40%]  mt-[50px]'} width={100} height={50}
                   src={'/images/joinus.svg'}
                   alt={'About us'}></Image>
            <Typography variant="h4" gutterBottom>
                Please Select an Image
            </Typography>
        </div>
    )
}

export default Page