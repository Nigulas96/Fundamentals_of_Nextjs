import Title from "./components/Title";
import Button from "./components/Button";
import Card from "./components/Card";

export default function Home() {

  return (

    <main>
      <Title />
      <Button />
      <Card highlighted={true} />
      <Card highlighted={false} />
    </main>

  );

}