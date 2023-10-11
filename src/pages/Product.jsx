import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className="bg-stone-700 h-screen">
      <PageNav />
      <section className="flex justify-around bg-stone-400 mt-[8%] ml-[8%] w-[85%]">
        <img
          className="w-96 h-96"
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div className="mt-12 ml-12 mr-24 grid grid-rows-4  ">
          <p>About</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}
