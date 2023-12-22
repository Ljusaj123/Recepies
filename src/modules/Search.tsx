import { Form, useNavigation } from "react-router-dom";

export default function Search({ searchTerm }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <section className="container">
      <Form className="mx-auto max-w-fit">
        <input
          type="search"
          name="search"
          placeholder="Type here..."
          className="border-b leading-8 text-lg py-2 px-4"
          defaultValue={searchTerm}
        />
        <button
          type="submit"
          className="btn p-4 ml-2 active:scale-90 duration-200 rounded"
          disabled={isSubmitting}
        >
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </section>
  );
}
