import { getContacts } from "./Services/dbs";

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}