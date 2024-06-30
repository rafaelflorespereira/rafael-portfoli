import Button from "../ui/components/button";

export default function ContactMe() {
  return (
    <section className="p-8 mb-4">
      <form className="flex justify-center gap-2 w-full">
        <input
          type="text"
          placeholder="Insert your email"
          className="bg-transparent mr-2 focus:border-2 px-2 border-slate-200 rounded-3xl w-full"
        ></input>
        <Button>Let&apos;s talk</Button>
      </form>
      {/* button (Get in touch)*/}
    </section>
  );
}
