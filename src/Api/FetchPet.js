export const  FetchPet=async({queryKey})=>{
    const id = queryKey[1];
    //console.log(queryKey)
  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);
 //console.log(apiRes)
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
};

//this is the function that will actually make a request of the Api