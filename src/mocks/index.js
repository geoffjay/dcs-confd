const mocks = {
  RootQuery: () => ({
    configuration: (root, args) => {
      return { id: args.id }
    }
  }),
}

export default mocks
