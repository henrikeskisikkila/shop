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

  const response = await fetch(
    `${process.env.REACT_APP_API_URL}${endpoint}`,
    config
  );

  const jsonData = await response.json();
  return response.ok ? jsonData : Promise.reject(jsonData);
};

export { client };
