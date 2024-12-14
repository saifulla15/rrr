import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary").then((res) =>
  //     res.json().then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //   );
  // }, []);
  return (
    <div className="text-white text-center m-4 bg-gray-600 p-4 text-3xl">
      Github Followers:{data.followers}
      <img src={data.avatar_url} width={300} alt="Git picture" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
