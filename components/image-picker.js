
'use client'

import classes from './image-picker.module.css'
import { useRef, useState } from 'react'
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
    const imageRef = useRef();
    const [imageNew, setImageNew] = useState();

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            setImageNew(null);
        return;
        }
        const reader = new FileReader();
        reader.onload = () => {
        const imageUrl = reader.result;
        setImageNew(imageUrl);
        };
        reader.readAsDataURL(file);
    }
    function handleClick() {
        imageRef.current.click()
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.preview}>
                {!imageNew && <p>No image picked yet.</p>}
                {imageNew && <Image src={imageNew}  fill/>}
            </div>
            <div className={classes.controls}>
                <input
                    ref={imageRef}
                    onChange={handleImageChange}
                    className={classes.input}
                    type="file"
                    id={name}
                    name={name}
                    accept="image/*"
                    required/>
                <button
                    onClick={handleClick}
                    className={classes.button}
                    type="button"

                >Pick an Image</button>
            </div>
        </div>
    )

}