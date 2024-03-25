import React from 'react';
import FileIcon from "../../../assets/icons/file.svg";
import zipLogo from "../../../assets/img/zip.svg"
const UploaderFile = ({file, setFile}) => {
    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            try {
                const result = await fetch(URL, {
                    method: "POST",
                    body: formData,
                });

                const data = await result.json();

            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <label id="uploadFile" style={{
            width: '33.3%',
            backgroundColor: 'rgb(141 156 166 / 50%)',
            borderRadius: '6px',
            border: '5px dashed rgba(21, 35, 42, 1)',
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {(file)?<div style={{display: "flex", gap: "10px", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <img src={zipLogo} alt=""/>
                <span style={{color: "black", fontSize: "16px"}}>{file.name}</span>
            </div>:<div>
                <input
                    onChange={(e) => {
                        setFile(e.target.files[0]);
                    }} id="uploadFile" style={{display: "none"}} type="file"/>
                <img src={FileIcon} style={{display: 'block', margin: '0 auto'}}/>
                <div style={{marginTop: '12px', fontSize: '20px'}}>
                    Добавьте файл задания
                </div>
            </div>}
        </label>
    );
};

export default UploaderFile;