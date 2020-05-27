async function getData(url = '', data = {}) {
  function fetchCheckStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
  }

  let option = {
    method: "GET",
    headers: new Headers(),
    mode: "cors",
    cache: "default"
  };

  return fetch(url, option)
    .then(fetchCheckStatus)
    .then(function(resp) {
      const contentType = resp.headers.get("Content-Type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        return resp.json();
      } else {
        return resp.text();
      }
    })
}

export default getData
