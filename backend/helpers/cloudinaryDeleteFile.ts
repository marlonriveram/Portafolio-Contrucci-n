import  cloudinary  from "../config/claudinary.config"

export const deleteAllImagesInFolder = async (folderName: string) => {
  // Busca todos los public_id de la carpeta
  const { resources } = await cloudinary.api.resources({
    type: 'upload',
    prefix: `${folderName}/`,
  });

  const publicIds = resources.map((file: any) => file.public_id);
  if (publicIds.length > 0) {
    await cloudinary.api.delete_resources(publicIds);
  }
};

export const deleteFolder = async (folderName: string) => {
  await cloudinary.api.delete_folder(folderName);
};
