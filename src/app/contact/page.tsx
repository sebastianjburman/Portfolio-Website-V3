import TopNavbar from "@/components/top-navbar/top-navbar";

export default function ProjectsPage() {
  return (
    <main className="bg-zinc-900">
      <TopNavbar></TopNavbar>
      <div className="flex max-w-screen-xl flex-col items-center justify-center mx-auto p-4 mt-3">
        <h1 className="text-4xl mb-4">Get in Touch</h1>
        <div className=" bg-zinc-800 rounded-lg overflow-hidden shadow-lg p-5">
          <form
            className="w-full max-w-xl"
            action="https://getform.io/f/989ccb71-00ca-4900-a26e-02fdf156b2f6"
            method="POST"
          >
            <div className="flex flex-wrap -mx-3 mb-3">
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2">
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:ring-cyan-600  focus:outline-none focus:bg-white"
                  name="firstName"
                  type="text"
                  placeholder="John"
                ></input>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 focus:ring-cyan-600  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                ></input>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2">
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 focus:ring-cyan-600  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="email"
                  type="text"
                  placeholder="johndoe@gmail.com"
                ></input>
                <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2">
                  Email
                </label>
                <textarea
                  name="message"
                  className="block p-2.5 w-full text-md text-gray-700 bg-gray-200  focus:ring-cyan-600  rounded-lg border border-gray-300 focus:bg-white focus:border-gray-500 "
                  placeholder="Message"
                  style={{ resize: "none" }}
                ></textarea>
                <button
                  className="text-white mt-4 bg-teal-500 hover:bg-teal-400 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
