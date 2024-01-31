import { Link } from "react-router-dom";
import { Meal } from "../models";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Heading,
  Divider,
  Button,
  Image,
} from "@chakra-ui/react";

const RecepieCard = (meal: Meal) => {
  const {
    idMeal: id,
    strMeal: name,
    strMealThumb: imageUrl,
    strArea: cousine,
    strCategory: category,
  } = meal;

  return (
    <Card variant="outline" maxW="sm">
      <CardBody>
        <Image src={imageUrl} alt={name} borderRadius="md" />
        <Stack mt="6" spacing="3">
          <Heading size="lg">{name}</Heading>
          <Text fontSize="lg"> {cousine}</Text>
          <Text> {category}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="outline" colorScheme="blue" size="lg">
          <Link to={`/meal/${id}`}>Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecepieCard;
