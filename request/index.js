async function processStatus(response) {
  if (response.ok) {
    return response.json();
  }
  return Promise.resolve({
    success: false,
    status: response.status,
  });
}

async function resposePackage(jsonRes) {
  if (jsonRes.success) {
    return Promise.resolve(jsonRes.extras);
  }
  return Promise.reject({
    status: jsonRes.status,
    message: jsonRes.extras ? jsonRes.extras.msg : 0,
  });
}

/* Easy fetch is xhr for GET, DELETE..., request without body */
export const serverFetch = async (url, method, query) => {
  const options = { method, credentials: "same-origin" };
  const requestUri = query
    ? `${process.env.API_ENDPOINT}${url}?${query}`
    : `${process.env.API_ENDPOINT}${url}`;
  const res = await fetch(requestUri, options);
  const resjson = await processStatus(res);
  return resposePackage(resjson);
};

export const clientFetch = async (url, method, query) => {
  const options = {
    method,
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${window.localStorage.admintoken}`,
    },
  };
  const requestUri = query ? `${url}?${query}` : `${url}`;
  const res = await fetch(requestUri, options);
  const resjson = await processStatus(res);
  return resposePackage(resjson);
};

export const wrapFetch = async (url, method, query) => {
  const options = {
    method,
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const requestUri = query ? `${url}?${query}` : `${url}`;

  const result = await fetch(requestUri, options);

  // console.log(result.json());

  return result.json();
};
