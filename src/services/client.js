const client = async (
  endpoint,
  { httpMethod, data, customHeaders, customConfig } = {}
) => {
  const config = {
    method: httpMethod ? httpMethod : data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      "Content-Type": data ? "application/json" : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  console.log("endpoint:", endpoint);

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${endpoint}`,
    config
  );

  if (response.status === 204) {
    return response.ok ? response : Promise.reject(response);
  }

  const jsonData = await response.json();
  console.log(jsonData);
  return response.ok ? jsonData : Promise.reject(jsonData);
};

export { client };
