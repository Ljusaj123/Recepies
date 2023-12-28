import { Form, useNavigation } from "react-router-dom";

export default function Search({ searchTerm }: { searchTerm: string }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <section>
      <Form className="mx-auto w-fit">
        <input
          type="search"
          name="search"
          placeholder="Type here..."
          className="border-b leading-8 text-lg py-2 px-4 max-w-60"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn ml-2" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </section>
  );
}
