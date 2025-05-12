import { appendImagesToFormData } from "../services/appendImagesToFormData"
import { createProject } from "../services/createProject";
import { uploadImage } from "../services/uploadImage"
import { FormInputs } from "../types/FormProject";
import { Projects } from "../types/project";
import { Urls } from "../types/urls";

export const useSubmitProject = () => {
    const submit = async (data: FormInputs) => {
        try {
            const imagesFiles = data.images;
            const formData = new FormData();

            // Funcion para añadir las imagenes a un FormData
            appendImagesToFormData(imagesFiles, formData);
            formData.append("title",data.title)

            const uploadUrls:Urls[] = await uploadImage(formData); 

            const urls = uploadUrls?.map(urls => urls.url)

            const newProject:Projects = {
             title:data.title,
             shortDescription:data.shortDescription,
             longDescription:data.longDescription,
             mainImage:uploadUrls[0].url,
             images:urls,
             date:data.date
            }

            const Projects = await createProject(newProject)
            
            return Projects
            
        } catch (error) {
            console.error("Error al enviar imágenes", error);
        }
    }

    return { submit };
}
