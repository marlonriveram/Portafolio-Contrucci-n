export const appendImagesToFormData = (imagesFiles: FileList | null, formData:FormData ) => {
    if (imagesFiles) {
        // Convertir FileList a un array para usar map
        const imagesArray = Array.from(imagesFiles);
        imagesArray.forEach((file) => {
            formData.append('images', file); // Agregar cada archivo al FormData
        });
    }
};