

export default function Contact() {
    return (
      <section className="px-10">
        <p className="mt-8 text-[1.6rem] font-light">ways to reach us</p>
        <h1 className="mt-8 text-[3rem] font-semibold">Contact</h1>
        <ol className="flex flex-col gap-10 ml-5 mt-7 pr-18">
          <li className="text-[1.7rem] list-disc">Book suggestions: Tell us what we should add to the shelf.</li>
          <li className="text-[1.7rem] list-disc">Corrections: Spotted an error? Let us know so we can fix it.
          Careers: Interested in</li>
          <li className="text-[1.7rem] list-disc">Careers: Interested in joining Tiny Library? Send a short note and we’ll get back to you.</li>
        </ol>
        <p className="text-[1.7rem] mt-8">Email: hello@tinylibrary.example</p>
        <p className="text-[1.7rem] mt-12">We’re a small team, so we don’t list a phone number—email is best.</p>
      </section>
    )
}