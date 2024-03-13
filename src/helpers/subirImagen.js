//* Helper que contiene la función para subir las imágenes a Cloudinary
//* para no llenar de lógica el DataContext.jsx

export const subirImagen = async (file) => {
  if (!file) throw new Error('No se encuentra ningún archivo');

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dkixtok7a/auto/upload';

  const formData = new FormData();
  formData.append('upload_preset', 'digital-house');
  formData.append('file', file);

  try {
    const resp = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if (!resp.ok) throw new Error('La imágen no se pudo subir');

    const cloudResp = await resp.json();

    //* El secure_url es el url https que apunta a la imágen que subimos
    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
