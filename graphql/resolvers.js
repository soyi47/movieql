import { getMovies } from './DB';

const resolvers = {
    Query: {
        movies: (_, { rating, limit }) => getMovies(limit, rating)
    }
};

export default resolvers;