export default async function getTopics() {
    return await fetch("https://localhost:5001/api/topics").then(response => response.json());
}