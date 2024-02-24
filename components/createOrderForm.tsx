export default function CreateOrderForm() {
  <form>
    <div className="grid gap-6 mb-6 lg:grid-cols-2">
      <div>
        <label
          placeholder="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          First name
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
        />
      </div>
      <div>
        <label
          placeholder="last_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Last name
        </label>
        <input
          type="text"
          id="last_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Doe"
          required
        />
      </div>
      <div>
        <label
          placeholder="Panels"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Panels
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Panels"
          required
        />
      </div>
      <div>
        <label
          placeholder="Source"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Source
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Source"
          required
        />
      </div>
      <div>
        <label
          placeholder="website"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Website URL
        </label>
        <input
          type="url"
          id="website"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="flowbite.com"
          required
        />
      </div>
      <div>
        <label
          placeholder="visitors"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Unique visitors (per month)
        </label>
        <input
          type="number"
          id="visitors"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>
    </div>
    <div className="mb-6">
      <label
        placeholder="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Email address
      </label>
      <input
        type="email"
        id="email"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="john.doe@company.com"
        required
      />
    </div>
    <div className="mb-6">
      <label
        placeholder="password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="•••••••••"
        required
      />
    </div>
    <div className="mb-6">
      <label
        placeholder="confirm_password"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Confirm password
      </label>
      <input
        type="password"
        id="confirm_password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="•••••••••"
        required
      />
    </div>
    <div className="flex items-start mb-6">
      <div className="flex items-center h-5">
        <input
          id="remember"
          type="checkbox"
          value=""
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          required
        />
      </div>
      <label
        placeholder="remember"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        I agree with the{" "}
        <a
          href="#"
          className="text-blue-600 hover:underline dark:text-blue-500"
        >
          terms and conditions
        </a>
        .
      </label>
    </div>
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>;
}
