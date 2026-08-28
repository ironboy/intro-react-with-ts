import { Link } from "react-router";

export default function Start() {
  return <>
    <h2>Hallå!</h2>
    <p><Link to="/products">Kolla in våra fantastiska produkter</Link></p>
  </>;
}