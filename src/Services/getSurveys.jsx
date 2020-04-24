export default async function getSurveys(props) {
    console.log(props.values);
    let response = await fetch(`https://localhost:5001/api/surveys${props.values}`).then(response => response.json());
    return response;
  }
  