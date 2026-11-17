export async function fetchData() {
  const url = ``;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    const data=result.data.map((obj)=>transObj(obj))
    return data
    
  } catch (error) {
    console.error(error.message);
  }
}

