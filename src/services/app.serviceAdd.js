import { db } from "@/fb";
import { collection, addDoc } from "firebase/firestore";

let collection_name = "Databook";

async function addData(data) {
  try {
    const ref = await addDoc(collection(db, collection_name), data);
    console.log(ref);
  } catch (error) {
    console.log("error", error);
  }
}

export { addData };
