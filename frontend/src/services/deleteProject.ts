import axios from "axios"

export interface DeletedProject {
    _id:string | undefined,
    folderName:string
}

export const deleteProjectById =async ({_id,folderName}:DeletedProject) =>{
    try {
        console.log(folderName)
        const response = await axios.delete(`http://localhost:3000/api/projects/${_id}`,{
            data:{folderName}
        })
        return response

    } catch (error:any) {
        throw error
    }
}