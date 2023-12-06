import { HeroList } from "../components";
export const DC = () => {
  return (
    <>
      <div className={"h-20 flex justify-center items-center"}>
        <h1 className={"font-hero text-4xl	"}>DC Screen</h1>
      </div>
      <hr />
      <br />
      <HeroList publisher={"DC Comics"} />
    </>
  );
};
