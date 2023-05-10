import { storage } from "../configs/firebaseStorage";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

interface UploadPhotoProps {
  file: { uri: string; type: string; name: string };
  blob: Blob;
}

export function uploadPhoto({ file, blob }: UploadPhotoProps): Promise<string> {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, `images/${new Date().getTime() + "_" + file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
      },
      (error) => {
        reject(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      }
    );
  });
}
