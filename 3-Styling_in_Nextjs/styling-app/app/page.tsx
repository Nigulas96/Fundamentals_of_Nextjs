import Title from "./components/Title";
import Button from "./components/Button";
import Card from "./components/Card";
import AppLayout from "./components/AppLayout";

export default function Home() {

  return (

    <main>
      <AppLayout>
        <Title />
        <Button />
        <Card highlighted={true} />
        <Card highlighted={false} />
      </AppLayout>
    </main>


  );

}