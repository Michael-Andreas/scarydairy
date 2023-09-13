import cow from "../assets/cow.jpg";

export default function Section() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-10 font-serif text-2xl">
        <img src={cow} height="200" width="200" />
        <div className="flex flex-col">
          <p>Milchindustrie</p>
          <p>=</p>
          <p>Vergewaltigungsindustrie</p>
        </div>
        <img src={cow} height="200" width="200" />
      </div>
      <p className="max-w-md text-xl mx-auto mt-5">
        Das von Ihnen gekaufte Produkt beinhaltet Mord, Missbrauch,
        Kindesentführung und grausame Gewalt an Tieren im Schlachthof.
      </p>
      <p className="text-3xl mt-8">Das scheint für Sie unglaubwürdig?</p>
    </div>
  );
}
