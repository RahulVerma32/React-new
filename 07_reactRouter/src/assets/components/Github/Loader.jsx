export async function Loader() {
    const response = await fetch('https://api.github.com/users/RahulVerma32');
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    
    return data;
  }