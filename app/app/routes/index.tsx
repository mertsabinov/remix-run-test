import { fetch } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Card from "components/Card";
import { Links } from "@remix-run/react";
import styles from "../../styles/card.css";

export const links = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const loader = async () => {
  const res = await fetch("https://randomuser.me/api/?results=5").then((res) =>
    res.json()
  );
  return res.results;
};

export const index = () => {
  const data = useLoaderData();
  return (
    <div>
      <Links />
      {data.map(({ name, email, picture }) => (
        <Card name={name} email={email} picture={picture} />
      ))}
    </div>
  );
};

export default index;
