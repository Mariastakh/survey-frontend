export default async function getTopics() {
  let response = await fetch("https://localhost:5001/api/topics");
  return response;
}
