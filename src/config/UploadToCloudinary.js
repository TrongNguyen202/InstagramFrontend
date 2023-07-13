export const UpLoadTocloudinary = async (image) => {
    if (image) {
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "instagram")
      data.append("cloud_name", "dydv1vpll")
  
      try {
        const res = await fetch("https://api.cloudinary.com/v1_1/dydv1vpll/image/upload", {
          method: "POST",
          body: data
        })
        const fileData = await res.json();
        console.log("file data", fileData)
        return fileData.url.toString();
      } catch (error) {
        console.error(error)
        return null;
      }
    }
  }