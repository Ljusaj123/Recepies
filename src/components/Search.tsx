import { Form, useNavigation } from "react-router-dom";
import { Input, Button } from "@chakra-ui/react";

function Search({ searchTerm }: { searchTerm: string }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <section>
      <Form className="mx-auto w-fit flex">
        <Input
          placeholder="Type here..."
          size="lg"
          type="search"
          name="search"
          defaultValue={searchTerm}
          _placeholder={{ opacity: 1, color: "gray.700" }}
          borderColor="gray.500"
        />

        <Button
          variant="solid"
          colorScheme="blue"
          size="lg"
          ml="2"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Searching..." : "Search"}
        </Button>
      </Form>
    </section>
  );
}

export default Search;
