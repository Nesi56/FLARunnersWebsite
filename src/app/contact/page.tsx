import React from "react";

export default function Contact() {
  return (
    <>
      <section className="sm:p-8 flex justify-center">
        <form className="p-8 bg-neutral-800 sm:rounded-xl flex flex-col gap-4 w-full max-w-3xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">Contact</h1>

            <h2 className="font-medium text-lg opacity-85">
              Thank you for your interest in the Florida RoadRunners!
            </h2>
          </div>

          <hr className="text-neutral-600" />

          <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <span className="">
                Player Name<span className="text-pink-400">*</span>
              </span>
              <input
                type="text"
                name="player-name"
                placeholder="Enter your name"
                className="bg-neutral-100 text-neutral-800 p-2 rounded"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="">
                Parent/Legal Guardian's Name
                <span className="text-pink-400">*</span>
              </span>
              <input
                type="text"
                name="parent-name"
                placeholder="Enter your parent/legal guardian's name"
                className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="">
                Parent/Legal Guardian's Phone
                <span className="text-pink-400">*</span>
              </span>
              <input
                type="tel"
                name="parent-phone"
                placeholder="Enter your parent/legal guardian's phone"
                className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="">
                Parent/Legal Guardian's E-mail
                <span className="text-pink-400">*</span>
              </span>
              <input
                type="email"
                name="parent-email"
                placeholder="Enter your parent/legal guardian's E-mail"
                className="bg-neutral-100 text-neutral-800 px-3 py-2 rounded"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <span className="">Comments</span>
              <textarea
                maxLength={200}
                name="comments"
                placeholder="Any comments or concerns"
                className="overflow-visible resize-none h-22 bg-neutral-100 text-neutral-800 px-3 py-2 rounded"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 px-4 py-2 md:self-end bg-pink-600 rounded-lg hover:bg-pink-500 cursor-pointer transition"
          >
            Submit your application
          </button>
        </form>
      </section>
    </>
  );
}
