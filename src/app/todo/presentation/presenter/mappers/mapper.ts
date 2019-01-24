export interface Mapper<From, To> {
    mapToModel(viewModel: To): From;
    mapToViewmodel(domainModel: From): To;
}
